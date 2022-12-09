---
title: "Hugo blogging explained for developers"
# TODO description: 
date: 2022-12-09T10:16:10+07:00
draft: true # TODO change
slug: hugo-blogging-explained-for-developers

ongoing: false
featured: false
# featuredImage: featured.jpg
# featuredImageSource: ['Name', 'https://unsplash.com/@XXX_username_XXX?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText']
---

TOC:
- how is this blog built -> hugo
- how do I write new content & include cool bits like images -> short codes
- how is the theme defined
- tweaking images: providing sizes, alt text, etc.
- Lighthouse test results
- how is a new page added
- how do I do continuous deployment

# How to add a new page
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