---
title: AWS Lambda Layers Pros & Cons
tags:
- serverless
- cloud
- aws
- lambda
---

At [re:invent 2018](https://reinvent.awsevents.com/), [AWS announced](https://aws.amazon.com/new/reinvent/) two new features for AWS Lambda:

* [AWS Lambda Layers][layers]
* [AWS Lambda Custom Runtime API][runtimeapi]

Finally, I had some time to dig into it a bit.
This post will focus on Lambda Layers, which will be the basis and essential to know for the Lambda Custom Runtimes, which I [cover in another post][runtimepost].

## What is it?

Let's think of a Lambda Layers as a read-only disk (or partition), which you define (and upload) once and that can be used in multiple Lambda functions.
It will be "plugged" in to your function right at the time of its deployment, when your function definition includes the reference of a layer.
That's it. Just a layer.

## Pros

On the pro side, it extends your artifact size for your function code.
A regular Lambda function may not be bigger than 50 MB file size, when uploading the (zip) archive.
With layers, you'll get another 250 MB on top of this.

Additonally, it reduces initialization time, as the layer is just there.
No need to extract it from your function archive each time on first function initialization when your function instance is powered up.
The layer archive will just be mounted to somewhere under your `/opt` directory (this depends on your used execution runtime, details are in the [docs][layers]) and is ready to use.

This is very handy, when you have the need to use some time-intensive to install/configure tools.
Or tools that need some more disk space.
Like e.g. _ffmpeg_ for processing audio and video streams.

## Cons

Of course you can also use it to provide some commonly used libraries in an unique version to your various functions, especially if you have more than one team developing them.
In that way you can make sure, every function (and every team) is using the correct (or intended) versions of the libs.
But with this, you get another dependency layer into your functions and into your code.
And dependencies is something you want to avoid in any case, believe me.
The "good" thing here is, that layers are automatically and implicitly versioned.
So, if your function refers to a layer with libraries in _version 1_ and the layer will be updated to _version 2_ with newer versions of the libs, which will possibly break your code, your function still refers to layer `v1` and thus to some working libs for your code.
Layers luckily don't have an implicit _latest_ version.
This would be worse.

But, and there's always a _but_, as soon as the layer `v1` is deleted, you won't be able to redeploy your function referencing to the `v1` (already deployed functions referring a layer which is deleted will still work!).
In this case, you are forced to update your function code and test it against the new layer version before deploying it to production.
Be aware.

I personally don't like the approach using a layer for common libraries of your functions.
Functions should really follow the _[BYOC - Bring Your Own Code](/2016/12/serverless-compute-manifesto.html)_ convention of serverless components.
Because I see libraries as part of your code, which will also evolve (in terms of versions, usage, etc.) during lifecycle.
But when it comes to some "tools", which will "just" be used by your software, layers may be a very good fit, because there's some separation of code and thus concerns.
And giving every function a separated lib definition and repeating code makes the maintenance of your code easier the more mature your functions become.
Your functions is just responsible for itself, no dependencies to "other" things.
Thus, real independent deployments possible and no commonly deployments necessary.
Think of it next time you spend your freetime with deploying software!

UPDATE:
If you use at least one layer in your Lambda function, it isn't possible anymore to run the function locally for testing or debugging purposes without some additional and stupid effort (copying and installing things).
So, just be aware of this!


## Most valuable and best usage

In my opinion, Lambda Layers are best used with [AWS Lambda Custom Runtimes, which I cover in this post][runtimepost].
Not at least, because layers are the base for custom runtimes.
With them, you can provide nearly any runtime to your Lambda functions and you are no more bound to the ones AWS offers to you.
As long as the runtime artifacts fit into the 250 MB layer size limit.
But let's dig into it in the [next post][runtimepost].


[layers]: https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html
[runtimeapi]: https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html
[runtimepost]: ./aws-lambda-custom-runtime-api.html
