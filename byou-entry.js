const byouEntryMotion={x:0,y:0,tx:0,ty:0,raf:null};
function updateByouEntryVars(){
  const gate=document.getElementById('byouEntry');
  if(!gate){byouEntryMotion.raf=null;return;}
  byouEntryMotion.x+=(byouEntryMotion.tx-byouEntryMotion.x)*0.075;
  byouEntryMotion.y+=(byouEntryMotion.ty-byouEntryMotion.y)*0.075;
  gate.style.setProperty('--mx',(byouEntryMotion.x*24).toFixed(2)+'px');
  gate.style.setProperty('--my',(byouEntryMotion.y*24).toFixed(2)+'px');
  byouEntryMotion.raf=requestAnimationFrame(updateByouEntryVars);
}
function startByouEntryMotion(){
  const gate=document.getElementById('byouEntry');
  if(!gate)return;
  gate.insertAdjacentHTML('beforeend','<div class="entry-cursor"></div><div class="entry-scan"></div>');
  const move=e=>{
    const r=gate.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width;
    const py=(e.clientY-r.top)/r.height;
    byouEntryMotion.tx=(px-.5)*2;
    byouEntryMotion.ty=(py-.5)*2;
    gate.style.setProperty('--sx',(px*100).toFixed(2)+'%');
    gate.style.setProperty('--sy',(py*100).toFixed(2)+'%');
  };
  gate.addEventListener('pointermove',move,{passive:true});
  gate.addEventListener('pointerleave',()=>{byouEntryMotion.tx=0;byouEntryMotion.ty=0;gate.style.setProperty('--sx','50%');gate.style.setProperty('--sy','50%')},{passive:true});
  if(!byouEntryMotion.raf)byouEntryMotion.raf=requestAnimationFrame(updateByouEntryVars);
}
function enterByouCouncil(){
  const gate=document.getElementById('byouEntry');
  if(!gate)return;
  gate.classList.add('hide');
  setTimeout(()=>gate.remove(),760);
}
window.addEventListener('DOMContentLoaded',startByouEntryMotion);
window.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&document.getElementById('byouEntry'))enterByouCouncil();
});

