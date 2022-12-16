---
title: "Building my Lily58L"
# TODO subtitle: ""
slug: "build-a-split-keyboard-in-4-months"
date: 2022-12-11T08:16:25+07:00
dontListSubpages: true
draft: true
# TODO description: 

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
  [List of parts]({{< ref "list-of-parts" >}})
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
  
  - add key caps, all done! *pic*

4. Conclusion
  - this took way longer than I hoped
    - exam period in spring
    - waiting time for replacement parts
  - way more expensive than I hoped
  - my first hardware project, learned a lot
    - soldering *pic bad joints* #TODO pic of good joints?
    - desoldering > - <
    - 