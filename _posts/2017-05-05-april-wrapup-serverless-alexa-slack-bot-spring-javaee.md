---
title: April Wrap-up - Serverless Buch goes Alexa, Chatbot, Spring and Java EE
tags:
- wrapup
- summary
- digest
- serverless
- serverlessbuch
- book
- aws
- cloud
- alexa
- chatbot
- javaee
- spring
thumbnail: /images/lambda-jaxrs-cdi.png
---

{% include thumbnail.html %}
As promised in [march wrap-up](/2017/04/march-wrapup-serverless-book-javaland.html), I'll write some words about the serverless demo apps for my [Serverless Computing Buch](http://serverlessbuch.de).
I played with an Alexa skill, a Slack chatbot and running Spring and Java EE APIs on AWS Lambda.

## Spring and Java EE goes Serverless

So you thought, you have to tie yourself to the AWS Lambda Java API if you want to develop functions running on it?
Lucky us, AWS Labs created a library with which you can run existing Java APIs on AWS Lambda: [`awslabs/aws-serverless-java-container`](https://github.com/awslabs/aws-serverless-java-container)

I started with a **Spring** application firing up on Serverless.
The API Gateway routes all requests to the Lambda function where special `SpringLambdaContainerHandler` handles the origin request and dispatches it to the Spring classes.
For configuration there's a `@Configuration` annotated class, like you know it from your Spring app.

Dependency Injection with **autowiring** works like a charm.
Also handling all requests with Spring **MVC**.
Just use your well known annotations and you're done.
Additionally I've put up the example with **Spring Data** DynamoDB.
You can find the repository at [`serverlessbuch/lambda-spring`](https://github.com/serverlessbuch/lambda-spring).

The **Java EE** example is very analog to the Spring one.
The library supports running **JAX-RS** with Jersey (reference implementation) on AWS Lambda, so you have a `JerseyLambdaContainerHandler` instead of the SpringLambda... one.
Pure JAX-RS was too boring for me, so I added some **CDI** with Weld (also reference implementation) to have the resources automatically injected into my classes.
For validating the inputs, I also added **Bean Validation** (JSR-303) to the example.
It works pretty well!
Find the repository at [`serverlessbuch/lambda-jaxrs-cdi`](https://github.com/serverlessbuch/lambda-jaxrs-cdi).

## Alexa Skill

This was really fun - _Alexa loves AWS Lambda!_  
It's so easy creating an Alexa skill (for Amazon Echo and Echo Dot).
Just define a few _Intents_ and _Slots_ for getting the spoken user input as data.
Forward it to a AWS Lambda function and create a response.
Alexa will read it out to you!

I've made a short video (german language) of my example:

<iframe width="560" height="315" src="https://www.youtube.com/embed/4fS9Dpifq5s" frameborder="0" allowfullscreen></iframe>

Link to the repository: [`serverlessbuch/alexaskill`](https://github.com/serverlessbuch/alexaskill)


## Slack Chatbot

Can't get enough of talking to machines?
Create a serverless Slack Chatbot!

There are various Slack APIs for usage.
While AWS Lambda (or serverless in general) is stateless, no real-time API (based on websockets) can be used.
But there is the _Event API_ which will notify you about certain events whith a HTTP(s) request and you can "respond" asynchronously via the _Web API_ with messages.
Another interesting option is using the so called _Slash commands_ where the user enters something like `/calc 2+2` and your created Slack chatbot will answer `2+2 = 4`.

![Slack slash commands](/images/slack_command.png)

The repository contains both, the slash commands and the Event/Web API examples: [`serverlessbuch/slack-chatbot`](https://github.com/serverlessbuch/slack-chatbot)

---

Read all the details and more in my upcoming book: [serverlessbuch.de](http://serverlessbuch.de) and follow the book itself on Twitter: [`@serverlessbuch`](https://twitter.com/serverlessbuch).

---

So long, stay tuned and if you have any questions, don’t hesitate to ask. As always, I’m happy to answer!
