---
title: Keycloak Custom Required Actions
tags:
- keycloak
- oidc
- authentication
- video
thumbnail: https://i.ytimg.com/vi_webp/KXZ9JDcSHU0/maxresdefault.webp
youtube: KXZ9JDcSHU0
published: false
---

Keycloak has some built-in and default _Required Actions_, which are executed upon authentication of a user.
Required actions are e.g. `update password`, `update profile` or `configure otp`, etc.

But, like with most of Keycloak's functionality, you can also implement your own custom _Required Actions_ with your desired functionality and logic.

In this video, I'll show you how to implement a custom _RequiredAction_ to enforce the user to enter its mobile phone number.
But it's not just limited to this, you can implement any logic you can think of and what is needed do be executed by a user after a successful login.

Don't forget to subscribe to [my YouTube channel](https://www.youtube.com/c/NikoKöbler?sub_confirmation=1)!

The sourcecode is available on my GitHub repository [`keycloak-extensions-demo/requiredaction`](https://github.com/dasniko/keycloak-extensions-demo).

[![dasniko/keycloak-extensions-demo - GitHub](https://gh-card.dev/repos/dasniko/keycloak-extensions-demo.svg)](https://github.com/dasniko/keycloak-extensions-demo)
