---
title: Frequently asked questions about Nashorn and Node.js
tags:
- nashorn
- nodejs
- javascript
---

During many of my talks about Nashorn, Node.js on the JVM and related topics, I frequently get asked these kinds of questions and I'd like to try to give some answers on these:

### Is it possible to run [_npm package of your choice_] on Nashorn?

Yes, it is possible. But you have to distinguish the use case, or, the package content itself:

- If you wanna just use a pure JavaScript-only package, without the need to have access to the Node-API, then you can use
 - [jvm-npm](https://github.com/nodyn/jvm-npm)  
 which is a ***NPM compliant CommonJS module loader for the JVM***. With _jvm-npm_ it becomes possible to use the `require` function to load other modules into your script context.
- if you want to use NPM packages which require access to the Node.js API, you need this API layer on top of Nashorn for the JVM (as Node.js is the API layer on top of V8). Lucky us, there are two alternatives, providing the Node-API on the JVM:
 - [Avatar.js](https://avatar-js.java.net)  
 initiated by Oracle, but unfortunately there's no more development on this project (R.I.P.)
 - [Nodyn](http://nodyn.io)  
 initiated from _project:odd_ by Red Hat


### What about packages with native language access?

Currently you can't run them in Avatar.js or Nodyn, because they run inside the JVM sandbox, so you don't have access to native languages (like C/C++).  
There are discussions out in the wild, if it is possible to use Jython to run Python-based NPM packages inside the JVM, but I don't know of any approach/project testing this.


If you have any other questions related to Nashorn and Node.js, don't hesitate to ask, I'll try to give an appropriate answer!
