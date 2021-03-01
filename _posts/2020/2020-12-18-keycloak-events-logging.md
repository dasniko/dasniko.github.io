---
title: Keycloak Events Logging
tags:
- keycloak
- authentication
- events
- logging
- java
thumbnail: /images/keycloak-events-logging.png
youtube: Rh8LstBPBOE
---

[Keycloak](https://keycloak.org) has this feature of "events".
There are two kinds of events: login events and admin events.
Login events are emitted every time a user-related action around authentication is executed, e.g. login, logout, code-to-token exchanges, registrations, etc.
Also errors of these actions are emitted as an event.
The event itself then contains some useful information about the action and the corresponding user and/or client.
Admin events are emitted on every change of a resource via the Admin-API, no matter if via the web console, REST api, CLI, etc.

You can enable storing these events in the Keycloak database.
This can be done in the admin web ui, for each realm, go to "Events" in the menu.
But I really don't recommend storing the events in the database, especially not if there is a huge amount of events.
The login events DB table is hardly indexed, the admin events table besides the PK not at all and querying lots of entries will likely slow down your system.
So, simply don't do it.
Or, just store the login events only for a certain (short) retention time after they occurred.
Unfortunately, admin events cannot be configured with a retention time at all to be auto-deleted.

But besides that, many of my customers want to have the events in the logs.
There is alread a default events listener called `jboss-logging` in each realm configured.
When there is e.g. an error during a login attempt, this error event will be logged with log level `WARN`.
Great, but what's with the successful events? Where are they?

The good news: They are gonna be logged, too!
But unfortunately they will be logged with level `DEBUG` and the root log level of the whole Keycloak server is set to `INFO`.
With this setting, the _SUCCESS_-events won't occur in the logs, only the _ERROR_-events will.

So you have to adjust the logging of the events!
This can be achieved in two ways.
Just choose the one, which fits best to you and your environment or you like most.

_(As you could change the `standalone(-ha).xml` file directly, it's not recommended.
Using the JBoss-CLI approach to modify the Keycloak/Wildfly configuration is the way to go!)_

### Change the log level of the `org.keycloak.events` category logger

With this approach, you add an entry in the logging subsystem of the underlying Wildfly configuration.
The new entry tells the logging subsystem to print all log messages from the package `org.keycloak.events` with `DEBUG` level and above to the log output:

```
/subsystem=logging/logger=org.keycloak.events/:add(category=org.keycloak.events,level=DEBUG)
```

or

### Configure the `jboss-logging` listener to log on other levels

As per default, there is no `eventsListener` SPI config in the Keycloak server configuration.
The default behaviour for the `jboss-logging` events listener is the one which is implemented in the code.
To be able to change the configuration of the `jboss-logging` listener, you'll have to create the proper SPI node in the `keycloak-server` subsystem first, then add the desired log levels.

```
/subsystem=keycloak-server/spi=eventsListener:add
/subsystem=keycloak-server/spi=eventsListener/provider=jboss-logging:add(enabled=true)
/subsystem=keycloak-server/spi=eventsListener/provider=jboss-logging:write-attribute(name=properties.success-level,value=info)
/subsystem=keycloak-server/spi=eventsListener/provider=jboss-logging:write-attribute(name=properties.error-level,value=warn)
```

Now the _SUCCESS_-events will occur in the log output with level `INFO`, as soon as they are emitted by Keycloak:

![](/images/keycloak-events-logging.png)

Additionally, if you change the log output format to JSON, you can easily consume, aggregate, process and monitor all the Keycloak events with another system, like ElasticSearch or such.

_Have fun with Keycloak eventing!_
