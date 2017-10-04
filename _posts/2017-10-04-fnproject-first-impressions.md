---
title: Fn project - first impressions
tags:
- serverless
- fn
- fnproject
- faas
- cloud
---

Oracle just announced and published (open sourced!) a new project at this years [JavaOne](https://www.oracle.com/javaone/index.html) conference:

[**`Fn project`**](http://fnproject.io)

a _supposed-to-be_ serverless, er, platform? framework? whatever.
It's about functions, as the name already assumes, so it's just (another) FaaS.

Of course, Oracle praises this as the new, one and only reasonable and sustainable Function-as-a-Server, or _serverless_ solution of all already available.
Oracle also means, that their "cloud" is much better than all the others.
_Whoever believes that?_

So, I had a first look at _Fn project_.  
It's based on Docker.
And you need Docker to develop your functions.  
No Docker, no functions, no Fn project.  
Sad.

Basically, _Fn project_ is just a framework to create Docker images, which then have to be deployed and run in a Docker cluster (e.g. Kubernetes, Mesosphere, Docker Swarm).
So, why do you call it _serverless framework_ then? _Docker image creation framework_ would meet it more.

Hey, I really like Docker.
But in the serverless world, there is no need for Docker for developers.
I just want to code a function, deploy it into a runtime and execute it.
However this runtime works and lives in, I don't care.  
I don't _WANT_ to care.  
I don't _NEED_ to care.  
It's called _server**LESS**_!

So, _Fn project_ can't be serverless, because I have to care about containers. :worried:  

Let's compare _Fn project_ against some thesis of the [Serverless Manifesto](/2016/12/serverless-compute-manifesto.html):

- _No machines, VMs, or containers visible in the programming model._  
As mentioned already, I DO have to care about a container.  
Failed. :-1:

- _Scales per request. Users cannot over- or under-provision capacity._  
I don't see anything, that _Fn project_ scales per request.
I don't see anything how _Fn project_ scales at all.
Again, I have to care myself, or, at least, I have to configure the Docker cluster to scale.
But I have to do it on my own.  
Failed. :-1:

- _Never pay for idle (no cold servers/containers or their costs)._  
As _Fn project_ is based on Docker, you need a Docker cluster (see above) to run it.
This cluster has to run, has an uptime.
This cluster has to be managed.
And you have to pay for running and managing this cluster (and not only for the energy, you also need manpower for managing it, and _serverless_ is about NOT to manage servers/containers).  
Failed. :-1:

- _Implicitly fault-tolerant because functions can run anywhere._  
The term _anywhere_ means, that there are a bunch of alternative execution environments, where my function can be executed, when the defaul/desired environment isn't available.
Even more: there is no default execution environment.
With Fn project you have to run and manage, as already said multiple times, your own Docker cluster as an execution environment. What do you do if this cluster isn't available? Because it crashed? Because you mis-managed it? Because _everything fails, all the time_?
Do you run and manage a standby-cluster? Which you have to pay for (see above item)?  
Failed. :-1:

So, there are at least(!) four items that violates the basic principles of serverless computing.
And you think you are _serverless_, Fn? Seriously?  
IMHO, it's just a _Docker image creation framework_.

Perhaps I'm completely wrong.
If so, please correct me and tell me, how Fn is serverless below in the comments.

---

If you want to know more about _Serverless Computing_, what it is and what it means, just [buy my (german) book at Amazon](http://amzn.to/2eZS5UG)!
