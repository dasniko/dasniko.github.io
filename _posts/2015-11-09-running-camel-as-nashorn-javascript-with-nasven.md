---
title: Running Camel Routes as JavaScript Application with Nashorn and Nasven
tags:
- nashorn
- javascript
- nasven
- camel
- integration
---

I've already been thinking about this for a couple of months:

_**Running [Apache Camel](http://camel.apache.org) routes from/with Nashorn&JavaScript**_

Whyever, I didn't find the time and/or impulse to start doing this yet.

During last week, I stumbled upon an article of [camel.js, a re-implementation of Camel for Node.js.](http://matthewcodes.github.io/blog/2015/05/09/camel-dot-js-an-introduction/)
While this is a nice approach, and I really appreciate this, it's not Camel itself and all the components and options of Camel are not there and has to be implemented again. But in Camel there's also so much intelligence and work incorporated - why doing this again!?

Additionally, there's **[Nasven](https://github.com/nasven)** - _a tool to get Maven artifacts in scope for Nashorn script execution._ It's created by [Bruno Borges](http://brunoborges.com/), a Product Manager and Developer working for Oracle.

So, with that, I thought, it should be easy to do. And indeed, it is!
I've created **[a Camel example for Nasven](https://github.com/nasven/samples/tree/master/camel)**, using the Camel core library executing a simple route moving a file from _a_ to _b_. Nothing special, but shows how easy it is to use Camel from JavaScript. Just create your routes and run the application. No compile time any more, no expensive and long deployment cycles - just edit your route if necessary and restart the application and - _pow!_ - you are done!

Just create a `package.json` file with the dependency to the `camel-core` lib:

{% highlight json %}
...
  "dependencies": {
    "maven": [
      "org.apache.camel:camel-core:2.16.0"
    ]
  }
...
{% endhighlight %}

The actual application takes place in the `index.js` file:

{% highlight js %}
var Main = Packages.org.apache.camel.main.Main;
var RouteBuilder = Packages.org.apache.camel.builder.RouteBuilder;
var myRouteBuilder = Java.extend(RouteBuilder);
var route = new myRouteBuilder() {
  configure: function() {
    var sup = Java.super(route);
    sup
      .from("file://source")
      .to("file://target");
  }
};
var mainCamel = new Main();
mainCamel.addRouteBuilder(route);
mainCamel.run();
{% endhighlight %}

As you can see, no rocket-science, no magic, just JavaScript code!

To run/execute the application, you have to have [Nasven](https://github.com/nasven/nasven) installed on your machine. Then, just type at the command line from within the appropriate folder:

    $ nasven package.json

_With this, you can e.g. automate as much tasks as you like to get things done in your environment, just from the command line! :-)_
