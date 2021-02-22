const AppWrapper = document.getElementById('scroll');
const rows = document.querySelectorAll(".row");

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight;
}

function isRowVisible() {
    for(let i = 0; i < rows.length; i++){
        let row = rows[i];
        isElementInViewport(row) ? row.classList.add("isVisible") : row.classList.remove("isVisible");
    }
}

document.addEventListener("DOMContentLoaded", isRowVisible);
AppWrapper.addEventListener("scroll", isRowVisible);
window.addEventListener("resize", isRowVisible);
