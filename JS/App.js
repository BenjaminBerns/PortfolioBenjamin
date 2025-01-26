const toggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector("#display");
const userIcon = document.querySelector(".user-icon");

const toggleNav = () => {
    toggler.classList.toggle("open");

    const ariaToggle = toggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    toggler.setAttribute("aria-expanded", ariaToggle);
    navLinksContainer.classList.toggle("openv2");
}

toggler.addEventListener("click", toggleNav);

new ResizeObserver(entries => {
    if(entries[0].contentRect.width <= 900){
        navLinksContainer.style.transition = "transform 0.3s ease-out"
    }else{
        navLinksContainer.style.transition = "none"
    }
}).observe(document.body);