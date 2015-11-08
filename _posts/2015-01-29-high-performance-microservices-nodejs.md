---
title: High-Performance Microservices - Node.js vs. Wildfly
tags:
- nodejs
- javaee
- jboss
- wildfly
- microservices
- javascript
---

There is always this competition: Which one is faster? A good, "old" (heavyweighted) Java application server, or a fancy, new Node.js hipster app? Well, I did a comparison between both approaches.

### tl;dr

_It doesn't matter which technology you use - use it right!_

### The use case

A (RESTful) service should verify if a given key already exists in a data store, and if not, store the key automatically. In case that the key exists, a 200 HTTP status code should be returned, in case of the creation of the key in the store, the status code should be 201. No further content is required, just the two different status codes to distinguish the operation in the store.  
The key will be sent as the request body in JSON format as a PUT request.<br />No error handling and validation needs to be implemented for the demo/comparison (but surely in the later production service).  
Because the decision of the datastore is not part of the comparison, it is defined that a [Redis](http://redis.io) store will be the technical solution for this and the use of the latest recommended (and async) Redis clients in each language is assumed.

### The Node.js solution

This should be a simple and short solution, a "no-brainer". After all, Node.js should be made for such things. There are enough packages out there... but stop! This is a really small requirement, and you shouldn't start to deal with blown-up packages like "expressjs" just for handling REST-like request processing. This does NOT reduce complexity! So I decided to implement this "path-handling" and request-body-parsing thing on my own. After all, it's really a no brainer, just a few lines of code, as you can see in the [example gist](https://gist.github.com/dasniko/48d65bddb06ad6eaad24).  
But I used of course a package for accessing the Redis store. This package is simply called "[redis](https://www.npmjs.com/package/redis)" and does a great job, fairly easy! (It wouldn't be a good way at all to implement the client on my own).  
Start Node.js with the script and you're done! It works pretty easy, pretty reliable and pretty fast.

### The Java (EE) way

So, now have a look into the Java world and how to solve the challenge there.  
Because I also wanted to use as little external libraries as possible, I decided to setup my service using [JBoss Wildfly](http://wildfly.org) with Resteasy as JAX-RS implementation. Resteasy has this nice ***@Suspend*** annotation, which allows you to process the response asynchronous from the request in another thread. With this approach, you can achieve a perfect non-blocking request processing, so that this request is immediately able to accept the next request. Together with an appropriate sized http-worker-thread pool, this can result in a similar performance as what the Node.js world is promising from its approach.  
There are two current and recommended Java clients for the Redis communication: [Jedis](https://github.com/xetorthio/jedis) and [Redisson](https://github.com/mrniko/redisson). Jedis doesn't support async access, so I decided to use the Redisson library. However, the Jedis library seems to have a more readable and easier understandable API and is a bit better documented than Redisson. But I wanted to access the store asynchronously. The result was a bit too much boilerplate code as always when comparing to JavaScript... and debugging resulted to a _"Help, I'm stuck in the Netty event-loop!"_. You can find the code in [this GitHub repository](https://github.com/dasniko/wildfly-async-redis).  
But after all - start Wildfly and it also works pretty reliable, easy and fast.

### The result and figures

I measured two scenarios:

1. minimal response time
2. max. transactions per second

Firing single, isolated requests to the services resulted in minimal response times **between 1 and 2 ms** - on both systems, no difference between Node.js and Java EE!  
Just consider that the actual operation on the Redis store is really, really fast, speaking about nanoseconds (this store is so blazing fast, it even does not matter if a read or read/write operation is executed), the main time of such a request is spent with HTTP overhead, also on both systems. There's no real advantage of Node over other systems dealing with HTTP - it's overhead on all systems!

The maximum transactions per second (tps) I tested with 50 concurrent threads firing all the time at the services. After all, again both systems resulted in about **2.000 tps**, no matter if penetrating the system over 1 or 60 minutes. _(It doesn't matter if the 2.000 tps is a good or bad result, what really counts is, that the result was the same on both systems.)_

Node.js of course only used one thread, but how many http-workerthreads did Wildfly use? Sorry guys, I can't give you big numbers. Because the service was implemented asynchronously, the container just used between only 3 and 5 worker-threads concurrently. And because theses worker-threads are started on container startup, it's not expensive to use these threads, they are simply available. Additionally they are bundled in a pool and can be re-used perfectly! Imagine the tps if more worker-threads will be used. This is the point where your Java environment can scale out of the box. Node.js is finished here, no out-of-the-box-scaling available.

### Conclusion

**It doesn't matter which technology you use,** it also doesn't matter which programming language you use. But it does matter, on how you understand the requirements and know how to transfer and implement it to your solution. Threads are not generally bad! The JVM knows very well how to deal with threads. And if you use a runtime environment which knows how to deal with the JVM in the right way, threads can be your good friends and help you scale.  
On the other hand side, rapid application development with few lines of code and powerful expressions can also help you reaching your targets.  
Programming in an asyncronous and non-blocking way is a different approach than the previous used practices. You have to understand it to use it right. If you do, everything is fine! So, choose your (runtime) environment and programming language by your favours, but understand how to **use it right!** :-)
