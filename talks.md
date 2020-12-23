---
layout: page
title: Talks Topics
permalink: /talks/
---


I will and have been talking about these topics (and of course about upcoming topics in the future):

- [FUNQY-Town! The Quarkus-Serverless-API _#slideless_](#funqy)
- [Cloud Native Serverless Java with Quarkus and GraalVM on AWS Lambda](#quarkus)
- [Serverless Multi-Cloud Environments](#serverless-multicloud)
- [Container vs. Serverless - the Good, the Bad & the Ugly](#goodbad)
- [Serverless Security](#serverless-security)
- [The different kinds of Authentication](#kinds-of-authn)
- [Serverless `code.build.run` Pipeline](#severless-pipeline)
- [Serverless Computing - Early Lessons Learned](#serverless-lessonslearned)
- [Serverless Cloud Architectures (with AWS Infrastructure)](#serverless)
- [Java Security - State of Affairs for Auth*](#javaauth)
- [Security and Single-Sign-On for Web APIs](#apisecurity)
- [Single-Sign-On for Microservices and distributed (Java EE) applications](#keycloak)
- [How micro can you go? Lambdas on AWS](#lambda)
- [No Stress with your Tests - Stresstesting with Gatling](#gatling)
- [Isomorphic JavaScript apps with Nashorn and React](#isomorphic)
- [Test your Nashorn JavaScript with JUnit, Groovy Spock, Jasmine and Mocha](#nashornspock)
- [Nodyn and Vert.x - Running distributed Node.js apps in JVM environments](#distributednodejs)
- [Node.js compared to traditional Java EE App Servers](#nodejs_javaee)
- [JavaScript for Java Developers](#js4j)
- [Architectural Kata](#archkata)
- [Beer-as-a-Service - Node.js on the JVM - Status quo with Nodyn and Avatar](#node-jvm)
- [Avatar 2.0 - more than just Node.js on the JVM](#avatar20)
- [Code-Quality despite of JavaScript](#jsquality)
- [Project Avatar: more than just Node.js ont the JVM - Enterprise Java written in JavaScript](#avatar)
- [Continuous Database Migration mit Flyway und Liquibase](#dbmigration)
- [Continuous Delivery mit dem FeatureToggle Pattern und Togglz](#featuretoggle)

---

### <a name="funqy">FUNQY-Town! The Quarkus-Serverless-API _#slideless_</a>

_"Gotta make a move to a town that's right for me - won't you take me to FUNQY-Town"_ - Lipps, Inc. already recognized in this disco classic from 1979 that it is time to move to a new environment that meets the requirements. With the Funqy API for Serverless functions, the Quarkus framework wants to achieve exactly that: a new approach for the Serverless needs.

The Funqy API simplifies writing Java-based HTTP services more and more and makes the implementation of platform specific deployment knowledge completely transparent for the developer. It doesn’t matter whether the application will be deployed to a JVM or as a native binary (using GraalVM). Depending on the target environment (AWS, Azure, Google, Knative or even traditional environments) the necessary deployment artifacts are generated during the build and can then be used as a template.

In my session I will show you without slides but with living-code examples how you can quickly and easily write an HTTP-based service and deploy it to various cloud platforms. As Java and native service.


---

### <a name="quarkus">Cloud Native Serverless Java with Quarkus and GraalVM on AWS Lambda</a>

When it comes to Serverless and Java, people still think of clumsiness and bad startup latencies. Using Quarkus framework (by Red Hat), GraalVM (Oracle) and Custom Runtimes & Layers for AWS Lambda, a Java application can now be easily compiled to a natively executable binary and run as a serverless function. The startup times can compete in any ways with other environments and can no more be compared with conventional JVM startups.

I’ll give a short overview of Quarkus, the GraalVM and the AWS Lambda Custom Runtimes & Layers. After we learned the basics, I’ll show how a typical Java application that uses ostensively cumbersome JAX-RS, JPA and CDI APIs, can become a performant platform-specific and executable binary with little effort. I'll also mention some of the traps that newbies like to fall into when dealing with native binaries. At the end I’ll deploy the generated function to AWS Lambda, where I compare the startup times with those of conventional (not only Java) functions.

---

### <a name="serverless-multicloud">Serverless Multi-Cloud Environments</a>

_t.b.d._

---

### <a name="goodbad">Container vs. Serverless - the Good, the Bad & the Ugly</a>

Today, containers are a common thing and something like an "industry standard". Serverless is the direct competitor and everybody talks about "Cloud Native“. Is Serverless the next step in evolution of containers and will it replace them in the (near) future? And how does Cloud Native fit into the Serverless context?
There is also wide range of container-based frameworks which call themselves „Serverless". Are they really server-less, or don't I have to run an entire server farm for it?

Let’s have a controversial discussion - perhaps we will find some similarities, perhaps not. It's not really about which technology is "better". Both approaches have advantages and disadvantages, and you have to know them in order to be able to use them effectively!

---

### <a name="serverless-security">Serverless Security</a>

Serverless means that you no longer have to worry about the infrastructure. But do I no longer have to worry about the security of my applications? Or do I have to deal with it more and more? Not at least, OWASP has published its own Top-10 for serverless applications.

Resource authorization, encryption of data in transit and at rest, network layers, intrusion detection, threat modeling, meltdown/spectre - topics that require particularly sensitive handling, especially in cloudy environments.

We will discuss in this session which possibilities are available and which obligations we have to secure our cloud applications. In a manner to get enough and peaceful sleep and not have to worry about the infrastructure management. Parallel to our discussion, we'll make an existing serverless application more secure and reliable.

---

### <a name="kinds-of-authn">The different kinds of Authentication</a>

_t.b.d._

---

### <a name="serverless-pipeline">Serverless `code.build.run` Pipeline</a>

_t.b.d._

---

### <a name="serverless-lessonslearned">Serverless Computing - Early Lessons Learned</a>

What's the status quo of the _Serverless_ hype?
In any case it's time to look at the first and early "lessons learned"!
Not only for beginners in the serverless world, it's important to take into account some tripping events, which no one want's to run in a second time.  
"No Server" does not mean "No Ops"! - The responsibitlity for accuracy, reliability and correct results can no simply be dropped.  
We'll discuss suitable and unsuitable options of "Serverless", specific features that must be taken into account using the programming model, as well as handling container instances, caching latencies, security, monitoring, deployment, etc.

---

### <a name="serverless">Serverless Cloud Architectures (with AWS infrastructure)</a>

Serverless architectures allow you to build an run applications and Microservices without having to manage infrastructure. Of course there are still servers involved, but the management will be done by your Cloud provider. You don't need to take care of provisioning, scaling, availability and all of this tasks for you applications, databases and other systems.

With the use of function-sized compute containers (like e.g. AWS Lambda, to give it a name), Microservices become really small. These Functions are easy to write, test and deploy, because they are so small, just focussing on one single task. And as they are only charged when used, you even pay less. In general, Functions are event-driven, but together with API-Gateway, Functions become a powerful and lean alternative of running Microservices in a container like Docker (which looks huge in comparison).

---

### <a name="javaauth">Java Security - State of Affairs for Auth*</a>

_t.b.d._

---

### <a name="keycloak">Single-Sign-On for Microservices and distributed (Java EE) applications with Keycloak</a>

In the era of distributed (Cloud) applications and Microservices, the authentication and authorization of users is not an easy task. And who wants to implement a login form and the corresponding logic again and again? Also users of monolithic applications don't want to sign in again and again when switching from one application to another.

So, JBoss Keycloak to the rescue! Keycloak is a Single-Sign-On (SSO) and Identity Management (IDM) system, which comes with a very broad range of functionality and is very easy to mount in many existing applications. The token-based user authentication and authorization with JWT, OAuth2, OpenID Connect or SAML 2.0 is reliable and does not require any additional manual development. Existing LDAP or other directories or user repositories can be integrated easily and authorization to social providers like Github, Twitter, Facebook or Google are only a few clicks away.

I'll give you an overview of Keycloak, but additionally I will also show you how to integrate this SSO solution into various applications, beginning with pure RESTful services on Java EE and Spring Boat applications to pure JavaScript-based client applications (like Angular and React).

---

### <a name="lambda">How micro can you go? Lambdas on AWS</a>

There are moments, you only want to write code and execute it in the cloud. Without thinking about infrastructure, without the need to manage infrastructure. Because you don't need it, because you don't want it, because it's expensive.

Executing event-driven functions in the cloud - that's what AWS Lambda stands for. Developers only write code, in JavaScript, Java or any JVM-based language or Python. Lambda is doing the rest. The balance is cleared in blocks of 100ms. Write efficient code, pay less!

At runtime, the AWS API is available. If you need more libs, just deploy them with your code. With the API-Gateway Lambda services become a fully supported REST-interface and can communicate with the outside world.

---

### <a name="gatling">No Stress with your Tests - Stresstesting with Gatling</a>

Unit-, integration- and UI-tests are nowadays more-or-less standard, but what about load tests? They have a niche existence or become canceled due to budget limits. In many projects, people just execute a bunch of fast but uncontrolled clicks. This type of "smoke tests" are not meaningful, not reproducible and thus neither comparable nor useful. In case of a performance bottleneck, the actual cause is not obvious.

Gatling is about to roll-up this domain. Based on a modern open-source architecture of Scala, Akka and Netty, Gatling works asynchronously and non-blocking and thus with a high performance. The Scala-DSL enables you to create the test scenarios quick and easy. With assertions, global success or failure criteria can be defined and cool and clear reports visualize the results. Comprehensive test scenarios can be created with the usage of the Recorder utility. Thanks to Gatling, there are no more excuses not to run load tests right from the start!

---

### <a name="isomorphic">Isomorphic JavaScript apps with Nashorn and React</a>

Isomorphic _(greek: "isos" = equal, "morph" = shape)_ JavaScript apps are JavaScript applications that can run both client-side and server-side. Isomorphism describes that if you look at the same entity in two different contexts, you should get the same thing. Here the contexts are server and client. Although the term has been mostly used in mathematics until now, it's an apt term to describe a web programing pattern where the code is shared by the front-end and back-end. Just take an MVC-based Java framework, integrate it with Nashorn and use a famous JavaScript templating engine like React - that's it. Now you can render templates on the server- as also on the client side!

---

### <a name="nashornspock">Test your Nashorn JavaScript with JUnit, Groovy Spock, Jasmine and Mocha</a>

Running JavaScript on the JVM is easy, thanks to the Nashorn Script Engine since Java 8. But is testing your JavaScript also? Are all JavaScript functions tested properly? With the power of the Spock test framework it's easy to test your scripts! Spock allows you, due to its highly expressive specification language, to insert different (business) values to your tests without duplicating your code. Write one test, execute many!

In this polyglott talk, I'm gonna show you easy ways to test your Nashorn JavaScripts with JUnit (Java) and Spock (Groovy), additionally with well-known JavaScript test frameworks like Mocha and Jasmine. After this talk you'll love to write and run JavaScript tests (perhaps more than traditional Java unit tests)!

---

### <a name="distributednodejs">Nodyn and Vert.x - Running distributed Node.js apps in JVM environments</a>

The Nodyn project provides the Node.js API on the JVM. But it uses only libraries which are running natively on the JVM: DynJS or Nashorn as the JavaScript Engine and Netty for async and non-blocking I/O. By replacing the parts written originally in C with Java and JavaScript, it also contains more JavaScript than original Node.js does.

With the approach of using Vert.x and its Eventbus (powered by Hazelcast), it's as easy as 1-2-3 to get your Node apps running in distributed environments, communicating with other JVM-language verticals by sending objects across the event bus, which spans across all available instances, even to the browser. Live coding and examples will dominate this talk.

---

### <a name="nodejs_javaee">Node.js compared to traditional Java EE App Servers</a>

Everybody is talking about the lightning speed of Node.js, because it's asynchronous and non-blocking, allowing thousands of requests a time. And that this isn't possible with traditional (old? heavyweighted?) Java EE Application Servers. Even some people talk about of the "death of app servers".

But is that true? How do app servers deal with huge amounts of concurrent requests? And is it really not possible to achieve the same results as with Node.js? I did a comparison of both solutions and approaches for one of my customers and got surprising results. It heavily depends on... this, I'm gonna tell you in my talk! ;-)

---

### <a name="js4j">JavaScript for Java Developers</a>

JavaScript and Java are very similar in their names and their syntax - but that's it. Period!  
There are still many Java developers who think that JavaScript is only a subset of Java and/or only an unsecure toy language for web browsers, and thus they don't have to deal with the language itself. But that's wrong! However, JavaScript behaves completely different than Java, and many Java dev's write JavaScript programms without the necessary understanding of this programming language.

In the days of single-page (web) applications ("SPA", like Angular, Ember, Backbone, etc.) and Node.js (evented I/O on the server side), every Java (web) developer (YOU!) should deal with the characteristics of JavaScript. And because you have an existing and reusable programming knowledge, you are able to learn the most important things you need to know about JavaScript in just one day in a very compact style. You will learn all the different things, but when it makes sense, we'll compare some concepts with ones from the Java world.

---

### <a name="archkata">Architectural Kata</a>

"So how are we supposed to get great architects, if they only get the chance to architect fewer than a half-dozen times in their career?" asks Ted Neward. The answer: the architectural dry run!

This workshop is aimed primarily at developers with little previous knowledge in the design of software architectures. The goal is a practical introduction to the design of a software architecture. For this purpose, we will give participants the necessary tools at hand, facilitate them to create well-structured architectures on their own and communicate them to a team.

Using an "Architectural Kata", we perform several incremental exercises to allow the participants first steps in the business of Software Architects. In these Kata, the participants are increasingly adopt tasks of the architectural design process and edit them in small groups of two to three persons.

The exercise concludes with the constructive discussion of the developed architectures by the other groups and the facilitator. Here it becomes clear that each architecture has its advantages and disadvantages and that there is probably not the only one "perfect" architecture for solving the problem. However, the concluded compromises and decisions must be communicated to other developers in an understandable form.

---

### <a name="node-jvm">Beer-as-a-Service - Node.js on the JVM - Status quo with Nodyn and Avatar</a>

Node.js is very popular and is used widely. But how do you integrate Node in enterprise architectures? There are mature monitoring processes for JVM runtime environments and a significant part of the business logic is implemented in Java libraries. In addition, Node.js is only single threaded, is it worth at all?

The seamless integration and a compatibility to Node.js applications in JVM environments promise for over a year Oracle Avatar.js and not long ago also Nodyn from RedHat. Both projects use parts of Node.js, but in different ways. Both projects try to achieve a (nearly) complete API compatibility.

While Nodyn relies on the complete integration with Vert.x, both Nodyn in Vert.x and vice versa, Avatar provides the execution of multi-threaded event loops with inter-thread communication via shared state and a private event bus. Additionally, there is the Avatar Persistence, which allows access via a unified API on different datastores (RDBMS and NoSQL). More options for a successful integration into enterprises are to come.

Both, Nodyn as also Avatar, make use of the invokedynamic feature of the JVM - Avatar with the Java-own JavaScript engine Nashorn, Nodyn relies on an implementation using DynJS. In my talk, I'll show a comparison between the two projects and both platforms. Beer-as-a-Service (BaaS) will serve as an example.

---

### <a name="avatar20">Avatar 2.0 - more than just Node.js on the JVM</a>

Avatar 2.0 is the logical evolution of Avatar.js and Project Avatar - the Node.js implementations for the JVM. The dependency to a Java EE Application Server no longer exists, Avatar is now running it its own JVM.

The focus is on multiple asynchronous and non-blocking Node.js Event-Loops, each running it its own thread. An inter-thread-communication is possible via SharedState (using JCache/Coherence also distributed across multiple nodes) and an internal Event Bus. Another highlight is the so called "Avatar Persistence", with which it is possible to store JSON objects in relationships of 1:1, 1:n or n:m using a JPA/JDBC layer - in RDBMS or NoSQL databases.
Avatar 2.0 brings together, what belongs together: JavaScript on the JVM!

---

### <a name="jsquality">Code-Quality despite of JavaScript</a>

JavaScript erlebt einen besonderen Hype. Die Sprache meldet Ansprüche als Plattform für unternehmenskritische Applikationen an und erobert zunehmend das Server- und Backend-Umfeld.

Ein Plus ist die große Flexibilität und Freiheit: JavaScript verbindet funktionale, objekt-orientierte und imperative Programmierstile. Diese Freiheit trägt eine große Herausforderung für den praktischen Projekteinsatz. Der Vortrag zeigt, wie JavaScript im Projektalltag gebändigt werden kann. Durch produktive Tools messen wir die Qualität, zeigen Schwachstellen rechtzeitig auf und geben Tipps für die Behebung.

---

### <a name="avatar">Project Avatar: more than just Node.js ont the JVM - Enterprise Java written in JavaScript</a>

Aktuell sind leichtgewichtige Architekturen gefragt, in denen der Server lediglich die Ressourcen per (REST-/Push-)Services zur Verfügung stellt und ein großer Teil der Logik in HTML5-Clients per JavaScript implementiert ist. Das Projekt Avatar macht mit seiner Thin-Server-Architektur (TSA) JavaEE Ressourcen direkt per JavaScript zugreifbar, egal ob auf dem Application Server (Service Components) oder dem Client (View Components).

Serverseitig basiert Avatar auf der Node-Implementierung für die JVM (Avatar.js für die Nashorn Scripting-Engine) und stellt somit fast die gesamte Node.js API zur Verfügung und nutzt ebenfalls das Node-Programmingmodel einer Single Threaded Event-Loop (REPL) - natürlich auch parallel in mehreren Threads (falls gewünscht).

Auf dem Client sorgt das Framework für das Binding der Ressourcen an HTML5-Widgets und beschränkt sich dabei auf so wenig JavaScript wie möglich und nur so viel wie gerade nötig. Die Programmierung erinnert hier stark an die Expression Language und ist so für den erfahrenen Java-Entwickler einfach umsetzbar. Da bei einer TSA Client und Server losgelöst voneinander sind und nur protokollbasiert miteinander kommunizieren, ist die Verwendung der View Components nicht zwingend nötig. Hier kann der Entwickler auf das Framework seiner Wahl zurückgreifen.

Die Live-Demo zeigt, wie eine JavaEE Applikation ganz ohne Java Code erstellt werden kann, nur mit dem Einsatz von JavaScript.

---

### <a name="dbmigration">Continuous Database Migration mit Flyway und Liquibase</a>

Der Quellcode der Applikation ist versioniert im Repository abgelegt. Warum nicht die Datenbank? Will man nun einen beliebigen Stand der Datenbank in der Entwickler-, Test- oder Produktionsumgebung wiederherstellen, stehen mit Flyway und Liquibase zwei leistungsfähige Java-Bibliotheken zur Verfügung, die nahtlos in den Build für ein agiles Continuous Delivery integrierbar sind.

---

### <a name="featuretoggle">Continuous Delivery mit dem FeatureToggle Pattern und Togglz</a>

Wer agil entwickelt und Continuous Delivery umsetzen und betreiben will, hat nicht zuletzt mit Features zu kämpfen, deren Entwicklung noch nicht abgeschlossen ist, oder die noch nicht oder nur für eine bestimmte Benutzergruppe in Produktion gehen sollen, die aber bereits entwickelt sind. Und da kein Feature-Branch existiert, bzw. nur der Master-Branch, aus dem auch regelmäßig deployed wird, könnte das eine Herausforderung werden. Mit dem FeatureToggle Pattern von Martin Fowler und der Realisierung dessen mit Togglz ist es ganz einfach, all das im Handumdrehen zu realisieren.
