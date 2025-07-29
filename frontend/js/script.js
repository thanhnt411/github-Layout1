const mobileMenu = document.getElementById("toggle");
const nav = document.getElementById("mobile-nav");
mobileMenu.addEventListener("click",function() {
    nav.classList.toggle("active");
});

