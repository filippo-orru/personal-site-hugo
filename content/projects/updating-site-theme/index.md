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
- personality, strong expression, a little playfulness
- considering free options
- finding similar fonts
- shelling out for a license
- finding a font for body text: Merriweather

# Good artists copy, great artists steal {#animations}
- the title overline effect

# designing the page logo using AD2 {#logo}
- keeping dark mode consistent

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