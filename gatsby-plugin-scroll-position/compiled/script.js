(()=>{function i({executeOnce:r=0}={}){if(typeof window!="undefined"&&!(r&&window.__sp_executed)){window.__sp_executed=1;try{f().forEach(({selector:o,fallback:t,elements:s})=>{s.forEach(e=>{let c=parseFloat(window.localStorage.getItem("scroll-"+o))||0;if(t){let l=document.querySelector(t);if(l){e.style.position="relative";let n=l.offsetTop;e.style.position="",c<=n&&c>=n-e.offsetHeight+l.offsetHeight||(c=n)}}e.style.scrollBehavior="auto",e.scrollTop=c,e.style.scrollBehavior=""})})}catch(o){console.error(o)}}}function f(){let r=[];try{(window.__SP_ELEMENTS__||[]).forEach(t=>{let{selector:s,ensureInView:e=null}=typeof t=="string"?{selector:t}:t;r.push({selector:s,fallback:e,elements:Array.from(document.querySelectorAll(s))})})}catch(o){console.error(o)}return r}i({executeOnce:!0});})();