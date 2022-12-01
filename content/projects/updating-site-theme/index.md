---
title: "Giving my hugo-based blog a facelift"
subtitle: "Pretty fonts for a modern look?"
slug: giving-my-blog-a-facelift
date: 2022-11-25T08:00:00+02:00
draft: true
---

<!-- # Inspiration -->
Sometimes I come across something that really intrigues me or sparks inspiration. I can get endlessly motivated to learn about new technologies or other subjects. A few weeks ago, I was browsing Hackernews (using [Harmonic](https://play.google.com/store/apps/details?id=com.simon.harmonichackernews&hl=en)) and came across a [blog post by Daniel Immke](https://daniel.do/article/laying-myself-off-from-amazon/) about quitting his job at Amazon. It's an interesting read, but what really caught me was the design. The choice of fonts, the subtle text color, the animated shapes in the header - beautiful.

{{< image src="daniel-do.png" alt="Screenshot of https://daniel.do/article/laying-myself-off-from-amazon/" >}}
  Inspiration - Daniel Immke's blog
{{< /image >}}

Suddenly, my own blog felt antiquated and stiff. This inspired me to start improving its design. I'll talk about finding an expressive font, adding animations and replacing the old "home" link with a new logo. To showcase some humble art, I added a new page, all while keeping the site fast and Lighthouse scores high. As a final step, I set up Plausible to collect some very basic, privacy-centered analytics that I self-host. 

---
1. [Finding a font]({{< ref "#finding-a-font" >}})
2. [Joyful animations]({{< ref "#animations" >}})
3. [Designing a logo]({{< ref "#logo" >}})
4. [A place for art]({{< ref "#art" >}})
5. [Keeping my site fast]({{< ref "#lighthouse" >}})
6. [Privacy-focused analytics]({{< ref "#analytics" >}})
---

# Finding a font that expresses what I feel {#finding-a-font}
What I really like about Daniel's logo font is it's elegant *and* playful, without looking silly. [Tiempos Headline](https://klim.co.nz/retail-fonts/tiempos-headline/), the font used for logo and article headlines, has a strong contrast between its thinnest and thickest strokes.

While searching for a font to call my own, I felt like choosing something more *extreme* than Tiempos Headline. I found [Yeseva One](https://fonts.google.com/specimen/Yeseva+One?category=Display&subset=latin&preview.text=Filippo%20Orru&preview.text_type=custom) through Google Fonts. I like its soft look and recognizable half-rounded terminals, but we didn't really *click*, so I searched for fonts similar to it. \
That's when I found [**Bely Display**](https://www.type-together.com/bely-font) and fell in love.

{{< image src="fonts-comparison.jpg" alt="Comparing fonts: Tiempos Headline, Yeseva One, Bely" >}}
  Font comparison between 'Tiempos Headline', 'Yeseva One' and 'Bely Display'
{{< /image >}}

Considering my blog had four unique visitors in the past two days (two of which were me), the only thing I'm really willing to spend on it is my time. So finding out that Bely Display sells for around 35 USD stung a bit. It is also included in Adobe's creative cloud fonts, but I'd only be allowed to use it while my subscription is active, so that wasn't a possibility.

The search for a free alternative began. I used fontspring's [Matcherator](https://www.fontsquirrel.com/matcherator), uploading a screenshot of text written in Bely Display returns a list of similar-looking fonts, including prices. This turned out to be quite sobering. None of the other fonts compared to Bely's expressiveness, most felt less elegant and sharp. The closest competitor I could find is [Nocturne Serif](https://www.fontspring.com/fonts/machalski/nocturne-serif), which has roughly the same price. Filtering for "only free fonts" in the Matcherator yielded much worse results.

{{< image src="similar-fonts.jpg" alt="List of fonts similar to Bely Display, created using fontspring's matcherator." >}}
  Fonts similar to Bely Display (top). Closest match highlighted: Nocturne Serif (middle).
{{< /image >}}

I guess you just can't beat love at first sight, so in the end I splurged for a web license for Bely Display. They say to travel far, you need to travel together, so the next step was finding a font for the body text and secondary headlines. I landed on [Merriweather](https://fonts.google.com/specimen/Merriweather) after playing around with some other fonts offered by Google Fonts. However, I'm still not fully convinced that these two make the best pair. Maybe I'm using a different font by the time you're reading this.

# Good artists copy, great artists steal {#animations}
What really delighted me on Daniel's page was a very small detail. When loading the page, a lightly colored bar between the article's title and content appears. 

{{< video src="underline-animation.m4v" hidecontrols="true" >}}{{< /video >}}

This small animation adds a lot to the page's vibe in my opinion. So I did what all great artists must do... I recreated the effect and integrated into my site's templates. Some tweaks for supporting both dark and light mode were necessary, now the bar appears when any project post or blog post first loads.

# Designing the page logo {#logo}
Having decided to use Bely as my expressive display font, I started creating a logo to replace the previous plain text. 

{{< compare-images left="comparisons/home-old.png" right="comparisons/home-new.png" >}}
- keeping dark mode consistent
- favicon

# A place for art {#art}
- adapting the hugo theme to accomodate art / images
- inspiration: kraft theme (?)
- image compression

# Lighthouse test results {#lighthouse}
- how hugo works
- tweaking images: providing sizes, alt text, etc.

# Adding self-hosted analytics in under 30 minutes {#analytics}
- using plausible.io
- new subdomain, quick configuration & docker setup on my server

# Conclusion
- Once again I'm spending more time on the blog itself than the content :^)
- I'm happy with the result
- recap + side-by-side comparison with old site