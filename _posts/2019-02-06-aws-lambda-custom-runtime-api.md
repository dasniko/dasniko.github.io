---
title: AWS Lambda Custom Runtime-API
tags:
- serverless
- cloud
- aws
- lambda
- api
---

In my [previous post][layerpost], I wrote about [AWS Lambda Layers][layers], which are the base for the new [AWS Lambda Custom Runtime-API][runtimeapi].
Well, not exactly the base, the API can be used also without layers.
But it makes more sense to use a custom runtime definition with Lambda Layers instead of baking it into each and every function.
Let's get into detail.

Until last re:invent, it was only possible to use the runtimes in AWS Lambda, AWS provided for you.
This was roughly Java, JavaScript (Node), Python, Go & .NET.
And additionally the available versions were very limited.
If you wanted (or were in the need of) to run a function written in another language or in another version of a provided runtime, you had to wrap it in some way, pre-/cross-compile it or even run it _not_ with Lambda.
Even pure bash functions were not possible, unfortunately.

This has changed now.
You can use any desired runtime, if it can be delivered together with your function code (which can only be 50 MB max) or be provisioned as a Lambda Layer (up to 250 MB max).

You "just" have to provide a file called `bootstrap` in the root of your function or layer.
This file must be executable and handles the whole management of your custom runtime.
This file does not necessarily need to be a shell script, it can be any executable file (running with Linux).
Lambda recognizes, that you want to use a custom runtime instead of one of the provided ones, when you set the runtime to the value `provided`.

The `bootstrap` file needs to take care of the initialization of your function environment, running an event loop for processing the events, returning the response and do some potential error handling.
Details can be found in [the docs][runtimeapi].
Don't be afraid, running the event loop in your bootstrap file won't be charged.
You'll pay only for the time of initialization of your function and the actual event processing time.
No changes to the known and used payment model.

If you want to run e.g. PHP functions on AWS Lambda - now you can!
Just build a custom runtime, e.g. as a layer, deploy it to Lambda and use it in your PHP functions.
It's easy! (But who wants to use PHP... :wink: _scnr_)

My favorite is finally being able to use a bash runtime for functions.
Especially runnig some maintenance tasks, it is much overhead to write these in a programming language with potentially more code than it will be in a shell script.
Now this is possible!
I built a short example, running a bash script in a Lambda function, using a custom runtime using a layer.
You can find the [example in my GitHub repository][example], it can be deployed with the [Serverless Framework][sls].
Don't be surprised, the `bootstrap` file is only a few lines long, not much more is needed, except for error handling, which the example is missing.

{% highlight bash %}
#!/bin/sh

set -euo pipefail

# Initialization - load function handler
source $LAMBDA_TASK_ROOT/"$(echo $_HANDLER | cut -d. -f1).sh"

# Processing
while true
do
  HEADERS="$(mktemp)"
  # Get an event
  EVENT_DATA=$(curl -sS -LD "$HEADERS" -X GET "http://${AWS_LAMBDA_RUNTIME_API}/2018-06-01/runtime/invocation/next")
  REQUEST_ID=$(grep -Fi Lambda-Runtime-Aws-Request-Id "$HEADERS" | tr -d '[:space:]' | cut -d: -f2)

  # Execute the handler function from the script
  RESPONSE=$($(echo "$_HANDLER" | cut -d. -f2) "$EVENT_DATA")

  # Send the response
  curl -X POST "http://${AWS_LAMBDA_RUNTIME_API}/2018-06-01/runtime/invocation/$REQUEST_ID/response"  -d "$RESPONSE"
done
{% endhighlight %}

Let your creativity run wild - think of runtime environments you ever dreamed of for AWS Lambda.
It's now possible (likely, if it fits into the limits).
Have fun!


[layerpost]: ./aws-lambda-layers-pros-and-cons.html
[layers]: https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html
[runtimeapi]: https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html
[example]: https://github.com/dasniko/lambda-bash-runtime
[sls]: https://serverless.com
