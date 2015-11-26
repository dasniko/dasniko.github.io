---
layout: page
title: Talks & Conferences
permalink: /talks/
---


You can meet me at the following conferences and events:

<a href="https://www.oracle.com/javaone/index.html">
  <img src="/images/logo_javaone.png" alt="JavaOne, San Francisco" title="JavaOne, San Francisco" class="conflogo"/>
</a>
<a href="http://www.javaland.eu">
  <img src="/images/logo_javaland.gif" alt="JavaLand, Cologne" title="JavaLand, Cologne" class="conflogo"/>
</a>
<a href="http://www.voxxeddays.com">
  <img src="/images/logo_voxxeddays.png" alt="VoxxedDays" title="VoxxedDays" class="conflogo" style="max-width: 350px"/>
</a>
<a href="http://www.jfokus.se">
  <img src="/images/logo_jfokus.png" alt="JFokus, Stockholm" title="JFokus, Stockholm" class="conflogo" style="max-height: 120px"/>
</a>
<a href="http://www.javazone.no">
  <img src="/images/logo_javazone.png" alt="JavaZone, Oslo" title="JavaZone, Oslo" class="conflogo" style="height: 120px"/>
</a>
<a href="http://jeeconf.com">
  <img src="/images/logo_jeeconf.png" alt="JEEConf, Kiev" title="JEEConf, Kiev" class="conflogo"/>
</a>
<a href="https://jax.de">
  <img src="/images/logo_jax.png" alt="Jax Conference Series, Germany" title="Jax Conference Series, Germany" class="conflogo" style="height: 110px"/>
</a>
<a href="http://bed-con.org">
  <img src="/images/logo_bedcon.png" alt="BED-CON, Berlin" title="BED-CON, Berlin" class="conflogo" style="height: 80px"/>
</a>
<a href="http://oop-konferenz.de">
  <img src="/images/logo_oop.png" alt="OOP Conference, Munich" title="OOP Conference, Munich" class="conflogo"/>
</a>
<a href="http://www.enterjs.de">
  <img src="/images/logo_enterjs.png" alt="enterJS, Germany" title="enterJS, Germany" class="conflogo" style="height: 110px"/>
</a>
<a href="http://www.developer-week.de">
  <img src="/images/logo_dwx.png" alt="DWX - Developer Week, Nuremberg" title="DWX - Developer Week, Nuremberg" class="conflogo" style="height: 110px"/>
</a>
<a href="http://www.codetalks.de">
  <img src="/images/logo_codetalks.jpg" alt="code-talks, Hamburg" title="code-talks, Hamburg" class="conflogo" style="height: 100px"/>
</a>
<a href="http://entwicklertag.de">
  <img src="/images/logo_entwicklertag.png" alt="Entwicklertag, Frankfurt" title="Entwicklertag, Frankfurt" class="conflogo" style="height: 100px"/>
</a>
<a href="http://herbstcampus.de">
  <img src="/images/logo_herbstcampus.gif" alt="Herbstcampus, Nuremberg" title="Herbstcampus, Nuremberg" class="conflogo" style="height: 50px"/>
</a>

...and at many Java and JavaScript User Group events across Germany.


## Talk Topics

I will and have been talking about these topics (and of course about upcoming topics in the future):

- [Best of Breed: Java EE apps with MVC, ReactJS and WebPack](#mvc_react_webpack)
- [No Stress with your Tests - Stresstesting with Gatling](#gatling)
- [Isomorphic JavaScript apps with Nashorn and React](#isomorphic)
- [Test your Nashorn JavaScript with JUnit, Groovy Spock, Jasmine and Mocha](#nashornspock)
- [Nodyn and Vert.x - Running distributed Node.js apps in JVM environments](#distributednodejs)
- [Node.js compared to traditional Java EE App Servers](#nodejs_javaee)
- [JavaScript for Java Developers](#js4j)
- [Architectural Kata](#archkata)
- [Beer-as-a-Service - Node.js on the JVM - Status quo with Nodyn and Avatar](#node-jvm)
- [Avatar 2.0 - more than just Node.js on the JVM](#avatar20)
- [Espruino - JavaScript for Things](#espruino)
- [Meteor has landed - what's hot in 1.0?](#meteor10)
- [Code-Quality despite of JavaScript](#jsquality)
- [Project Avatar: more than just Node.js ont the JVM - Enterprise Java written in JavaScript](#avatar)
- [Reaktive Anwendungen](#reactivity)
- [Meteor vor dem Einschlag](#meteor)
- [Continuous Database Migration mit Flyway und Liquibase](#dbmigration)
- [Continuous Delivery mit dem FeatureToggle Pattern und Togglz](#featuretoggle)
- [Wasser in der Wüste - Vom custom-made SQL-Messaging zum JMS-Standard](#camel)
- [SOA als Migrationsarchitektur](#soamigration)
- [SOA Antipatterns - How to kill your business](#soaantipatterns)

---

### <a name="mvc_react_webpack">Best of Breed: Java EE apps with MVC, ReactJS and WebPack</a>

_t.b.d._

### <a name="gatling">No Stress with your Tests - Stresstesting with Gatling</a>

Unit-, integration- and UI-tests are nowadays more-or-less standard, but what about load tests? They have a niche existence or become canceled due to budget limits. In many projects, people just execute a bunch of fast but uncontrolled clicks. This type of "smoke tests" are not meaningful, not reproducible and thus neither comparable nor useful. In case of a performance bottleneck, the actual cause is not obvious.

Gatling is about to roll-up this domain. Based on a modern open-source architecture of Scala, Akka and Netty, Gatling works asynchronously and non-blocking and thus with a high performance. The Scala-DSL enables you to create the test scenarios quick and easy. With assertions, global success or failure criteria can be defined and cool and clear reports visualize the results. Comprehensive test scenarios can be created with the usage of the Recorder utility. Thanks to Gatling, there are no more excuses not to run load tests right from the start!

### <a name="isomorphic">Isomorphic JavaScript apps with Nashorn and React</a>

Isomorphic _(greek: "isos" = equal, "morph" = shape)_ JavaScript apps are JavaScript applications that can run both client-side and server-side. Isomorphism describes that if you look at the same entity in two different contexts, you should get the same thing. Here the contexts are server and client. Although the term has been mostly used in mathematics until now, it's an apt term to describe a web programing pattern where the code is shared by the front-end and back-end. Just take an MVC-based Java framework, integrate it with Nashorn and use a famous JavaScript templating engine like React - that's it. Now you can render templates on the server- as also on the client side!

### <a name="nashornspock">Test your Nashorn JavaScript with JUnit, Groovy Spock, Jasmine and Mocha</a>

Running JavaScript on the JVM is easy, thanks to the Nashorn Script Engine since Java 8. But is testing your JavaScript also? Are all JavaScript functions tested properly? With the power of the Spock test framework it's easy to test your scripts! Spock allows you, due to its highly expressive specification language, to insert different (business) values to your tests without duplicating your code. Write one test, execute many!

In this polyglott talk, I'm gonna show you easy ways to test your Nashorn JavaScripts with JUnit (Java) and Spock (Groovy), additionally with well-known JavaScript test frameworks like Mocha and Jasmine. After this talk you'll love to write and run JavaScript tests (perhaps more than traditional Java unit tests)!

### <a name="distributednodejs">Nodyn and Vert.x - Running distributed Node.js apps in JVM environments</a>

The Nodyn project provides the Node.js API on the JVM. But it uses only libraries which are running natively on the JVM: DynJS or Nashorn as the JavaScript Engine and Netty for async and non-blocking I/O. By replacing the parts written originally in C with Java and JavaScript, it also contains more JavaScript than original Node.js does.

With the approach of using Vert.x and its Eventbus (powered by Hazelcast), it's as easy as 1-2-3 to get your Node apps running in distributed environments, communicating with other JVM-language verticals by sending objects across the event bus, which spans across all available instances, even to the browser. Live coding and examples will dominate this talk.

### <a name="nodejs_javaee">Node.js compared to traditional Java EE App Servers</a>

Everybody is talking about the lightning speed of Node.js, because it's asynchronous and non-blocking, allowing thousands of requests a time. And that this isn't possible with traditional (old? heavyweighted?) Java EE Application Servers. Even some people talk about of the "death of app servers".

But is that true? How do app servers deal with huge amounts of concurrent requests? And is it really not possible to achieve the same results as with Node.js? I did a comparison of both solutions and approaches for one of my customers and got surprising results. It heavily depends on... this, I'm gonna tell you in my talk! ;-)

### <a name="js4j">JavaScript for Java Developers</a>

JavaScript and Java are very similar in their names and their syntax - but that's it. Period!  
There are still many Java developers who think that JavaScript is only a subset of Java and/or only an unsecure toy language for web browsers, and thus they don't have to deal with the language itself. But that's wrong! However, JavaScript behaves completely different than Java, and many Java dev's write JavaScript programms without the necessary understanding of this programming language.

In the days of single-page (web) applications ("SPA", like Angular, Ember, Backbone, etc.) and Node.js (evented I/O on the server side), every Java (web) developer (YOU!) should deal with the characteristics of JavaScript. And because you have an existing and reusable programming knowledge, you are able to learn the most important things you need to know about JavaScript in just one day in a very compact style. You will learn all the different things, but when it makes sense, we'll compare some concepts with ones from the Java world.

### <a name="archkata">Architectural Kata</a>

"So how are we supposed to get great architects, if they only get the chance to architect fewer than a half-dozen times in their career?" asks Ted Neward. The answer: the architectural dry run!

This workshop is aimed primarily at developers with little previous knowledge in the design of software architectures. The goal is a practical introduction to the design of a software architecture. For this purpose, we will give participants the necessary tools at hand, facilitate them to create well-structured architectures on their own and communicate them to a team.

Using an "Architectural Kata", we perform several incremental exercises to allow the participants first steps in the business of Software Architects. In these Kata, the participants are increasingly adopt tasks of the architectural design process and edit them in small groups of two to three persons.

The exercise concludes with the constructive discussion of the developed architectures by the other groups and the facilitator. Here it becomes clear that each architecture has its advantages and disadvantages and that there is probably not the only one "perfect" architecture for solving the problem. However, the concluded compromises and decisions must be communicated to other developers in an understandable form.

### <a name="node-jvm">Beer-as-a-Service - Node.js on the JVM - Status quo with Nodyn and Avatar</a>

Node.js is very popular and is used widely. But how do you integrate Node in enterprise architectures? There are mature monitoring processes for JVM runtime environments and a significant part of the business logic is implemented in Java libraries. In addition, Node.js is only single threaded, is it worth at all?

The seamless integration and a compatibility to Node.js applications in JVM environments promise for over a year Oracle Avatar.js and not long ago also Nodyn from RedHat. Both projects use parts of Node.js, but in different ways. Both projects try to achieve a (nearly) complete API compatibility.

While Nodyn relies on the complete integration with Vert.x, both Nodyn in Vert.x and vice versa, Avatar provides the execution of multi-threaded event loops with inter-thread communication via shared state and a private event bus. Additionally, there is the Avatar Persistence, which allows access via a unified API on different datastores (RDBMS and NoSQL). More options for a successful integration into enterprises are to come.

Both, Nodyn as also Avatar, make use of the invokedynamic feature of the JVM - Avatar with the Java-own JavaScript engine Nashorn, Nodyn relies on an implementation using DynJS. In my talk, I'll show a comparison between the two projects and both platforms. Beer-as-a-Service (BaaS) will serve as an example.

### <a name="avatar20">Avatar 2.0 - more than just Node.js on the JVM</a>

Avatar 2.0 is the logical evolution of Avatar.js and Project Avatar - the Node.js implementations for the JVM. The dependency to a Java EE Application Server no longer exists, Avatar is now running it its own JVM.

The focus is on multiple asynchronous and non-blocking Node.js Event-Loops, each running it its own thread. An inter-thread-communication is possible via SharedState (using JCache/Coherence also distributed across multiple nodes) and an internal Event Bus. Another highlight is the so called "Avatar Persistence", with which it is possible to store JSON objects in relationships of 1:1, 1:n or n:m using a JPA/JDBC layer - in RDBMS or NoSQL databases.
Avatar 2.0 brings together, what belongs together: JavaScript on the JVM!

### <a name="espruino">Espruino - JavaScript for Things</a>

Espruino is JavaScript bare to the metal of a microcontroller. It's an open source hardware Espruino Board and an open source interactive JavaScript interpreter, running natively on the controller (not only on the Espruino Board, but also on similar microcontrollers, too).

The project was launched in 2013 through a Kickstarter campain and it raised 5x its target. It's a bit like Arduino, but for JavaScript! It's perfect for beginners in IoT or prototyping/showcasing. Lots of GPIOs (PWM, ADC, USART, SPI, I2C, DAC), SD Card Slot, USB and battery connectors, Bluetooth module pad, etc.

From 0 to hero in 3 minutes! Just plug the Espruino to your Computer, conntect it with the Espruino Web-IDE, update the firmware and start coding. It works, right out of the box! Just run your code as you type! Even programming the Espruino from your phone is possible. There is already a large open source community which comes up every day with new interessting ideas for the microcontroller. I'll give you an introduction to Espruino and it's capabilities (not only for my upcoming home-automation tasks) and show you Espruino in action!

### <a name="meteor10">Meteor has landed - what's hot in 1.0?</a>

Die reaktive JavaScript Platform Meteor macht große Schritte zum ersten Major-Release (1.0). Was hat sich in den letzten 12 Monaten getan? Nachdem wir letztes Jahr auf die Basis-Features geschaut haben, nehmen wir uns jetzt das weitere Umfeld vor und schauen, wie sich Meteor in der Praxis und der realen Welt schlägt. Was bringt die neue UI Engine "Blaze"? Welche Test-Frameworks gibt es für Meteor? Arbeiten mit dem Package-Manager, Integration von Streams und 3D Darstellungen im Browser und vieles mehr. Welche produktiven Websites bzw. Apps gibt es mittlerweile? Natürlich gibt es wieder ausreichend Code zu sehen...!

### <a name="jsquality">Code-Quality despite of JavaScript</a>

JavaScript erlebt einen besonderen Hype. Die Sprache meldet Ansprüche als Plattform für unternehmenskritische Applikationen an und erobert zunehmend das Server- und Backend-Umfeld.

Ein Plus ist die große Flexibilität und Freiheit: JavaScript verbindet funktionale, objekt-orientierte und imperative Programmierstile. Diese Freiheit trägt eine große Herausforderung für den praktischen Projekteinsatz. Der Vortrag zeigt, wie JavaScript im Projektalltag gebändigt werden kann. Durch produktive Tools messen wir die Qualität, zeigen Schwachstellen rechtzeitig auf und geben Tipps für die Behebung.

### <a name="avatar">Project Avatar: more than just Node.js ont the JVM - Enterprise Java written in JavaScript</a>

Aktuell sind leichtgewichtige Architekturen gefragt, in denen der Server lediglich die Ressourcen per (REST-/Push-)Services zur Verfügung stellt und ein großer Teil der Logik in HTML5-Clients per JavaScript implementiert ist. Das Projekt Avatar macht mit seiner Thin-Server-Architektur (TSA) JavaEE Ressourcen direkt per JavaScript zugreifbar, egal ob auf dem Application Server (Service Components) oder dem Client (View Components).

Serverseitig basiert Avatar auf der Node-Implementierung für die JVM (Avatar.js für die Nashorn Scripting-Engine) und stellt somit fast die gesamte Node.js API zur Verfügung und nutzt ebenfalls das Node-Programmingmodel einer Single Threaded Event-Loop (REPL) - natürlich auch parallel in mehreren Threads (falls gewünscht).

Auf dem Client sorgt das Framework für das Binding der Ressourcen an HTML5-Widgets und beschränkt sich dabei auf so wenig JavaScript wie möglich und nur so viel wie gerade nötig. Die Programmierung erinnert hier stark an die Expression Language und ist so für den erfahrenen Java-Entwickler einfach umsetzbar. Da bei einer TSA Client und Server losgelöst voneinander sind und nur protokollbasiert miteinander kommunizieren, ist die Verwendung der View Components nicht zwingend nötig. Hier kann der Entwickler auf das Framework seiner Wahl zurückgreifen.

Die Live-Demo zeigt, wie eine JavaEE Applikation ganz ohne Java Code erstellt werden kann, nur mit dem Einsatz von JavaScript.

### <a name="reactivity">Reaktive Anwendungen</a>

Das reaktive Programmierparadigma, oder auch die Event-getriebene, asynchrone, nicht-blockierende Architektur, hält immer mehr Einzug in aktuelle Software-Entwicklungsprojekte, -Plattformen und Applikationen. Immer mehr verfügbare Embedded- und Echtzeit-Systeme verlangen nach einer anderen Art der Programmierung, um mit ressourcen-schonenderen Mitteln eine stabile, skalierbare und belastbare Lösung bereitzustellen. Ebenso verlangen asynchrone Anwendungen, Kommunikationsprotokolle und Benutzerschnittstellen eine effiziente Art, die miteinander agierenden Clients zu aktualisieren und zu synchronisieren, ohne viel unnötigen Overhead zu erzeugen. Nicht während der Programmierung, und schon gar nicht zur Laufzeit.

Nach und nach kommen immer mehr Frameworks auf den Markt, die sich der reaktiven Programmierung annehmen. Und nicht zuletzt zeigt die kürzliche Gründung des "Reactive Manifestos", wie aktuell dieses Thema ist und wie relevant es für die Zukunft sein wird. Der Vortrag erklärt, was reaktives Programmieren ist und zeigt an beispielhaften Implementierungen in Java und JavaScript, wie damit zeitgemäße asynchrone Anwendungen eventgetrieben entwickelt werden können.

### <a name="meteor">Meteor vor dem Einschlag</a>

JavaScript-Applicationframeworks gibt es wie Staub auf dem Mond. Jedoch ist jedes nur auf dem Gebiet gut, für das es geschaffen wurde.

Meteor versteht sich als eine Plattform, die eine Auswahl der besten Frameworks mit MongoDB und Node.js kombiniert und Entwicklern so das Zusammensuchen abnehmen möchte. Die Hauptmerkmale liegen auf dem reaktiven Programmierparadigma, einer cleveren Latenz-Kompensation, einer einheitlichen Basis des JavaScript-Codes für Client und Server, das automatische Propagieren der Änderungen von Code und Daten, ein vergleichsweise einfaches API-Design und intelligentes Packaging und Deployment von Applikationen.

### <a name="dbmigration">Continuous Database Migration mit Flyway und Liquibase</a>

Der Quellcode der Applikation ist versioniert im Repository abgelegt. Warum nicht die Datenbank? Will man nun einen beliebigen Stand der Datenbank in der Entwickler-, Test- oder Produktionsumgebung wiederherstellen, stehen mit Flyway und Liquibase zwei leistungsfähige Java-Bibliotheken zur Verfügung, die nahtlos in den Build für ein agiles Continuous Delivery integrierbar sind.

### <a name="featuretoggle">Continuous Delivery mit dem FeatureToggle Pattern und Togglz</a>

Wer agil entwickelt und Continuous Delivery umsetzen und betreiben will, hat nicht zuletzt mit Features zu kämpfen, deren Entwicklung noch nicht abgeschlossen ist, oder die noch nicht oder nur für eine bestimmte Benutzergruppe in Produktion gehen sollen, die aber bereits entwickelt sind. Und da kein Feature-Branch existiert, bzw. nur der Master-Branch, aus dem auch regelmäßig deployed wird, könnte das eine Herausforderung werden. Mit dem FeatureToggle Pattern von Martin Fowler und der Realisierung dessen mit Togglz ist es ganz einfach, all das im Handumdrehen zu realisieren.

### <a name="camel">Wasser in der Wüste - Vom custom-made SQL-Messaging zum JMS-Standard</a>

Viele Unternehmen haben eine Standard-Messaging-Lösung (Oracle AQ) im Haus, wissen es aber nicht. Somit werden zur Anwendungsintegration (EAI) teils umständliche und meist proprietäre Eigenentwicklungen und Anti-Pattern über DB-Tabellen und/oder Text-Dateien realisiert, oftmals unter dem Gesichtspunkt “das-wird-schon-gutgehen”. Wenn dazu noch die unterschiedlichen Entwicklertypen wie der DB- oder PL/SQL-Entwickler auf der einen und zwei verschiedene Software-Entwickler (in unserem Beispiel der Java-Typ und der Host-Mensch) auf der anderen Seite aufeinandertreffen, fragt man sich als Architekt beim Review oft, wie das so lange so gut gehen konnte. Dieser Vortrag beschreibt aus einem realen Projekt, wie aus der beschriebenen Ausgangssituation ohne die Beschaffung von kostenintensiven Lizenzen und Hardware, nur mit vorhandenen Bordmitteln (Oracle Advance Queuing), Open Source Software (Apache Camel), wenig Programmierung (Custom-Java-Code) und überwiegend Konfiguration (XML, DSL), eine neue, flexible und skalierbare JMS-Standard-Lösung ähnlich eines ESBs geschaffen werden konnte, mit der alle Beteiligten nach wie vor in ihrem eigenen Scope arbeiten können, ohne die anderen Entwicklungslager im Detail verstehen zu müssen.

### <a name="soamigration">SOA als Migrationsarchitektur</a>

SOA ist out? SOA ist out!  
Aber nur der Begriff, nicht die Methodik selbst! SOA lebt seit den 70er Jahren und ist auch bzw. gerade im Cloud-Zeitalter nach wie vor aktuell.

Viele Unternehmen stehen mittlerweile vor der Herausforderung, ihre in die Jahre gekommenen und monolithischen Applikationen zu modernisieren und dabei auf eine tragfähige und wartbare Basis umzustellen. Eine SOA ist oft das ferne Ziel am Horizont. Dabei ist SOA weit mehr als nur Web Services, ESB und Geschäftsprozesse. Eine SOA als Vorgehensweise kann auch schon helfen, den Weg einer methodischen und sanften Migration zu beschreiten und die Risiken zu reduzieren. Der Vortrag zeigt mit praxisnahen Beispielen aus einem aktuellen Projekt, wie eine SOA als Hilfsmittel für Migrationen (am Beispiel einer Host-Ablösung) genutzt werden kann. Dabei werden die Möglichkeiten der Integration von Business-Logik, Datenmodell und dem methodischen Vorgehen beleuchtet.

### <a name="soaantipatterns">SOA Antipatterns - How to kill your business</a>

SOA hat seinen Platz in kritischen Unternehmensapplikationen gefunden. Es ist an der Zeit aus den durchgeführten Projekten zu lernen. Bisher wurden Best Practices und Patterns identifiziert, aber entscheidend ist es Fehler und Fallstricke zu kennen um diese zu vermeiden. Der Vortrag zeigt typische Antipatterns aus den Bereichen Service-Design, SOA-Governance und technischer Implementierung und hilft bei der Vermeidung.
