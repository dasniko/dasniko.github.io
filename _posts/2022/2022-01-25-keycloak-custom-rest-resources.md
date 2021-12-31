---
title: Keycloak Implementing Custom REST Resources
tags:
- keycloak
- oidc
- authentication
- rest
- video
thumbnail: https://i.ytimg.com/vi_webp/eZYGLuUrUp4/maxresdefault.webp
youtube: eZYGLuUrUp4
published: false
---

Keycloak has the OIDC authentication endpoints and also the [Admin REST API](/2016/08/keycloak-admin-client.html) endpoints to manage the server as an administrator (and also the admin UI makes use of this).

But you can also extend Keycloak and implement your own custom REST resources with endpoints.
In this video I'll show how to do this and also how to secure these custom endpoints, so that no misuse is possible.
Last but not least, I demonstrate how to automatically test your custom REST resources with the help of the [Testcontainers-Keycloak project](/2019/12/testcontainers-keycloak.html).

Don't forget to subscribe to [my YouTube channel](https://www.youtube.com/c/NikoKöbler?sub_confirmation=1)!

The sourcecode is available on my GitHub repository [`keycloak-extensions-demo/rest-endpoint`](https://github.com/dasniko/keycloak-extensions-demo).

[![dasniko/keycloak-extensions-demo - GitHub](https://gh-card.dev/repos/dasniko/keycloak-extensions-demo.svg)](https://github.com/dasniko/keycloak-extensions-demo)
