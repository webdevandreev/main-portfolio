function r(){[document.body,document.querySelector(".header"),document.querySelector(".main"),document.querySelector(".footer"),document.querySelector(".courses"),...document.querySelectorAll(".skills__block-title"),document.querySelector(".header__nav-list"),document.querySelector(".header__button")].forEach(c=>c?.classList.toggle("dark-theme"));let e=document.body.classList.contains("dark-theme");localStorage.setItem("theme",e?"dark":"light")}function s(){let t=localStorage.getItem("theme"),e=document.querySelector(".header__theme-toggle .slider");t==="dark"&&(r(),e&&(e.classList.add("active"),e.setAttribute("aria-pressed","true"))),e&&e.addEventListener("click",()=>{e.classList.toggle("active"),r(),e.setAttribute("aria-pressed",e.classList.contains("active"))})}document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelector(".header__button"),e=document.querySelector(".header__nav"),c=document.querySelector(".content-wrapper"),n=document.querySelectorAll(".header__nav-list-item-link");t.addEventListener("click",()=>{e.classList.toggle("visible"),c.classList.toggle("nav-open"),t.classList.toggle("active")}),s(),n.forEach(o=>{o.addEventListener("touchstart",()=>{o.classList.add("hover-effect")}),o.addEventListener("touchend",()=>{o.classList.remove("hover-effect")})})});
