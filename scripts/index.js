var E=Object.defineProperty;var u=(o,e)=>()=>(o&&(e=o(o=0)),e);var m=(o,e)=>{for(var t in e)E(o,t,{get:e[t],enumerable:!0})};var w={};m(w,{initThemeSwitcher:()=>b});function v(){[document.body,document.querySelector(".header"),document.querySelector(".main"),document.querySelector(".footer"),document.querySelector(".courses"),...document.querySelectorAll(".skills__block-title"),document.querySelector(".header__nav-list"),document.querySelector(".header__button"),...document.querySelectorAll(".courses__item-status")].forEach(t=>t?.classList.toggle("dark-theme"));let e=document.body.classList.contains("dark-theme");localStorage.setItem("theme",e?"dark":"light")}function b(){let o=localStorage.getItem("theme"),e=document.querySelector(".header__theme-toggle .slider");o==="dark"&&(v(),e&&(e.classList.add("active"),e.setAttribute("aria-pressed","true"))),e&&e.addEventListener("click",()=>{e.classList.toggle("active"),v(),e.setAttribute("aria-pressed",e.classList.contains("active"))})}var L=u(()=>{});var g={};m(g,{initAccordion:()=>A});function A(){let o=document.querySelectorAll(".skills__block");o.forEach(e=>{let t=e.querySelector(".skills__list"),i=()=>{window.innerWidth<768&&t.classList.toggle("show")};e.addEventListener("mouseenter",()=>{t&&window.innerWidth>=768&&t.classList.add("show")}),e.addEventListener("mouseleave",()=>{t&&window.innerWidth>=768&&t.classList.remove("show")}),e.addEventListener("click",i)}),window.addEventListener("resize",()=>{o.forEach(e=>{let t=e.querySelector(".skills__list");window.innerWidth>=768?t.classList.add("show"):t.classList.remove("show")})})}var S=u(()=>{});var _={};m(_,{initSmoothScroll:()=>T});function T(){document.querySelectorAll(".header__nav-list-item-link").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();let i=this.getAttribute("href").substring(1),r=document.getElementById(i);if(!r||r.offsetParent===null)return;let c=window.pageYOffset,s=r.getBoundingClientRect().top+c-c,l=1e3,a=null;function f(n){a===null&&(a=n);let d=n-a,k=Math.min(d/l,1),q=p(k);window.scrollTo(0,c+s*q),d>=l&&(a=null,window.history.pushState({},"",window.location.href)),d<l&&requestAnimationFrame(f)}function p(n){return n=Math.min(Math.max(n,0),1),n<.5?2*n*n:-1+(4-2*n)*n}requestAnimationFrame(f)})}),window.addEventListener("load",()=>{window.scrollTo(0,0)})}var y=u(()=>{});document.addEventListener("DOMContentLoaded",async()=>{let o=document.querySelector(".header__button"),e=document.querySelector(".header__nav"),t=document.querySelector(".content-wrapper"),i=document.querySelectorAll(".header__nav-list-item-link");o.addEventListener("click",()=>{e.classList.toggle("visible"),t.classList.toggle("nav-open"),o.classList.toggle("active")}),(async()=>{let{initThemeSwitcher:s}=await Promise.resolve().then(()=>(L(),w));s()})(),i.forEach(s=>{s.addEventListener("touchstart",()=>{s.classList.add("hover-effect")}),s.addEventListener("touchend",()=>{s.classList.remove("hover-effect")}),s.addEventListener("click",()=>{e.classList.remove("visible"),t.classList.remove("nav-open"),o.classList.remove("active")})});let{initAccordion:c}=await Promise.resolve().then(()=>(S(),g));c();let{initSmoothScroll:h}=await Promise.resolve().then(()=>(y(),_));h()});
