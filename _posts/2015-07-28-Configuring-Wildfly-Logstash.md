---
title: Configuring Wildfly for logging in Logstash format
tags:
- '#jboss'
- '#wildfly'
- '#logstash'
- '#logging'
thumbnail: http://design.jboss.org/wildfly/logo/final/wildfly_logo_stacked_200px.png
---

If you want to use your [Wildfly](http://wildfly.org) log outputs with [Logstash](https://www.elastic.co/products/logstash) (and perhaps the ELK stack Elasticsearch-Logstash-Kibana), it's as easy as 1-2-3 to log them directly in the Logstash `log_event` format.

_BTW: I will not explain how to install, configure and/or use the ELK stack, as there are many resources out on the net. Please use Google to find proper examples/tutorials._

The standard Wildfly logging subsystem is using Java Util Logging _(IMHO not the best, but.. standard, eh!?)_. So we need a Java Util Formatter for Logstash format. This can be done pretty easy and good by using the __[SYNAXON/logstash-util-formatter](https://github.com/SYNAXON/logstash-util-formatter).__ Because there are no public binaries in public Maven repositories, you have to built it on your own, before you can use it. However, this should not be difficult for you.

I edited the formatter class for the needs in my project, but this is optional, you can just use it out-of-the-box.

Copy the just built library (`logstash-util-formatter-1.1-SNAPSHOT.jar`) into the modules folder of your Wildfly server:  
`$WILDFLY_HOME/modules/system/layers/base/net/logstash/main`

Create a `module.xml` file in the same folder with this content:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<module xmlns="urn:jboss:module:1.1" name="net.logstash">
  <resources>
      <resource-root path="logstash-util-formatter-1.1-SNAPSHOT.jar" />
  </resources>
  <dependencies>
      <module name="javax.json.api"/>
  </dependencies>
</module>
{% endhighlight %}

(Of course this can also be done automatically using the cli interface of Wildfly, see documentation for help.)

Now your Wildfly knows this Logstash formatter and is able to use it. How, this we are configuring now in the `standalone.xml` file (assuming you are using Wildfly in standalone mode).

In the _logging subsystem_ node, add this file handler:

{% highlight xml %}
<periodic-rotating-file-handler name="LOGSTASH_FILE" autoflush="true">
  <level name="INFO"/>
  <formatter>
    <named-formatter name="LOGSTASH_PATTERN"/>
  </formatter>
  <file relative-to="jboss.server.log.dir" path="logstash.log"/>
  <suffix value=".yyyy-MM-dd"/>
  <append value="true"/>
</periodic-rotating-file-handler>
{% endhighlight %}

Of course you can also use another file-handler, this is just an example.

Add our created file-handler to the root-logger:

{% highlight xml %}
<root-logger>
  <level name="INFO"/>
  <handlers>
    <handler name="CONSOLE"/>
    <handler name="FILE"/>
    <!-- this is the line to add, the others already exist -->
    <handler name="LOGSTASH_FILE"/>
  </handlers>
</root-logger>
{% endhighlight %}

Finally, specify the formatter class as a _custom-formatter_ in the subsystem:

{% highlight xml %}
<formatter name="LOGSTASH_PATTERN">
  <custom-formatter
    class="net.logstash.logging.formatter.LogstashUtilFormatter"
    module="net.logstash"/>
</formatter>
{% endhighlight %}

That's it, you're done. (Re-)Start your Wildfly and look into the log output folder,
there should be a logstash.log file now containing all the log entries in Logstash format.

You can now import/forward this logfile to Logstash for processing.

Input configuration:

{% highlight js %}
input {
  file {
    type => "wildfly-server"
    path => "/opt/wildfly/standalone/log/logstash.log"
    format => "json_event"
  }
}
{% endhighlight %}

or, if you use a logstash-forwarder, you have to configure something like this on the client side:

{% highlight json %}
{
  "paths": [ "/opt/wildfly/standalone/log/logstash.log" ],
  "fields": { "type": "wildfly", "format": "json_event" }
}
{% endhighlight %}

and on the server config, you can e.g. filter the input e.g. on its type:

{% highlight js %}
if [type] == "wildfly" {
  json {
    source => "message"
  }
}
{% endhighlight %}

Of course, this is only one method to log for Logstash.
It's also possible to log directly into Logstash, using socket connections.
But for this, you have to make sure, that your Logstash system is always available throuout the network
(high-availability, resilience, etc.). For my approach, the solution with the separate logfile fits perfectly.
