var b=Object.defineProperty;var u=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>{for(var o in e)b(t,o,{get:e[o],enumerable:!0})};var g={};m(g,{initThemeSwitcher:()=>A});function v(){[document.body,document.querySelector(".header"),document.querySelector(".main"),document.querySelector(".footer"),document.querySelector(".courses"),...document.querySelectorAll(".skills__block-title"),document.querySelector(".header__nav-list"),document.querySelector(".header__button")].forEach(o=>o?.classList.toggle("dark-theme"));let e=document.body.classList.contains("dark-theme");localStorage.setItem("theme",e?"dark":"light")}function A(){let t=localStorage.getItem("theme"),e=document.querySelector(".header__theme-toggle .slider");t==="dark"&&(v(),e&&(e.classList.add("active"),e.setAttribute("aria-pressed","true"))),e&&e.addEventListener("click",()=>{e.classList.toggle("active"),v(),e.setAttribute("aria-pressed",e.classList.contains("active"))})}var w=u(()=>{});var L={};m(L,{initSmoothScroll:()=>T});function T(){let t=document.querySelectorAll(".header__nav-list-item-link");t.forEach(e=>{e.addEventListener("click",function(o){o.preventDefault();let i=this.getAttribute("href").substring(1),c=document.getElementById(i);if(!c||c.offsetParent===null)return;let r=Array.from(t).indexOf(e)===t.length-1;r||(c.style.marginTop="50px");let n=window.pageYOffset,_=c.getBoundingClientRect().top+n-(r?0:50)-n,l=1e3,a=null;function f(s){a===null&&(a=s);let d=s-a,q=Math.min(d/l,1),k=E(q);window.scrollTo(0,n+_*k),d>=l&&(a=null,window.history.pushState({},"",window.location.href)),d<l&&requestAnimationFrame(f)}function E(s){return s=Math.min(Math.max(s,0),1),s<.5?2*s*s:-1+(4-2*s)*s}requestAnimationFrame(f)})}),window.addEventListener("load",()=>{window.scrollTo(0,0)})}var S=u(()=>{});var y={};m(y,{initAccordion:()=>x});function x(){let t=document.querySelectorAll(".skills__block");t.forEach(e=>{let o=e.querySelector(".skills__list"),i=()=>{window.innerWidth<768&&o.classList.toggle("show")};e.addEventListener("mouseenter",()=>{o&&window.innerWidth>=768&&o.classList.add("show")}),e.addEventListener("mouseleave",()=>{o&&window.innerWidth>=768&&o.classList.remove("show")}),e.addEventListener("click",i)}),window.addEventListener("resize",()=>{t.forEach(e=>{let o=e.querySelector(".skills__list");window.innerWidth>=768?o.classList.add("show"):o.classList.remove("show")})})}var p=u(()=>{});document.addEventListener("DOMContentLoaded",async()=>{let t=document.querySelector(".header__button"),e=document.querySelector(".header__nav"),o=document.querySelector(".content-wrapper"),i=document.querySelectorAll(".header__nav-list-item-link");t.addEventListener("click",()=>{e.classList.toggle("visible"),o.classList.toggle("nav-open"),t.classList.toggle("active")}),(async()=>{let{initThemeSwitcher:n}=await Promise.resolve().then(()=>(w(),g));n()})(),i.forEach(n=>{n.addEventListener("touchstart",()=>{n.classList.add("hover-effect")}),n.addEventListener("touchend",()=>{n.classList.remove("hover-effect")}),n.addEventListener("click",async()=>{e.classList.remove("visible"),o.classList.remove("nav-open"),t.classList.remove("active");let{initSmoothScroll:h}=await Promise.resolve().then(()=>(S(),L));h()})});let{initAccordion:r}=await Promise.resolve().then(()=>(p(),y));r()});
