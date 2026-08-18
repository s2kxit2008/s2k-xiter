
for(let i=0;i<25;i++){
 const p=document.createElement('div');
 p.className='particle';
 p.style.left=Math.random()*100+'vw';
 p.style.animationDuration=(8+Math.random()*10)+'s';
 p.style.opacity=Math.random();
 document.body.appendChild(p);
}
