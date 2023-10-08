---
title: "About me"
date: 2022-04-23T08:15:30+02:00
draft: false
siteTitleFirst: true
---

My name is Filippo, and I'm currently {{< age-years 2001-07-25 />}} years old. This is my hub for showcasing my latest personal projects, blog articles, and attempts at art.

## Hobbies & Interests
I live in Graz, Austria. In October 2023, I started pursuing a master's degree at Graz Technical University while working as a software developer. In my free time, I enjoy rock climbing, coding my personal projects, and spending time with my friends. Sometimes, when I stumble upon a new topic that sparks my interest, it draws me in for a few weeks and learn as much as I can about it. This could be a new programming language, 3D modeling, or compute shaders.

After completing my bachelor's degree in October 2022, I spent five months exploring Southeast Asia. I combined work and travel, visiting Thailand, Laos, Vietnam, the Philippines, Japan, South Korea, and Singapore. I had a great time, and I'm grateful for the opportunity.

{{< felt-map "https://felt.com/embed/map/Asia-qRplPaN1Qg9B2Szi4dBsvEC?lat=21.21&lon=120.11&zoom=3.6" >}}
    My route through Southeast Asia.
{{< /felt-map >}}


## Experience

I'm currently working at [Studo](https://studo.com/en/). I started in 2020 as a **Full-stack Software Engineer**, working on new features in all parts of the Studo ecosystem. As time passed, I grew within the company and received more responsibilities. These include the roles of **Project Lead Developer**, handling project communication and development with selected clients, and **Head of User Support**. Thanks to the trust placed in me and the variety of roles, I was able to improve my skills in many different areas and gain new expertise.

The Studo App is an app for university students. It integrates useful information (calendar, grades, courses & more) and all university services into one place. The app is used by more than 300 thousand students across Europe. We also create solutions for universities to digitalize processes like *attendance tracking* and more.


### Mobile App Development
{{< notice warning >}}
Keywords: Kotlin • Swift • SwiftUI • Flutter • Dart • Realm • Java
{{</ notice >}}

I worked on new features and bug fixes for our native Android and iOS apps. My pretty cross-platform game 'Four in a Row' is written in Flutter.

- I worked on extending the app's mail client to support authentication via OAuth. Includes Azure app registration, authorization via web view, refresh token handling, error recovery, and adaptation of the existing mail problem diagnosis.

- We created a digital student card in a one-week hackathon. My main focus was to implement a holographic verification effect using layered canvas drawing and the device's gyroscope sensors.

- The app is monetized via a freemium model. Free users see in-app banner ads and I was tasked with the integration of a new third-party ad provider SDK. 

- In 2020, I developed a game using Flutter and published it on the Play Store. This taught me so much about the following topics.
    - Mobile development with Flutter, including advanced state handling and animations.
    - UI/UX design.
    - Networking, reconnection handling, ensuring stable connections.
    - Writing a resilient and authoritative game server in Rust.
    - Publishing an app on the Play Store, achieving over 5500 downloads.
    - Gathering user feedback.
    - CI/CD to improve my own developer experience.
    - [Read more about my game Four in a Row]({{< ref "/blog/four-in-a-row" >}})


### Modern Web Development
{{< notice warning >}}
Keywords: Kotlin • React • JavaScript • Elm • Typescript • Svelte • HTML • CSS
{{</ notice >}}

As my biggest project, I created a custom survey creation platform and then wrote my thesis about it. [Read more about the survey creator]({{< ref "/blog/bachelor-thesis" >}}). It is integrated into the Studo Newsroom, which is a platform that allows partner companies to publish content for the Studo news feed. 

Over the course of multiple months and a few UI iterations, I was responsible for development of the survey creator, survey fill-out page, and response evaluation views. Later, I worked with a colleague to integrate the survey fill-out page into the app, allowing users to respond right from the news feed. This proved to be very valuable, as it increased survey response rates. 

{{< image src="images/survey-creator.png" alt="The survey creator" >}}
    The survey creator.
{{< /image >}}

Like most of Studo's web projects, the survey creator is written in Kotlin and transpiled to JavaScript. Kotlin provides a number of benefits for developers, especially on smaller teams. Everything is type checked and because we can access the same class from both backend and frontend code, API contracts are kept at the compiler level. We use React through a Kotlin wrapper that ensures type safety for all properties and functions.

In my Bachelor thesis, I compared the survey creator against Google Forms and SurveyJS. Spoiler alert: mine was found to be easiest to use, hitting one of the main goals. The thesis and thesis defense were both graded `very good` (1). I've summarized the creation process and thesis findings in a blog post, which you can read [here]({{< ref "/blog/bachelor-thesis" >}}). 


### Backend Services, Databases, DevOps
{{< notice warning >}}
Keywords: Kotlin • Rust • MongoDB • Ktor • SQL • Java • Python • Unix • Nginx • Node • Traefik • Docker
{{</ notice >}}

We were contracted by the [University of Applied Sciences Campus02](https://en.campus02.at/) to create a digital attendance tracking solution. As part of this, I developed a service that syncs all data between the campus management system and Microsoft Teams. This included the following.
- Ongoing communication with our client. Reacting to their wishes and bug reports.
- Writing a custom wrapper for the MS Graph API featuring easy authentication, rate limiting, exponential backoff, and more.
- Knowing when to ask for help from senior coworkers.

I deployed the server for my game 'Four in a Row' on a cheap Ubuntu server. Writing systemd and nginx configuration from scratch introduced me to the world of DevOps. Later, I went on to writing my own CD tool that automatically publishes new server and app versions.


### Head of User Support

I am in charge of coordinating first, second, and third-level support. I investigate challenging cross-project issues when they come up, and bring in my coworkers' expertise to ensure our users are happy. As the number of developers and support team members grew, I introduced new processes, regarding ticket assignment, hand-off, and inter-team communication.


### Interpersonal & Development Processes

{{< notice warning >}}
Keywords: Communication  • Agile methodology • Effort estimation • Requirements engineering • Hiring • Mentorship
{{</ notice >}}

As it turned out, there is much more than coding that makes a great Software Engineer. I learned how to communicate effectively with coworkers, across teams, and with clients. This was great for my personal growth.

I am also partly responsible for hiring and onboarding new developers. This entails coding interviews, decision-making and mentorship. I helped introduce many current developers to our tech stack and conventions.


## More
- Check out my [LinkedIn profile](https://linkedin.com/in/filippo-orru).
- If you're curious about what I've been up to, take a look at [my recent blog posts]({{< ref "/blog/" >}}).
- Want an app suggestion? I like using [Harmonic](https://play.google.com/store/apps/details?id=com.simon.harmonichackernews&hl=en) to browse hacker news.