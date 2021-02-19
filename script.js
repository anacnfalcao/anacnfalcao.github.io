const AppWrapper = document.getElementById('scroll');
const cards = document.querySelectorAll(".row");

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight;
}

function isCardVisible() {
    for (card of cards) {
        isElementInViewport(card)
        ? card.classList.add("isVisible")
        : card.classList.remove("isVisible");
    }
}

document.addEventListener("DOMContentLoaded", isCardVisible);
AppWrapper.addEventListener("scroll", isCardVisible);
window.addEventListener("resize", isCardVisible);
