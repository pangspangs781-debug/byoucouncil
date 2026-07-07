BYOU CITY — ทำให้ข้อมูลออนไลน์และทุกคนเห็นเหมือนกัน

ใน ZIP นี้แก้ระบบให้รองรับ Online Sync แล้ว

ต้องทำ 2 อย่าง:
1) เข้า Supabase > SQL Editor แล้วรันไฟล์ supabase-schema.sql
2) ไป Vercel > Project > Settings > Environment Variables แล้วเพิ่ม:
   SUPABASE_URL = Project URL จาก Supabase
   SUPABASE_ANON_KEY = anon public key จาก Supabase

จากนั้นกด Redeploy ใน Vercel

ถ้าไม่ใส่ Supabase URL/Key เว็บยังเปิดได้ แต่ข้อมูลจะเห็นเฉพาะเครื่องเดิม
ถ้าเชื่อมสำเร็จ เว็บจะขึ้นข้อความ "เชื่อมต่อออนไลน์แล้ว ทุกคนเห็นข้อมูลเดียวกัน"
