
const wrap=document.createElement('div');
wrap.className='parallax-bg';
wrap.innerHTML='<div class="layer layer1"></div><div class="layer layer2"></div><div class="layer layer3"></div>';
document.body.prepend(wrap);

document.addEventListener('mousemove',(e)=>{
 const x=(e.clientX/window.innerWidth-0.5);
 const y=(e.clientY/window.innerHeight-0.5);
 document.querySelector('.layer1').style.transform=`translate(${x*20}px,${y*20}px)`;
 document.querySelector('.layer2').style.transform=`translate(${x*40}px,${y*40}px)`;
 document.querySelector('.layer3').style.transform=`translate(${x*60}px,${y*60}px)`;
});
