---
title: Single-Sign-On for Microservices and/or Java EE applications with Keycloak SSO
tags:
- keycloak
- sso
- java
- jboss
- wildfly
- microservices
- security
---

A few weeks ago, one of my customers asked me about a simple way to secure his web application. The solution should "just" provide a login/logout mechanism and perhaps a possibility to request a forgotten password. Nothing more (in first case). As I helped a few other companies with securing their web applications and introduce SSO (Single-Sign-On) solutions, I started to ask a few more questions...

_Which technology/framework/platform is used? How looks the architecture like? What are current requirements (just the ones above mentioned?)? What are the future plans? How many users? How critical is the application? Is there more personal and sensible data than username/password?_ And many, many more questions...

Very soon, my customer seem to have changed his mind and answered very often things like _"yes, of course we need this feature!"_ or _"of course it should be as secure as possible!_  You know these kind of answers containing an _of course_ related to security. The solution should be highly secure, easy to maintain and - last but not least (but _of course!_) - it shouldn't be expensive. Here you are again, _magic triangle!_

But I'm happy to say that you don't need to look any further! Just use **[Keycloak](http://www.keycloak.org)** (by JBoss/RedHat) to secure all kinds of your web and mobile applications. And it doesn't matter wether your application is based on Java or JavaScript code, there are a bunch of Adapters to fit in a wide range of application technolgies!

Keycloak is able to secure nearly everything what is based on paths, thus standard server-based web applications but also modern (client-based) Single Page Applications (SPAs) with REST data backends and Microservice landscapes. Especially in a distributed system with many (micro)services, you have to deal in any way with authentication and authorization. Best way to do this is to handle and exchange just identiy and access tokens, which just tell the application who is currently requesting data and which permissions this user has. No need to worry about any sensible data like passwords any more. These are just handled by Keycloak, no other application need to know about passwords any more. Also user-registration (self service possible), lost passwords and TOTP is handled by Keycloak.

I'm now working for about two years with Keycloak in several projects (from small to big) and made a lot of positive experiences. It's all Open Source Software, so you don't have to pay for usage, but at the same time, it covers all critical and sensible security topics. It's actively maintained and developed by some core developers of JBoss, but there is also a wide bunch of community developers (> 100) who are contributing to this valuable project. Even I have contributed some (small) piece of software to Keycloak. And that's a really important point for OSS remaining open and free - just contribute something back to the project, to the community, no matter if bug reports, working on documentation or contributing code for new features, bug fixes, or testing. Don't just consume OSS, contribute!

Here are some of the features, Keycloak provides to secure also your application(s):

_Single-Sign-On, Single-Sign-Out, Self-Registration, Forgot Password, Verify User/Email, TOTP, various Verification (Work-)Flows, Customer Attributes, Custom Federation Provider, SPIs, Social Logins (Twitter, Facebook, Google & Co.), Custom Themes, JWT, OAuth2, Bearer Token, Open ID Connect (OIDC), SAML, Account Management, Management Console, CORS handling, Impersonation, LDAP and AD support, Password Policies, Scalability, Clustering, etc..._

No, I'm not getting any money for evangelizing about Keycloak. I simply love this project and think, more of you should also use it in your environments!

Since a few days, there is also a commercial subscription from Red Hat available: [Red Hat Single Sing On](https://access.redhat.com/products/red-hat-single-sign-on)  
And the community Keycloak project, now approaches version 2.x - with a bunch of new features like a fine grained permissions management done by new "authorizsation servies." I'm really, really looking forward to this!

If you have any questions about it, just ask - me or the Keycloak community!
