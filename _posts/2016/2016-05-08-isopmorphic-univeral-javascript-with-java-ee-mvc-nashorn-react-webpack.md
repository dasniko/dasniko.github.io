---
title: Isomorphic/Universal JavaScript Applications with Java EE MVC, Nashorn, React.JS and Webpack
tags:
- isomorphic
- universal
- javascript
- reactjs
- java
- javaee
- mvc
- nashorn
thumbnail: /images/bookbox_app.png
---

So, React.JS is the current hype in web development!
And with the server-side rendering option, it's easy to write isomorphic/universal JavaScript applications:
Applications that run the **same code on client- and server-side** for rendering the proper artifacts.
Sometimes, I call it the new _write once, run everywhere_ paradigm...

Additionally, there's the new action based [MVC framework coming for Java EE 8][mvc], which allows not only to write cool applications, but also writing own `ViewEngines` for the rendering framework/library/technique of your choice. Together with **Nashorn**, this becomes a perfect fit for _rendering React Templates on the server side on a Java (EE) server,_ integrate and interact with your Java objects, and sending it then to the browser clients, where the application can continue working with pure JavaScript:

[![dasniko/ozark-react - GitHub](https://gh-card.dev/repos/dasniko/ozark-react.svg)](https://github.com/dasniko/ozark-react)

The `ReactViewEngine` implementation is done for the [Ozark][ozark] reference implmentation, but has no direct/hard dependencies to Ozark packages, so it can be used together with any other [JSR-371][jsr371] implementation (as soon as there are some available).

## The right tool: Webpack

Instead of transpiling and packaging all the JavaScript/ES2016 code on the Nashorn server, I've decided to this in separate build-step with the tools which fit best for these things, so I have full (but not heavy) NPM and Webpack integration in my Gradle/Maven build script. **Just use the right tool for the right job!** I did try doing multiple things directly with Nashorn but this is just unnecessary overhead and doesn't bring any benefit for the application itself. So, why not packaging the whole application with NPM and Webpack and just using the JS bundle on Nashorn and browser client!? That's really a good fit and works very well!

## How it works

I give you a short overview, about how the things working in my `ReactViewEngine`:

The class [`ReactViewEngine`][reactViewEngine] identifies from the `ViewEngineContext` the HTML template and the JavaScript function for server-side usage, which were specified in the [`ReactController`][reactController]. This controller provides also the appropriate data which should be used during rendering. The `ReactViewEngine` delegates for the actual rendering process to the [`React`][reactClass] class, which provides a thread-safe Nashorn engine instance with the JavaScript application bundle pre-loaded.

_Thread-safety is important, as it is possible to run multi-threaded JavaScript with Nashorn, but React.JS itself isn't implemented thread-safe (as it's not importand on Node.js and/or the browser)._

All the [JSX files][jsxFiles] will be packaged by Webpack during build to the application bundle `app.js`, which contains all the needed code - our own application logic as well as all the React functions. The main difference for client- or server-side rendering are the functions [`renderServer()` and `renderClient()`][indexJsx], which trigger the rendering process for the appropriate platform.

Last but not least, there's the HTML template [`react.jsp`][reactJsp] (for the ease of use, I took a JSP) which provides the HTML skeleton for the needed resources in the browser. Mainly the `<div>` element where to put the rendered content by React (and some other resources we need to get a nice looking webapp, like CSS and something similar).

The result is the web application you can see in the screenshot at the top of this post. That's it, no magic, just the proper use of technologies which fit together very well.


### A word on Isomorphic vs. Universal

There are several opinions out there on the terms and definitions of _"Isomorphic"_ and _"Universal"_.
I don't really care about which term to use, there's no favorite for me, just use whatever you like and don't complain..


[mvc]: https://mvc-spec.java.net
[ozark]: https://ozark.java.net
[jsr371]: https://www.jcp.org/en/jsr/detail?id=371
[reactViewEngine]: https://github.com/dasniko/ozark-react/blob/master/src/main/java/dasniko/ozark/react/ReactViewEngine.java
[reactController]: https://github.com/dasniko/ozark-react/blob/master/src/main/java/dasniko/ozark/react/ReactController.java
[reactClass]: https://github.com/dasniko/ozark-react/blob/master/src/main/java/dasniko/ozark/react/React.java
[jsxFiles]: https://github.com/dasniko/ozark-react/tree/master/src/main/resources/jsx
[reactJsp]: https://github.com/dasniko/ozark-react/blob/master/src/main/webapp/WEB-INF/views/react.jsp
[indexJsx]: https://github.com/dasniko/ozark-react/blob/master/src/main/resources/jsx/index.jsx
