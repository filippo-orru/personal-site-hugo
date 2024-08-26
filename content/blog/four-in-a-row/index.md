---
title: "Four in a Row"
date: 2021-03-23T08:00:00+02:00
ongoing: false
featured: true
# featuredImage: fiar-screenshots.webp
# featuredImageSource: ['Fotis Fotopoulos', 'https://unsplash.com/@ffstop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText']
description: "A beautiful redesign of the all-time classic Four in a Row, written in Flutter. This is a pet project of mine, which I started during the first lockdown in March of 2020. It's available on Google Play and the web."
draft: false
categories: ['project']
---

{{< video src="showcase-1.mp4" alt="Startup animation" hidecontrols="true" >}}
Startup animation
{{< /video >}}

A beautiful redesign of the all-time classic game four in a row! With online multiplayer, local play, CPU battle, and much more.

Available for [Android](https://play.google.com/store/apps/details?id=ml.fourinarow) and the web: [play.fourinarow.ffactory.me](https://play.fourinarow.ffactory.me/).

{{< notice type="info" centered=true >}}⭐️ Over 5000 downloads in the Google Play Store ⭐️ {{</ notice >}}


The perfect game to lighten up boring hours - challenge your friends or play world wide.

## Features:
* Online multiplayer
* Collect points (SR) by winning ranked games
* Two players on one device
* CPU Battle
* (in development) change the game's theme
* Add your friends and challenge them
* Check out the leaderboards to find out who's the best (in development) 
* Chat with anyone while waiting for a match

{{< video src="showcase-2.mp4" alt="Gameplay" hidecontrols="true" >}}
Gameplay
{{< /video >}}

When I was in school, I used to play four in a row with a friend of mine. We kept our scores and were pretty even. During the first lockdown in April of 2020, I found myself with a lot of time to spare and started programming a version of Four in a Row with Flutter. First offering local versus, later expanding it to online multiplayer and adding extra features, like accounts, friends, CPU battle, chat and more.

You can check out the homepage at [fourinarow.ffactory.me](https://fourinarow.ffactory.me).

{{< video src="showcase-3.mp4" alt="Friends list UI" hidecontrols="true" >}}
Friends list UI
{{< /video >}}

Four in a row was my first "big" project, but it started out very small. In the beginning there was only the game board and you'd take turns playing on one device. Step by step, I expanded it with more features and whenever I noticed that the current data structure / architecture was not working, I rewrote large parts of the app to improve it. This took a lot of time, effort, and careful thinking. These failed attempts led to the project's architecture you can see today.

One example is the reliable online multiplayer. I created a very simple version first, but noticed that I often lost my connection, which caused the game to end for both players. To solve that, I came up with the idea to wrap each network message in a numbered package and re-send it when the connection was interrupted. This was inspired by the way TCP works.