!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector(".carousel"),t=["carousel","slide1"],n=!0,o=1;function c(n){var c=o,r=".section".concat(o),u=document.querySelector(r),i=".section".concat(o+=n),l=document.querySelector(i);o>c?(l.classList.add("coming"),setTimeout((function(){l.classList.remove("coming")}),3e3),u.classList.add("outgoing")):l.classList.remove("outgoing"),function(e){var t=document.querySelector(".header__logo");if(1===e)t.classList.add("white");else{if(2!==e)return;t.classList.remove("white")}}(o),t.splice(1,2),console.log(t),t.push("switches"),t.push("slide".concat(o)),e.classList.value=t.join(" "),setTimeout((function(){t.splice(1,1),e.classList.value=t.join(" ")}),3e3)}function r(){n&&(n=!1,setTimeout((function(){n=!0}),3e3))}function u(e){var t=(e.deltaY||e.detail||e.wheelDelta)/100;(n&&1===t&&5!==o||n&&-1===t&&1!==o)&&(r(),c(t))}document.addEventListener?"onwheel"in document?document.addEventListener("wheel",u):"onmousewheel"in document?document.addEventListener("mousewheel",u):document.addEventListener("MozMousePixelScroll",u):document.attachEvent("onmousewheel",u),new Hammer(e).on("swipe panup pandown",(function(e){if("swipe"===e.type){var t=null;t=e.deltaX<0?1:-1,(n&&1===t&&5!==o||n&&-1===t&&1!==o)&&(r(),c(t))}else"panup"===e.type&&n?(r(),c(1)):"pandown"===e.type&&n&&(r(),c(-1))}))},c=function(e){document.querySelectorAll(e).forEach((function(e){new Parallax(e)}))},r=function(){var e=document.querySelector(".button-nav"),t=document.querySelector(".nav-close"),n=document.querySelector(".nav"),o=document.querySelector(".carousel");function c(){n.classList.remove("opened"),n.classList.add("closed")}e.addEventListener("click",(function(){n.classList.remove("closed"),n.classList.add("opened")})),t.addEventListener("click",(function(){c()})),o.addEventListener("click",(function(){c()}))};document.addEventListener("DOMContentLoaded",(function(){o(),c(".parallax-container"),r()}))}]);