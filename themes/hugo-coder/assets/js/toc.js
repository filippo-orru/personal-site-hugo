// This file handles the floating table of contents

function handleFloatingToc() {
    let toc = document.querySelector(".table-of-contents.floating #TableOfContents");
    if (!toc) {
        // The floating TOC is not inserted if an inline TOC is present. Do nothing.
        return;
    }

    function getOffset(el) {
        var _x = 0;
        var _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }

    let content = document.getElementsByClassName("content")[0];
    let initial = getOffset(toc).top;

    let headers = Array.from(document.querySelectorAll("h1, h2, h3"))
        .filter((header) => header.classList.length == 0);
    let tocElements = Array.from(toc.querySelectorAll("a"));

    function recalculateTocPosition() {
        if (content.classList.contains("toc-floating")) {
            if (initial > window.scrollY + 64) {
                content.classList.remove("toc-floating");
            }
        } else {
            if (toc.getBoundingClientRect().y < 64) {
                content.classList.add("toc-floating");
            }
        }

        // Handle setting currently active TOC element
        tocElements.forEach((a) => a.parentElement.classList.remove("active")); // Reset class

        for (var i in headers) {
            let header = headers[i];
            let bottom = header.getBoundingClientRect().bottom - 300;

            if (bottom > 0) {
                let previous = i > 0 ? headers[i - 1] : header;
                let text = previous.innerText;

                let tocElement = tocElements.find((a) => a.innerText == text);
                tocElement && tocElement.parentElement.classList.add("active");

                // console.log(tocElement);
                break;
            }
        }
    }

    recalculateTocPosition();
    window.addEventListener('scroll', recalculateTocPosition);
}

handleFloatingToc();