---
layout: page
title: Keycloak Trainings
permalink: /trainings/
thumbnail: /images/keycloak_training.png
---

Das folgende Training geben ich in Zusammenarbeit mit öffentlichen Trainingsanbietern.

_Gerne erstelle ich auch kundenspezifische In-House Trainings ganz nach Ihren Wünschen. Sprechen Sie mich einfach an!_

---

<img src="{{ page.thumbnail }}" class="postimg"/>
## Authentifizierung einfach und sicher gemacht mit Keycloak

Keycloak hat sich mittlerweile als eines der meist genutzten Authentifzierungs- und Identity- & Access-Management (IAM) Systeme in Unternehmen etabliert. Ganz gleich ob für klassische Enterprise-Anwendungen, moderne Single-Page-Apps oder Microservice-Architekturen, unterstützt Keycloak doch beide gängigen Protokolle SAML und OIDC (OpenID-Connect).

In diesem Workshop schauen wir uns an, wie Keycloak redundant in einem Cluster betrieben werden kann und binden externe, ggf. bereits im Unternehmen vorhandene Identity Provider (wie z.B. Azure Active Directory oder Social Provider) ein. Weiterhin Implementieren und Integrieren wir eine eigene 2-Faktor Authentifizierung und sichern eine Spring Boot basierte Anwendung, einen Quarkus-Service und eine Single-Page-Applikation auf Basis von React ab, um dort mit authentifizierten Zugriffen arbeiten zu können.

### Vorkenntnisse und Zielgruppe

Der Workshop richtet sich an alle Personen aus Entwicklung und Betrieb, die eine Single-Sign-On oder Identity-Managementlösung in ihrem Unternehmen oder Projekt aufbauen und integrieren möchten. Idealerweise haben die Teilnehmer schon leichte bis mittlere Vorkenntnisse im Thema Authentifizierung und möchten diese speziell für Keycloak vertiefen.

Als "Betriebsumgebung" verwenden wir eine lokale Docker-Compose Installation, um den operativen Overhead so gering wie möglich zu halten. Die Beispiele für zu implementierende Interfaces (z.B. 2FA) und die abzusichernden Anwendungen sind in Java (Spring Boot, Quarkus/Microprofile) und JavaScript (React) implementiert.

### Lernziele

* Wie wird Keycloak im Container und Cluster betrieben und konfiguriert?
* Wie werden externe Identity Provider eingebunden?
* Wie kann der Authentifizierungs-Flow an eigene Bedürfnisse angepasst werden?
* Wie wird eine sichere Authentifizierung mit Keycloak in Java- und JavaScript-basierte Anwendungen integriert?

### Agenda

* Keycloak-Betrieb als Docker-Container mit separater Datenbank
* Keycloak-Konfiguration für einen Cluster-Betrieb
* Konfiguration von externen Identity Providern (Azure AD, Social Provider)
* Konfiguration von angepassten Authentifizierungs-Flows mit der Nutzung einer eigenen 2FA Lösung
* Absicherung von Java-Anwendungen am Beispiel von Spring Boot und Quarkus
* Absicherung einer JavaScript-Anwendung am Beispiel von React.JS

### Technische Anforderungen

* Notebook/Laptop
* min. JDK 8 oder 11
* Maven & Git mit Zugriff auf das Internet
* Java-Entwicklungsumgebung (IDE) nach Wahl
* Docker und Docker Compose installiert und lauffähig (ggf. lokale Admin-Rechte auf dem Rechner erteilen)
* optional für das JavaScript (React) Beispiel: NodeJS und NPM (oder Yarn) mit Zugriff auf das Internet
* für den Zugriff auf das Internet bitte ggf. Proxy-/Firewall-/VPN-Konfigurationen etc. überprüfen

### Termine

* 21.05.2021: [IT Security Summit 2021](https://it-security-summit.de/it-security-summit/authentifizierung-einfach-und-sicher-gemacht-mit-keycloak-teil-1/)
* 02.06.2021: [betterCode Workshop](https://api.bettercode.eu/lecture_compact1.php?id=12885&source=0) (ausverkauft)
* 10.06.2021: [betterCode Workshop](https://api.bettercode.eu/lecture_compact1.php?id=13002&source=0)
