---
title: "How to find long-lost passwords in your clipboard history"
subtitle: "Inspecting the 'Paste' database."
date: 2023-06-10T11:08:03+02:00
draft: false
description: "I was able to find a lost password in my clipboard history using creativity, some SQL, and command line tools. A lesson in problem-solving for me."
ongoing: false
featured: false
slug: password-in-clipboard-history
featuredImage: featured.png
featuredImageSource: ['generated using DALL·E 3']
categories: []
---

<!--
# Plan
- Goals
    - explain journey of debugging this issue
      - demonstrate problem solving
    - help users with a similar issue

- Who is this written for
    - me
    - HN
    - people with a similar issue

- Length: short

# Structure
- tldr
  - how to quickly search through all previously pasted content
  - link script on gist.github.com?

- intro
  - motivation
- idea: used paste app to copy
  - what is paste app
- how to get access to the database
  - finding out where it is stored
  - how to browser
- finding the password
  - hint from bitwarden
  - based on timestamp
  - brute force
    - using sql to extract all paste snippets as binary blobs
    - using plutil to convert binary to xml
    - using rg to quickly search through all xml files
- conclusion
  - dont be stupid, double check your saved passwords
  - a note on security :thinking:

{< image src="images/image.jpg" alt="ALT" >}}
  DESCRIPTION
{< /image >}}

-->

{{< notice info "TLDR" >}}
I was able to find a lost password in my clipboard history using creativity, some SQL, and command line tools. A lesson in problem-solving for me.
{{</ notice >}}

After setting up a new, I tried to build an Android project and discovered that the release signing key was missing. I use [Bitwarden](https://bitwarden.com) as my password manager, so the signing key must be saved there -- or so I thought -- there was an entry for the signing key, but it was empty. It seemed like I had forgotten to paste the password when creating the entry. 

After some despair, I remembered where the key might be found: in my clipboard. \
I use the [Paste app](https://pasteapp.io) to easily copy & paste multiple items at a time and keep a history of all my clipboard items. 

**The signing key I generated in Bitwarden must still be in my clipboard history! But how do I find it?**

Paste allows fuzzy search for all my clipboard history, which works okay. But of course it can't be used to find an unknown string, so I needed a different approach. I knew *when* the key was generated, thanks to the creation date of the entry in Bitwarden, but manually scrolling through thousands of items I had copied in the past months was not an option. There has to be another way, right?


# Searching the data

The app must have a database somewhere containing all copied snippets. I was able to find it by inspecting the `Paste.app` process in the Activity Monitor. The "Open Files and Ports" tab contains an interesting file handle: `Paste.db`.

{{< image src="images/paste-handles.png" alt="The Paste app's open files and ports, in the macOS Activity Monitor." >}}
  The Paste app's open files and ports, in the macOS Activity Monitor.
{{< /image >}}

At first, I was unsure whether I'd be able to easily read the database's contents, but my first hunch turned out to be correct. It's simply SQLite. Using the command line to browse through an unknown database is pretty cumbersome, so I used [DB Browser for SQLite](https://sqlitebrowser.org), which makes it easy to explore SQLite databases. There are a dozen tables, but the interesting one is `ZSNIPPET`.

{{< image src="images/sqlite-browser-1.png" alt="The ZSNIPPET table in Paste's database." >}}
  The `ZSNIPPET` table in Paste's database. Blob of a snippet shown in the top right.
{{< /image >}}

This table contains everything I copied in the past 6 months. My first instinct was to use the `timestamp` to quickly jump to the time the Bitwarden note was created. However, for some reason, Paste's timestamps do not match usual Unix timestamps. I also tried using a known timestamp to calculate the offset between the two, but this didn't work either.


#  Brute force

The next-best solution that came to my mind, was to search through *all* data. 

Before generating the release signing key, I had also copied the command to create the keystore. So I'd just need to find this snippet and go from there. 

```bash
keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```
However, I couldn't just search it using SQLite, since copied text is stored as a binary blob in the database. Using the blob header `bplist00`, I found it to use Apple's "[Information Property List](https://developer.apple.com/documentation/bundleresources/information_property_list)" format. And, after dusting off my SQL, I was able to extract all blobs and convert them from 'plist' to XML.

```bash
$ mkdir bins && cd bins

$ sqlite3 Paste.db "select writefile('object' || ZTIMESTAMP || '.bin', ZPREVIEW2) FROM ZSNIPPET;"

$ ls . |  awk '{print $1}' | xargs plutil -convert xml1
```

After that, I used the excellent tool [ripgrep](https://github.com/BurntSushi/ripgrep) to search through all XML files for the known string `keytool`.

```bash
$ rg "keytool"

object701805006.782251.xml
27:		<string>  keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

Now it was just a matter of querying the database using a range around the timestamp `701805006.782251`. **And there it was, the keystore password!**


# Final thoughts

Don't be an idiot, make sure to save your passwords.  

But the interesting detail here might be security. Any application could find the Paste database and extract all passwords, tokens & keys I've ever copied. No `sudo` required. A password might even have some additional context thanks to other nearby clipboard items like URLs or email addresses.

# More
- Read how I redesigned this website here [→ Pretty fonts for a modern look]({{< ref "/blog/updating-site-theme" >}}).
- I spent two months developing a survey creation platform, deployed it to >300k users and compared it to Google Forms and SurveyJS. [→ Comparing Survey Creation Platforms]({{< ref "/blog/bachelor-thesis" >}}).