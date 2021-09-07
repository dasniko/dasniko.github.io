---
layout: page
title: Quarkus Serverless Training/Workshop
permalink: /trainings/quarkus
---

In Cloud-, Container- und Service-basierten Umgebungen mit der Anforderung, schnell die Anzahl der in Produktion befindlichen Instanzen hoch und runter zu skalieren, kommt es auf jede Millisekunde an. Die sogenannte First-Response-Time, also die Zeit, von der Intialisierung des Services oder des Containers bis zur Antwort an den anfragenden Client, ist entscheidend. Zusätzlich soll das Ganze auch noch so "ressourcenschonend" wie möglich sein. Mit Ressourcen ist meist der Speicher gemeint. Das alles ist in Java-basierten Umgebungen meist nicht so einfach und ohne Weiteres zu erreichen.

Quarkus springt in diese Nische und verspricht Abhilfe, sowohl was die Boot- und First-Response-Time angeht, als auch die Minimierung des Speicherverbrauchs. Auch wenn sich Quarkus als "Supersonic Subatomic Java" bezeichnet, geht das Framework noch einen Schritt weiter und optimiert die Zahlen weiter indem es die Kompilierung als natives Artefakt mittels der GraalVM deutlich vereinfacht. Perfekt also für den Einsatz in Containern.

Doch nicht nur Container werden von Quarkus als "First Class Citizen" unterstützt, auch der Serverless-Support ist eines der Schwerpunkte des Frameworks. Mit zahlreichen Quarkus-Extensions wird die Entwicklung und das Deployment für Cloud-native Services optimiert. De-facto Standards, im Sinne von "das wird häufig so genutzt", haben zur Entwicklung von FUNQY, ein neues API für HTTP-basierte Services, geführt. Im Serverless-Umfeld wird häufig nur JSON als Serialisierung verwendet, zudem kommen der Einfachheit halber oft nur HTTP-Methoden wie GET und POST zum Einsatz. Genau darauf fokussiert sich FUNQY und will dabei gar keine Konkurrenz zu anderen etablierten Protokollen wie REST o.ä. sein, sondern vielmehr eine Alternative für Einsatzszenarien, wo eben genau das und nicht mehr benötigt wird.

## Inhalt und Ablauf

Dieser Workshop konzentriert sich auf den Serverless-Einsatz von Quarkus und wird folgende Themenblöcke behandeln:

1. Ein- und Überblick in Quarkus und dessen Arbeitsweise, Erstellen eines ersten Services, typischerweise REST-basiert, Build & Deployment, Container-Build, Native-Build
1. Einführung in das FUNQY API, Features und Sweetspots, Abgrenzung zu anderen HTTP-basierten Protokollen und Kompromisse, die man in der Verwendung eingehen muss.
1. FUNQY nicht nur für HTTP-Services, auch für Event-driven Data-Pipelines; Deployment je eines Java-basierten und nativen FUNQY Services in die AWS Cloud (Nutzung von AWS Lambda und anderen Services) als Beispiel & Vorstellung des Deployments in andere Clouds.
1. Erweiterung des Services mit weiteren Serverless-Komponenten, hier als Beispiel einer DynamoDB (NoSQL), Verwaltung der Infrastruktur-Definitionen (Infrastructure as Code) und des Deployments.


## Zielgruppe & Anforderungen
Der Workshop richtet sich an diejenigen Teilnehmer:innen, die ihre Java-basierten Services und Anwendungen weiter für eine Container- und Cloud-/Serverless-Nutzung optimieren möchten und hier bereits Vorerfahrungen mitbringen. Vorkenntnisse über Quarkus sind nicht zwingend notwendig.

Teilnehmer:innen, die während des Workshops aktiv mitentwickeln möchten, benötigen dafür einen Rechner mit JDK 11, Maven & Docker. Die Wahl der IDE ist frei. Genaue Konfigurationen und weitere Tools werden rechtzeitig vor dem Start des Workshops allen Teilnehmer:innen mitgeteilt.

Im Workshop wird die AWS-Cloud genutzt, um dort hin Services zu deployen. Teilnehmer:innen, die kein eigenes AWS-Konto haben, kann ein entsprechendes Trainingskonto zur Verfügung gestellt werden.

## Öffentliche Termine

* 08.11.2021: [W-JAX 2021](https://jax.de/serverside-enterprise-java/quarkus-workshop-lets-get-funqy-serverless-java-fuer-die-praxis/) (Remote/Online)
