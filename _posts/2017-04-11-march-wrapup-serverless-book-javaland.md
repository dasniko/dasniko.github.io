---
title: March Wrap-up - All Serverless - Book and JavaLand
tags:
- wrapup
- summary
- digest
- serverless
- serverlessbuch
- javaland
thumbnail: /images/javaland2017.jpg
---

{% include thumbnail.html %}
As you can see on the late publishing date of this march wrap-up (it's always near mid-april), there's lot of stuff going on, even preventing me from writing my own blog posts.

The big event in march was, of course, [JavaLand](http://javaland.eu) conference!
JavaLand is one of the most awesome conferences I know, not only because it takes place in a theme park ([Phantasialand](http://www.phantasialand.de), Bruhl, near Cologne).
During day time we could enjoy a lot of talks given by really good national and international speakers and at night, there were several rollercoasters opened during "Open Park" event.
This year, it was already the 4th edition of JavaLand, which is organised by [iJUG](http://www.ijug.eu), the german association of Java User Groups, but also co-organised by all the member JUGs.

Besides my two talks about [_Serverless Computing_](https://speakerdeck.com/dasniko/serverless-computing-at-javaland-2017) and running [_React.js on Java EE_](https://speakerdeck.com/dasniko/react-dot-js-apps-with-java-mvc-1-dot-0), I organised the so-called _"community activity"_ (activities besides the confernce/talks fo all attendees, organised by community members) *_Code Golf_* (solve a task with at least chars source code as possible).
It was already the second time I conducted a code golf competition.
After last year, where several tasks could be solved with different (JVM-)languages, I focused this year on Java 8 and only a single task.
But additionally to last year, this year I prepared a web app, where all the participants had to submit their solutions.
The code was compiled and executed against a test suite, so all participants got immediate feedback on their submission.
It was again much fun seeing all the solutions coming in.
In the end, the winners of last year made it again, they are simply clever.
Thanks for all participating!

Of course, parts of this code golf web app was done by using _serverless_ infrastructure.
The main application I decided to run with Spring Boot, packed in a Docker container running on Elastic Beanstalk.
This was the easiest way of running the app (in my situation with not enough time to do another setup).
But for executing the participants solutions in a secured sandbox environment, I'd have had to use a separate classloader with a security manager.
And if you already had the requirement to work with this combination, you know this is really _PITA_.
So I decided to run the tests in a Java based AWS Lambda environment.
This is sandboxed by default and potentially malicious code can't damage anything.
Worst case, the Lambda container is being destroyed.
So I compiled the submitted source code in the Spring web app, loaded the binaries up to S3, started a Lambda function to download the class file and run it against a test suite.
Finally, the result was written in a DynamoDB.  
Folks, this is really cool stuff and was fun implementing it!

<img src="/images/serverless_sohot.jpg" class="postimg left">
So, this leads to my other main task at the moment: my (german) book on **Serverless Computing**.  
I wrote pretty much in march, most of the time everything worked well.
Only one day I had my first crisis on writing. It was a really bad day, I deleted more lines than I wrote.
But I think, this comes along while writing from time to time.

I've written approximately about half of the planned content so far.
But there are new things every day on this technology and environment, so it's hard to focus on the main stuff and not examining everything new and playing around all the time.
So far, I right on my schedule to have the book finished by mid of the year.
Then some reviews, print settings, etc.

I sent out the first review versions, to get early feedback.
Let's see, what the results will be.
Hopefully the book will be released in autumn.
For those of you who can't or don't want to wait until release, there's a Twitter account for the book:

<blockquote class="twitter-tweet" data-lang="de"><p lang="en" dir="ltr">If you are interested in <a href="https://twitter.com/hashtag/serverless?src=hash">#serverless</a> computing, you should follow my new Twitter handle for my upcoming book <a href="https://twitter.com/serverlessbuch">@serverlessbuch</a></p>&mdash; Niko Köbler ☁️ (@dasniko) <a href="https://twitter.com/dasniko/status/846785922729463809">28. März 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Don't hesitate to follow the [**@serverlessbuch**](https://twitter.com/serverlessbuch) account, where I tweet about serverless cloud dev and the book in english but also in german.
Additionally, I made also a first version of the accompanying website [**serverlessbuch.de**](http://serverlessbuch.de) (where so far is nothing to see).  
_(psst, there's another new Twitter account to follow: [@springbootbuch](https://twitter.com/springbootbuch) - the account for the upcoming german book on Spring Boot, written by my friend [Michael Simons](https://twitter.com/rotnroll666))_

I played around running _Spring_ and _Jersey (JAX-RS RI)_ apps on AWS Lambda - this is really cool stuff.
More on this next month!  
So long, stay tuned and if you have any questions, don’t hesitate to ask. As always, I’m happy to answer!
