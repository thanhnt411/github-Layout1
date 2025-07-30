const mobileMenu = document.getElementById("toggle");
const nav = document.getElementById("nav");
const iconOpen = document.getElementById("isOpen");
const iconClose = document.getElementById("isClose");
mobileMenu.addEventListener("click",function() {
    nav.classList.toggle("active");
    if(nav.classList.contains("active")) {
        document.body.classList.add("no-scroll");
        iconOpen.classList.add("menu-icon-close");
        iconClose.classList.remove("menu-icon-open");
    }else {
        document.body.classList.remove("no-scroll");
        iconOpen.classList.add("menu-icon-open");
        iconClose.classList.remove("menu-icon-close");
    }
});
