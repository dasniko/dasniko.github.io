---
title: August and September Wrapup - Serverless book, Oracle Java (EE), Security Soteria and new Talks
tags:
- wrapup
- summary
- digest
- serverless
- serverlessbuch
- book
- aws
- cloud
- oracle
- javaee
- security
- soteria
- javaland
thumbnail: /images/serverlessbook_cover.jpg
---

As you might have noticed, there was no August wrap-up.
This was, because I decided to take some time and calm down during summer months.

In August, I did some last proofreadings and corrections of my book, which is now just before release.

I'm very proud of my first book.
It was worth all the time and efforts I put into it.
And, not at least, it was kind of fun to write a whole book, not just only an article.
I learned a lot of details about _Serverless_ on AWS, but also - and this is invaluable - I learned a lot about myself.
Great!
As I begun, I wasn't aware, that I'm able to write that much, but then, the pages filled almost by itself.
Currently, I'm pretty sure, the first book was not my last book.
Sometime in the future, I'll be writing another one (hopefully/perhaps/possibly).

**And now - just go an [grab your copy](http://amzn.to/2eZS5UG) of the [Serverless Buch](http://serverlessbuch.de)!**

My actions for and around _Serverless_, and not at least my book, led to an invitation to the _AWS Developers Serverless_ Slack channel.
Great opportunity to get in contact with all people around _serverless_ in AWS and beyond!
It's not only that I can ask directly the right people, but also my experience and thoughts on _serverless_ are very welcomed.
Thanks that I may be a part of it.

---

Then, there was Oracle...
It just came up with two news:

1. [Opening-up Java EE](https://blogs.oracle.com/theaquarium/opening-up-java-ee) ([update](https://blogs.oracle.com/theaquarium/opening-up-ee-update)) to the community, overhand it to the Eclipse Foundation and giving it the new name [EE4J](https://twitter.com/dasniko/status/913650048227008512).

2. Also moving the development of Java (the language itself) to open source and making no difference between OpenJDK and Oracle JDK (besides that Oracle JDK should become as LTS version) ([Oracle blog](https://blogs.oracle.com/java-platform-group/faster-and-easier-use-and-redistribution-of-java-se)).
Additionally, the release cycle should be fastened to a relase every 6 months and the version number should consist of the year and month of the release (next release in March 2018, so release will be called 2018.3)

Although both things are very welcome, I still don't get rid of the feeling, that Oracle wants to get rid of Java.
I assumed that already almost [one year ago](/2016/09/javaone-keynote-comments.html) right after JavaOne 2016 opening keynote.

"Opening up" Java EE and giving it to an independent foundation is one thing.
But again, it's about _how_ you doing things.
The whole community demanded such step already months ago and Oracle was not in the mood to do anything.
Then, just in August, it came up with the "great idea" (as if it was born by Oracle itself), to open up Java EE to the community.
This is so sad.
Selling ideas from others as own. How bad is this?
And additionally, everything was "born" in a hurry, as if there's no tomorrow... Why the heck this hurry?

The new versioning scheme... _arrghh_ WHY???
We already have this awesome thing called [_Semantic Versioning_](http://semver.org) every developer knows and understands.
Why must Oracle again do its own shit?
I really don't get it.

_Just a side note:_  
Netbeans is now at Apache Foundation, Java EE at Eclipse Foundation and Java itself remains at Oracle.
Wouldn't have been a new _Java Foundation_ as a home for all three of them a better choice for all of us?

Let's have a look at the JavaOne news and announcements latest in the next wrapup for October!

---

Besides all that: Java 9 and Java EE 8 have both been released last week.
Finally.

I've already played around with the new [Java EE Security API (JSR-375)](https://github.com/javaee-security-spec).
Reference implementation is called [Soteria](https://github.com/javaee/security-soteria). I don't like the name, it sounds a bit fancy.
In case you want to know some more about it, I've created two repositories:
One for plain JAX-RS usage: [`soteria-demo-jaxrs`](https://github.com/dasniko/soteria-demo-jaxrs) and one with a custom login form using Java EE MVC - Ozark: [`soteria-demo-mvc`](https://github.com/dasniko/soteria-demo-mvc).
The MVC demo has, as of today, already 21 :star: at GitHub - without any big action from my side, just one [tweet](https://twitter.com/dasniko/status/905818774816907264). I'm surprised.  
_Hey community - you are awesome! Thanks so much!_

---

As everything just moves ahead, so I do.
The first confirmation on conference talks for 2018 is already in: [JavaLand](https://javaland.eu)!
Yes, I'll talk again at this awesome conference in a Theme Park about my favourite topic: Serverless!
This time about serverless build pipelines.
I call them `code.build.run`.

There is also another new talk in the pipeline. It's about the _Early Lessons Learned_ on _Serverless_.
More on this topic I'll cover in a later post here in detail.
There will be some interesting calculations in it!

---

So long, stay tuned and if you have any questions, don’t hesitate to ask. As always, I’m happy to answer!
