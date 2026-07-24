
const target=new Date("2026-11-12T10:00:00");
function update(){
 const now=new Date();
 let diff=target-now;
 const el=document.getElementById("count");
 if(diff<=0){el.textContent="🎉 Celebrations have begun!";return;}
 const d=Math.floor(diff/86400000);
 const h=Math.floor((diff%86400000)/3600000);
 const m=Math.floor((diff%3600000)/60000);
 const s=Math.floor((diff%60000)/1000);
 el.innerHTML=`⏳ ${d} Days ${h} Hrs ${m} Min ${s} Sec`;
}
update();
setInterval(update,1000);
