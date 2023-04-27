const headerSearch = document.querySelector("#header-search");
const header = document.querySelector("#header");

let headerHeight = header.offsetHeight;
console.log(headerHeight)

window.addEventListener("scroll", () => {
    let windowScroll = window.scrollY;

    if(windowScroll > headerHeight) {
        headerSearch.classList.remove("noscroll");
    } else {
        headerSearch.classList.add("noscroll");
    }
})