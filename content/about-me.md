---
title: "About me"
date: 2022-04-23T08:15:30+02:00
draft: false
siteTitleFirst: true
---

My name is Filippo, and I'm currently {{< age-years date="2001-07-25" >}} years old. This is my hub for showcasing my latest [personal projects]({{< ref "/categories/project" >}}), [blog articles]({{< ref "/blog" >}}), and attempts at [art]({{< ref "/art" >}}). 

On this page, I want to give an overview of my interests and experience. If you want to read my **resume**, head over to [LinkedIn](https://www.linkedin.com/in/filippo-orru/).

# Right now

I live in Graz, Austria. In October 2023, I started pursuing a master's degree at [Graz Technical University](https://tugraz.at) while working as a software developer ([↓ Experience]({{< ref "#experience" >}})). The topics that interest me most right now are **deep learning** and **AI-powered information retrieval**.

After completing my bachelor's degree in October 2022, I spent five months exploring **Southeast Asia**, combining work and travel. I visited Thailand, Laos, Vietnam, the Philippines, Japan, South Korea, and Singapore. I had a great time, and I'm grateful for the opportunity.

| When?        | What? |
|--------------|-------|
| 2020 - today | Software Developer @ Studo [↓ Read more]({{< ref "#experience" >}}) |
| 2023 - today | Start master's degree at [TU Graz](https://tugraz.at) |
| 2019 - 2022  | Bachelor of Science in Mobile Software Development |
| 2019         | Finish school, move to Graz |

# Hobbies & Interests

In my free time, I enjoy rock climbing, coding my [personal projects]({{< ref "/categories/project" >}}), and spending time with my friends. Sometimes, when I stumble upon a new topic that sparks my interest, it draws me in for a few weeks. I can't help but learn as much as I can about it. This could for example be a new programming language, 3D modeling, or compute shaders.

# Table Of Contents

{{< table-of-contents >}}

# Experience

I've been coding since I was 14 (that's more than {{< age-years date="2015-05-15" class="no-highlight" >}} years!). For the past {{< age-years date="2020-07-08" withComma="true" class="no-highlight" >}} years I've been developing software professionally. 

I started at [Studo](https://studo.com/en/) in 2020 as a **Full-stack Software Engineer**, working on new features in all parts of the Studo ecosystem. As time passed, I grew within the company and received more responsibilities. Today, I am a **Project Lead Developer**, handling project communication and development with selected clients, and **Head of User Support**. Thanks to the trust placed in me and the variety of roles, I was able to improve my skills in many different areas and gain new expertise.

{{< notice info "What is Studo?" >}}
The Studo App is an app for university students. It integrates useful information (calendar, grades, courses & more) spread across multiple services into one place. The app is used by more than 300 thousand students across Europe. We also create solutions for universities to digitalize processes like *attendance tracking* and more.
{{</ notice >}}

## Modern Web Development
{{< notice type="warning" title="Keywords" showIcon=false >}}
React • Vue • HTML • CSS • Angular • JavaScript & TypeScript • Kotlin • Elm • Svelte
{{</ notice >}}

As my biggest project so far, I created a custom survey creation platform and then wrote my bachelor thesis about it. It is integrated into the Studo Newsroom, which is a platform that allows partner companies to publish content for the Studo news feed. 

**Try it out here: [studo.co/connect/survey-creator](https://studo.co/connect/survey-creator).**

I was responsible for the entire design and development, which required multiple UI iterations over the course of a few months. Later, I worked with a colleague to integrate the survey fill-out page into the app, allowing users to respond right from the news feed. This proved to be very valuable, as it **increased survey response rates**. 

{{< image src="images/survey-creator.png" alt="The survey creator" >}}
The survey creator.
{{< /image >}}

Read [my blog post]({{< ref "/blog/bachelor-thesis" >}}) about the survey creator, or read the [official article on studo.com](https://studo.com/en/universities/studo-survey). 

Like most of Studo's web projects, the survey creator is written in KotlinJS and transpiled to JavaScript. Kotlin provides a number of benefits for developers, especially on smaller teams. Everything is type checked and because we can access the same class from both backend and frontend code, API contracts are kept at the compiler level. We use React through a Kotlin wrapper that ensures type safety for all properties and functions.

In my bachelor thesis, I compared the survey creator against Google Forms and SurveyJS. Spoiler alert: mine was found to be easiest to use, which was one of the main goals. I graduated with distinction. 

For a recent project, I created a website to simplify meeting busy friends. I went from concept to release in just 10 days, read more about it here: [Busy Friends make scheduling hard]({{< ref "/blog/busy-friends-make-scheduling-hard" >}}).


## Mobile App Development
{{< notice type="warning" title="Keywords" showIcon=false >}}
Kotlin • Swift • Flutter • Dart • Realm • Java • UI Design
{{</ notice >}}

- I worked on extending the Studo app's **mail client** to support authentication via **OAuth**.

- We created a digital student card in a one-week hackathon. My main focus was to implement a **holographic verification effect** using layered canvas drawing and the device's gyroscope sensors.

- The Studo app is monetized via a freemium model -- free users see banner ads. I was integrated a new **third-party ad provider SDK** to increase revenue. 

- My pretty [cross-platform game 'Four in a Row']({{< ref "blog/four-in-a-row" >}}) is written in Flutter.
    Published a game on the Play Store and getting >5000 downloads taught me so much.
    - Mobile development: advanced state handling, animations, UI/UX design.
    - Ensuring stable connections (reconnection handling).
    - Creating a fast, authoritative game server in Rust.
    - CI/CD to improve my own developer experience.
    - Launching an app and listening to user feedback.


## Backend Services, Databases, DevOps
{{< notice type="warning" title="Keywords" showIcon=false >}}
Kotlin • Rust • MongoDB • Ktor • SQL • Java • Python • C++ • Unix • Nginx • Node • Traefik • Docker
{{</ notice >}}

As part of a cooperation project with a university in Graz, I developed a service that imports data from the the university's systems and synchronizes it to **Microsoft Teams**. For example, it creates teams for each course and **automatically creates events**. This service is now included as a part of [Studo Flow](https://studo.com/en/administration/flow).

My tasks included:
- Ongoing communication with our client. Reacting to their wishes and bug reports.
- Writing a custom wrapper for the MS Graph API featuring easy authentication, rate limiting, exponential backoff, and more.
- Knowing when to ask for help from senior coworkers.

---

I deployed the server for my game 'Four in a Row' on a cheap Ubuntu server. Writing systemd and nginx configuration from scratch introduced me to the world of DevOps. Later, I went on to writing my own **CD tool** that automatically publishes new server and app versions.


## Interpersonal & Development Processes

{{< notice type="warning" title="Keywords" showIcon=false >}}
Communication  • Agile methodology • Effort estimation • Requirements engineering • Hiring • Mentorship
{{</ notice >}}

As it turned out, there is much more than coding that makes a great Software Engineer. I learned how to **communicate effectively** with coworkers, across teams, and with clients. This was great for my personal growth.

I am also partly responsible for hiring and onboarding new developers. This entails coding interviews, decision-making and **mentorship**. I helped introduce many current developers to our tech stack and conventions.


## Head of User Support

As part of my work at Studo, I am responsible for managing our **excellent user support**. This means I coordinate first, second, and third-level support, I investigate challenging **cross-project issues** when they come up, and call upon my coworkers' expertise to ensure our users are happy. As the number of developers and support team members grew, I introduced **new processes** regarding ticket assignment, hand-off, and inter-team communication.

In March 2024, I started automating parts of the first-level support by leveraging LLMs. So far, the results look promising.

# More
- Check out my [LinkedIn profile](https://linkedin.com/in/filippo-orru).
- If you're curious about what I've been up to, take a look at [my recent blog posts]({{< ref "/blog/" >}}).
- Want an app suggestion? I like using [Harmonic](https://play.google.com/store/apps/details?id=com.simon.harmonichackernews&hl=en) to browse hacker news.