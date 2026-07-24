const target=new Date('2026-11-12T10:00:00');
setInterval(()=>{let d=target-new Date();if(d<0){count.innerHTML='Celebrations have begun!';return;}
let days=Math.floor(d/86400000),hrs=Math.floor(d%86400000/3600000),min=Math.floor(d%3600000/60000);
count.innerHTML='Countdown: '+days+' Days '+hrs+' Hrs '+min+' Min';},1000);