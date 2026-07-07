/* One-time import from the official BYOU CITY organization screenshots. */
window.installOfficialRoster=function(){
  const version='byouOfficialRoster20260706v1';
  if(localStorage.getItem(version)==='done')return;
  const gold=['Arpub','Ngeu [Ngeu]','Ghost Gang','Serennity [SRN]','Triples','BANGRAJAN','REALFAITH','Foxevil','POKRAK LADY','POKRAK','Theripper [TRP]','CHILLDEE [CD]','Moonbox','Shirobaki [SBK]','Xers [XERS]'];
  const silver=['Always [AIB]','Baby Shark','THE THI BAAN','ONE GIRL','HR!','BADNEKO','UNITED ARAB EMIRATES','Yan Whang [YW]','AROMDEE(ARD)','Phavana PVN','Dteam','Limited','PRAEWPROW','KODBAD [KB]','Clutch [C]','OKANE [ONE]'];
  const families=['Warsup [WS]','Hydra[HD]','TOBBOT','OKANE FAMILY','Shirobaki [SBKF]','KAWAII','SLAGGER','SAFEPLANET (SPN)','Miss you 24 hr (24HR)','Personal [Per]','DaraStar','DEKNOLOVE','Saosee','YOUNGRAK','MANIAC','OBONE [OB1]','Don\'t touch me','PLUSSIZE','Reset','Sevendeadlysins'];
  const mc=['Predator MC','Wolf Blood [WBMC]','KURONEKO','Sannou','MR BONE MC','GENZAP CLUB','Ratsamee MC','Black Pearl (MC)'];
  const colors=['#d4b24c','#4f83cc','#b04b52','#8a63c7','#42a6a2','#d17b3f','#b56c9f','#70828e'];
  const clean=s=>String(s||'').toLowerCase().replace(/\s+/g,'').replace(/[\[\]()]/g,'');
  const merge=(key,rows)=>{state[key]=Array.isArray(state[key])?state[key]:[];rows.forEach((row,i)=>{let item=typeof row==='string'?{name:row}:row,found=state[key].find(o=>clean(o.name)===clean(item.name));if(found){if(item.tier)found.tier=item.tier;return}state[key].push({id:uid(),name:item.name,leader:'',deputy:'',tier:item.tier,color:colors[i%colors.length],colorName:'',motherColor:false,logo:orgFallback,members:[]})})};
  state.gangs=(state.gangs||[]).filter(o=>o.name!=='Golden Wolves');
  state.families=(state.families||[]).filter(o=>o.name!=='Valentine Family');
  state.mc=(state.mc||[]).filter(o=>o.name!=='Black Reapers MC');
  merge('gangs',gold.map(name=>({name,tier:'Gold'})));
  merge('gangs',silver.map(name=>({name,tier:'Silver'})));
  merge('families',families);
  merge('mc',mc);
  localStorage.setItem(version,'done');
};
window.installHrRoster=function(){
  const version='byouHrRoster20260706v1';
  if(localStorage.getItem(version)==='done')return;
  state.members=Array.isArray(state.members)?state.members:[];
  const rows=[
    ['Danny Heng','หัวหน้า HR'],
    ['MUMi Lux','รองหัวหน้า HR'],
    ['Jaoayla Idunnowuttodo','รองหัวหน้า HR'],
    ['Sympathetic The B Tamana Nervous Emmett','รองหัวหน้า HR'],
    ['Diary Iris','สมาชิกหลัก HR'],
    ['Bom ZetaGundam','สมาชิกหลัก HR'],
    ['PhraPhaeng Lux','สมาชิกหลัก HR'],
    ['Popia Namjimbuai','สมาชิกหลัก HR'],
    ['Tenso Sabiki','สมาชิกหลัก HR'],
    ['Kiewkrob Namjimbuai','สมาชิกหลัก HR'],
    ['Yoko Merton','สมาชิกหลัก HR'],
    ['Thomas Cell','สมาชิกหลัก HR'],
    ['Vivian Luvmeow','สมาชิกหลัก HR'],
    ['DRAGON The B Emmett Nervous System','สมาชิกหลัก HR'],
    ['Praew Proud','สมาชิกหลัก HR'],
    ['Latae TaeHee','สมาชิกหลัก HR'],
    ['View Chanathip Siriworanantwong','สมาชิกหลัก HR']
  ];
  const clean=s=>String(s||'').toLowerCase().replace(/\s+/g,'');
  rows.forEach(([name,role])=>{
    let found=state.members.find(m=>clean(m.name)===clean(name));
    if(found)found.role=role;
    else state.members.push({id:uid(),name,role,image:fallback});
  });
  localStorage.setItem(version,'done');
};
