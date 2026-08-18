
window.addEventListener('load',()=>{
 setTimeout(()=>{
  const l=document.getElementById('loader');
  if(l) l.style.display='none';
 },1200);
});
const orb=document.createElement('div');
orb.id='orb';
document.body.appendChild(orb);
document.addEventListener('mousemove',(e)=>{
 orb.style.left=(e.clientX-9)+'px';
 orb.style.top=(e.clientY-9)+'px';
});
