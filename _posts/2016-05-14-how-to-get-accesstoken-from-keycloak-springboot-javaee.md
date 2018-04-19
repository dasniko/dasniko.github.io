---
title: How to get the AccessToken of Keycloak in Spring Boot and/or Java EE
tags:
- keycloak
- javaee
- springboot
---

In many of my [Keycloak](http://keycloak.jboss.org) consulting projects, I get asked again and again, how to get easy access to the authorization data of the Keycloak SSO server:  
the `AccessToken`.

## Spring Boot

In Spring Boot, things are really easy (as most things are in Spring Boot).
Just create a request scoped `@Bean` annotated method to get the AccessToken:

{% highlight java %}
@Bean
@Scope(scopeName = WebApplicationContext.SCOPE_REQUEST,
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public AccessToken getAccessToken() {
  HttpServletRequest request =
    ((ServletRequestAttributes) RequestContextHolder
      .currentRequestAttributes()).getRequest();
  return ((KeycloakPrincipal) request.getUserPrincipal())
    .getKeycloakSecurityContext().getToken();
}
{% endhighlight %}

Then, you can just auto-wire the `AccessToken` object in your appropriate controller bean and use it. Easy.

## Java EE

In Java EE, it's pretty similar, we do it with a request scoped CDI producer bean, which provides a method returning the AccessToken annotated with `@Produces`.

{% highlight java %}
@RequestScoped
public class AccessTokenProducer {

  @Inject private HttpServletRequest request;

  @Produces
  public AccessToken getAccessToken() {
    return ((KeycloakPrincipal) request.getUserPrincipal())
      .getKeycloakSecurityContext().getToken();
  }
}
{% endhighlight %}

Now you can inject the `AccessToken` object anywhere you need it and have access to the authorization data.

---

Both approaches assume that you have set up your Keycloak SSO server properly and configured the applications also the right way.
I created two small demo applications, where you can review the code:

<i class="fab fa-github"></i> [dasniko/keycloak-springboot-demo](https://github.com/dasniko/keycloak-springboot-demo)  
<i class="fab fa-github"></i> [dasniko/keycloak-javaee-demo](https://github.com/dasniko/keycloak-javaee-demo)
