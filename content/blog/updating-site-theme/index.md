---
title: "Giving my hugo-based blog a facelift"
subtitle: "Pretty fonts for a modern look?"
slug: giving-my-blog-a-facelift
date: 2022-12-05T13:36:00+07:00
draft: false
categories: ['project']
---

<!-- 
TODO
- before-state:
  - talk about hugo coder theme
  (- projects / blog separation)
  - 
- update screenshots before/after
- merge projects -> blog & new look: add before/after
- list additional changes to theme, pictures
 -->

<!-- 
# Reimagining this blog post

Keep the scope limited. 

## Who is going to read it, what should they get out of reading this?
 
 1. *People interested in design, fonts, redesign*
  - inspiration gathering
  - how I found a font that expresses what I feel
  - redesign process
 
 2. *Friends of mine & LinkedIn people*
  - recent work of mine
  - "it was boring before, now it's cool"

### Do's & Don'ts
Do
- use a lot of images
- keep short & to the point

Don't
- show too much code
- talk about off-topic things 
-->

<!-- # Inspiration -->
<!-- 
  - get people hooked: inspiration from Daniel Immke's blog
  - what will I talk about
    - "how I went from this to this": before/after (-> friends)
    - finding a font, animations, logo, art page (-> design people)
  - why should they read this / who should read this
-->
Recently, I came across a [blog post by Daniel Immke](https://daniel.do/article/laying-myself-off-from-amazon/) about quitting his job at Amazon. It's an interesting read, but **what really caught my eye was the design**. The choice of fonts, the subtle text color, the animated shapes in the header - beautiful.

{{< image src="img/daniel-do.png" alt="Screenshot of https://daniel.do/article/laying-myself-off-from-amazon/" >}}
  Inspiration - Daniel Immke's blog
{{< /image >}}

Suddenly, my own blog felt antiquated and stiff and I felt inspired to improve its design. I'll talk about finding an expressive font, adding animations and designing a logo for the site. I added a new page to showcase some humble art and completely redesigned the blog listing page. Stick around to see how I transformed the page to look like this:

{{< compare-images left="img/comparisons/home-old.png" right="img/comparisons/home-new.png" >}}

---
1. [Finding a font]({{< ref "#finding-a-font" >}})
2. [Joyful animations]({{< ref "#animations" >}})
3. [Designing a logo for the home page]({{< ref "#logo" >}})
4. [A place for art]({{< ref "#art" >}})
5. [Redesigning the list of blog posts]({{< ref "#redesign-blog-list" >}})
---


# Finding a font that expresses what I feel {#finding-a-font}
What I really like about Daniel's logo font is it's elegant *and* playful, without looking silly. He uses [Tiempos Headline](https://klim.co.nz/retail-fonts/tiempos-headline/) for the logo and article headlines, it looks graceful and has a strong contrast between its thinnest and thickest strokes.

While searching for a font to call my own, I felt like choosing something even more "extreme" than Tiempos Headline. Searching through Google Fonts, I found [Yeseva One](https://fonts.google.com/specimen/Yeseva+One?category=Display&subset=latin&preview.text=Filippo%20Orru&preview.text_type=custom) and while I like its soft look and recognizable half-rounded terminals, we didn't really click.

Then I found [Bely Display](https://www.type-together.com/bely-font).

{{< image src="img/fonts-comparison.jpg" alt="Comparing fonts: Tiempos Headline, Yeseva One, Bely Display" >}}
  Comparison between 'Tiempos Headline', 'Yeseva One' and 'Bely Display'
{{< /image >}}

Considering my blog had four unique visitors in the past two days (two of which were me), the only thing I'm really willing to spend on it is my time. So finding out that Bely Display sells for around 35 USD stung a bit. 
<!-- It is also included in Adobe's creative cloud fonts, but I'd only be allowed to use it while my subscription is active, so that wasn't a possibility. -->

The search for a free alternative began. I tried fontspring's [Matcherator](https://www.fontsquirrel.com/matcherator), which takes a screenshot of some text and returns a list of similar-looking fonts. This turned out to be quite sobering. None of the fonts, free or paid, compared to Bely's expressiveness. Most felt crude and not as sharp. The closest competitor I could find is [Nocturne Serif](https://www.fontspring.com/fonts/machalski/nocturne-serif). I guess you just can't beat love at first sight, so in the end I bought a web license for Bely Display. 

{{< image src="img/similar-fonts.jpg" alt="List of fonts similar to Bely Display, created using fontspring's matcherator." >}}
  Fonts similar to Bely Display (top). Closest match highlighted: Nocturne Serif (middle).
{{< /image >}}

They say "to travel far, you need to travel together", so the next step was finding a font for the body text and secondary headlines. I first landed on [Merriweather](https://fonts.google.com/specimen/Merriweather) after playing around with some fonts offered by Google Fonts. While I was writing this article, I switched the body font to [Poppins](https://fonts.google.com/specimen/Poppins). It feels less clunky than Merriweather and more modern, which fits site's theme. I've update the screenshots to reflect that. 

# Good artists copy, great artists steal {#animations}
What delighted me on Daniel's page was a very small detail. When loading the page, a lightly colored bar between the article's title and content appears. 

{{< video src="img/underline-animation.m4v" hidecontrols="true" >}}
Animation on [Daniel's blog](https://daniel.do/article/laying-myself-off-from-amazon/)
{{< /video >}}


This small animation adds a lot to the page's vibe in my opinion. So I did what all great artists must do... I ~~*stole*~~ recreated the effect. Some tweaks for supporting both dark and light mode were necessary, now the bar appears above all post titles.

{{< video src="img/underline-animation-mine.m4v" hidecontrols="true" >}}
Recreation of the animation on my page
{{< /video >}}

# Designing a logo for the home page {#logo}
Having decided to use Bely as my expressive display font, I started creating a logo to replace the previous plain text. I started by drafting up some ideas on my reMarkable and then used Affinity Designer 2 to design the logo. It's a simple two-lined text with a splash of yellow. Of course, the site needs version for light and one for dark mode.

{{< image src="img/logo-light-dark.png" alt="New logo for the website, light and dark mode." >}}
  New logo for the website, in light and dark mode. Created using Affinity Designer 2.
{{< /image >}}

The site's theme is based on [hugo-coder](https://github.com/luizdepra/hugo-coder). It's free and supports both light and dark mode and has a minimal and clean look. A great starting point for customization.
Most notably, the redesigned home page features the new logo in the center, which and really draws attention to the name. Around it, I added some matrix dots inspired by a recent [newsletter by Erik D. Kennedy](https://www.learnui.design/newsletter.html).

{{< image src="img/comparisons/home-new.png" alt="New home page." >}}
  New home page.
{{< /image >}}

There were some challenges while designing. I wanted the logo's yellow splash to have different opacities on the text and on the background. But the overlay effects used for this are unsupported when exporting to SVG. This meant that the layers would get rasterized, defeating the purpose of exporting to SVG in the first place. So I used Affinity Designer's new shape builder feature to convert the text to curves and easily split the yellow from the white text. This made for minimal SVG sizes after exporting, since everything is now reduced to simple curves with a background color.


# A place for art {#art}
When I was younger, I regularly switched from one interest to another. From CGI to programming to UI design to illustration etc. Started many projects but oftentimes my interests switched again before completing them. After finishing school, I was torn between studying CGI, 3D modeling and animation, or go for programming. I chose the latter and am quite happy, even though I no longer have as much time for creative pursuits.

However when I do create something, I'd like to showcase it somewhere just for fun. **The arts needed a space on my personal page.**

<!-- TODO insert image of single page -->

I drafted a page with a grid of images that lists all my art posts. I took some inspiration from the layouts used by Instagram and the portfolio page of the theme [Kross](https://demo.gethugothemes.com/kross/). It doesn't look crazy innovative, but why reinvent the wheel when a simple layout is familiar and gets the job done? 

{{< image src="img/art-list.png" alt="List of art posts, with a grid of images." >}}
  List of art posts, laid out as a grid of images.
{{< /image >}}

Hugo makes it easy to compress images I supply. In the grid shown above, an individual image is never larger than 400x400 pixels. So when the page is built, all images are compressed to this size and converted to webp, which makes for minimal file sizes and quick page loads. Of course, when viewing an individual artwork, the full-size image is used.

# Redesigning the blog {#redesign-blog-list}

Comparison of old projects page to new blog page
{{< compare-images left="img/comparisons/projects-old.png" right="img/comparisons/blog-new.png" >}}

# Conclusion
<!-- TODO:
  - summarize post
  - what happened while writing this post:
    - redesigned blog list page
    - added compare-images shortcode
    - tweaked the mobile and light theme 100 times
  - refer back to introduction / inspiration
  - personal statement
  - call to action: ?
-->
So once again I'm spending more time on the blog itself than its content. But since this is my personal space for expression and I genuinely enjoy tweaking every corner of this page, it's fine. When I come across something that really intrigues me or sparks inspiration I get endlessly motivated to learn about it. This post is a result of me trying to focus more on content. 

I'm really happy with the result, but of course, art is never finished. During the writing of this post, I implemented the image comparison widget that you see below. So I fully expect many more little changes and additions. Maybe the text font isn't perfect? Maybe I should add a picture of me?

{{< compare-images left="img/comparisons/post-old.png" right="img/comparisons/post-new.png" >}}

<!-- TODO remove: (?) -->
There are some other changes that didn't fit into this post. I updated the favicon and removed unused header tags, CSS and fontawesome icons. 

If you'd like, you can check out the repo here: [github.com/ffactory-ofcl/personal-site-hugo](https://github.com/ffactory-ofcl/personal-site-hugo). It even has some simple homemade CD that notifies my VPS and re-deploys whenever I push to `master`.

To learn about bigger project of mine, check out this post: [Comparing Survey Creation Platforms]({{< ref "/blog/bachelor-thesis" >}}). I built a survey creation platform, deployed it to >300k users and compared it to Google Forms and SurveyJS.