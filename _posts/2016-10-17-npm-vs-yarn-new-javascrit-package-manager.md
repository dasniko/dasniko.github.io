---
title: NPM vs. Yarn - new JavaScript Package Manager
tags:
- javascript
- npm
- yarn
---

Ok, so Facebook published last week it's own package manager named [Yarn](https://yarnpkg.com/).
Following Facebook, Yarn should be fast, secure and reliable. It should be the "better" NPM for package dependency management for JavaScript projects. Ok, let's install it. As I've already NPM on my machine, it's easy:

    npm install -g yarn

(otherwise see [here](https://yarnpkg.com/en/docs/install))
After that, yust use Yarn as a drop-in-replacement for NPM.
I wanted to know, if it's really that faster and did some measuring of my current project with a lot dependencies (I always deleted the `node_modules` folder before running the commands):

    $ npm install > 1:53 mins
    $ yarn        > 1.39 mins

Ok, that was not that much faster. But, and this is the trick: Yarn becomes much more faster, if you run it after the first time when it has to fill it's offline cache.

_Wait, what? Offline?_ Yes, Yarn caches all packages it downloaded once, no matter for which project. So, if you have a dependency in project A and B, you just have to download it one time. It's not being downloaded every time you do a install process. This is not onyl much more faster, because Yarn doesn't have to check the central repository, you can use it also when you don't have any internet connection during travel or so.

So, the second run (again with deleted `node_modules` folder) with Yarn resultet in:

    $ yarn       > 18 secs

That's pretty impressive! Wow! Fast!

<blockquote class="twitter-tweet" data-lang="de"><p lang="en" dir="ltr">npm install: 1:53m<br>yarn: 1:39 (1st time)<br>yarn: 18s (2nd time)<br><br>😀👍 <a href="https://twitter.com/hashtag/yarn?src=hash">#yarn</a></p>&mdash; Niko Köbler (@dasniko) <a href="https://twitter.com/dasniko/status/786883060138647552">14. Oktober 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Oh, yes, of course you can use the same NPM repository as before, Yarn is able to use it!

If you want to know more about Yarn, visit the [official website](https://yarnpkg.com/), and/or have a look at [this awesome cheatsheet](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc)!
