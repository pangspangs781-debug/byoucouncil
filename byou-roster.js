body:before{
  content:"";
  position:fixed;
  inset:0;
  z-index:0;
  pointer-events:none;
  background:
    radial-gradient(ellipse at 50% 0,rgba(255,238,166,.045),transparent 42%),
    radial-gradient(ellipse at 50% 100%,rgba(229,196,90,.055),transparent 46%),
    linear-gradient(90deg,rgba(0,0,0,.42),transparent 22%,transparent 78%,rgba(0,0,0,.42));
}
body:after{
  content:"";
  position:fixed;
  inset:0;
  z-index:0;
  pointer-events:none;
  background-image:radial-gradient(rgba(255,255,255,.075) .55px,transparent .55px);
  background-size:3px 3px;
  opacity:.055;
  mix-blend-mode:screen;
}
.app,.topbar,.sidebar,#pages,.modalbox{
  position:relative;
}
.pagehead,.card,.tablewrap,.wheel-layout>*,.modalbox,.detailhero{
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.045),
    0 24px 70px rgba(0,0,0,.28);
}
.pagehead{
  border-color:rgba(229,196,90,.13)!important;
  background:
    radial-gradient(circle at 0 0,rgba(229,196,90,.08),transparent 45%),
    linear-gradient(145deg,rgba(255,255,255,.032),rgba(8,9,10,.38))!important;
  backdrop-filter:blur(14px);
}
.pagehead h1{
  color:#fff0c8;
  text-shadow:0 0 22px rgba(229,196,90,.14);
}
.card{
  border-color:rgba(229,196,90,.15)!important;
  background:
    radial-gradient(circle at 10% 0,rgba(229,196,90,.055),transparent 38%),
    linear-gradient(145deg,rgba(255,255,255,.032),rgba(6,7,9,.72))!important;
}
.btn.gold{
  background:linear-gradient(135deg,#f1d46f,#9f7420)!important;
  color:#120e06!important;
  box-shadow:0 0 24px rgba(229,196,90,.18),inset 0 1px 0 rgba(255,255,255,.35)!important;
}
.btn.gold:hover{
  filter:brightness(1.08);
  box-shadow:0 0 34px rgba(229,196,90,.26),inset 0 1px 0 rgba(255,255,255,.42)!important;
}
.hero,.stats .stat{
  box-shadow:inset 0 1px 0 rgba(255,255,255,.045),0 20px 60px rgba(0,0,0,.24);
}
