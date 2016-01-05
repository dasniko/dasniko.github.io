---
title: Real Microservices with AWS Lambda
tags:
- cloud
- lambda
- api
- microservice
- aws
- java
- javascript
---

Lately, I started working on my first Cloud project, which runs exclusively on Amazon AWS resources. I read before many things about the AWS cloud and played some little time with this and that, but made no real experience. Now I was forced to - and made a great experience!

A very special use case led me to [AWS Lambda](http://aws.amazon.com/lambda). I had the requirement to execute a function on a scheduled basis. For this, running a whole server, no matter if [EC2](https://aws.amazon.com/ec2), [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk), [Docker](https://aws.amazon.com/ecs), or whatever, seamed to me too much oversized (in infrastructure and money). There's just this small function, calculating some data, interacting with a persistence layer and sending some messages depending on the data. First, I was thinking about starting and stopping an EC2 instance on a schedule. Then, a co-worker told me about Lambda. This was exactly what I was looking for: just deploying code and functions (no whole instances) and executing them event-driven.

Lambda provides runtime environments for **JavaScript** (Node.js), **Java 8** and **Python**. So you can write your function or code fragment in one of these languages. If you just need to interact with the AWS APIs, you don't have to provide any dependecies on your own, because the AWS APIs are availabe in each of the runtimes and you can code in the online editor. _Cool stuff!_ If you have more than one file to code and/or 3rd party libraries to use, you can just upload a zip file with your content. Lambda will unpack and execute the code. The executions will be billed on the consumed time (in units of 100ms.) and allocated memory. Pretty fair conditions.

As I already said, the functions will be executed based on events. And there are a lot of possible events available:

- [S3](https://aws.amazon.com/s3) events, such as upload and download of files
- received emails/messages/notifications via [SNS](https://aws.amazon.com/sns) and [SES](https://aws.amazon.com/ses)
- [DynamoDB](https://aws.amazon.com/dynamodb) events, as data is modified in any way (like a DB trigger)
- events based on [CloudWatch](https://aws.amazon.com/cloudwatch) logs and metrics
- based on data streams of [Kinesis](https://aws.amazon.com/kinesis)
- scheduled events, based on cron-expressions
- manually triggered from the command line
- _and some others_

All executions of your functions can be monitored with [CloudWatch](https://aws.amazon.com/cloudwatch), where the logs and metrics of your services are available.

If you have the need to call your functions via HTTP - or as REST API call, you can add one or more API endpoints to your Lambda code, whether additionally to the events, or just instead of events, then the API call is your event. This is made possible with [AWS API Gateway](https://aws.amazon.com/api-gateway), which is not only available for Lambda, but as well for many other AWS services.

With this Lambda approach, it's possible to deploy real microservices, acting on events and on API calls. But every service just has one purpose, not more! And because the AWS APIs are available in general, Lambda makes it easy to use the AWS infrastructure and not depending on too much 3rd party code.

In case you need it - [there's a tutorial availabe](http://aws.amazon.com/lambda/getting-started).
