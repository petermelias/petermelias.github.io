!function(){"use strict";function e(e,t,n){var i,o;n=n||window,i=!1,o=function(){i||(i=!0,requestAnimationFrame(function(){n.dispatchEvent(new CustomEvent(t)),i=!1}))},n.addEventListener(e,o)}function t(e){var t,n,i;for(t=e.length,i=[],n=0;t>n;n++)i.push(e[n]);return i}function n(){function e(){n.classList.add("move"),i.classList.add("move"),o.removeEventListener("transitionend",e),window.setTimeout(t,150)}function t(){a.classList.remove("is-transparent")}var n,i,o,a;document.getElementById("header")&&(n=document.getElementById("peter"),i=document.getElementById("elias"),o=document.getElementById("m"),a=document.getElementById("main"),o.addEventListener("transitionend",e),o.classList.add("move"))}function i(){var e,t;e=document.getElementById("navlist-expand"),t=document.getElementById("navlist"),e.addEventListener("click",function(n){e.classList.toggle("is-active"),e.classList.contains("is-active")?(t.classList.add("is-expanding"),t.classList.remove("is-closing")):(t.classList.add("is-closing"),t.classList.remove("is-expanding"))})}function o(){var e,t;t=document.getElementById("navlist"),e=window.scrollY,e>56?t.classList.add("is-top"):t.classList.remove("is-top")}function a(){var e,t,n;for(e=document.getElementsByClassName("js-image-scroller"),t=e.length;t--;)n=e[t],s(n)}function s(e){var n,i;n=t(e.getElementsByTagName("li")),i=n.length,i&&(n[0].classList.add("js-image-active"),e.addEventListener("click",function(t){var o,a,s;1!==i&&(o=e.getElementsByClassName("js-image-active")[0],a=n.indexOf(o),a===i-1?a=0:a+=1,s=n[a],console.log(s),console.log(o),s.classList.add("js-image-active"),o.classList.remove("js-image-active"))}))}function c(){var e;e=document.getElementById("do-it-cta"),e&&e.addEventListener("click",function(){Intercom("show")})}e("scroll","throttledScroll"),DomReady.ready(function(){i(),window.addEventListener("throttledScroll",function(e){o()}),window.setTimeout(n,100),a(),c()})}();