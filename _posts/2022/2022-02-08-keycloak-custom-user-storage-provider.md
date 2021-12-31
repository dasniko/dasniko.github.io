---
title: Keycloak Implementing Custom User Storage Provider
tags:
- keycloak
- oidc
- authentication
- video
thumbnail: https://i.ytimg.com/vi_webp/1UklqPPjcRY/maxresdefault.webp
youtube: 1UklqPPjcRY
published: false
---

Keycloak stores by default the users data in its own database.
But you can also connect to other data sources, if you already have some (legacy) stores or simply don't want to store your users data in Keycloak itself.
This is called _User Federation_ - connecting an LDAP/AD server is one example (and it's already built-in), but you can also implement your custom logic, custom protocol, custom database, etc. to connect to any other system - with a Custom User Storage Provider.

In my video I show an example to connect Keycloak to an external API providing the federated user data.
I implement the actual `UserProvider` interfaces to _lookup_ and _query_ the users from the external system, and also to handle _credential_ (password) _validation_ and _updates_.
All this yield in a custom `UserModel` implementation - the `UserAdapter`, containing all the logic to map the various attributes from the API result to the Keycloak internal data model.

Last but not least, I do automated tests with the help of the [Testcontainers-Keycloak project](/2019/12/testcontainers-keycloak.html).

This video became a bit longer as usual, because I explain some details more in-depth.
Hopefully you'll enjoy it.

Don't forget to subscribe to [my YouTube channel](https://www.youtube.com/c/NikoKöbler?sub_confirmation=1)!

The sourcecode is available on my GitHub repository [`keycloak-extensions-demo/user-provider`](https://github.com/dasniko/keycloak-extensions-demo).

[![dasniko/keycloak-extensions-demo - GitHub](https://gh-card.dev/repos/dasniko/keycloak-extensions-demo.svg)](https://github.com/dasniko/keycloak-extensions-demo)
