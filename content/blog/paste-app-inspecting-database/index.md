---
title: "How to inspect the database used by Paste"
subtitle: "to find my long lost passwords."
date: 2023-04-30T08:44:03+02:00
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

# TLDR
// TODO

# Journey

After setting up a fresh install of MacOS, I tried to build an Android project and discovered that the release signing key was missing. No problem, I use [Bitwarden](https://bitwarden.com) as my password manager, the signing key is saved there. Or so I thought -- there was a note for the signing key, but it was empty. It seemed like I had forgotten to paste the password when creating the entry. 

After some despair, I remembered where the key might be found: in my clipboard. \
I use the [Paste app](https://pasteapp.io) to easily copy & paste multiple items at a time and keep a history of all my copied items. The signing key I generated in Bitwarden must still be in my clipboard history! But how to find it?


Paste allows fuzzy search through all clipboard history, which works okay. But of course it can't be used to find an unknown string, so I needed a different approach. I knew when the key was generated thanks to the creation date of the secure note in Bitwarden, but manually scrolling through thousands of items I had copied in the past months was not an option.


## Searching the data

The app must have a database somewhere containing all copied snippets. I was able to find it by inspecting the Paste.app process in the Activity Monitor. The `Open Files and Ports` tab contains an interesting file handle: `Paste.db`.

{< image src="images/paste-handles.png" alt="The Paste app's open files and ports, in the MacOS Activity Monitor." >}}
  The Paste app's open files and ports, in the MacOS Activity Monitor.
{< /image >}}

At first I was unsure whether I'd be able to easily read the database's contents, but my first hunch turned out to be correct. It's simply SQLite. Using the commandline to browse through an unknown database is pretty cumbersome, so I used [DB Browser for SQLite](https://sqlitebrowser.org), which makes it easy to explore sqlite databases. There are a dozen tables, but the interesting one is `ZSNIPPET`.

{< image src="images/sqlite-browser-1.png" alt="The ZSNIPPET table in Paste's database." >}}
  The `ZSNIPPET` table in Paste's database. Blob of a snippet shown in the top right.
{< /image >}}

This table contains everything I copied in the past 6 months. My first instinct was to use the `timestamp` to quickly jump to the time the Bitwarden note was created. This turned out to be harder than anticipated. For some reason, Paste's timestamps are offset from the actual timestamp. As an example, paste's `704571978.130838` roughly equals the Unix timestamp `1682879208` (Sunday, April 30, 2023 8:26:48 PM GMT+02:00) so the offset is ca. `978307229.869162`.

# More
- []()