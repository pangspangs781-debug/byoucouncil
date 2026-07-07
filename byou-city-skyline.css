.byou-skyline-bg{
  position:fixed;
  inset:0;
  z-index:0;
  overflow:hidden;
  pointer-events:none;
  opacity:.82;
}
.byou-skyline-bg:before{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 72% 20%,rgba(229,196,90,.12),transparent 22%),
    radial-gradient(circle at 18% 28%,rgba(57,92,132,.16),transparent 28%),
    linear-gradient(180deg,rgba(5,8,13,.14),rgba(2,3,5,.66) 58%,rgba(0,0,0,.86));
}
.byou-skyline-bg:after{
  content:"";
  position:absolute;
  inset:auto -10% 0 -10%;
  height:42%;
  background:
    radial-gradient(ellipse at 50% 100%,rgba(229,196,90,.16),transparent 52%),
    linear-gradient(180deg,transparent,rgba(0,0,0,.64));
  filter:blur(.2px);
}
.skyline-moon{
  position:absolute;
  right:13%;
  top:11%;
  width:220px;
  height:220px;
  border:1px solid rgba(229,196,90,.08);
  border-radius:50%;
  background:radial-gradient(circle,rgba(229,196,90,.055),rgba(229,196,90,.018) 48%,transparent 70%);
  box-shadow:0 0 90px rgba(229,196,90,.07);
  animation:skyDrift 18s ease-in-out infinite alternate;
}
.skyline-layer{
  position:absolute;
  left:-4%;
  right:-4%;
  bottom:0;
  height:38%;
  display:flex;
  align-items:flex-end;
  justify-content:center;
  gap:14px;
  opacity:.74;
}
.skyline-layer.back{
  bottom:3%;
  height:30%;
  opacity:.35;
  filter:blur(.7px);
  animation:skylineFloat 24s ease-in-out infinite alternate;
}
.skyline-layer.front{
  opacity:.68;
  animation:skylineFloat 18s ease-in-out infinite alternate-reverse;
}
.skyline-layer i{
  position:relative;
  display:block;
  width:clamp(22px,4vw,58px);
  border:1px solid rgba(229,196,90,.055);
  border-bottom:0;
  border-radius:8px 8px 0 0;
  background:
    linear-gradient(90deg,transparent 0 38%,rgba(255,221,107,.15) 39% 42%,transparent 43% 100%),
    repeating-linear-gradient(180deg,rgba(255,224,118,.13) 0 3px,transparent 4px 16px),
    linear-gradient(180deg,rgba(22,28,38,.72),rgba(3,4,7,.98));
  box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 0 26px rgba(0,0,0,.55);
}
.skyline-layer i:before{
  content:"";
  position:absolute;
  left:50%;
  top:-28px;
  width:1px;
  height:28px;
  background:linear-gradient(transparent,rgba(229,196,90,.32));
  box-shadow:0 0 12px rgba(229,196,90,.22);
}
.skyline-layer i:after{
  content:"";
  position:absolute;
  inset:18% 18% 0 18%;
  background:repeating-linear-gradient(180deg,rgba(229,196,90,.22) 0 2px,transparent 3px 14px);
  opacity:.28;
}
.skyline-layer.front i:nth-child(1){height:42%;clip-path:polygon(0 12%,100% 0,100% 100%,0 100%)}
.skyline-layer.front i:nth-child(2){height:70%;width:clamp(28px,5vw,72px)}
.skyline-layer.front i:nth-child(3){height:54%;clip-path:polygon(0 0,76% 0,100% 18%,100% 100%,0 100%)}
.skyline-layer.front i:nth-child(4){height:88%;width:clamp(30px,5.5vw,78px);border-color:rgba(229,196,90,.095)}
.skyline-layer.front i:nth-child(5){height:61%}
.skyline-layer.front i:nth-child(6){height:75%;clip-path:polygon(18% 0,82% 0,100% 12%,100% 100%,0 100%,0 12%)}
.skyline-layer.back i:nth-child(1){height:64%}
.skyline-layer.back i:nth-child(2){height:48%}
.skyline-layer.back i:nth-child(3){height:78%}
.skyline-layer.back i:nth-child(4){height:56%}
.skyline-layer.back i:nth-child(5){height:68%}
.skyline-gold-wave{
  position:absolute;
  left:-12%;
  right:-12%;
  bottom:4%;
  height:92px;
  background:
    radial-gradient(ellipse at 50% 100%,rgba(255,221,107,.18),transparent 54%),
    repeating-linear-gradient(170deg,transparent 0 26px,rgba(229,196,90,.09) 27px 28px,transparent 29px 52px);
  transform:skewY(-2deg);
  filter:blur(.25px);
  animation:goldWave 16s ease-in-out infinite alternate;
}
@keyframes skylineFloat{
  from{transform:translate3d(-10px,0,0)}
  to{transform:translate3d(12px,-4px,0)}
}
@keyframes skyDrift{
  from{transform:translate3d(0,0,0) scale(1)}
  to{transform:translate3d(-18px,10px,0) scale(1.05)}
}
@keyframes goldWave{
  from{opacity:.48;transform:translate3d(-8px,0,0) skewY(-2deg)}
  to{opacity:.78;transform:translate3d(8px,-5px,0) skewY(-2deg)}
}
@media(max-width:760px){
  .byou-skyline-bg{opacity:.58}
  .skyline-layer{gap:8px}
  .skyline-moon{width:140px;height:140px;right:2%;top:12%}
}
@media(prefers-reduced-motion:reduce){
  .skyline-layer,.skyline-moon,.skyline-gold-wave{animation:none}
}
