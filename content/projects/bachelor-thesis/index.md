---
title: "Comparing Survey Creation Frameworks"
description: ""
date: 2022-10-01T10:00:00+02:00
draft: true
---

<!--Introduction-->

Decision makers in organizations are frequently confronted with this question:
> Third-party tools or custom development?

Third-party tools are **easy to set up** and require **lower initial investment**. Having one company that dedicates resources towards creating a product to be sold to many others often means this product is more polished than something that would have been developed in-house. It might cater to more use-cases, have more features and is updated more frequently, as the producer has an incentive to keep selling it and to innovate. However, third-party tools mostly offer no or limited integration with existing infrastructure. For example, Google Forms was not designed to be integrated into an exsting web application.

On the other hand, developing a custom tool for use within the company allows it to be developed exactly to meet custom requirements. Resources can be allocated to optimizing the most important user flows and use-cases. Additionally, the tool can be integrated into existing infrastructure much more easily. For example, a new reporting tool that gathers statistics logged by systems within the company can be integrated to be accessible right where users would expect it to be. No third-party domain to remember, no separate login to create.


# The three survey creation platforms
Using the example of a survey creation platform, I compared the custom-built solution "Studo Survey" against two third-party solutions, Google Forms and SurveyJS. Each has a different goal and different advantages. 

## Studo Survey — custom development
{{< image src="images/survey-creation-platforms/custom/creator.png" alt="Studo survey: creator view" >}}
    The creator view of Studo survey.
{{< /image >}}

The survey creaeator interface has the goal of being simple to use, allowing a range of users with widely different expertise to easily create a survey. It can be accessed from within the Studo Newsroom, which is a communication tool used by universities and company partners of Studo. The Newsroom allows creating posts that are published to a community of over 300 thousand students using the app.

The main content is the list of questions of the current survey, while there is a live preview floating on the right side, of what the survey will look like from the respondent's perspective. Questions can be of multiple types, including multiple choice and single choice, free text and quiz format. There's also the option of inserting an info text, which for instance could be used to explain the topic of the following questions. Survey items also have additional settings, such as marking them as optional.

{{< image src="images/survey-creation-platforms/custom/responses.png" alt="Studo Survey responses view" >}}
    Statistic for the responses to a survey question question.
{{< /image >}}

After gathing some responses. The results can be viewed in a list which shows each question with a bar chart or table, depending on the question type. Choice-questions also have the option to view the responses as a table.

While not yet available at the time of writing the bachelor thesis, when a survey is published alongside a post, users of the Studo app can now fill it out right in the news feed. Previously, users had to tap the post and then the survey would open in an in-app browser.

## Google Forms
{{< image src="images/survey-creation-platforms/google/overview.png" alt="Google Forms overview page" >}}
    Overview page of Google Forms, containing one survey.
{{< /image >}}

Google Forms is a tool included in Google's popular 'Google Docs Editors' suite of web applications. As most other products of the search engine giant, their survey creation tool is free to use. Unlike competitors such as [SurveyMonkey](https://surveymonkey.com/) or [Typeform](https://www.typeform.com/), Google Forms does not place strict limits on the number of surveys a user can create or the amount of responses a survey can receive.

{{< image src="images/survey-creation-platforms/google/creator.png" alt="Google Forms: create new survey" >}}
    Creator view of Google Forms.
{{< /image >}}

When creating a new survey, each question is laid out on its own card, which can be dragged to change the order of questions. 'Sections' can be used to split longer surveys into multiple steps. All questions in one section are shown in a list view and the user is can navigate to the next section freely. There is a variety of different question types, such as free text, multiple choice, checkboxes, linear scale, dropdown and even a file upload option.  This allows creating surveys or forms of many different styles and requirements.Google Forms also offers some customization options, like setting a custom theme or a header image for the survey.

{{< image src="images/survey-creation-platforms/google/responses-fullsize.png" alt="Google Forms statistics of responses" >}}
    Google Forms presents statistics for collected responses.
{{< /image >}}

Once a survey has been published and received a few responses, they can be analyzed by heading to the 'responses' tab of a survey. Just like the editing view, it shows a survey's responses as a list TODO

## SurveyJS
> "A robust full-cycle survey and form solution for your JavaScript application"

SurveyJS is made up of multiple modules that work together around the concept of providing your own database to store survey structure data as well as responses. These modules are the 'Survey Library' (allows users to fill out surveys), the 'Creator' and the 'Analytics' module, all readily available for easy installation via npm, alongside integrations for popular app frameworks like Vue or React. While the libraries are open source, a license must be bought for commercial use. 

{{< image src="images/survey-creation-platforms/surveyjs/creator-overview.png" alt="SurveyJS creator view" >}}
    Overview of SurveyJS' 'designer', its creation interface.
{{< /image >}}

The survey 'designer' allows creating surveys. It lists questions, categorized into pages, equivalent to Google Forms' sections. However, configuration options for the survey itself, as well as questions and question types go much further than the other two tools. Each component can be tweaked, styled, expanded and configured to one's content. There is a plethora of simple and advanced question types available, including matrix, rating, boolean, image picker, signature and more. The survey can be previewed at any time, to see how it will look to the user.


# Doing the *Real Science™️*
What are the advantages of a custom-built survey platform, compared to third-party solutions. To answer this question, it is assumed that someone *creating* a survey cares about the user experience offered by the survey creation interface and the survey's response rate. A user *responding* to a survey might care about how fast the page loads and how much data it requires to load. 

The three hypotheses this thesis aimed to answer are:

1. Hypothesis 1: Comparing the custom-built solution to the other two solutions in similar conditions should lead to a higher response rate. This would be due to its mobile-friendly design and low friction to fill out, i.e. few users leave the survey before completing it due to poor UX. 

    When answering a survey, users can go through multiple steps, e.g. opening, interacting, completing and closing it. This is the survey funnel. To answer this hypothesis, an A/B test was conducted, during which surveys created with each tool were randomly distributed to users of the Studo app. The number of users at each step of the survey funnel was recorded and compared between the three tools.

2. Hypothesis 2: KPIs related to the performance of the website that displays the survey fill-out view should also be better, since the scope of the custom-built solution is smaller than that of the other solutions.

    The performance of the survey fill-out view was measured using the Lighthouse tool. This tool is used to quantify the performance of websites and provides metrics such as: *Time to Interactive*, the time it takes for the page to become interactive, and *SpeedIndex*, how quickly the page contents are visually populated.

    Using these metrics, the performance of the survey fill-out view was compared between the three tools.

3. Hypothesis 3: The survey creation interface is expected to have a better subjective UX, as reported by users. This would be because of its integration into the existing tool Studo newsroom and it being easy to use and designed for the specific use case of creating surveys to be displayed on mobile devices, inside the Studo app.

    An unmoderated user test was performed to compare the subjective UX of the three tools. The test consisted of a user being asked to create a survey using each tool and then answering a few questions about their experience comparing the three tools.


## Response funnel comparison
As described above, a user filling out a survey goes through a so called funnel. First, they see the survey, triggering a *viewed* event. Then they may choose to *open* it, and afterwards *interact* with it (i.e. tap any element). Finally, users may *complete* it and then *close* it. The total duration between *open* and *close* is called the completion duration. At each step of the funnel, the user can decide to leave the survey. The goal of the A/B test was to compare the drop-off rates between the three tools. 

When the page completes loading, the 'opened' event is sent. But logging the 'interacted' event proved difficult for Google Forms, which was integrated using an iframe element. Browsers implement CORS protections to prevent malicious websites from detecting clicks on other websites. In this case, it prevented the enclosing page from detecting *onClick* events on the iframe. To solve this, a screen displayed before the actual survey, containing only a 'start' button, was added. Clicking the button was then used to indicate when the user interacted with the survey. 

Detecting when a Google Forms survey was completed was also difficult. Again, due to CORS measures implemented by modern web browsers, detecting when the user clicked the 'submit' button was not possible. Accessing any data of the iframe that might hint at the survey being completed, like the URL changing or the content height changing, is restricted by the browser. No workaround for this could be found, so instead of logging the *completed* event manually, the number of users who completed the survey, as reported by Google Forms, was used.

The 'closed' event was logged when the *onbeforeunload* event occurs. The problem here was sending the event to the server. Since the page is unloading when the event fires, i.e. about to be closed, any http request sent would be cancelled before it could be completed. To solve this, the event was sent using the *navigator.sendBeacon* API, which allows sending requests even when the page is unloading.

To conduct the A/B test, three posts were published to users of the Studo app in August 2022, each post containing a survey created using one of the three tools. The surveys were distributed randomly to users, so that each user received a survey created using one of the three tools. After around 48 hours the posts were unpublished, each post had reached the target of receiving ca. 14,000 impressions.

{{< image src="images/20221006202338.png" alt="Table of funnel events for A/B test" >}}
    Measurement of funnel events for survey comparison A/B test.
{{< /image >}}

TODO analysis

## Page load speed
Measuring page load time is not straightforward, but SpeedIndex and `time to interactive' are decent metrics.  TODO more?

SurveyJS was measured the way it would be deployed in a production environment. This means that the survey runner library is integrated into the Studo Newsroom, Studo's existing react-based project. It has some additional overhead, as the enclosing project needs to load before the actual SurveyJS runner library can load. The same applies to the custom-built survey fill-out view. As common with React apps, page first loads the app's JavaScript and displays a spinner, while in the background, a network request is made to download the requested survey's structure, which is then rendered by the client. Google Forms was also enclosed in the existing Studo Newsroom project for measurement purposes. In real-world use, the link to a Google Forms survey would be distributed directly, without being embedded into the Studo Newsroom project, so this was used to measure its performance. 

The test was performed using webpagetest.org. It offers Lighthouse testing using emulated devices with consistent CPU power and a stable and consistent internet connection. The SpeedIndex and `time to interactive' values that the performance test measured are displayed in the table below.

{{< image src="images/20221006203058.png" alt="Table of page load speed metrics" >}}
    WebPageTest performance test results.
{{< /image >}}

Unlinke the other two tools, Google Forms uses server-side rendering, which explains why it has the best (lowest) SpeedIndex - the HTML is prepared on the server and sent to the client. As explained above, Studo Survey and SurveyJS both first load only the app's JavaScript and then make a network request to download the survey's structure. They need a second network roundtrip and also the browser needs additional time to parse and execute the app's code to display the survey. This is why they have a worse SpeedIndex than Google Forms.


## Survey creator UX
TODO

# Evaluation

no clear winner blabla but survey creator hit its goal


# Conclusion
For decades (source?) big companies like Siemens and TODO mostly relied on writing their own software. But the trend used to favor custom development heavily, but in recent years, many new companies have come onto the market with SaaS products like TODO
