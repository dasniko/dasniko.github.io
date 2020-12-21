---
title: "Keycloak Session Restrictor - or: HIGHLANDER mode"
tags:
- keycloak
- authentication
- session
- java
thumbnail: /images/cattle.jpg
---

[Keycloak](https://keycloak.org) is a Single-Sign-On System and thus, you usually have one session per realm at the Keycloak server, even when working with multiple client applications.
It's the nature of a SSO system.

That's true as long as you work with one browser (or mobile device), as there is a cookie handling and with these, Keycloak is able to recognize you as an already authenticated user (if already logged in).

When working with different or multiple devices simultaneously, you usually get one session per realm per device/browser, because the session recognition, aka cookies, can't be shared between these devices.

In case you, or your company, has the requirement, that there must only be one session per user (whyever, because of regulations or any other reason, doesn't matter), no matter how many and which devices the user is using, there is no built-in option in Keycloak to restrict the sessions in such a way.

Don't look any further!
Luckily, I can show you a way to accomplish exactly this!

Just use a custom Keycloak Event Listener SPI implementation, which is only reacting to events of type `LOGIN`.
Then, scan all possibly available sessions of the currently logged in user, compare the id of the sessions with the current one and remove all of the other sessions which id's are not equal to the current one.
In regular cases, there can only be one previous session, as "all" the other sessions are being killed by this event listener upon a new login.

As there can only be one - the last login - session, I call it lovingly the "HIGHLANDER" mode. 😉

This is the code of the event listener:

```java
public void onEvent(Event event) {
  if (EventType.LOGIN.equals(event.getType())) {
    RealmModel realm = keycloakSession.getContext().getRealm();
    InMemoryUserAdapter user = new InMemoryUserAdapter(keycloakSession, realm, event.getUserId());
    keycloakSession.sessions().getUserSessions(realm, user).forEach(userSession -> {
      // remove all existing user sessions but the current one (last one wins)
      // this is HIGHLANDER MODE - there must only be one!
      if (!userSession.getId().equals(event.getSessionId())) {
        keycloakSession.sessions().removeUserSession(realm, userSession);
      }
    });
  }
}
```

You can find this session restrictor also on GitHub in my repository [`keycloak-session-restrictor`](https://github.com/dasniko/keycloak-session-restrictor).

[![dasniko/keycloak-session-restrictor - GitHub](https://gh-card.dev/repos/dasniko/keycloak-session-restrictor.svg)](https://github.com/dasniko/keycloak-session-restrictor)


If you want to use it 1:1, just compile it, build a JAR file and put it to the proper `/deployments` directory (`standalone` or `domain`, depending on your deployment/environment).
Finally, you have to register the listener in the Events > Configuration section of your realm, to actually use it.
Otherwise no events will be forwarded to the listener.

![](/images/keycloak-events-session-restrictor.png)

Of course you can also adjust and extend it to your needs.
For example, just allow only one session per user, realm and client.
Or, whatever comes to your (or your boss'es) mind.
