(()=>{"use strict";window.onload=()=>{!function(t,e){let o,n,l=60;setInterval((function(){o=parseInt(l/60,10),n=parseInt(l%60,10),o=o<10?"0"+o:o,n=n<10?"0"+n:n,e.textContent=o+":"+n,--l<0&&(l=60)}),1e3)}(0,document.querySelector("#time"))},(()=>{let t=document.getElementById("an"),e={top:100,left:100};t.style.top=e.top+"px",t.style.left=e.left+"px";let o={ArrowDown:["top",15],ArrowUp:["top",-15],ArrowRight:["left",15],ArrowLeft:["left",-15]};addEventListener("keydown",(n=>{let l=o[n.key];l&&(e[l[0]]=e[l[0]]+l[1],t.style[l[0]]=e[l[0]]+"px")}))})()})();