function p(){let o=document.querySelectorAll(".header__nav-list-item-link");o.forEach(a=>{a.addEventListener("click",function(u){u.preventDefault();let d=this.getAttribute("href").substring(1),n=document.getElementById(d);if(!n||n.offsetParent===null)return;let l=Array.from(o).indexOf(a)===o.length-1;l||(n.style.marginTop="50px");let i=window.pageYOffset,f=n.getBoundingClientRect().top+i-(l?0:50)-i,s=1e3,e=null;function c(t){e===null&&(e=t);let r=t-e,g=Math.min(r/s,1),h=m(g);window.scrollTo(0,i+f*h),r>=s&&(e=null,window.history.pushState({},"",window.location.href)),r<s&&requestAnimationFrame(c)}function m(t){return t=Math.min(Math.max(t,0),1),t<.5?2*t*t:-1+(4-2*t)*t}requestAnimationFrame(c)})}),window.addEventListener("load",()=>{window.scrollTo(0,0)})}export{p as initSmoothScroll};
