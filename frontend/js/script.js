//START JS Menu
const mobileMenu = document.getElementById("toggle");
const nav = document.getElementById("nav");
const iconOpen = document.getElementById("isOpen");
const iconClose = document.getElementById("isClose");
mobileMenu.addEventListener("click",function() {
    nav.classList.toggle("active");
    if(nav.classList.contains("active")) {
        document.body.classList.add("no-scroll");
        iconOpen.classList.add("hidden");
        iconClose.classList.add("show");
    }else {
        document.body.classList.remove("no-scroll");
        iconOpen.classList.remove("hidden");
        iconClose.classList.remove("show");
    }
});

const navList = document.querySelector(".nav__list");
navList.addEventListener("click",function() {
    nav.classList.toggle("active");
    if(nav.classList.contains("active")) {
        document.body.classList.add("no-scroll");
        iconOpen.classList.add("hidden");
        iconClose.classList.add("show");
    }else {
        document.body.classList.remove("no-scroll");
        iconOpen.classList.remove("hidden");
        iconClose.classList.remove("show");
    }
})
//END JS Menu

//START JS Grid
const gridLoad = document.getElementById("load-grid");
const bonusGrid = document.querySelector(".grid--bottom");
gridLoad.addEventListener("click",function() {
    bonusGrid.classList.toggle("load");
})
//END JS Grid

//START JS Video
const buttonVideo = document.getElementById("video-mp4");
const playVideo = document.querySelector(".video__myVideo");
const playContainer = document.querySelector(".video__play-video")
const myVideo = document.querySelector(".video__section");
buttonVideo.addEventListener("click",function() {
    playContainer.classList.toggle("play");
    playVideo.classList.toggle("play");
    myVideo.classList.toggle("play");
    playVideo.play()
})
playVideo.addEventListener("ended",function() {
    playContainer.classList.toggle("play");
    playVideo.classList.toggle("play");
    myVideo.classList.toggle("play");
})
//END JS Video

