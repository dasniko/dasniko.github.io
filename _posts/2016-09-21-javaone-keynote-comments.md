---
title: JavaOne 2017 Keynote Comments
tags:
- javaone
- java
- javaee
- conference
- mvc
photos:
- /gallery/javaone2016/platform_architecture.png
- /gallery/javaone2016/features.png
- /gallery/javaone2016/changes.png
- /gallery/javaone2016/roadmap.png
---

Unfortunately I can't be at this years JavaOne conference, but thanks to our modern communication infrastructure, I was able to view the [live-streamed JavaOne Keynote](https://www.oracle.com/javaone/on-demand/index.html) at home. Let's skip all these sponsored "Industry" and "Visionary" keynotes and focus on that what's important: Java EE!

Oh, BTW - this year's slogan of JavaOne is:

> Java Your Next (Cloud)

No idea what that means? Why the braces around "cloud"? Me neither...

After 90 minutes of _bla bla bla..._, the technical part of the keynote began. George Saab (VP Development) announced, that Java should become a "first class citizen" for Docker. So what? I'm using Java and Docker for quite some months now, successfully!

Then, Mark Reinhold (Chief Architect Java Platform Group) talked about the renewed delay of Java 9, JShell (the Java REPL), Jigsaw and JLink. Ok, interesting, next please.

Brian Goetz (Java Language Architect) announced that Java will get (better) support of domain-classes. These are classes with default implementations of constructors, getters/setters, equals and hashcode methods. So it becomes possible to just write

{% highlight java %}
public class Point(int x, int y) {}
{% endhighlight %}

for a complete class. In case you need some other implementation of the standard methods, just overwrite it. Nice feature!
After these news, Brian talked again about projects [Valhalla](http://openjdk.java.net/projects/valhalla/) and [Panama](http://openjdk.java.net/projects/panama/). Ok, nothing new, already heard of the last years.

## On the way from Java EE to Oracle EE?

Finally, Anil Gaur (Group VP Cloud Application Foundation) announced the news for upcoming Java EE versions (_"it's available - on premise and in the Cloud!"_)!  
He pretended, that Oracle has, other than assumed, listened to the community and understands, that the model how Java is used nowadays has changed. And so Oracle has reacted to this and put "great emphasis" to "Cloud and Microservices" development style. Sure? This is what Oracle understood from the community? I rather think that this is exactly that, what Oracle wants to see in Java EE, because it fits exactly to their product portfolio. Here are a few impressions from their slidedeck:

{% include gallery.html %}

Officially this change is supposed to be called "Revised Proposal" and should only show Oracles view of things. There is a new [survey](http://glassfish.org/survey) to get feedback to this proposal from the community. Oracle pretends, that it's still a community process and that feedback is highly appreciated and needed for the next Java EE version. The roadmap says, that Java EE 8will come end of 2017, and onyl one year later, end of 2018 Java EE 9 should be available.

Especially the proposed drop of the JSR-371, the MVC API I cannot understand. Oracle says, that it's no more needed, because newly created web apps use more often JavaScript based frameworks like Angular/React/etc. and mircoservices in the cloud are mainly deployed headless. But this assumption is simply wrong! I know a lot of companies and enterprises who don't want to build JavaScript based web UIs, but want to have a stable, stateless, action-based web framework which supports server-side rendering. That's why we need MVC! With Oracles arguments, even JSF could (must!) be dropped. JSF is not cloud technology at all... The only thing missing in MVC is the TCK, what is due to Oracles inactivity for the last 12 months in the Expert Group. Because Oracle provides the Spec Lead, it can "control" the creation of the TCK. All other EG members and the community is willing to finalise this JSR!

## Conclusion

I welcome Oracles commitment to Java EE, although I can't follow the argumentation for dropping almost finished JSRs like MVC. At least, there ist the [survey](http://glassfish.org/survey), which we all should use to give feedback to Oracle. I hope that everyone of you, will complete this survey, it's a great chance to influence the next Java EE! Or give feedback on the JSR mailinglists, to EG members, whatever, just do anything and don't just complain! Thank you!

Besides that, it was the third JavaOne Keynote in a row where not real news were announced. Sad.
