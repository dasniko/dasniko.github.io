---
layout: page
title: Quarkus Serverless Training/Workshop @ W-JAX 2021
permalink: /trainings/quarkus/jax
published: false
---

## Hallo,

schön dass Du an meinem W-JAX-Quarkus-Workshop _"Let’s get FUNQY! Serverless-Java für die Praxis"_ teilnehmen möchtest.
Damit Du aktiv alle Beispiele mitprogrammieren kannst und so den größten Nutzen für Dich erhältst, habe ich einige Dinge aufgeführt, die für Dich wichtig sein könnten:

### Technische Anforderungen

* Rechner/Notebook/Laptop mit ausreichend Ressourcen und Kapazitäten für's Entwickeln mit Java & Docker, aktuelle CPUs und gerne 16 GB RAM oder mehr :)
* IDE nach Wahl (IntelliJ IDEA, VSCode, Eclipse, ...)
* HTTP Client nach Wahl (curl, Postman, Insomnia, in der IDE integrierte HTTP Clients, ...)
* JDK 11+
* Maven 3.8.1+  
* Docker
  * lauffähig, ggf. lokale Admin-Rechte auf dem Rechner erteilen (lassen)!
  * am Besten, um während des Workshops Zeit zu sparen und weil es mutable Tags gibt, _am Tag oder am Morgen vor dem Workshop_ folgende Docker `pull` Befehle ausführen:
    - `docker pull quay.io/quarkus/ubi-quarkus-native-image:21.2-java11`
    - `docker pull registry.access.redhat.com/ubi8/ubi-minimal:8.4`
    - `docker pull public.ecr.aws/sam/emulation-provided:latest`
    - `docker pull public.ecr.aws/sam/emulation-java11:latest`
    - `docker pull amazon/dynamodb-local:latest`
* **AWS-Konto + Credentials <span class="bg-danger text-white">(siehe unten)</span>**
* AWS CLI
  * [https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
  * Installation und Konfiguration der Credentails: [https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
* AWS SAM CLI
  * [https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
  * Installation und Konfiguration der Credentails: [https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-set-up-credentials.html](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-set-up-credentials.html)
* Zugriff auf das Internet (gerne mit performanter Leitung)  
  bitte ggf. Proxy-/Firewall-/VPN-Konfigurationen etc. überprüfen


### AWS-Konto

Um die Serverless-Beispiele zu deployen, werden wir Dienste in der AWS-Cloud nutzen.
Hierfür benötigst Du ein AWS-Account mit den nötigen Rechten.
Eine Anleitung zur Konfiguration Deines Rechners bzw. Deines CLI findest Du in den o.g. Links.
Der Einfachheit halber empfehle ich für den Workshop ein Zugang mit _Admin-Rechten_ im jeweiligen AWS-Konto.  

Falls Du kein eigenes AWS-Konto hast oder nutzen kannst, kann ich Dir für den Workshop gerne einen Zugang zu meinem Trainings-Account zur Verfügung stellen.
Fülle hierzu einfach folgendes Formular aus, Du erhältst dann automatisch eine E-Mail mit Deinen persönlichen Credentials:

<iframe src="https://0opiiw2svc.execute-api.eu-central-1.amazonaws.com/cred" frameborder="0" width="100%" height="300" marginheight="0" marginwidth="0"></iframe>

---

Du kannst aber auch gerne Dein _eigenes_ AWS-Konto verwenden, wenn Du eines hast und dieses verwenden möchtest.
Wenn Du noch kein eigenes AWS-Konto hast, Dir aber eines erstellen möchtest, kannst Du das hier tun: [https://aws.amazon.com](https://aws.amazon.com).  
Die ggf. im und während des Workshops anfallenden Kosten für die Nutzung der AWS-Services und -Ressourcen musst Du selbst tragen.
Voraussichtlich werden diese sehr gering bleiben und sich in einem niedrigen Cent-Bereich bewegen, wenn überhaupt.
