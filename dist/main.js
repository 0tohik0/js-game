(()=>{"use strict";window.onload=()=>{!function(e,t){let n,o,l=60;setInterval((function(){n=parseInt(l/60,10),o=parseInt(l%60,10),n=n<10?"0"+n:n,o=o<10?"0"+o:o,t.textContent=n+":"+o,--l<0&&(l=60)}),1e3)}(0,document.querySelector("#time"))},(()=>{let e=document.getElementById("an"),t={top:100,left:100};document.querySelector(".escape-screen"),e.style.top=t.top+"px",e.style.left=t.left+"px";let n={ArrowDown:["top",15],ArrowUp:["top",-15],ArrowRight:["left",15],ArrowLeft:["left",-15]};addEventListener("keydown",(o=>{let l=n[o.key];l&&(t[l[0]]=t[l[0]]+l[1],e.style[l[0]]=t[l[0]]+"px")}))})(),(()=>{const e=document.getElementById("count");let t=0;setInterval((()=>{t+=5,e.textContent=t}),1e3)})()})();