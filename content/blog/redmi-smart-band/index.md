---
title: "How to enable Android's Smart Lock with the Redmi Smart Band Pro"
date: 2022-07-19T17:06:03+02:00
draft: false
featuredImage: featured.png
slug: redmi-smart-band-pro-android-smart-lock
images: ['blog/redmi-smart-band-pro-android-smart-lock/social.png']
---

I've been a happy user of a few generations of Mi Bands for many years now. Starting with the Mi Band 2 and its tiny black and white display, next the Mi Band 3 which was comparatively comfortable. After that, I've been wearing the Mi Band 5 for one and a half years. The screen is great. What I value most about the series was not the fitness aspect or heart rate tracking, but rather the super cheap price and phone notification access. But the feature that may be most important for me is the ability to use Android's Smart Lock.

[Android Smart Lock](https://get.google.com/smartlock/index.html) allows you to keep your phone unlocked under certain conditions, for example while connected to selected bluetooth devices. As I always have my watch with me, I can use my phone without having to enter my pin or deal with the super unreliable under-display fingerprint reader of my [Redmi K20 Pro](https://www.gsmarena.com/xiaomi_redmi_k20_pro-9708.php). 

After losing my Mi Band 5, I got a brand new Redmi Smart Band Pro in the mail today and was excited to try it out. I like the form factor and the bigger screen would be great for notifications. After setting it up for a while and searching through all of the band's and the Mi Fitness app's settings, I was disappointed. I could not find an option to automatically pair the band, so it would show up in Android's bluetooth settings or make the band discoverable, so I could pair it manually. The previous app (Zepp Life, used to be called Mi Fit App) had a menu item "Smart Lock" that would pair the band and open the Smart Lock settings page.

After fiddling around, I did find a workaround though. It's quite hacky, but it seems to work!

1. Download the [nRF Connect for Mobile](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) app

1. Unpair the band from the Mi Fitness app

1. Select the language on the band and proceed to the "wait" screen

1. Open nRF Connect and start a scan (top right)

1. You should find a device called `Redmi Smart Pro B055` (or similar)

1. Tap to connect it. A new tab opens.

1. In the three-dot menu, tap `Bond` to pair the device. Android will ask you to confirm pairing the device.

1. Proceed with the pairing process in the Mi Fitness app \
After pairing in the Mi Fitness app, my watch turned off and stayed off. After connecting the charger, it turned back on and successfully connected with the app and also Android itself.

1. Go to the security settings of your device and tap smart lock. After entering your pin or pattern, select the band as a `Trusted device`.

Afterwards, you can uninstall the nRF Connect app. The band should stay connected and automatically reconnect after disconnecting.

Hope this was helpful :)