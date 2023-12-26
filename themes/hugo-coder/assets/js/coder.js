const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

window.setTimeout(() => {
    body.classList.add("ready"); // Enables animation on click, but don't animate on page load
}, 220);

// Check if user preference is set, if not check value of body class for light or dark else it means that colorscheme = auto
if (localStorage.getItem("colorscheme")) {
    setTheme(localStorage.getItem("colorscheme"));
} else if (body.classList.contains('colorscheme-light') || body.classList.contains('colorscheme-dark')) {
    setTheme(body.classList.contains("colorscheme-dark") ? "dark" : "light");
} else {
    setTheme(darkModeMediaQuery.matches ? "dark" : "light");
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        let theme = body.classList.contains("colorscheme-dark") ? "light" : "dark";
        setTheme(theme);
        rememberTheme(theme);
    });
}

darkModeMediaQuery.addListener((event) => {
    setTheme(event.matches ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", function () {
    let node = document.querySelector('.preload-transitions');
    node.classList.remove('preload-transitions');
});

function setTheme(theme) {
    body.classList.remove('colorscheme-auto');
    let inverse = theme === 'dark' ? 'light' : 'dark';
    body.classList.remove('colorscheme-' + inverse);
    body.classList.add('colorscheme-' + theme);
    document.documentElement.style['color-scheme'] = theme;
}

function rememberTheme(theme) {
    localStorage.setItem('colorscheme', theme);
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

let toc = document.getElementById("TableOfContents");
let content = document.getElementsByClassName("content")[0];
let initial = getOffset(toc).top;

let headers = Array.from(document.querySelectorAll("h1, h2, h3"))
    .filter((header) => header.classList.length == 0);
let tocElements = Array.from(toc.querySelectorAll("a"));

function recalculateTocPosition() {
    if (content.classList.contains("floating")) {
        if (initial > window.scrollY + 64) {
            content.classList.remove("floating");
        }
    } else {
        if (toc.getBoundingClientRect().y < 64) {
            content.classList.add("floating");
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