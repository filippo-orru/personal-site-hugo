---
title: "Giving my hugo-based blog a facelift"
subtitle: "Pretty fonts for a modern look?"
slug: giving-my-blog-a-facelift
date: 2022-12-03T08:00:00+02:00
draft: true
---

<!-- # Inspiration -->
Sometimes I come across something that really intrigues me or sparks inspiration. I can get endlessly motivated to learn about new technologies or other subjects. A few weeks ago, I was browsing Hackernews (using [Harmonic](https://play.google.com/store/apps/details?id=com.simon.harmonichackernews&hl=en)) and came across a [blog post by Daniel Immke](https://daniel.do/article/laying-myself-off-from-amazon/) about quitting his job at Amazon. It's an interesting read, but **what really caught me was the design**. The choice of fonts, the subtle text color, the animated shapes in the header - beautiful.

{{< image src="daniel-do.png" alt="Screenshot of https://daniel.do/article/laying-myself-off-from-amazon/" >}}
  Inspiration - Daniel Immke's blog
{{< /image >}}

Suddenly, my own blog felt antiquated and stiff. This inspired me to start improving its design. I'll talk about finding an expressive font, adding animations and replacing the old "home" link with a new logo. To showcase some humble art, I added a new page. 

---
1. [Finding a font]({{< ref "#finding-a-font" >}})
2. [Joyful animations]({{< ref "#animations" >}})
3. [Designing a logo]({{< ref "#logo" >}})
4. [A place for art]({{< ref "#art" >}})
---

# Finding a font that expresses what I feel {#finding-a-font}
What I really like about Daniel's logo font is it's elegant *and* playful, without looking silly. [Tiempos Headline](https://klim.co.nz/retail-fonts/tiempos-headline/), the font used for logo and article headlines, has a strong contrast between its thinnest and thickest strokes.

While searching for a font to call my own, I felt like choosing something more *"extreme"* than Tiempos Headline. I found [Yeseva One](https://fonts.google.com/specimen/Yeseva+One?category=Display&subset=latin&preview.text=Filippo%20Orru&preview.text_type=custom) through Google Fonts. I like its soft look and recognizable half-rounded terminals, but we didn't really click, so I searched for fonts similar to it. \
That's when I found [**Bely Display**](https://www.type-together.com/bely-font) and fell in love.

{{< image src="fonts-comparison.jpg" alt="Comparing fonts: Tiempos Headline, Yeseva One, Bely" >}}
  Font comparison between 'Tiempos Headline', 'Yeseva One' and 'Bely Display'
{{< /image >}}

Considering my blog had four unique visitors in the past two days (two of which were me), the only thing I'm really willing to spend on it is my time. So finding out that Bely Display sells for around 35 USD stung a bit. 
<!-- It is also included in Adobe's creative cloud fonts, but I'd only be allowed to use it while my subscription is active, so that wasn't a possibility. -->

The search for a free alternative began. I used fontspring's [Matcherator](https://www.fontsquirrel.com/matcherator), uploading a screenshot of text written in Bely Display returns a list of similar-looking fonts. This turned out to be quite sobering. None of the fonts, free or paid, compared to Bely's expressiveness, most felt less elegant and sharp. The closest competitor I could find is [Nocturne Serif](https://www.fontspring.com/fonts/machalski/nocturne-serif). 

{{< image src="similar-fonts.jpg" alt="List of fonts similar to Bely Display, created using fontspring's matcherator." >}}
  Fonts similar to Bely Display (top). Closest match highlighted: Nocturne Serif (middle).
{{< /image >}}

I guess you just can't beat love at first sight, so in the end I splurged for a web license for Bely Display. They say "to travel far, you need to travel together", so the next step was finding a font for the body text and secondary headlines. I landed on [Merriweather](https://fonts.google.com/specimen/Merriweather) after playing around with some other fonts offered by Google Fonts. However, I'm still not fully convinced that these two make the best pair. 

# Good artists copy, great artists steal {#animations}
What really delighted me on Daniel's page was a very small detail. When loading the page, a lightly colored bar between the article's title and content appears. 

{{< video src="underline-animation.m4v" hidecontrols="true" >}}
Animation on [Daniel's blog](https://daniel.do/article/laying-myself-off-from-amazon/)
{{< /video >}}


This small animation adds a lot to the page's vibe in my opinion. So I did what all great artists must do... I recreated the effect and integrated into my site's templates. Some tweaks for supporting both dark and light mode were necessary, now the bar appears above all post titles.

{{< video src="underline-animation-mine.m4v" hidecontrols="true" >}}
Recreation of the animation on my page
{{< /video >}}

# Designing the page logo {#logo}
Having decided to use Bely as my expressive display font, I started creating a logo to replace the previous plain text. 

Check out this comparison between the old and new landing page. Most notably, in the centered block of information about me, a shiny new personal word mark replaced the old plain text. I drafted up some ideas on my reMarkable and started up Affinity Designer to design the logo. It's a simple two-lined text written in Bely with a splash of yellow. I made a version for light and dark mode.

{{< compare-images left="comparisons/home-old.png" right="comparisons/home-new.png" >}}


On a sidenote, the logo design and some mockups were done in Affinity Designer 2, which released just a few weeks ago. It's a comprehensive update to version 1 and one I was happy to pay for, especially since it doesn't differentiate between the MacOS and Windows versions anymore. \
I wanted the logo's yellow splash to have different opacities on the text and on the background. But since the overlay effects to achieve this aren't supported by svg, the layers would get rasterized. So I used designer's new shape builder feature to convert the text to curves and easily split the yellow from the white text. This made for minimal svg sizes after exporting, since everything is now reduced to simple curves with a background color.

{{< image src="logo-light-dark.png" alt="New logo for the website, light and dark mode." >}}
  New logo for the website, in light and dark mode. Created using Affinity Designer 2.
{{< /image >}}

# A place for art {#art}
When I was younger, I regularly switched from interest to another, like CGI to programming to UI design to illustration. Started many projects but rarely finished them before the next switch to something new. After finishing school, I was torn between studying CGI, 3D modeling and animation, or go for programming. I chose the latter and am quite happy, even though I don't have as much time for creative pursuits.

However when I do create something, I'd like to showcase it somewhere just for fun. The arts needed a space on my personal page. This site is built using [hugo](https://gohugo.io/), an awesome framework for building static websites. It makes both sides very simple: creating content (it's just markdown!) and changing the site's theme.

Here's a super short summary of its templating system. For each category (projects, blog and art posts) the following files can be defined:

```
layouts
       /<category-name>
                       /list.html
                       /single.html
```

The `list.html` template defines how the list of all posts in a category should be look, and `single.html` does the same for the details and content of one specific post.  For example, the Art page displays its posts as a grid of images, while the Projects page shows them in a list. Similarly, the `single` template for the Art category highlights the cover image, while other templates are suited for blog posts.
<!-- If they aren't provided, hugo uses the default list and single template files. -->

A benefit of hugo is making it easy to follow best practices in web development. The Art page shows thumbnails of each image, which don't need a lot of resolution. While wordpress requires plugins like WP Rocket to work some behind-the-scenes magic, in hugo you write the following:

```html
{{ $imagePath := .Params.coverImage }}
{{ $imageResource := .Page.Resources.GetMatch $imagePath }}
{{ $image := $imageResource.Fill "480x480 webp Center" }}
<img src="{{ $image.RelPermalink }}" />
```

Each new art post needs to define the parameter `coverImage`. When a hugo page is built / compiled, that image is converted to webp and resized to 480x480 pixels, which lowers the file sizes and optimizes delivery.


# Conclusion
So once again I'm spending more time on the blog itself than its content. But since this is my personal space for expression and I genuinely enjoy tweaking every corner of this page, it's fine. This post is a result of me trying to focus more on content.

I'm really happy with the result, but of course, art is never finished. During the writing of this post, I implemented the image comparison widget that you see below. So I fully expect many more little changes and additions. Maybe the text font isn't perfect? Maybe I should add a picture of me?

{{< compare-images left="comparisons/post-old.png" right="comparisons/post-new.png" >}}

There are some other changes that didn't fit into this post. The matrix dots on the home page, inspired by a recent [newsletter by Erik D. Kennedy](https://www.learnui.design/newsletter.html). I updated the favicon and removed unused header tags, CSS and fontawesome icons.

If you'd like, you can check out the repo here: [github.com/ffactory-ofcl/personal-site-hugo](https://github.com/ffactory-ofcl/personal-site-hugo). It even has some simple homemade CD that notifies my VPS and re-deploys whenever I push to `master`.