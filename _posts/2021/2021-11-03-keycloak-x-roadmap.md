---
title: Keycloak is dead - long live Keycloak-X!
subtitle: Roadmap for Keycloak(-X) published
tags:
- keycloak
- quarkus
- authentication
# thumbnail: /images/keycloak_training.png
---

With October 28th 2021, the Keycloak project [announced](https://www.keycloak.org/2021/10/keycloak-x-update.html) a new roadmap for existing Keycloak distributions (Wildfly-based) and the new Keycloak-X distribution (Quarkus-based):

* Keycloak 16 will be the last preview of the Quarkus-based Keycloak-X distribution.
* With Keycloak 17, approx. December 2021, Keycloak-X will be fully supported.  
  At the same time, the "legacy" Wildfly-based Keycloak generation will be marked as _deprecated_.
* Approx. mid 2022, Keycloak-X based on Quarkus will be the only distribution, no more Wildfly

#### What does that mean to me?
#### Do I have to hurry?
#### Will my existing Keycloak stop working?

Keep calm!

First of all, these are good news, as Keycloak is based on a future-proof architecture - Quarkus.
As of today, there are only preview releases of Keycloak-X available and very few to no official documentation.

When the first official and supported release and some documentation is available, we all can make our first experiences.
Apart from that, I have already started investigating into the new Keycloak-X distribution and playing around with it.
Also, my [`testcontainers-keycloak`](https://github.com/dasniko/testcontainers-keycloak) extension has already a [`keycloak-x`](https://github.com/dasniko/testcontainers-keycloak/tree/keycloak-x) branch and I'm preparing it for the future.

Keycloak will not change in the way it works.
All your secured applications and services can continue to work, also with Keycloak-X.
Just the way how Keycloak is deployed and run will change.
A few things get easier, others more explicit.
The effort will depend on your environment and the functionality you use and the customizations (extension configuration) you have.
Most parts are about configuration.

With release of Keycloak 17 and thus the first supported Keycloak-X release, I'm available for migration and consulting support.
I'll do my very best to support you, your team and your company!
<a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/dasniko'});return false;">Just get in touch with me!</a>
