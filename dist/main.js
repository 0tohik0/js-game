(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),o=document.getElementById("timer-second");console.log(e),console.log(t),console.log(o)})(),(()=>{let e=document.getElementById("an"),t={top:100,left:100};e.style.top=t.top+"px",e.style.left=t.left+"px";let o={ArrowDown:["top",15],ArrowUp:["top",-15],ArrowRight:["left",15],ArrowLeft:["left",-15]};addEventListener("keydown",(l=>{let n=o[l.key];n&&(t[n[0]]=t[n[0]]+n[1],e.style[n[0]]=t[n[0]]+"px")}))})()})();