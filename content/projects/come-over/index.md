---
title: "Meet Your Friends (easy) — A Full Stack Project"
description: "The world needs another solution to schedule meetings. Tech details and backstory."
date: 2022-05-30T00:00:00+02:00
images: ['projects/come-over/preview.png']
featuredImage: /projects/come-over/featured.png
featuredImageSource: ['Daniel McCullough', 'https://unsplash.com/@d_mccullough?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText']
draft: false
ongoing: true
---

Say you're part of a friend group that meets semi-regularly. Establishing *when* to meet takes anywhere from 10 to 50 messages over the course of an hour up to a week. Looks something like this:

> yesterday at 11:01 AM \
**What about Friday night?** \
\
yesterday at 11:02 AM \
**fine by me but I think @Friend isn't free** \
\
yesterday at 9:57 PM \
**can't do friday..** \
\
today at 1:28 PM \
**Hm friday is ok but can we do earlier? I'm only free between 2 and 5 pm**

... and so on and so forth. I do this dance at least twice a month, probably more often. Larger groups mean waiting even longer until a decision can be made. 

This is what a friend and fellow student pitched to me and two others. After getting past the initial scepticism, which we have about most ideas, we realized how helpful this could actually be. The point was driven home quite well that same night: we wanted to find a time to meet and ended up having a conversation similar to the one above.

Of course, there are many solutions to the problem of finding a suitable meeting time. In my organization, we all use Google calendar, so I can see multiple peoples' calendars at once and assume that "free times" during working hours are likely actually free. However this doesn't really work for a friend group, since 1. it requires all participants to always enter their busy times, 2. requires a Google organization and 3. makes all calendar contents public internally by default. Using a better solution, you could communicate when you're free and willing to meet by selecting a few time ranges. 

A better fit could be survey tool like [strawpoll](https://strawpoll.de/) or one that even allows selecting time ranges, like [doodle](https://doodle.com/). However these require one person to take the lead and some setup effort. Also, some use-cases are poorly supported, like finding time for a multi-day event like a holiday and connecting your personal and work calendar to know when you're free.

## Two flows
We've identified two basic flows that we want to support:

*I want to meet with a set group of friends*
1. Create event inside existing group OR create event and invite friends 
1. Everyone selects their free times 
1. Best matching time is highlighted & selected 
1. Event with chat is created

and

*I'm open to meet any of my friends during the times I've marked as free*
1. Mark free times
1. Multiple people are free during a time range
1. Create a temporary event that others can accept

---

## Tech
Flutter is awesome for quick prototyping and also meets our needs to be accessible via mobile *and* web.

{{< video src="screenvideo-1.mp4" alt="Video showing interaction with the first draft of a calendar view" >}}
First draft of a calendar view.
{{< /video >}}

With in a couple of hours, I had developed a first demo. Users are able to drag to select times in 30 minute intervals. The most time was spent trying to debug issues with dragging upwards instead of downwards and with the selection animation. For this demo, most values were hard-coded. The days were simply an array of strings and obviously selected time ranges would be lost after restarting the app. Just a couple of days later, I had improved in quite a few areas.

{{< video src="screenvideo-2.mp4" alt="Video showing interaction with the second draft of the app" />}}

Most notably, a bottom bar was added to navigate between the home screen and a chat view. In the calendar view, users can now tap on a selected time range to see details. An outline around a time range indicates that a friend is available during this time. Tapping on this reveals the two friends that are available. After selecting whom you'd like to meet, you can create a temporary chat with them. The displayed messages are fake / hard-coded 😄.

---

The **backend** is written in Kotlin with [Ktor](https://ktor.io). During our studies, we had a course on Kotlin and were created a small app, so the language fit our skills. Also, I use Kotlin and Ktor at work extensively.

Writing API endpoints with Ktor is really simple: (shortened for readability)

```kotlin
// Configure routing
post("/login") { login(call) }

// Handles incoming request
fun login(call) {
  class UserLogin(val email: String, val password: String)

  val loginData = call.receive<UserLogin>() // Automatic deserialization
  val sessionToken = Databases.users.login(loginData)

  if (sessionToken == null) {
    call.respondText("", status = HttpStatusCode.Unauthorized)
  } else {
    call.respond(UserLoginResponse(sessionToken)) // Automatic serialization
  }
}
```

All data is stored using MongoDB. Querying it is really easy *(and type-safe!)* thanks to [Katerbase](https://github.com/studoverse/katerbase). Katerbase is a Kotlin wrapper for the MongoDB Java driver and allows us to write queries like this:

```kotlin
class BackendUser(
  val email: String,
  // ...
)
val collection = connection.getCollection<BackendUser>()

val user = collection.findOne(BackendUser::email equal "hello@filippo-orru.com")
```

As development and project planning moves on, I plan to expand this article and may write blog posts about specific issues we encounter. Stay tuned :)