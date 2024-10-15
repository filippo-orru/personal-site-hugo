---
title: "AI Powered Climbing App"
subtitle: "TopOut"
date: 2024-06-26T09:55:28+02:00
draft: true
description: TODO

ongoing: false
featured: true
featuredImage: featured.jpg
featuredImageSource: ['Filippo Orru']
images: ['social.jpg']
categories: ['project']
showToc: false
---

<!--
# Plan
- Goals
    - present this cool project
    - demonstrate skills:
        - modern Android development
        - machine learning
    - combine climbing and programming hobbies

- Who is this written for
    - me
    - people interested in ai and climbing
    - possible recruiters

- Length: medium

# Structure
- what pain points
- how does topout address them
    - demo video
- tech details
- conclusion

{< image src="images/image.jpg" alt="ALT" >}}
DESCRIPTION
{< /image >}}

-->

Recording yourself while climbing is a great way to spot mistakes and improve your skills. However, using the camera app to record presents _multiple issues_.

# Pain Points

1. **Overly long videos**

    Climbers need to rest between attempts, which means the sections of actual climbing are buried in a long video that's just recording the wall. This **wastes a lot of time** when reviewing, and not to mention valuable phone storage.

2. **Poor organization**

    Let's say you climb every three days. Videos of your greatest moments and failed attempts will be **mixed in your gallery**, along with hundreds of other photos and videos. Finding a specific moment can take a while, and manually organizating clips takes forever.

# Top Out

{{< notice type="info" >}}
👉🏻 Top Out uses AI to detect when you start and end an attempt, **saving time and storage**.
- 🧗 Easily record climbs 
- 🧠 Automatically detect when each attempt starts and ends
- 📋 Great overview of all attempts of past climbs
- ⚙️ Edit start and end times of recordings
{{< /notice >}}

{{< video src="demo.mp4" >}}
Demo of the app
{{< /video >}}

The home screen shows all your recordings, sorted by date. To create a recording, tap the plus button and position your phone on the ground. When you're ready, tap record! Later you can view all attempts done during the recording and edit them if necessary. By default, the app always saves the whole video, allowing you to edit *when exactly* an attempt starts and ends.

## How does it work?
The app uses **two machine learning models** to detect when you start and stop climbing. First, a segmentation model recognizes the gym **floor**. Then a pose detection model finds the **location of your feet**. When your feet leave the floor area for a bit, the attempt starts. When you top the route or fall, your feet will be back in the floor area, and the attempt is stopped.

# Tech Details

{{< image src="topout-recording-screen-overview.png" alt="Diagram showing the components used by the recording screen" >}}
Diagram showing the components used by the recording screen.
{{< /image >}}

Source code: [github.com/filippo-orru/top-out-app](https://github.com/filippo-orru/top-out-app).

The Android app is written in Kotlin and uses [Jetpack Compose](https://developer.android.com/compose). Data about recordings and attempts is stored in a [Room database](https://developer.android.com/training/data-storage/room). 

The recording screen needs to interface with several components, including the camera feed, the [segmentation](https://ai.google.dev/edge/mediapipe/solutions/vision/interactive_segmenter) and [pose detection](https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker) ML models, and a helper class that smoothes the pose data using a [one euro filter](https://gery.casiez.net/1euro/). Every time an image is received from the camera feed or one of the models returns a result, an immutable state update is sent via a stream. The view layer listens to the update stream and recomposes itself when the state changes.

The app is currently not available to download.

In the future, the app could be extended to include social features, such as a local leaderboard. It could match routes visually, by comparing the positions of relevant holds.

# More
- Check out my other projects and blog posts [here!]({{< ref "/blog/" >}})
- Learn more [about me]({{< ref "/about-me" >}}).
- Read how I built [my own split keyboard]({{< ref "/blog/lily58" >}}).