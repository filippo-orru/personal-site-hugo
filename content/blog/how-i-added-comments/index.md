---
title: "How I Added Comments to My Website"
subtitle: ""
date: 2024-10-23T16:42:37+02:00
draft: true
# TODO description: 

ongoing: false
featured: false
# featuredImage: featured.jpg
# featuredImageSource: ['Name', 'https://unsplash.com/@XXX_username_XXX?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText']

categories: []
---

<!--
# Plan
- Goals
    - 

- Who is this written for
    - me
    - 

- Length: medium

# Structure
- intro
    - 
- 
- conclusion

{< image src="images/image.jpg" alt="ALT" >}}
DESCRIPTION
{< /image >}}

-->

I randomly stumbled across this article by Art Chaidarun, principal engineer at Duolingo. [Ten Years of Logging my Life](https://chaidarun.com/ten-years-of-logging-my-life) is an interesting read, and over 100 people commented on the post. 

When I saw this, I thought:
1. damn, I wish I had such detailed activity tracking data of the past ten years
2. it would be pretty cool to allow commenting on my blog posts (like this one)

{{< notice type=info title="What is isso?" >}}
[Isso](https://isso-comments.de/) is a commenting system, similar to Disqus. 

It appealed to me because ...
1. it's self-hostable and easy to use
2. comments are written in markdown
3. it's open source

{{</ notice >}}

All DevOps parts of my personal website are contained in my docker-compose.yaml file. Check out my recent blog post to learn more: [What's my server setup?]({{< ref "/blog/server-setup-devops" >}}).

I added isso's Docker image to my compose file as a service.

```yaml
comments:
    image: ghcr.io/isso-comments/isso:latest
    volumes:
      - type: bind
        source: ./services/isso-comments/isso.cfg
        target: /config/isso.cfg
      - './services/isso-comments/db:/db'
    expose:
      - 8080
    labels:
      traefik.enable: "true"
      traefik.http.routers.comments.rule: "Host(`filippo-orru.com`) && PathPrefix(`/isso`)"
      # Remove '/isso' from path before forwarding request
      traefik.http.routers.comments.middlewares: "comments"
      traefik.http.middlewares.comments.stripprefix.prefixes: "/isso" 
      # ...
```

The `isso.cfg` file is used to configure the commenting system. 

```cfg
[general]
dbpath = /db/comments.db
host = https://filippo-orru.com
notify = smtp

[moderation]
enabled = false

[smtp]
username =
password =
host = smtp-to-telegram
port = 2525
security = none
to = doesntmatter@example.org
from = doesntmatter@example.org
timeout = 10
```

Running it locally required a bit of trial and error, because isso tries to prevent comments from third-party sites.

You might be wondering about the `smtp` part of the configuration. It points to an SMTP server running on `smtp-to-telegram:2525`.

# More
- []()