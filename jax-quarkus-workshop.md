---
layout: page
title: JAX Quarkus Workshop
permalink: /trainings/quarkus
---

Hallo,

schön dass Du an meinem JAX-Quarkus-Workshop _"Let’s get FUNQY! Serverless-Java für die Praxis"_ teilnehmen möchtest.
Damit Du aktiv alle Beispiele mitprogrammieren kannst und so den größten Nutzen für Dich erhälst, habe ich einige wichtige Dinge aufgeführt, die für Dich wichtig sein könnten:

## Technische Anforderungen

* Rechner/Notebook/Laptop mit ausreichend Ressourcen und Kapazitäten für's Entwickeln mit Java & Docker, aktuelle CPUs und gerne 16 GB RAM oder mehr :)
* IDE nach Wahl (IntelliJ IDEA, VSCode, Eclipse, ...)
* HTTP Client nach Wahl (curl, Postman, Insomnia, in der IDE integrierte HTTP Clients, ...)
* JDK 11+
* Maven 3.6.2+  
  (Gradle, wenn Du Dich damit auskennst, ich gehe darauf _nicht_ im Workshop ein)
* Docker
  * lauffähig, ggf. lokale Admin-Rechte auf dem Rechner erteilen (lassen)!
  * am Besten, um während des Workshops Zeit zu sparen und weil es mutable Tags gibt, _am Tag oder am Morgen vor dem Workshop_ folgende Docker `pull` Befehle ausführen:
    - `docker pull quay.io/quarkus/ubi-quarkus-native-image:21.0-java11`  
      _(Wenn es mit dem quay.io Repository Probleme mit der Performance oder Antwortzeit gibt, habe ich hier einen temporären Mirror angelegt: `public.ecr.aws/p7n5j5i9/ubi-quarkus-native-image:21.0-java11`)_
    - `docker pull registry.access.redhat.com/ubi8/ubi-minimal:8.3`
    - `docker pull amazon/aws-sam-cli-emulation-image-provided:latest`
    - `docker pull amazon/aws-sam-cli-emulation-image-java11:latest`
    - `docker pull amazon/dynamodb-local:latest`
* AWS-Konto + Credentials (siehe unten)
* AWS CLI
  * [https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
  * Installation und Konfiguration der Credentails: [https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
* AWS SAM CLI
  * [https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
  * Installation und Konfiguration der Credentails: [https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-set-up-credentials.html](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-set-up-credentials.html)
* Zugriff auf das Internet,  
  gerne mit performanter Leitung, wir werden einige MB und GB im Laufe des Tages hoch- und runterladen,  
  bitte ggf. Proxy-/Firewall-/VPN-Konfigurationen etc. überprüfen


## AWS-Konto

Um die Serverless-Beispiele zu deployen, werden wir Dienste in der AWS-Cloud nutzen.
Hierfür benötigst Du ein AWS-Account mit den nötigen Rechten.
Eine Anleitung zur Konfiguration Deines Rechners bzw. Deines CLI findest Du in den o.g. Links.
Der Einfachheit halber empfehle ich für den Workshop ein Zugang mit _Admin-Rechten_ im jeweiligen AWS-Konto.  
<small><em>(Das sollte für eine letztendliche Nutzung, auch während der Entwicklung, natürlich nicht gewählt werden, erleichtert aber den Workshop und den Einstieg, wenn Du noch nicht damit gearbeitet hast. Und wir wollen uns im Workshop ja auf Quarkus konzentrieren und uns nicht mit Details der AWS-Security beschäftigen, obwohl das gleichwohl nicht weniger wichtig, aber halt nicht Inhalt des Workshops ist.)</em></small>

Du kannst gerne Dein eigenes AWS-Konto verwenden, wenn Du eines hast und das möchtest.
Wenn Du noch kein eigenes AWS-Konto hast, Dir aber eines erstellen möchtest, kannst Du das hier tun: [https://aws.amazon.com](https://aws.amazon.com).  
Die ggf. im und während des Workshops anfallenden Kosten für die Nutzung der AWS-Services und -Ressourcen musst Du selbst tragen.
Voraussichtlich werden diese sehr gering bleiben und sich in einem niedrigen Cent-Bereich bewegen, wenn überhaupt.

Falls Du kein eigenes AWS-Konto hast oder nutzen kannst, kann ich Dir für den Workshop gerne einen Zugang zu meinem Trainings-Account zur Verfügung stellen.
Schicke mir hierfür einfach eine E-Mail mit Deinem Namen und E-Mail-Adresse über diese Schaltfläche:

<a href="mailto:info@n-k.de?subject=JAX Quarkus Workshop - Ich benötige ein AWS-Trainingskonto" class="btn btn-info">Ich benötige Zugangsdaten zu einem AWS-Trainingskonto</a>

<small><em>(oder manuell an info@n-k.de mit dem Betreff "JAX Quarkus Workshop - Ich benötige ein AWS-Trainingskonto")</em></small>

---

## Inhalt und Ablauf

In Cloud-, Container- und Service-basierten Umgebungen mit der Anforderung, schnell die Anzahl der in Produktion befindlichen Instanzen hoch und runter zu skalieren, kommt es auf jede Millisekunde an. Die sogenannte First-Response-Time, also die Zeit, von der Intialisierung des Services oder des Containers bis zur Antwort an den anfragenden Client, ist entscheidend. Zusätzlich soll das Ganze auch noch so "ressourcenschonend" wie möglich sein. Mit Ressourcen ist meist der Speicher gemeint. Das alles ist in Java-basierten Umgebungen meist nicht so einfach und ohne Weiteres zu erreichen.

Quarkus springt in diese Nische und verspricht Abhilfe, sowohl was die Boot- und First-Response-Time angeht, als auch die Minimierung des Speicherverbrauchs. Auch wenn sich Quarkus als "Supersonic Subatomic Java" bezeichnet, geht das Framework noch einen Schritt weiter und optimiert die Zahlen weiter indem es die Kompilierung als natives Artefakt mittels der GraalVM deutlich vereinfacht. Perfekt also für den Einsatz in Containern.

Doch nicht nur Container werden von Quarkus als "First Class Citizen" unterstützt, auch der Serverless-Support ist eines der Schwerpunkte des Frameworks. Mit zahlreichen Quarkus-Extensions wird die Entwicklung und das Deployment für Cloud-native Services optimiert. De-facto Standards, im Sinne von "das wird häufig so genutzt", haben zur Entwicklung von FUNQY, ein neues API für HTTP-basierte Services, geführt. Im Serverless-Umfeld wird häufig nur JSON als Serialisierung verwendet, zudem kommen der Einfachheit halber oft nur HTTP-Methoden wie GET und POST zum Einsatz. Genau darauf fokussiert sich FUNQY und will dabei gar keine Konkurrenz zu anderen etablierten Protokollen wie REST o.ä. sein, sondern vielmehr eine Alternative für Einsatzszenarien, wo eben genau das und nicht mehr benötigt wird.

Dieser Workshop konzentriert sich auf den Serverless-Einsatz von Quarkus und wird folgende Themenblöcke behandeln:

1. Ein- und Überblick in Quarkus und dessen Arbeitsweise, Erstellen eines ersten Services, typischerweise REST-basiert, Build & Deployment, Container-Build, Native-Build
1. Einführung in das FUNQY API, Features und Sweetspots, Abgrenzung zu anderen HTTP-basierten Protokollen und Kompromisse, die man in der Verwendung eingehen muss.
1. FUNQY nicht nur für HTTP-Services, auch für Event-driven Data-Pipelines; Deployment je eines Java-basierten und nativen FUNQY Services in die AWS Cloud (Nutzung von AWS Lambda und anderen Services) als Beispiel & Vorstellung des Deployments in andere Clouds.
1. Erweiterung des Services mit weiteren Serverless-Komponenten, hier als Beispiel einer DynamoDB (NoSQL), Verwaltung der Infrastruktur-Definitionen (Infrastructure as Code) und des Deployments.


## Zielgruppe & Anforderungen
Der Workshop richtet sich an diejenigen Teilnehmer:innen, die ihre Java-basierten Services und Anwendungen weiter für eine Container- und Cloud-/Serverless-Nutzung optimieren möchten und hier bereits Vorerfahrungen mitbringen. Vorkenntnisse über Quarkus sind nicht zwingen notwendig.


Teilnehmer:innen, die während des Workshops aktiv mitentwickeln möchten, benötigen dafür einen Rechner mit JDK 11, Maven & Docker. Die Wahl der IDE ist frei. Genaue Konfigurationen und weitere Tools werden rechtzeitig vor dem Start des Workshops allen Teilnehmer:innen mitgeteilt.


Im Workshop wird die AWS-Cloud genutzt, um dort hin Services zu deployen. Teilnehmer:innen, die kein eigenes AWS-Konto haben, kann ein entsprechendes Trainingskonto zur Verfügung gestellt werden.
