---
title: January wrap-up - cruise, new gig and a book on serverless computing
tags:
- january
- wrapup
- summary
- digest
- serverless
- serverlessbuch
- aws
- cloud
- book
- asciidoctor
thumbnail: /images/stonehenge.jpg
---

With this post, I'm trying to start a new series of posts trying to wrap up my past month in tech (and perhaps a bit of my private life).
I don't know if this really works for me, but I was just curious so I started to do so.
Yes, and I know that this is nothing new as others already do so (or even do a weekly wrap up, which is too much for me).

---

I started the new year together with my wife on a cruise ship on the Northern Sea.
We started right before midnight on December, 31st in Hamburg, so we had an incredible view from the top deck to the skyline of Hamburg with greate fireworks.
I'm always getting goose bumps when all vessels blasting their foghorns at midnight.

After a week of intense recovery on the sea and visiting nice cities in England, France, Belgium and the Netherlands, I started to work on the project for my new customer.
Man, I really had to re-order my knowledge, because after more than one year of doing new and edgy Cloud stuff, this project is again a bit "enterprisey".
With Factory classes, layers of indirection and a mapping framework.
When did I work last with these technologies?
I don't know, but however, most of the project is really interesting and I'm looking forward to get new experiences.
At least there is some JavaScript (Angular 2) besides of Spring Boot, and, lucky me, some Keycloak stuff.
But do I really have to deal with "model-driven-development" in generating my resource interfaces from a RAML resp. Swagger file?
I really don't see a need in that, but it seems that the decisions were already made before I joined the project.

---

Besides my new gig, I started writing my first book.
It's about _"Serverless Cloud Architectures"_, in german language and hopefully it will be released by mid of this year or slightly after.
I've chosen [entwickler.press](https://entwickler.de/press) for being my publisher, as I already have good connections to the people working there.
I already started in December last year to set up the outline and think about the content about what I want to write.
Right after I was back from the cruise trip, I started to write the first parts.
Last week, I wrote a chapter on the principles of serverless computing, which was very inspiring to me.
The tech parts will focus on AWS infrastructure and services and for the deployment section I will write about the Serverless.com framework, which is really amazing.
There's no code available yet, but as soon there is, I will point you to the GitHub repository.

So far, everything works fine and the words run from my fingers into the files.
Which files?
Well, I decided to write the book in [Asciidoctor](http://asciidoctor.org), as it's more powerful then simple Markdown (which I used so far for writing my articles and this blog).
Additionally, I never worked with LaTex and with Asciidoctor I'm able to process the source to nearly every target format.
Anyway, my publisher said, it can process also Asciidoctor format.
Just to go sure, I will provide them the first chapter in the next weeks to do a test run.

My editor of choice is [Atom](https://atom.io).
I really like working with Atom and plain text files.
I do not use the Asciidoctor preview of Atom, but the [Asciidoctor Live Preview Chrome Plug-in](https://chrome.google.com/webstore/detail/asciidoctorjs-live-previe/iaalpfgpbocpdfblpnhhgllgbdbchmia) for having an immediate response of my output.
As the plug-in only generates HTML code, it's not exactly that how it will look like when printed as a book, so I do a cross-check at the end of the day with a generated PDF from my Asciidoctor source files.
I'm pretty happy with this setup.

---

Last week I gave my [Serverless talk](/talks/#serverless) ([slides](https://speakerdeck.com/dasniko/serverless-cloud-architectures)) at [JUG Frankfurt](http://jugf.de).
I was very surprised that there were so many registrations before the talk and so many people attended my session.
I was told from Alex Culum, the organizer of JUGF, that my talk is a new record of attendees.
Thank you all for coming, listening and having a great discussion. I feel pleased and honored!
Thanks also to Jörn, who wrote a [good summary](http://www.hameister.org/Blog/?p=5090) (german) of my talk.

Currently, as I'm writing this post, I'm in Munich at the [OOP conference](http://www.oop-konferenz.de) where I'll give my talk on Serverless tomorrow morning.
And because tomorrow is already February, I'll tell you about it in the next wrap-up.

So long, stay tuned and if you have any questions, don't hesitate to ask. I'm happy to answer!
