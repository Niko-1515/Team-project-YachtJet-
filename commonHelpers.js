(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const r=document.querySelector(".js-menu-container"),o=document.querySelector(".burger-btn"),s=document.querySelector(".js-close-menu"),c=document.querySelectorAll(".js-mob-link"),e=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),r.classList.toggle("is-open");const n=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};c.forEach(t=>{t.addEventListener("click",e)}),o.addEventListener("click",e),s.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(r.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();let i=document.querySelector(".preloader");function l(r){r.style.opacity=1;let o=setInterval(function(){r.style.opacity=r.style.opacity-.05,r.style.opacity<=.05&&(clearInterval(o),i.style.display="none")},20)}window.onload=function(){setTimeout(function(){l(i)},2500)};
//# sourceMappingURL=commonHelpers.js.map