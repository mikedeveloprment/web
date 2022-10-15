// Scroll Smoth
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    wrapper: "#wrapper",
    content: "#content",
    smooth: 1,
    smoothTouch: 1,
    normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
    ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
    effects: true,
    preventDefault: true
});

// Header
const headerElement = document.querySelector(".header");

const callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
        headerElement.classList.remove("header__scroll")
    } else {
        headerElement.classList.add("header__scroll")
    }
}

const headerObserver = new IntersectionObserver(callback)
headerObserver.observe(headerElement)

