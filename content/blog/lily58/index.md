---
title: "'Build your own split keyboard', they said"
subtitle: "'It'll be easy', they said."
slug: "build-your-own-split-keyboard-they-said"
date: 2022-12-11T08:16:25+07:00
draft: false
description: What's a split keyboard and how did it take me 4 months and 400€ to build one? Stupidity can be expensive.
categories: ['project']
# _build:
#   publishResources: true
# images: ['blog/build-your-own-split-keyboard-they-said/images/featured.jpg']
# featuredImage: featured.jpg
# featuredImageSource: ['Name', 'https://unsplash.com/@XXX_username_XXX?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText']
---

The Lily58L is a split mechanical keyboard that allows for extensive customization. You get to choose and customize every single part of your keyboard, from the choice of microcontrollers (USB-C!) to the keycaps. Then assemble and solder your own keyboard from that. 

{{< image src="images/featured.jpg" alt="Final result: Lily58L" >}}
  Final product, my self-made Lily58L
{{< /image >}}

»*What is a split keyboard?*« I hear you ask. It is a type of mechanical keyboard that is split into two halves, one for each hand. The halves are connected via a 3.5mm aux cable and can be placed exactly at each hand's natural resting position. Placing the hands further apart opens up the shoulders, a more ergonomic posture than that conventional keyboards force us into. This is especially relevant for office workers who spend long hours typing.

For me, building the Lily58L was an interesting and fun experience, but excruciating at times. This article is about my tale of battling a stubborn PCB for hours on end. For those considering taking on this project themselves, this is not a build guide. However, I included some tips that would have saved past-me a lot of time (and money), list the parts I bought, and explain the major steps I took and mistakes I made. If you think it's cheap because you assemble it yourself, check out the [list of parts and tools]({{< ref "/blog/lily58-parts" >}}). In total, I spent almost 400€.

---
1. [Getting started]({{< ref "#getting-started" >}})
2. [Battle of the boards]({{< ref "#battle" >}})
3. [The first blunder]({{< ref "#blunder1" >}})
4. [The second blunder]({{< ref "#blunder2" >}})
5. [Conclusion]({{< ref "#conclusion" >}})
---

# Getting started{#getting-started}

As a base, I used the [Lily58L kit](https://keycapsss.com/keyboard-parts/pcbs/71/lily58l-split-keyboard-pcb) offered by the German shop [keycapsss.com](https://keycapsss.com). The mechanical switches I chose needed to be quiet since I work as a software engineer in a shared office. The Korean [Boba U4](https://splitkb.com/collections/switches-and-keycaps/products/gazzew-boba-u4-silent-tactile-switch?variant=32967114063949) switches are quieter than my MacBook Pro's and have a pronounced tactile bump. As all of my gear has moved firmly into the USB-C era, I wanted my keyboard to match that. That's why I went with two [Elite-Cs](https://kriscables.com/product/elite-c-pcb-v4-microcontroller/) for the microcontrollers that handle key input, macro logic, and communication on each half of the keyboard. Another benefit is that the USB port is mounted very firmly compared to their cheaper alternative, the Arduino Pro Micro. The Arduino's Micro-USB port is famously easy to accidentally rip off. Whenever possible, I tried to chose European vendors, as they ship fast, don't get stuck in customs, and offer good support. 

> [Click here to see the full list of parts and tools]({{< ref "/blog/lily58-parts" >}})

After receiving all the required parts and tools, I got to work right away. My soldering setup looks super sketchy but did its job. At one point during the build, the tip of the cheap soldering iron I was using simply melted. Not sure if it was my fault, but the thicker tips worked fine afterwards. 

{{< image src="images/build-items.jpg" alt="Overview of build stations and tools" >}}
  (clockwise) The first soldering station; The melted tip of my cheap soldering iron; Elite-C laying in its package; Second soldering station on an old baking sheet.
{{< /image >}}

I started by soldering one diode and one key switch socket for each key. It turned out to be quite good practice since the diodes are quite small and I had to solder 232 points! Good thing I'd only have to do this step once.

{{< image src="images/diodes.jpg" alt="Closeup shots of soldered diodes" >}}
  (clockwise) Closeup of (poorly) soldered diodes; Diode size comparison; Overview of the two PCBs.
{{< /image >}}


# Battle of the boards{#battle}

The next step was to mount the Elite-C for each half. The idea is quite straight-forward, you only need to place two rows of sockets on the PCB and solder them from the back. Then you place the controller on the sockets and insert thin header legs, which are soldered on the front. This way, the controller can be removed from the board in case it breaks. This is especially relevant for Arduino Pro Micros, which tend to break after some use. Since I bought two reliable Elite-Cs and was hoping to save some money, I didn't attach them using sockets but instead soldered them directly onto the board.

After completing the right half, I was intensely excited when I plugged it into my Mac for the first time. Just a couple of weeks after deciding to buy it, I'd be typing on this awesome keyboard! I proceeded to flash the chip's firmware and had a small heart attack when I noticed that one column of keys was not responding, but the problem was quickly solved by reflowing some of the admittedly poor solder joints on the PCB.

{{< image src="images/bad-joints.jpg" alt="Comparison of solder joints at the beginning and end of the project. Progressed from quite bad and uneven to pretty even." >}}
  Comparison of solder joints at the beginning and end of the project. Started with bad and uneven, but progressed to decent solder joints.
{{< /image >}}

{{< image src="images/right-half-done.jpg" alt="Right half of the keyboard is done" >}}
  Right half of the keyboard is done 🎉
{{< /image >}}


## First blunder{#blunder1}

One half is done, just one more to go! Now comes the first fail. Since the PCBs are reversible, they have a microcontroller mounting point for the left-hand side and one for the right. Check out the [build guide](https://keycapsss.com/help/lily58l/buildguide_en#install-pro-micro-with-sockets) for a visual explanation. In the hubris I felt after completing the right half so quickly, I soldered the left controller in the wrong column, but I didn't know that at the time. I happily connected the left half to try it out - with no success.

{{< video src="images/left-half-not-working-vid.mp4" >}}
  Connecting the left half via USB. The controller's power light turns on, then off.
{{< /video >}}

After many hours of trial and error debugging, reflowing all solder points, I was despairing. Thankfully, the kind people in keycapsss' discord server were able to find the mistake: the wrong column. Now began a period of brutal war. I tried my best to desolder the microcontroller from the PCB to salvage the parts. I tried this for around 10 hours to no success, using desoldering wick, solder grease, and a hot air station, but still lost the war. In the end, I clipped the header legs to free the now broken controller. It is now framed on my wall and tells its story.

{{< image src="images/elite-c.jpg" alt="The broken Elite-C, framed on my wall" >}}
  The broken Elite-C: freed, framed, and up close
{{< /image >}}


## The second blunder{#blunder2}

A couple of weeks passed with no progress. I felt demotivated by all the effort I had put in, only to break two very essential parts. Also, I had some university exams to study for, so the keyboard's priority dropped. After talking to the owner of keycapsss, I was able to arrange a replacement order without having to buy the whole building kit, to save some money. I bought one Arduino and one side of the PCB. Of course, all the other tiny parts had to be desoldered and reattached to the new PCB once it arrived. Great fun!

My second mistake was even worse than the first. After last time's disaster, I took great care to mount the controller in the correct column this time. Once mounted, it didn't take me long to figure out what I had overlooked - it was flipped upside down. It may have been due to the time that passed between the first and second attempt, or just plain stupidity. I didn't bother to desolder the controller this time but rather went back to the shop's owner to plead for one more replacement package to be sent to me. 

Time to move all the tiny parts from the old to the new PCB again. Third time's a charm - I mounted the new Arduino and it worked! The rest was child's play. The key switch sockets make it very easy to insert my desired switches with a simple click. Mount the case, put some beautiful blank white PBT keycaps on top, and voilà!

{{< image src="images/featured.jpg" alt="Picture of the completed keyboard" >}}
{{< /image >}}


# Conclusion{#conclusion}

My first hardware project is done. But at what cost? Building this keyboard cost me much more time and money than anticipated, but on the other hand, I'm really happy with the result. The main reasons for the long delay were my exam period and waiting for (replacement) parts. I learned a lot along the way, and improved my soldering skills and desoldering skills. 

I'm super happy with my Lily58L as a daily driver at work. The only other change I did was replacing the thick acrylic case with a thinner one half a year later.

The keyboard runs on [QMK](https://docs.qmk.fm/#/newbs), a highly customizable firmware. It allows me to write using the amazing [Bone 2 keyboard layout](https://neo-layout.org/Layouts/bone/), create my own keyboard layers, move the mouse, and much more. I may write a post about it in the future.