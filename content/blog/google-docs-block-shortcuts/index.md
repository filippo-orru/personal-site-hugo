---
title: "Block Shortcuts in Google Docs"
subtitle: "Prevent Google Docs from overriding shortcuts like Option+/"
description: "A script to prevent Google Docs from overriding shortcuts like Alt+L or Option+/"
date: 2024-11-07T08:38:59+01:00

draft: false
showToc: false
ongoing: false
featured: false
# featuredImage: featured.jpg
# featuredImageSource: ['Name', 'https://unsplash.com/@XXX_username_XXX?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText']

categories: ["how-to"]
---

<!--
# Plan
- Who is this written for
    - me
    - people with the same issue

- Length: short

{< image src="images/image.jpg" alt="ALT" >}}
DESCRIPTION
{< /image >}}

-->

Like many people, I use a keyboard layout that relies on using `Option` to enter some special characters. When using Google Docs, Sheets and Slides, some keyboard shortcuts are triggered by pressing `Option` (or `Alt`) along with certain keys, which is very annoying. Most importantly, I use `Option + s` to write a slash `/`, but Google Docs will interpret this as `Option + /`, which opens the menu search bar.

{{< image src="google-sheets-menu.png" alt="Screenshot of the menu search bar in Google sheets" >}}
{{< /image >}}

**To fix this, I wrote a script that blocks Google Docs from receiving any `[ALT] + any` keyboard event.**

# Get the script

1. Add the [Tampermonkey](https://www.tampermonkey.net/#download) extension to your browser
2. [Click here](https://openuserjs.org/scripts/ffactory/Block_Google_Docs_keyboard_shortcuts_(ALT_OPTION)) to open the script
3. Click install
    {{< image src="install-script.png" alt="Screenshot of the install button on the openuserjs site" >}}
    Screenshot of the install page
    {{< /image >}}


To find out how it works, continue reading! If there is an issue with the script, you can leave a comment.

# The easy part

My first idea was to simply add a `keydown` even listener to the `window`. It must be called during the capturing phase (read more about [capturing vs bubbling phase](https://www.quirksmode.org/js/events_order.html#link4)), we can check if `keydown.altKey == true` and stop the event propagation.

```js
function blockShortcutsForElement(element) {
  console.log("Suppressing keyboard shortcuts on element");

  // Add the keydown listener to the element
  element.addEventListener(
    'keydown',
    function (event) {
      if (event.altKey) {
        console.log("Suppressed keyboard shortcut:", event.key);
        event.stopImmediatePropagation();
      }
    },
    true // Run during capturing phase to intercept the event before bubbling phase
  );
}

blockShortcutsForElement(window);
```

This works fine for Google Sheets because it handles events "the normal way". 

# The hard part

Getting this to work for Google Docs and Slides wasn't as easy! When you click the document, an invisible iframe is focused. This means that `keydown` events will not reach the top level `window`. Instead, they are handled inside the iframe and then likely reported to the outer scope using message passing.

What this means is we need to add the event listener inside the iframe. When opening a Google Docs document, the site's HTML already contains the iframe, so we can attach the listener to it immediately.

``` js
// Check if the iframe already exists (Google Docs)
const targetIframe = document.querySelector('iframe.docs-texteventtarget-iframe');
if (targetIframe) {
  const iframeDoc = targetIframe.contentDocument || targetIframe.contentWindow.document;
  addEventListener(iframeDoc);
}
```

In the case of Google Slides, the iframe is added dynamically after the HTML has loaded. We can use a `MutationObserver` to listen for DOM changes. Once the iframe has been added, we can add the listener and stop the observer.

```js 
// ...
} else {
  // The iframe does not exist yet (Google Slides). Wait for it to be added by the site's JS
  console.log("Keypress target iframe NOT YET detected. Will wait until it's added");

  const timeoutId = window.setTimeout(function () {
    console.error("Keypress target iframe not found! Maybe Google's initialization has changed, check the script.");
  }, 2000);

  // Set up a MutationObserver to monitor future changes
  const observer = new MutationObserver(function (mutationsList) {
    for (const mutation of mutationsList) {
      for (const addedNode of mutation.addedNodes) {
        // Check if the added node is the target iframe
        if (addedNode.tagName && addedNode.tagName.toLowerCase() === 'iframe' && addedNode.classList.contains('docs-texteventtarget-iframe')) {
          const iframeDoc = addedNode.contentDocument || addedNode.contentWindow.document;
          addEventListener(iframeDoc);
          window.clearTimeout(timeoutId);
          observer.disconnect(); // Stop observing once the target iframe is found
          return;
        }
      }
    }
  });

  // Observe the document for added iframes
  observer.observe(document.body, { childList: true, subtree: true });
}
```

As mentioned above, to use this script, install the [Tampermonkey](https://www.tampermonkey.net/#download) extension and then add my script: [openuserjs.org/scripts/ffactory/Block_Google_Docs_keyboard_shortcuts](https://openuserjs.org/scripts/ffactory/Block_Google_Docs_keyboard_shortcuts_(ALT_OPTION)).