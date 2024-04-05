---
title: "Busy Friends Make Scheduling Hard"
subtitle: "... but quando.events makes it easy!"
date: 2024-04-04T16:36:08+01:00
draft: false
description: How I built a site that makes it easy to find time to meet your friends in your schedule in 10 days.

ongoing: false
featured: true
categories: ['project']
featuredImage: featured.jpg
featuredImageSource: ['Name', 'https://unsplash.com/@XXX_username_XXX?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText']
---

<!--
# Plan
- Goals
    - acquire users
    - demonstrate skills

- Who is this written for
    - me
    - potential employers
    - 

- Length:medium

# Structure
- intro
    - what' the problem?
    - solution
- app overview
- tech stack
- challenges
- conclusion

{< image src="images/image.jpg" alt="ALT" >}}
DESCRIPTION
{< /image >}}

-->

Ever tried planning an activity with three or more busy friends? You know how hard it can be. It inevitably takes a dozen messages going back and forth, trying to find out where your schedules align.

{{< notice "info" >}}
**That's why I created [www.quando.events](https://www.quando.events), a simple & free website that makes it easy to schedule meetings with friends.**
{{</ notice >}}

{{< image src="images/screenshot-1-arrows.jpg" alt="Overview of a meeting page" >}}
Meeting overview with highlighted overlaps where both 'You and Alex' have time.
{{</ image >}}

How it works:
1. Create a new meeting

2. Select your free time slots

3. Share the link with your friends

4. Meet in the overlap

Keep on reading to learn more about how I did it, or try it out now: [Create a new meeting](https://www.quando.events).

{{< table-of-contents >}}

# Concept
When starting to create the project's concept, the goal was to **focus on an MVP** and keep complexity as low as possible. The initial name was 'meet me', which got superseded by 'quando.events' later on.

For the first UI sketches I drew, I wrote down these notes:

{{< notice type="warning" title="Concept notes" showIcon=false >}}
Main flow: 'share free time slots with a group'
- I can see my Google Calendar & other calendars
- Button 'Share free times with group'
- Drag to select (30m increments)
- Generate custom link & share via e.g. WhatsApp
- Other people can open the link to view my availability and add their own availability
  - When others add their time slots, I get a push notification
{{</ notice >}}

The sketch shows five screens:
1. Home with 'add' button
2. Bottom sheet to select 'single event' or 'friend group'
3. Calendar view to select free time
4. Edit event details
5. Share with friends. 

{{< image src="images/sketch-1-add-event-flow.jpg" alt="First UI sketch \"create event\" flow." >}}
First UI sketches of the 'create event' flow.
{{</ image >}}

---

In the second sketch, I simplified the layout but still kept the three distinct steps to create a meeting: 'your name', 'select times', and 'invite friends'. The released version differs a bit, but the simple concept is still present. The biggest change was merging multiple screens into the calendar view by using dialogs for different actions (import calendar, or invite friends).

{{< image src="images/sketch-2-add-event-flow-arrows.jpg" alt="Second UI sketch \"create event\" flow." >}}
Second simplified UI sketch of the 'create event' flow.
{{</ image >}}

---

To design the landing page, I asked myself a few questions and tried presenting the most important information first.

{{< notice type="warning" title="Concept notes" showIcon=false >}}
On first open, I need to explain:
- What is this for?
- What's the benefit?
- How does it work?
- What's the catch?
{{</ notice >}}

{{< image src="images/sketch-desktop-landing.jpg" alt="Sketch of the home page and final product." >}}
Sketch of the home page and final product.
{{</ image >}}

{{< image src="images/sketch-desktop-calendar.jpg" alt="Sketch of the calendar view and final product." >}}
Sketch of the calendar view and final product.
{{</ image >}}


# Tech
{{< notice type="warning" >}}
The project is open source! [github.com/filippo-orru/quando.events](https://github.com/filippo-orru/quando.events)
{{</ notice }}

I went from the idea to release in just 10 days. Usually, I work with React, Flutter, or static websites, but for this project, I wanted to try out a new stack. I went with [Nuxt](https://nuxt.com), a meta-framework that bundles Vue with a backend and some other helpful bits into one compelling package. It offers great DX and enables extremely fast iteration.

Stack:
- Frontend
    - [Vue 3](https://vuejs.org/) for all UI. Includes server-side rendering with hydration.
    - [Typescript](https://typescriptlang.org), because if I have to use JS, I'd like to have types, please.
    - [Tailwind CSS](https://tailwindcss.com), for maintainable styling.
    - [Pinia](https://pinia.vuejs.org/), for managing state and persisting to local storage.
- Backend
    - API: [Nitro](https://nitro.unjs.io) with Websocket support, for sending real-time updates.
    - Database: [Redis](https://redis.io/) as a simple key-value store for the meeting data.
    - [Plausible Analytics](https://plausible.io/) because it's privacy-friendly and can be self-hosted
- DevOps
    - [Hetzner](https://www.hetzner.com/cloud/) for my cheap VPS. It powers all my services, including this website, *quando.events*, my [Four in a Row]({{< ref "/blog/four-in-a-row" >}}) game, and more.
    - [Traefik](https://traefik.io/traefik/) to proxy requests to the service.
    - [Docker Compose](https://docs.docker.com/compose/) to easily build and deploy the bundled Nuxt app, Redis, and Plausible.


## About Nuxt & Vue
Honestly, working with Nuxt was really pleasant. I've read that "opinionated products breed passionate customers" and this certainly rings true in the case of Nuxt. If you follow the conventions, *everything just works*.

Routing is based on directories by default. Server-side rendering works out of the box, which is important for good SEO and fast page loads. Of course, you still get all of Vue's reactivity after the page is *hydrated*, enabling highly interactive pages. 

Vue offers a lot of useful built-in components, like [transitions](vuejs.org/guide/built-ins/transition). Adding dialogs with [Headless UI](headlessui.com/vue/dialog) was a breeze.


# Challenges
Funny enough, the hardest part wasn't building the rather complicated calendar UI. Instead, it was getting Google's approval for the 'import events' functionality. There are lots of rules to follow. Some are obvious (add a privacy policy), and some aren't (make sure to show the 'AppId' in the browser's URL bar in your demo video).

{{< notice "info" >}}
To try it out, head over to [www.quando.events](https://www.quando.events) now, and schedule a meeting with friends.
{{</ notice >}}

# More
- Read [how I redesigned this website]({{< ref "/blog/updating-site-theme" >}}).
- Learn more [about me]({{< ref "/about-me" >}}).
- Check out [my other posts]({{< ref "/blog/" >}}).
- Find me on [LinkedIn](https://linkedin.com/in/filippo-orru).