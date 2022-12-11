---
title: "How to build a split keyboard in just 4 months"
# TODO subtitle: ""
slug: "build-split-keyboard-4-months"
date: 2022-12-11T08:16:25+07:00
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
- total cost
- funny

# structure

1. setup
  - list of parts and tools and where I bought them
    - Keycapsss 1 70.90€
      - Kailh Hot Swap PCB Sockets (6x)
      - Lily58L Split Keyboard PCB Parts Kit 
      - Lily58L Split Keyboard PCB
      - Lily58 Acrylic Plate Case (superseded by plate case)
    - Keycapsss 2 27.50€
      - single Row Socket Headers & Pins
      - Arduino Pro Micro 5v
    - Keycapsss 3 27.50€
      - single Row Socket Headers & Pins
      - Arduino Pro Micro 5v
    - Keycapsss 4 39.90€
      - Lily58 Plate Case - Triangle Edition Gold/Black
    - Kbdfans 38€
      - NP PBT Blank White KEYCAPS SET 124 Keys
    - Aliexpress 28€
      - 2x serial OLED display (1 broken, 1 in use)
      - Cherry MX Rubber O-Rings (unused)
      - Black blank PBT keycaps (unused)
    - splitkb 61€
      - Gazzew Boba U4 Silent Tactile Switch (70 pcs)
    - Amazon 38,30€
      - Soldering set: iron, pincers, multimeter
      - USB C to C cable 
      - braided TRRS cable
      - Soldering grease
      - Desoldering wick
      - Hot air desoldering station (returned, didn't work at all)
      - 
    
    TOTAL: ~331€ x-x
    
  - soldering setup *pics*

2. diodes
  - mount in the correct direction
  - they pretty small
  - 58 * 2 * 2 = 232 soldering points. good thing I only have to do this once

3. battle of the boards
# TODO build guide pics?
  - usb-c is nice -> two elite-c's
    - additional benefit: port is sturdy unlike arduinos' which might rip out

  - solder left side
    - works, *except 1 column*
    - reflow *bad solder joints*
    - left side done! 

  - solder right side
    - *video* doesnt work
    - (FAIL 1) shoot, soldered into the wrong columns
    - save money: try to salvage elite-c for >15 hours over two weeks
    - give up
      - at least it create art
    - order new single pcb + arduino pro micro
    - solder arduino
    - (FAIL 2) wrong orientation (upside down)
    - order new single pcb + arduino pro micro
    - solder arduino
    - all done!

  - insert all switches (korean guy gazzew: boba u4)
    - the acrylic case is a bit too thick, they pop out easily but works okay
    - after half a year order better thinner case that fits
  
  - add keycaps

4. QMK Configuration
  - bone2 keyboard layout
  - mac os