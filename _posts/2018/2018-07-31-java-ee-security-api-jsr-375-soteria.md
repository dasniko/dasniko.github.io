---
title: Java EE Security API - Soteria
tags:
- java
- javaee
- jakartaee
- security
- authentication
---

_(This post was originally published in german language in [Java Magazin](https://kiosk.entwickler.de/java-magazin/java-magazin-4-2018/) and on [JAXenter.de](https://jaxenter.de/api-security-soteria-73132).
It's an automatically translated post and may have some spelling / grammar errors and mistakes.)_

With the Java EE 8 release last year, only a few completely new features came onto the table of the Enterprise specification.
The Java EE Security API, under the JSR-375, is one of these new features.

Experience has shown that security is an issue that only a few developers like to deal with intensively and extensively.
There was no uniform standard for the platform itself in the Java EE specification in recent years.
All existing options such as JAAS (Java Authentication and Authorization Service), JACC (Java Authorization Contract for Containers) and JASPIC (Java Authentication Service Provider Interface for Containers) were manufacturer- or container-specific implementations that could not be ported or were difficult to port and were not part of the application.
In addition, it was not possible to use CDI within these specifications.
Not least because the existing security options were already much older than CDI contained in the EE specification.
If one wanted to use more modern mechanisms in its application, one had to resort in the past to more or less proprietary frameworks within the application.

The [JSR-375](https://jcp.org/en/jsr/detail?id=375), the [Java EE Security API](https://javaee.github.io/security-spec/), aims to standardize and standardize security mechanisms for the Java EE platform.
Since the container configuration is omitted and the various security aspects in the code can be set and configured by annotations, Java EE applications become more compatible between different application servers.
And since no additional frameworks need to be used, the applications are also lighter and have fewer dependencies.
But why the JSR Expert Group call these features _Cloud-ready_ remains a mystery and is more likely to be found in the marketing corner.
To make an application cloud-ready, there is more to it than just introducing a few annotations.
As you can read in the last section of this article, a distributed and/or cloud application relies on more than container independence for security.

The reference implementation of the JSR-375 is called _Soteria_ and, like the specification itself, can be found at [GitHub](https://github.com/javaee/security-soteria).
According to [Wikipedia](https://de.wikipedia.org/wiki/Soteria) the term Soteria comes from Greek and means "mental health", "well being" or "salvation".
The term is often used in connection with facilities for the treatment of psychological problems or crises.
A connection between the use of security in Java EE applications and the personal state of mind is certainly purely speculative and everyone has to answer for himself. _;-)_


## Authentication Mechanism

The central component of the Security API is the **_Authentication Mechanism_**, which, as the name suggests, takes care of the actual authentication process of a user.
If a user submits his credentials such as user name and password, the Authentication Mechanism asks **_Identity Store_** (see next section) whether there is a registered and valid user with this data.
If this is the case, the identity returned by the provider is used for the further authentication process.
If no valid identity is found, authentication fails and the Authentication Mechanism aborts the process with a corresponding status code.

The basis for an implementation of the authentication mechanism is the interface `HttpAuthenticationMechanism`, which provides the respective mechanism as CDI bean.
The method to be implemented `validateRequest(...)` returns an `AuthenticationStatus` object, which contains the status of the respective authentication.
The specification specifies that each implementation has a ready-made mechanism for basic authentication and form-based authentication.
Both authentication options are already known from the Servlet specification in the past.
In addition, _Custom_ form-based authentication must be provided, which can differ from the form-based authentication described in the servlet spec, and this must be implemented in the included SecurityContext (see next but one section).

If you want to use one of these mechanisms in your own application, you only have to add the annotation `@BasicAuthenticationMechanismDefinition` or `@FormAuthenticationMechansimDefinition` (or `@CustomFormAuth... `).
If no authentication mechanism is defined by annotation, a separate implementation must exist in your own application, which is then used.

{% highlight java %}
@ApplicationPath("/demo")
@BasicAuthenticationMechanismDefinition(realmName = "Java Magazin")
public class JaxRsApplication extends Application {
}
{% endhighlight %}

However, the authentication mechanism offers even more options than those described above.
If a user is not yet authenticated, you can use the annotation `@LoginToContinue` at the mechanism implementation to declare which resources or paths should be used for the login or error page during the login process and whether a redirect or a forward should take place at the login page (attribute `useForwardToLogin`).
If this annotation is not used, the incoming and validated request must already contain the Auth information.
A redirection or forwarding to a login page does not take place.
This is certainly very useful in the context of a pure JAX-RS application (or similar applications), but if there is a user interface that users should work with, rather not.

With the annotation `@AutoApplySession` the AuthenticationMechanism is declaratively enabled to take over the `javax.servlet.http.registerSession` behavior from the JASPIC specification.
This means that requests that have already been successfully authenticated and linked to a session do not have to be checked again for each new request.

With the mechanisms available so far, it was not possible to offer a _Remember Me_ option, so that users, even if they have not worked with the application for a long time, are automatically recognized and logged in again without having to authenticate themselves with their credentials.
If you wanted to realize this, you had to implement it in a complex and complicated way, in the worst case still insecure,"without security".
Fortunately, these times are now over, because the Java EE Security API brings this option with it in the form of the annotation `@RememberMe`.
With this annotation it can be defined that this option can be used at all (`isRememberMe`), in which cookie (`cookieName`) these recognition data can be found, how the RememberMe cookie is accessible (`secureOnly` and `httpOnly`) and how long it is valid (`cookieMaxAgeSeconds`).
If such an annotation is included in the AuthenticationMechanism, it tries to authenticate the users using the information given there.
Only if this fails will the user be redirected to the defined login page.

A separate authentication mechanism with the mentioned annotations can be found in the next listing.
The _Identity Store_ described in the next section is injected into the class via CDI, since the authentication mechanism itself is also a CDI bean.

{% highlight java %}
@AutoApplySession
@LoginToContinue(
  loginPage = "/soteria/login",
  useForwardToLogin = false
)
@RememberMe(
  cookieMaxAgeSeconds = 60 * 60 * 24 * 14,
  cookieSecureOnly = true,
  isRememberMeExpression = "#{self.isRememberMe(httpMessageContext)}"
)
@ApplicationScoped
public class DemoAuthenticationMechanism implements HttpAuthenticationMechanism {

  @Inject
  private IdentityStore identityStore;

  @Override
  public AuthenticationStatus validateRequest(HttpServletRequest request,
                                              HttpServletResponse response,
                                              HttpMessageContext httpMessageContext)
                                              throws AuthenticationException {
    Credential credential = httpMessageContext.getAuthParameters().getCredential();

    if (credential != null) {
      return httpMessageContext.notifyContainerAboutLogin(
          identityStore.validate(credential));
    } else {
      return httpMessageContext.doNothing();
    }
  }

  public Boolean isRememberMe(HttpMessageContext httpMessageContext) {
    return httpMessageContext.getAuthParameters().isRememberMe();
  }
}
{% endhighlight %}


## Identity Store

Authentication mechanism with the described annotationsThe Identity Store holds all known identities that are allowed to access the application and to which the AuthenticationMechanism requests them.
Typically, an identity has a user name and is verified by a password.
The IdentityStore checks the password only.
In the above listing of the AuthenticationMechanism you can see the call via `identityStore.validate(credential)`.
But not every identity consists of these standard credentials.
In the case of the above _RememberMe_ option, the user will only be recognized by means of an ID (from the RememberMe cookie) and returned to the AuthenticationMechanism.
Besides the `IdentityStore` interface there is the `RememberMeIndentityStore` counterpart.

As with the AuthenticationMechanisms, the specification for JSR-371 implementations also specifies annotations for the IdentityStores, which must be provided implemented.
Thus, simple database-supported (`@DataBaseIdentityStoreDefinition`) or LDAP-based stores (`@LdapIdentityStoreDefinition`) can be used simply by means of declarative configuration.
The reference implementation Soteria also includes the annotation `@EmbeddedIdentityStoreDefinition`, which enables a statically embedded in-memory store, which contains manually declared credentials (user data).
This is well suited for early testing purposes if the actual backend system is not yet available.
For productive environments, this store should not be used because passwords can only be entered in plain text.


{% highlight java %}
@DataBaseIdentityStoreDefinition(
  dataSourceLookup = "java:comp/DefaultDataSource",
  callerQuery = "select password from caller where name = ?",
  groupsQuery = "select group_name from caller_groups where caller_name = ?"
  hashAlgorithm = "Pbkdf2"
)
{% endhighlight %}


{% highlight java %}
@LdapIdentityStoreDefinition(
  url = "ldap://ldap.example.com:389",
  callerBaseDn = "ou=user,dc=javamagazin,dc=de",
  groupBaseDn = "ou=group,dc=javamagazin,dc=de"
)
{% endhighlight %}

{% highlight java %}
@EmbeddedIdentityStoreDefinition({
  @Credentials(callerName = "dasniko", password = "secret", groups = {"user", "admin"}),
  @Credentials(callerName = "john", password = "doe", groups = {"user"}),
  @Credentials(callerName = "foo", password = "bar", groups = {"fizz", "buzz"})
})
{% endhighlight %}

If none of the predefined IdentityStores is suitable, a separate store can be implemented.
The interface `IdentityStore` is simply implemented and the method `validate ()` is programmed out.
The store is of course also available again as a CDI bean and can be used in the AuthenticationMechanism.
An example of a self-implemented identity store can look like this:


{% highlight java %}
public class DemoIdentityStore implements IdentityStore {
  @Inject
  private AccountService accountService;

  @Override
  public CredentialValidationResult validate(Credential credential) {
    try {
      String username = ((UsernamePasswordCredential) credential).getCaller();
      String password = ((UsernamePasswordCredential) credential).getPasswordAsString();

      if (accountService.isValid(username, password)) {
        return new CredentialValidationResult(username);
      } else {
        return CredentialValidationResult.INVALID_RESULT;
      }
    } catch (SecurityException e) {
      return CredentialValidationResult.NOT_VALIDATED_RESULT;
    }
  }
}
{% endhighlight %}


## Security Context

In the previous security implementations, there was also no unified access to security functions across all containers, such as _"Which principal (user) is the query currently being carried out with?"Which roles does the current user have?"_, etc."
This is now available via the interface `SecurityContext` in Java EE, of course as CDI-Bean again and can be used at all places of the application.
So far, only different proprietary frameworks have brought their own security contexts with them, but they were in no way compatible with each other.

The method `getCallerPrincipal()` returns the current principal object, i. e. user.
If the application uses different principal types, `getPrincipalsByType()` can return all principals for a type that the current user has.
The method `isCallerInRole()` does not surprisingly indicate whether a user has a certain role or not.
And if the current user has access to a specific resource can be found out via `hasAccessToWebResource()`.
In certain cases it may be necessary to initiate the authentication process manually or programmatically.
If this is the case, only the method `authenticate()` must be called in the SecurityContext.


{% highlight java %}
public interface SecurityContext {

 Principal getCallerPrincipal();

 <T extends Principal> Set<T> getPrincipalsByType(Class<T> pType);

 boolean isCallerInRole(String role);

 boolean hasAccessToWebResource(String resource, String... methods);

 AuthenticationStatus authenticate(
   HttpServletRequest request, HttpServletResponse response,
   AuthenticationParameters parameters);
}
{% endhighlight %}


## OAuth2, OpenID Connect and JWT

The Java EE Security API with JSR-375 was written to be "cloud-ready", as mentioned above.
However, in the cloud age of distributed applications, identities and access authorizations are now being used via quasi standards such as [OAuth2](https://tools.ietf.org/html/rfc6749), [OpenID Connect](http://openid.net/connect/) and [JWT](https://jwt.io/) (JSON Web Token).
To pass a once created and verified token from one application to another application and thus passing on the user context is nothing new, this was done 15 years ago with SAML.
OAuth2, JWT and Co. are to be roughly the same as SAML, based only on other formats that are easier to process with web technologies.

In the new Security API there is nothing like this, no OAuth2, no OpenID-Connect and no JWT.
The request for OAuth2 support for the JSR-375 was expressed [in 2014 already](https://github.com/javaee/security-spec/issues/13) and was even presented in an Oracle presentation on a slide in 2015 at the then JavaOne conference.
Shortly after that, however, nothing more was heard or read.
Only at the end of 2017, after the final vote on version 1.0, did the discussion return to the Spec. footnote mailing list:[https://javaee.groups.io/g/javaee-security-spec/topic/5476215]
Officially time reasons are mentioned.

Rudy De Busscher, Expert Group member of the JSR-375, has developed a [proof of concept for JWT integration with Soteria](https://github.com/rdebusscher/soteria-jwt).
Truly, it is not difficult to realize exactly this with the new interaces and methods: authentication via JSON Web tokens, which are verifiable for manipulations or compromises via the signature and are transmitted to the application with every request.
The fact that exactly these options are missing in version 1.0 is more than disappointing.
The use of JWT in particular would have really justified the "cloud-ready" label for the specification.
So, although the Security API is a good start, it is still far from being used profitably in distributed (cloud) architectures.
There, alternative frameworks and projects (such as [JBoss Keycloak](http://www.keycloak.org)) can already be much more.


## Conclusion

A standardization of authentication and authorization options in Java EE was more than overdue.
From this perspective, the new security API under the JSR-375 is very welcome.
A sensible architecture in the form of CDI beans of the relevant components such as IdentityStore, AuthenticationMechanism and SecurityContext make it easy to perform the necessary security for your own application.
Ready to use implementations via annotation facilitate integration into your own environment without having to deal with a lot of code.
However, if a deviating or more far-reaching implementation is to be carried out, this is easy to do.

Two sample projects with different applications of the reference implementation Soteria of the Security API can be found at GitHub:
A [JAX-RS application](https://github.com/dasniko/soteria-demo-jaxrs) and a [complete web application](https://github.com/dasniko/soteria-demo-mvc) with user interface based on MVC/Ozark and completely self-implemented authentication flow.

Taking into account the possibilities offered by the Security API and Soteria in terms of distributed architectures and cloud operation, one is unfortunately disappointed.
There is still a lot of work to be done here to ensure that current specifications such as OAuth2, OpenID-Connect and JWT are supported as soon as possible.
