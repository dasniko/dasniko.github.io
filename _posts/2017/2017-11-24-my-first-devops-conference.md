---
title: My first DevOps conference
tags:
- devops
- conference
- culture
- kubernetes
- cloudnative
---

This week was fully dedicated to DevOps things.
First, I attended the [DevOps Con](https://devopsconference.de/), where I also gave a talk about [#Serverless](/tags/#serverless) and my lessons learnd (or best practices).
After that, I had two days training on (Docker) container clusters with Kubernetes.

I felt a bit strange at the conference.
Until now I only attended and gave talks at developer conferences.
I know these dev-folks and how they think, behave, act, argue and so on.
But this DevOps thing confused me.
I mean, in my understanding, DevOps is much about culture, change and improvement.
And yes, there were lots of talks about this.
But all the conversations of the attendees between the talks, during pause and in the hallway focused on - tools, and how to run them.
Or how to convince the boss to buy a tool, but all with technical reasoning, not cultural.
Even worse: I overheard a comment of one guy who attended a talk about Continuous Delivery without Containers:
_"They're doing CD without Docker and Kubernetes!? That won't work, they're doing it wrong, they will fail!"_
Really? I think, the speaker knows what he's talking about.
And if it really wouldn't work, he hadn't talked about it!
We don't need Docker and Kubernetes all the time and everywhere.
It's just one tool among others.
Just choose the one which you are comfortable with, which you know.
Not the one which is most popular for a moment.

Seems that most people still doesn't understand, what DevOps is actually about ([see here](http://www.itskeptic.org/content/define-devops) for my favourite definition).

No wonder there are all these _"DevOps Engineer"_ job opportunities, recruiters looking for.  
No wonder there are all these _"DevOps Tools/Platforms"_ provided by software vendors.  
NO, THERE IS NO THING LIKE A DEVOPS ENGINEER OR TOOL!

Yes, tools and technical skills are also needed and without all the new tools, it'd be a lot harder to automate things, to run reproducable environments on a mouse click and to monitor widely distributed systems on a single dashboard.
But without the awareness to introduce change and welcome failure, there will be no improvement, no culture.
No tool can bring this benefit, if there's no change of thinking in our heads.

_Rethink IT_ - this is what Michael Nygard _([Release it!](http://amzn.to/2i1R6VI))_ [already said in a keynote at W-JAX 2014](https://jaxenter.com/rethink-it-the-day-after-tomorrow-117711.html) conference.

And, to add one more quote to your argument, why this-and-that (DevOps?) won't work in your company:
No, it's not at all a rational reason.
_It's just because your architecure sucks._ or _Because your culture sucks._
That's all, see the talk by [Jez Humble "Continuous Delivery sound's great, but it won't work here"](https://www.youtube.com/watch?v=837Z_oehhRg)

And yes, to bring DevOps culture to your company is kind of exhausing and takes much time.
Don't "adopt" DevOps, go the way to "transform" you and your business to another way of thinking and culture!

---

After the two conference days, I had two workshops/trainings on container clusters with Kubernetes.
Yes, these are tools!
But as a guy who works for other companies (my customers), I also need a basic understanding about what is popular today.
Just to find the right argues, why you should do somthing - or shouldn't do it at all.

It was really interesting to do some complete different tasks.
Since now, I only created Docker containers and put them "somewhere" where they were run by the system or someone deployed them to a cluster.
Now I did this also by myself.
Putting containers to "production" in a Kubernetes cluster.
It's exciting what this platform can do and how this can help.
But it also pulls in other cons and downsides and you possibly have to do new compromises, you didn't know before.
Just be aware!

But, just to have Kubernetes in your setup, doesn't make you "cloud native".
I also don't get it, why everybody equates "cloud native" with "containers" and Kubernetes.
Again: Kubernetes is just a tool, not a principle!
Only because there's a "Cloud Native Computing Foundation" ([CNCF](https://www.cncf.io/)) which promotes Kubernetes (because Google is foundation member), it's not the same!
The trainer of todays workshop use a nice variant of "cloud native": he called it _"container native"_ - which nails it better, IMHO.
But this might be stuff for another post at another time...
