---
title: Optional Path Variables with Spring (Boot) Rest MVC
tags:
- java
- spring
- rest
- mvc
---

Today I had to solve the requirement to cope with optional path variables in a Spring Boot based REST service. Of course, I could have done it the old (legacy) way with two methods, one with the path variable, the other without, but I just didn't want to have such a lot of duplicated methods.

Request parameters (`@RequestParam`) provide the `required` parameter, which can be set to false, thus the request paramter becomes optional. `@PathVariable` doesn't have this option.

The legacy approach:

{% highlight java %}
@RequestMapping(value = "/path/{id}")
public String getResource(@PathVariable String id) {
  return service.processResource(id);
}

@RequestMapping(value = "/path")
public String getResource() {
  return service.processResource();
}
{% endhighlight %}

When you have a large bunch of path variables, request- and other parameters, this can quickly lead to large almost-duplicated code blocks, resp. method signatures. I don't like this thing.

With Spring 4 and Java 8 it's possible to have optional path variables with the usage of `Optional`. With this, your code will look like that:

{% highlight java %}
@RequestMapping(value = {"/path", "/path/{id}")
public String getResource(@PathVariable Optional<String> id) {
  if (id.isPresent()) {
    return service.processResource(id.get());
  } else {
    return service.processResource();
  }
}
{% endhighlight %}

This saved us a few dozens of duplicated and thus confusing code fragments. Our code got more readable on the controller level.
