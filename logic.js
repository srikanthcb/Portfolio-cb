//side navigation code

let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");

menuBtn.onclick = function()
{
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvent="none";
    navBar.classList.add("active");
    body.style.overflow = "hidden";
}


cancelBtn.onclick = function()
{
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvent="auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";
}


//sticky navigation code

let val;
let nav = document.querySelector("nav");
let ScrollBtn = document.querySelector(".scroll-button a");
console.log(ScrollBtn)
window.onscroll = function()
{
    if(document.documentElement.scrollTop>20)
    {
        nav.classList.add("sticky");
        ScrollBtn.style.display = "block";
    }else
    {
        nav.classList.remove("sticky");
        ScrollBtn.style.display = "none";
    }
}

//Side Navigation Bar Close While We Click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0 ; i < navLinks.length; i++)
{
    navLinks[i].addEventListener("click", function()
    {
        menuBtn.style.opacity="1";
        menuBtn.style.pointerEvent="auto";
        navBar.classList.remove("active");
    });
}