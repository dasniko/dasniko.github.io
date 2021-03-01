---
title: JavaScript as the next Runtime Platform - Change the way you are thinking!
tags:
- javascript
---

**This article was first published on my "Web Tales" column at [JAXenter.de](https://jaxenter.de/javascript-die-naechste-runtime-plattform-39282) (german) and at [JAXenter.com](https://jaxenter.com/web-tales-javascript-the-next-runtime-platform-126065.html) (english).**

I got the chance to talk to many people at [JAX 2016](https://jax.de) about the "JavaScript in the IT landscape" topic. I'm glad there’s so much interest in that topic. Not all people I've talked to are as excited about JavaScript as I am, but that's fine.

I can understand most of the concerns about JavaScript. But in most cases it's not about the complexity of the language itself. Because once you understand JavaScript, complexity is manageable. What is left, and that also troubles me sometimes, is the complexity of many of the JavaScript frameworks and libraries, as well as their lifecycle; with respect to content, time or quality (this topic would occupy an entire article).

In Java, we are used to matured standards and constancy. We can count on many things. That's not yet the case in JavaScript. Currently, the community is where we, in the world of Java, were 10-15 years ago. With all the ups and downs. Sometimes I call the [JSX][jsx] dialect, which is used by [React.js][react], _"JSPs on steroids"_. It reminds me of times when we had constant problems with JSPs. But this is just a side note, I really like React.js.

The evolution of JavaScript libraries proceeds very fast. Some people claim this evolution is "too fast" because they can't keep pace with it and miss the continuity. An estimated half-life of JavaScript libraries of one year is in most cases already too high. But it also shows the potential of the platform and the language specification. Evolution doesn't remain static. This is something that makes some people feel uncomfortable. Humans fear change. No, actually humans don't fear change itself, they are afraid to change. Human beings are creatures of habit and, above all, love their own habits.

## Runtime environment

But let's leave the language JavaScript alone and try to think about the runtime environment. Meanwhile, JavaScript is available on many different devices, not only the browser and Node.js, but "things" like SmartTVs, smartphones, various micro-controllers, even our cars are able to run JavaScript. [Nashorn][nashorn] provides a JavaScript engine directly on the JVM and there are plenty of other scenarios I'm not going to mention. Yes, there are already many possibilities and the distribution of JavaScript is widely spread. This makes it easy to bring JavaScript-based applications to many, many users.

In doing so, the applications don't need to be written in JavaScript itself; they only run in JavaScript. With GWT, Vaadin, DukeScript, and others, there are already frameworks which produce executable JavaScript code that is programmed in another language. [TypeScript][typescript] makes it possible to write statically written code and transpile it to standard JS. While doing so, it is possible to use existing libraries as dependencies and program against their APIs. That's a huge benefit, as existing ecosystems can be (re-)used and they don't need to deal with the language in which they are implemented. [Scala.js][scalajs] follows a similar approach to develop type safe front-end components with Scala code. With the use of proper bindings, it's possible to use in Scala.js libraries like jQuery, Angular, React.JS and others and transpile this Scala code to executable JavaScript code.

Perhaps we have to consider JavaScript engines as kind of binary runtime, like the JVM is a binary runtime. Of course, some people will ask "why". With the JVM we already have a proper runtime and don't want to have this insecure JavaScript as a runtime. But is JavaScript really so insecure? In my opinion, it is not. Especially if the transpiled/executable code was originally written in a typed language. It's also unlikely that anybody writes Java bytecode (OK, not so many of us do). And as I already mentioned, the distribution and thus the reachability of a widely spread user base is very easy and already set in many parts.

## JavaScript can do more

Just because something already exists (e.g. the JVM), that doesn't mean something similar (JavaScript runtimes) must also be non-existent. If there wouldn't be any interest and/or needs in the community and industries, there wouldn't be this evolution in the JavaScript ecosystem. This is what I know about economics and this "supply and demand" thing.

The evolution of the whole JavaScript ecosystem is still in its infancy, however many things already exist. Front-end components and libraries are just a part of the big picture. JavaScript is able to do more. But it will still take some more time. I know that many people want to disagree and contradict me, and in a few years they will use my statements against me. But, as we all know, ["there will eventually be a market for maybe five computers in the world..."](https://en.wikipedia.org/wiki/Thomas_J._Watson#Famous_misquote)


[react]: http://reactjs.org
[jsx]: https://jsx.github.io
[nashorn]: http://www.n-k.de/riding-the-nashorn
[typescript]: https://www.typescriptlang.org
[scalajs]: https://www.scala-js.org
