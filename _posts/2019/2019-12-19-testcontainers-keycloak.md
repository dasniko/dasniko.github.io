---
title: A Keycloak Testcontainer
tags:
- testcontainers
- keycloak
- testing
- java
thumbnail: /images/testcontainers-keycloak.jpg
youtube:
- FEbIW23RoXk
---

In the past few days, I've been implementing a Keycloak Testcontainer for easy usage in your integration tests of your Java/JVM based applications and services.
The package is publicly available at Maven Central and is compatible with Java 8 and up.
For those of you, who don't know about neither Testcontainers nor Keycloak, I have a very short introduction to both of them, before I'll explain my [`testcontainers-keycloak`](https://github.com/dasniko/testcontainers-keycloak) implementation.

#### Keycloak

[Keycloak](https://www.keycloak.org) is an Open Source Identity and Access Management (IAM) System for modern applications and services, powered by Red Hat.
They say about themselves:

> Add authentication to applications and secure services with minimum fuss. No need to deal with storing users or authenticating users. It's all available out of the box.
You'll even get advanced features such as User Federation, Identity Brokering and Social Login.
It's easy by design!

#### Testcontainers

[Testcontainers](https://testcontainers.org) makes many things, especially integration testing, much easier!
From their website:

> Testcontainers is a Java library that supports JUnit tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.

So, for example, you can provide a containerized database as part of an automated test and run integration tests against this throwaway container.
The Testcontainers framework handles all the lifecycle management of the container during the tests.
It's easy, it's huge!

There are pre-defined testcontainers available from the core library, like some databases or so.
For separate or different container needs, just use the `GenericContainer` to create the one you want.

Not only JUnit4 and JUnit5, but also Spock is supported as test framework.

### `testcontainers-keycloak`

While working with Keycloak for approx. 5 years now, I always struggled with integration testing against a running and for my tests properly configured Keycloak server in the environment.
Either there was none available or the one available was used by others.
Or - it has been always the challenge - how do you setup the Keycloak instance with proper test data?

With the Testcontainers framework and my Keycloak implementation, [`testcontainers-keycloak`](https://github.com/dasniko/testcontainers-keycloak), this now becomes pretty easy.
You just spin up a Keycloak instance, running in a Docker container, before your test (or test class) starts.
Then, you just can use is ootb, or import a previously exported realm in JSON format.
When this is not enough, just get the needed information right from the testcontainer instance to create an Keycloak admin client (`org.keycloak.admin.client.Keycloak`).
And, of course, it's all available through HTTP _**and**_ HTTPS (TLS)!

But now, step by step.
I'm using Testcontainers-JUnit5 annotations here, for detailed information or other test framework usage, please refer the the [Testcontainers documentation](https://www.testcontainers.org/quickstart/junit_4_quickstart/).

### Basic usage

In a test class, just create a `KeycloakContainer` instance:

{% highlight java %}
@Container
private KeycloakContainer keycloak = new KeycloakContainer();
{% endhighlight %}

This uses the currently most recent Keycloak version 8.0.1.
If you want or need to use another Docker image/version, just specify it in the constructor:

{% highlight java %}
@Container
private KeycloakContainer keycloak = new KeycloakContainer("jboss/keycloak:7.0.0");
{% endhighlight %}

If you have a previously exported realm JSON file, which should automatically imported for the tests, put it to the classpath and tell the KeycloakContainer to use it:

{% highlight java %}
@Container
private KeycloakContainer keycloak = new KeycloakContainer()
    .withImportFile("demo-realm.json");
{% endhighlight %}

By default, the username and password for the admin user will be `admin`/`admin`.
If you want to change this, guess what, you can:

{% highlight java %}
@Container
private KeycloakContainer keycloak = new KeycloakContainer()
    .withAdminUsername("myKeycloakAdminUser")
    .withAdminPassword("tops3c3t");
{% endhighlight %}

### HTTPS / TLS support

As already mentioned, this project comes with some built-in HTTPS/TLS support as I packaged a self-signed certificate, key and Java KeyStore with the distribution.
Like the whole library, the certificate is for testing purposes only and not for production.

If you want to use it, just create the `KeycloakContainer` with the appropriate hint:

{% highlight java %}
@Container
private KeycloakContainer keycloak = new KeycloakContainer().useTls();
{% endhighlight %}

This hint uses the `tls.crt` certificate and `tls.key` key files, located in the classpath root.
The Java KeyStore file for you to use in your code is `tls.jks`, also located in the classpath root of the lib.
The KeyStore password is just `changeit`.

In case you want (or must) use your own certificates and keys, you can do that easily by supplying them from the classpath and call

{% highlight java %}
@Container
private KeycloakContainer keycloak = new KeycloakContainer()
    .useTls("your_custom.crt", "your_custom.key");
{% endhighlight %}

The method `getAuthServerUrl()` (see below) will return a HTTPS url when using TLS support.

That's all you need to do.
Of course, you can combine all options together.
The Testcontainers framework will manage the whole container lifecycle process for you when running the tests and will start and stop the container(s).

HTTPS/TLS support is intentionally not active by default, because it causes the container to do some extra work on startup, which will take around 10 - 12 seconds, depending on your machines power.
And because testing should not take too much time and being as fast as possible, I decided to left it off as default.
(There's still the default TLS support available, when accessing the server the first time with HTTPS protocol, a self-signed keystore will be created.
But IMO this is not as handy as providing a concrete certificate.)

Have also a look into the [test classes](https://github.com/dasniko/testcontainers-keycloak/tree/master/src/test/java/dasniko/testcontainers/keycloak), where you can see some example usage.

### Keycloak Admin Client

For creating the `org.keycloak.admin.client.Keycloak` admin client instance, you need several information from the running container, especially the "auth-server-url" and with that, the port on which Keycloak is listening.
And as Testcontainers only uses dynamic port bining, you don't know the ports, but you can get all the information needed:

{% highlight java %}
String authServerUrl = keycloak.getAuthServerUrl();
String adminUsername = keycloak.getAdminUsername();
String adminPassword = keycloak.getAdminPassword();
// optionally:
String httpPort = keycloak.getHttpPort();
String httpsPort = keycloak.getHttpsPort();
{% endhighlight %}

Now you can create a Keycloak admin client during runtime in your tests:

{% highlight java %}
Keycloak keycloakAdminClient = KeycloakBuilder.builder()
    .serverUrl(keycloak.getAuthServerUrl())
    .realm("master")
    .clientId("admin-cli")
    .username(keycloak.getAdminUsername())
    .password(keycloak.getAdminPassword())
    .build();
{% endhighlight %}

The KeycloakContainer won't provide you with an admin client, because it's the aim of the Testcontainers project to handle the testcontainters and provide you with the data you need to create specific clients.
Testcontainers don't want to carry client libs with them as dependencies, they want to remain lightweight.

### Setup / Binaries

The source code of [`testcontainers-keycloak`](https://github.com/dasniko/testcontainers-keycloak) is [hosted at GitHub](https://github.com/dasniko/testcontainers-keycloak) and licensed under the MIT license.

You can get the binaries from [Maven Central](https://search.maven.org/artifact/com.github.dasniko/testcontainers-keycloak):

{% highlight xml %}
<dependency>
    <groupId>com.github.dasniko</groupId>
    <artifactId>testcontainers-keycloak</artifactId>
    <version>1.2.0</version>
    <scope>test</scope>
</dependency>
{% endhighlight %}

![](https://img.shields.io/github/v/release/dasniko/testcontainers-keycloak)
![](https://img.shields.io/github/license/dasniko/testcontainers-keycloak)

Feedback, issues and GitHub stars are welcome and highly appreciated!

<script async defer src="https://buttons.github.io/buttons.js"></script>
<a class="github-button" href="https://github.com/dasniko/testcontainers-keycloak" data-icon="octicon-star" data-size="large" aria-label="Star dasniko/testcontainers-keycloak on GitHub">Star</a>
<a class="github-button" href="https://github.com/dasniko/testcontainers-keycloak/issues" data-icon="octicon-issue-opened" data-size="large" aria-label="Issue dasniko/testcontainers-keycloak on GitHub">Issue</a>
<a class="github-button" href="https://paypal.me/dasniko" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @dasniko">Sponsor</a>
