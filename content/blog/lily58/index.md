---
title: "Building a split keyboard in 4 months"
subtitle: "Third time's the charm"
slug: "building-a-split-keyboard-in-4-months"
date: 2022-12-11T08:16:25+07:00
draft: true
# TODO description: 
categories: ['project']

# images: ['blog/posts/build-split-keyboard-4-months/social.jpg']
# featuredImage: featured.jpg
# featuredImageSource: ['Name', 'https://unsplash.com/@XXX_username_XXX?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText']
---


# who am i writing for
- people who like to build stuff, hard/software
- me

# goals
- explain major steps + fails
  - DONT explain every step & detail
- total cost
- funny

# structure

1. setup
  - reference list of parts
  [List of parts]({{< ref "/blog/lily58-parts" >}})
  - soldering setup *pics*

2. diodes & hot swap sockets
  - solder diodes in the correct direction
  - they pretty small *pic*
  - one diode for each key, so 58  * 2 = 116 soldering points. good thing I only have to do this once
  
  - solder hot swap sockets
  - one socket for each key, so 58 * 2 = 116 soldering points. Good thing I only have to do this once

3. battle of the boards
# TODO add pics from build guide?
  - usb-c is nice -> two elite-c's
    - additional benefit: usb port is sturdy unlike Arduino's which might rip out

  - solder left side
    - works, except 1 column *pic*
    - reflow bad solder joints *pic*
    - left side done!

  - solder right side
    - *video* doesnt work
    - (FAIL 1) shoot, soldered into the wrong columns
    - save money: try to salvage elite-c for >15 hours over two weeks
    - give up
      - at least it create art *pic*
    - order new single pcb + arduino pro micro
    - desolder all diodes and hot swap sockets from the damaged PCB and solder them on the new pcb.
      good thing I only have to do this once
    - solder arduino
    - (FAIL 2) wrong orientation (upside down)
    - order new single pcb + arduino pro micro
    - desolder all diodes and hot swap sockets from the damaged PCB and solder them on the new pcb.
      good thing I only have to do this once
    - solder arduino, this time correctly
    - soldering done!

  - insert all switches (korean guy Gazzew: Boba U4)
    - the acrylic case is a bit too thick, they pop out easily but works okay
    - after half a year order better thinner case that fits
  - 
  
  - add keycaps, all done! *pic*

4. Conclusion
  - this took way longer than I hoped
    - exam period in spring
    - waiting time for replacement parts
  - way more expensive than I hoped
  - my first hardware project, learned a lot
    - soldering *pic bad joints* #TODO pic of good joints?
    - desoldering > - <
    - many other challenges while configuring QMK, the software


The Lily58L is a split mechanical keyboard that allows for extensive customization. You get to choose and customize every single part of your keyboard, from the choice of micro controllers (USB C!) to the keycaps. Then assemble and solder your own keyboard from that. 

»*What is a spilt keyboard?*« I hear you ask. It is a type of mechanical keyboard that is split into two halves, one for each hand. The halves are connected via a 3.5mm aux cable and can be placed exactly at each hand's natural resting position. Placing the hands further apart opens up the shoulders, a more ergonomic posture than that conventional keyboards force us into. This is especially relevant for office workers who spend long hours typing.

<!-- TODO posture comparison pic -->

For me, building the Lily58L was an interesting and fun experience, but excruciating at times. This article is about my tale of battling a stubborn PCB for hours on end. For those considering taking on this project themselves, this is not a build guide. I list the parts I bought, explain major steps I took and mistakes I made, including some tips that would have saved past-me a lot of time (and money).


# Getting started

As a base, I used the [Lily58L kit](#TODO) offered by the German shop [keycapsss.com](https://keycapsss.com). I work as a software engineer in a shared office, so I chose mechanical switches that are quiet, yet have a pronounced tactile bump, the [Gazzew Boba U4](#TODO). I tried to chose European vendors for most parts, as they offer good support, ship fast and don't get stuck in customs. All of my gear has moved firmly into the USB C era, so I wanted the keyboard to match that. That's why I went with two [Elite-Cs](#TODO), the micro controllers placed on each half that handle key input, macro logic and communication. Another benefit is that the USB port is mounted very firmly compared to their alternative, the Arduino pro micro. The Arduino's micro USB port is famously easy to accidentally rip off. \
[Read the full list of parts and tools here.]({{< ref "/blog/lily58-parts" >}})

After receiving all the required parts and tools, I got to work right away. My soldering setup looks super sketchy but I did its job. 

{{< image src="images/build-items.jpg" alt="Overview of build stations and tools" >}}
  (clockwise) The first soldering station; The tip of my cheap soldering iron melted; Package of parts with Elite-C; Second soldering station on an old baking sheet.
{{< /image >}}