---
layout: page
title: Keycloak IAM & SSO Training/Workshop
permalink: /trainings/keycloak
thumbnail: /images/keycloak_training.png
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
* Konfiguration von externen Identity Providern (Azure AD, Social Provider) und User Federation (Storage)
* Konfiguration von angepassten Authentifizierungs-Flows mit der Nutzung einer eigenen 2FA Lösung
* Absicherung von Java-Anwendungen am Beispiel von Spring Boot und Quarkus
* Absicherung einer JavaScript-Anwendung am Beispiel von React.JS

### Technische Anforderungen

* Notebook/Laptop
* Texteditor
* Docker und Docker Compose installiert und lauffähig (ggf. lokale Admin-Rechte auf dem Rechner erteilen)
* für den Zugriff auf das Internet bitte ggf. Proxy-/Firewall-/VPN-Konfigurationen etc. überprüfen
* Optional:
  * JDK 11+
  * Maven & Git mit Zugriff auf das Internet
  * Java-Entwicklungsumgebung (IDE) nach Wahl
  * für das JavaScript (React) Beispiel: NodeJS und NPM (oder Yarn) mit Zugriff auf das Internet

### Öffentliche Termine

* 12.11.2021: [W-JAX 2021](https://jax.de/performance-security/workshop-authentifizierung-einfach-und-sicher-gemacht-mit-keycloak-iam-und-sso/) (Remote/Online)
* 17.03.2022: [JavaLand Workshop, Phantasialand, Brühl/Köln](https://www.javaland.eu/)
* _und auf Anfrage_
