function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,u=setTimeout(O,t),c?b(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function O(){var e=p();if(w(e))return j(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function j(e){return u=void 0,v&&r?b(e):(r=o=void 0,a)}function S(){var e=p(),n=w(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},S.flush=function(){return void 0===u?a:j(p())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),h={},w=document.querySelector('[name="email"]'),O=document.querySelector('[name="message"]'),j=JSON.parse(localStorage.getItem("feedback-form-state"));j&&(j.hasOwnProperty("email")&&j.hasOwnProperty("message")&&(w.value=j.email,O.value=j.message),j.hasOwnProperty("email")&&!j.hasOwnProperty("message")&&(w.value=j.email),j.hasOwnProperty("message")&&!j.hasOwnProperty("email")&&(O.value=j.message)),b.addEventListener("submit",(e=>{e.preventDefault(),console.log("data: ",h),w.value=null,O.value=null,localStorage.clear()})),b.addEventListener("input",e(t)((e=>{e.preventDefault();let t=e.target;t===w&&(h.email=w.value),t===O&&(h.message=O.value),localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500));
//# sourceMappingURL=03-feedback.5a80b013.js.map