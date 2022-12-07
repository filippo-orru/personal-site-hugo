---
title: "Giving my hugo-based blog a facelift"
subtitle: "Pretty fonts for a modern look?"
slug: giving-my-blog-a-facelift
date: 2022-12-05T13:36:00+07:00
draft: false
tags: ['project']
---

<!-- # Inspiration -->
Recently, I came across a [blog post by Daniel Immke](https://daniel.do/article/laying-myself-off-from-amazon/) about quitting his job at Amazon. It's an interesting read, but **what really caught my eye was the design**. The choice of fonts, the subtle text color, the animated shapes in the header - beautiful.

{{< image src="daniel-do.png" alt="Screenshot of https://daniel.do/article/laying-myself-off-from-amazon/" >}}
  Inspiration - Daniel Immke's blog
{{< /image >}}

Suddenly, my own blog felt antiquated and stiff and I felt inspired to start improving its design. I'll talk about finding an expressive font, adding animations and replacing the old "home" link with a new logo. To showcase some humble art, I added a new page. 

---
1. [Finding a font]({{< ref "#finding-a-font" >}})
2. [Joyful animations]({{< ref "#animations" >}})
3. [Designing a logo]({{< ref "#logo" >}})
4. [A place for art]({{< ref "#art" >}})
---

# Finding a font that expresses what I feel {#finding-a-font}
What I really like about Daniel's logo font is it's elegant *and* playful, without looking silly. [Tiempos Headline](https://klim.co.nz/retail-fonts/tiempos-headline/), the font used for the logo and article headlines, has a strong contrast between its thinnest and thickest strokes.

While searching for a font to call my own, I felt like choosing something even more "extreme" than Tiempos Headline. Searching through Google Fonts, I found [Yeseva One](https://fonts.google.com/specimen/Yeseva+One?category=Display&subset=latin&preview.text=Filippo%20Orru&preview.text_type=custom) and while I like its soft look and recognizable half-rounded terminals, we didn't really click.

Then I found [Bely Display](https://www.type-together.com/bely-font).

{{< image src="fonts-comparison.jpg" alt="Comparing fonts: Tiempos Headline, Yeseva One, Bely" >}}
  Comparison between 'Tiempos Headline', 'Yeseva One' and 'Bely Display'
{{< /image >}}

Considering my blog had four unique visitors in the past two days (two of which were me), the only thing I'm really willing to spend on it is my time. So finding out that Bely Display sells for around 35 USD stung a bit. 
<!-- It is also included in Adobe's creative cloud fonts, but I'd only be allowed to use it while my subscription is active, so that wasn't a possibility. -->

The search for a free alternative began. I tried fontspring's [Matcherator](https://www.fontsquirrel.com/matcherator), which takes a screenshot of some text and returns a list of similar-looking fonts. This turned out to be quite sobering. None of the fonts, free or paid, compared to Bely's expressiveness. Most felt crude and not as sharp. The closest competitor I could find is [Nocturne Serif](https://www.fontspring.com/fonts/machalski/nocturne-serif). I guess you just can't beat love at first sight, so in the end I bought a web license for Bely Display. 

{{< image src="similar-fonts.jpg" alt="List of fonts similar to Bely Display, created using fontspring's matcherator." >}}
  Fonts similar to Bely Display (top). Closest match highlighted: Nocturne Serif (middle).
{{< /image >}}

They say "to travel far, you need to travel together", so the next step was finding a font for the body text and secondary headlines. I landed on [Merriweather](https://fonts.google.com/specimen/Merriweather) after playing around with some other fonts offered by Google Fonts. However, I'm still not fully convinced that these two make the best pair. 

While writing this article, I switched the body font from Merriweather to [Poppins](https://fonts.google.com/specimen/Poppins). It feels less clunky than before and more modern, which fits site's theme. I've update the screenshots to reflect that. 

# Good artists copy, great artists steal {#animations}
What really delighted me on Daniel's page was a very small detail. When loading the page, a lightly colored bar between the article's title and content appears. 

{{< video src="underline-animation.m4v" hidecontrols="true" >}}
Animation on [Daniel's blog](https://daniel.do/article/laying-myself-off-from-amazon/)
{{< /video >}}


This small animation adds a lot to the page's vibe in my opinion. So I did what all great artists must do... I ~~stole~~ recreated the effect. Some tweaks for supporting both dark and light mode were necessary, now the bar appears above all post titles.

{{< video src="underline-animation-mine.m4v" hidecontrols="true" >}}
Recreation of the animation on my page
{{< /video >}}

# Designing the page logo {#logo}
Having decided to use Bely as my expressive display font, I started creating a logo to replace the previous plain text. 

Check out this comparison between the old and new landing page. Most notably, in the centered block of information about me, a shiny new personal word mark replaced the old plain text. I drafted up some ideas on my reMarkable and used Affinity Designer to design the logo. It's a simple two-lined text with a splash of yellow. I made sure to create one version for light and one for dark mode.

{{< compare-images left="comparisons/home-old.png" right="comparisons/home-new.png" >}}


On a sidenote, the logo design and some mockups were done in Affinity Designer 2, which released just a few weeks ago. It's a comprehensive update to version 1 and one I was happy to pay for, especially since it doesn't differentiate between the MacOS and Windows versions anymore.

I wanted the logo's yellow splash to have different opacities on the text and on the background. But unsupported overlay effects would force layers to be rasterized when exporting to SVG. So I used designer's shape builder feature (new in version 2) to convert the text to curves and easily split the yellow from the white text. This made for minimal SVG sizes after exporting, since everything is now reduced to simple curves with a background color.

{{< image src="logo-light-dark.png" alt="New logo for the website, light and dark mode." >}}
  New logo for the website, in light and dark mode. Created using Affinity Designer 2.
{{< /image >}}

# A place for art {#art}
When I was younger, I regularly switched from one interest to another. From CGI to programming to UI design to illustration etc. Started many projects but oftentimes my interests switched again before completing them. After finishing school, I was torn between studying CGI, 3D modeling and animation, or go for programming. I chose the latter and am quite happy, even though I no longer have as much time for creative pursuits.

However when I do create something, I'd like to showcase it somewhere just for fun. **The arts needed a space on my personal page.**

This site is built using [hugo](https://gohugo.io/), an awesome framework for building static websites. It makes both sides very simple: creating content (it's just markdown!) and changing the site's theme.
Here's a super short summary of its templating system. For each category (projects, blog and art posts) the following files can be defined:

```text
layouts/<category-name>
                       /list.html
                       /single.html
```

The `list.html` template defines how the list of all posts in a category should be look, and `single.html` does the same for the details and content of one specific post.  For example, the Art page displays its posts as a grid of images, while the Projects page shows them in a list. Similarly, the `single` template for the Art category highlights the cover image, while other templates are suited for blog posts.
<!-- If they aren't provided, hugo uses the default list and single template files. -->

A benefit of hugo is making it easy to follow best practices in web development. The Art page shows thumbnails of each image, which don't need to have high resolution. While Wordpress requires plugins like WP Rocket to work some behind-the-scenes magic, in hugo you write the following:

```html
{{ $imagePath := .Params.featuredImage }}
{{ $imageResource := .Page.Resources.GetMatch $imagePath }}
{{ $image := $imageResource.Fill "480x480 webp Center" }}
<img src="{{ $image.RelPermalink }}" />
```

Each new art post needs to define the parameter `featuredImage`. When a hugo page is built / compiled, that image is converted to webp and resized to 480x480 pixels, which lowers the file sizes and optimizes delivery.


# Conclusion
So once again I'm spending more time on the blog itself than its content. But since this is my personal space for expression and I genuinely enjoy tweaking every corner of this page, it's fine. When I come across something that really intrigues me or sparks inspiration I get endlessly motivated to learn about it. This post is a result of me trying to focus more on content. 

I'm really happy with the result, but of course, art is never finished. During the writing of this post, I implemented the image comparison widget that you see below. So I fully expect many more little changes and additions. Maybe the text font isn't perfect? Maybe I should add a picture of me?

{{< compare-images left="comparisons/post-old.png" right="comparisons/post-new.png" >}}

There are some other changes that didn't fit into this post. The matrix dots on the home page, inspired by a recent [newsletter by Erik D. Kennedy](https://www.learnui.design/newsletter.html). I updated the favicon and removed unused header tags, CSS and fontawesome icons.

If you'd like, you can check out the repo here: [github.com/ffactory-ofcl/personal-site-hugo](https://github.com/ffactory-ofcl/personal-site-hugo). It even has some simple homemade CD that notifies my VPS and re-deploys whenever I push to `master`.

To learn about bigger project of mine, check out this post: [Comparing Survey Creation Platforms]({{< ref "/projects/bachelor-thesis" >}}). I built a survey creation platform, deployed it to >300k users and compared it to Google Forms and SurveyJS.