function hrRaw(id){return document.getElementById(id)?.value||''}
function hrMultiRaw(id){let values=[...document.querySelectorAll(`#${id} input[type="checkbox"]:checked`)].map(x=>x.value);return values.length?values.join(' / '):'ไม่ระบุ'}
function hrDiscordType(name){let org=allOrganizations().find(o=>o.name===name);if(!org)return 'GANG';if(org.kind==='แก๊ง')return 'GANG';if(org.kind==='ครอบครัว')return 'Family';if(org.kind==='MC')return 'MC';return 'citizens'}
function hrThaiDate(value){if(!value)return '';let [y,m,d]=value.split('-').map(Number);return `${d}/${m}/${y+543}`}
window.generateHrAgreement=function(){let type=hrRaw('hrStoryType'),a=hrRaw('hrTeamA'),b=hrRaw('hrTeamB'),t1=hrDiscordType(a),t2=hrDiscordType(b),date=hrThaiDate(hrRaw('hrStoryDate')),time=hrRaw('hrStoryTime'),place=hrRaw('hrStoryPlace'),text='';if(type==='fight'){text=`# ประกาศสตอรี่ ไฟต์ตรง
\`\`\`
ประกาศสตอรี่ไฟต์ตรงจากที่ว่าการ BYOU CITY 
ระหว่าง ${t1} : ${a} VS ${t2} : ${b}  
โดยมีข้อตกลงดังนี้
• เริ่มวันที่ : ${date}
• เวลา : ${time} น.
• สถานที่ : ${place}
• จำนวนไฟต์ : ${hrRaw('hrFightCount')} 
• ฝั่งไหนถึง : ${hrRaw('hrWinCount')} ก่อนชนะ
• คูลดาวน์ไฟท์ : ${hrRaw('hrCooldown')}
• บัฟ : ${hrRaw('hrBuff')}
• ( หากปลดบัพ คำยกเว้น ) : ${hrRaw('hrBuffException')}
• จำนวนคน : ${hrRaw('hrPlayerCount')} คน
• ( เอาคนเข้าออก/เปลี่ยนสล๊อต) : ${hrRaw('hrSwapRule')}
• รูปแบบการเล่น : ${hrMultiRaw('hrFightRule')}
• หากมีการแคสจะรอหรือไม่ : ${hrRaw('hrCastWait')}
• หากรอระหว่างแคส เลือก 5/10 นาที : ${hrRaw('hrWaitMinute')} นาที
• แคสระหว่างไฟท์ (เล่นต่อ/รอไฟท์ถัดไป) : ${hrRaw('hrCastRule')}
• สินสงคราม : ${hrRaw('hrWarReward')}
• ใบ/ใบ หรือ ใบ/เงิน(ปรับ) : ${hrRaw('hrPenalty')}
• เล่นตามกฎสตอรี่ไฟต์ตรง และตามกฎประเทศทุกกรณี
• HR ประกาศเริ่มไฟท์แรก
ขณะมีสตอรี่ หรือหากทางที่ว่าการประกาศสตอรี่แล้ว จะไม่สามารถเข้ากิจกรรมได้รวมถึงวาปเข้าพื้นที่ต่างๆที่เป็นการวาปทุกกรณี [ รวมถึง วอโซน / AFK /แอร์ดรอป/งัดร้าน ] 
\`\`\`
<@&1249731558588289053>`}else{text=`# ประกาศสตอรี่อุ้ม
\`\`\`
ประกาศสตอรี่อุ้มจากที่ว่าการ BYOU CITY 
ระหว่าง ${t1} : ${a} VS ${t2} : ${b}
โดยมีข้อตกลงดังนี้
• เริ่มวันที่ : ${date}
• เวลา : ${time}
• สถานที่ไฟต์แรก : ${place}
• จำนวนครั้งในการเอ๋อ : ${hrRaw('hrFailCount')} เอ๋อ
• บัฟ : ${hrRaw('hrKidnapBuff')}
• ( หากปลดบัพ คำยกเว้น ) : ${hrRaw('hrKidnapException')}
• จำนวนคน : ${hrRaw('hrKidnapPlayers')} คน
• ( เอาคนเข้าออก/เปลี่ยนสล๊อต) : ${hrRaw('hrKidnapSwap')}
• ข้อตกลงในการเล่น : ${hrMultiRaw('hrKidnapRule')}
• สินสงคราม : ${hrRaw('hrKidnapReward')}
• ใบ/ใบ หรือ ใบ/เงิน(ปรับ) : ${hrRaw('hrKidnapPenalty')}

• งดเข้าร่วมกิจกรรม แอร์ดรอป / AFK กิจกรรมที่เกี่ยวกับวาปร์ทั้งหมด
• เล่นตามกฎสตอรี่ไฟต์ และตามกฎประเทศทุกกรณี
ขณะมีสตอรี่ หรือหากทางที่ว่าการประกาศสตอรี่แล้ว จะไม่สามารถเข้ากิจกรรมได้รวมถึงวาปเข้าพื้นที่ต่างๆที่เป็นการวาปทุกกรณี [ รวมถึง วอโซน / AFK /แอร์ดรอป/งัดร้าน ] 
\`\`\`

<@&1249731558588289053>`}document.getElementById('hrAgreementOutput').value=text;return text}
