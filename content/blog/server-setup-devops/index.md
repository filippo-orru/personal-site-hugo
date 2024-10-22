---
title: "What's my server setup?"
subtitle: "Running six websites on a 5€ server"
date: 2024-10-19T22:07:21+02:00
draft: false
description: I learned DevOps to run 6 websites on a 5€ server because I'm cheap. Here's how I did it.

ongoing: false
featured: false
featuredImage: featured.webp
images: ['featured-social.webp']
# featuredImageSource: ['Name', 'https://unsplash.com/@XXX_username_XXX?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText']
# showToc: false
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

I've had a VPS (virtual private server) for {{< age-years date="2019-04-30" >}} years. Initially, I bought it to run the game server for my mobile multiplayer game [Four in a Row]({{< ref "/blog/four-in-a-row" >}}). As time went on, I added other services and learned a lot about DevOps. 

At some point I migrated from my old hosting provider to [Hetzner](https://www.hetzner.com/cloud/) because of ongoing connectivity issues. Same price, faster drive, and no more problems. During the migration, I took the opportunity to **dockerize** all services to simplify my setup.

{{< table-of-contents >}}

# My DevOps Setup

{{< image src="server-setup-overview.jpg" alt="DevOps setup running on my VPS" >}}
{{< /image >}}

This is a rough overview of the current state of my VPS. From left to right ... 
1. I use [Warp](https://www.warp.dev/) as a terminal.  
    It allows me to write shell commands like `convert all .mov files to .mp4` in plain english.
2. As a shell I use Zsh with [Oh My Zsh](https://ohmyz.sh/) for autocompletion and other niceties;  
    [Tmux](https://github.com/tmux/tmux/wiki) to manage many terminal sessions;  
    and [Mosh](https://mosh.org/) for roaming and easy reconnection for when I'm working on the go.
3. All my services are running inside [Docker](https://www.docker.com/) with Docker Compose.  
    Check out the detailed [example]({{< ref "#simple-example-this-website" >}}) below.
4. [Traefik](https://traefik.io/traefik/) listens on port 443 and 80 to route web traffic to the correct services.  
    It's configured dynamically using [Docker labels](https://doc.traefik.io/traefik/providers/docker/) in the service's docker compose file. This way the config stays closely coupled with the service. 
5. All requests are proxied by [Cloudflare](https://cloudflare.com), which is free. I also use Cloudflare to buy my domains and manage my DNS settings, and it provides features like caching and DDOS protection.

# Simple Example: this website

{{< image src="personal-site-docker.jpg" alt="Diagram showing an overview of the docker setup for this website." >}}
Check out the source for this configuration: [docker-compose.yaml](https://github.com/filippo-orru/personal-site-hugo/blob/master/docker-compose.yaml).
{{< /image >}}

Let's start on the right this time. Incoming HTTP requests pass through Cloudflare and Traefik. If they are intended for `filippo-orru.com`, they are handled by [nginx](https://nginx.org/), which serves static files (HTML, CSS and JS) from a volume. 

This website uses a somewhat unconventional self-made CD (continuous delivery) setup. As you can see in the diagram, when a commit is pushed to master, GitHub sends a webhook to the `webhook-listener` service. This triggers a deploy script that pulls the newest code from GitHub and builds it using [Hugo](https://gohugo.io/). Lastly, the output files are copied to the same volume that nginx uses.

If I were to rebuild the CD system today, I would likely choose something like [GitHub Actions](https://github.com/features/actions) or a self-hosted alternative. This would offer multiple benefits like a history of builds, e-mail notifications on errors, and a more stable system.

{{< image src="plausible-stats.png" alt="Screenshot of Plausible analytics showing visit statistics for the past 30 days." >}}
Screenshot of Plausible analytics
{{< /image >}}

On a separate subdomain, I run [Plausible](https://plausible.io/), an easy to use and privacy-friendly Google Analytics alternative. As mentioned above, both services tell traefik what host and port they serve via docker labels.

# Complex Example

Check out this complex example of a docker compose configuration. It's used by **Kontento**, a web app I'm developing. 

{{< image src="kontento-setup.jpg" alt="ALT" >}}

{{< /image >}}

1. the web app is written in [Flutter](https://flutter.dev/) and served by `nginx` from an [external docker volume](https://docs.docker.com/engine/storage/volumes/).  
    To deploy, the app is built, then static HTML/CSS/JS files are pushed to a dedicated *deploy* repository, and the changes are pulled to the docker volume.
1. the `API` handles requests, reads from and writes to the database, and executes recurring tasks.
1. the [MongoDB](https://www.mongodb.com/products/self-managed/community-edition) database stores all necessary data in an external volume.
1. [Grafana](https://grafana.com/oss/grafana/) is used to visualize some stats like retention, daily active users, and app starts. It connects to `mongodb` for data.
1. to send emails for password resets, I use [Protonmail Bridge](https://proton.me/mail/bridge). It's intended for desktop mail clients and enables sending emails via SMTP to Proton Mail. This community-run [docker image](https://github.com/shenxn/protonmail-bridge-docker) simplifies deployment.
1. the `database-backup` service does what the name suggests. Every night, it creates a compressed backup using [mongodump](https://www.mongodb.com/docs/database-tools/mongodump/), which is uploaded to [Backblaze B2](https://www.backblaze.com/cloud-storage), a cheap AWS S3 alternative, using [s3cmd](https://s3tools.org/s3cmd). The script also takes care of deleting old backup files.

Additionally, just like above, the services that receive web traffic configure their routing rules via docker labels. In this case, the web app runs on `[domain].com`, the api on `api.[domain].com`, and grafana on `stats.[domain].com`.


# More posts

- Use [quando.events](https://quando.events) to schedule a time to meet with busy friends, or read [how I created it]({{< ref "/blog/quando.events" >}})
- [How I redesigned this website]({{< ref "/blog/updating-site-theme" >}})
- [About me]({{< ref "/about-me" >}}), my interests, skills and projects