let isOver18;
let hasCriminalBlacklist;

let isAllow;

// ให้ Assign ค่าให้กับ ตามของคุณสมบัติของ James
// James มีอายุ 18 ปี
// James ไม่เคยมีประวัติอาชญากรรม

isOver18 = true;
hasCriminalBlacklist = false;

// ให้ Reassign ค่า ตามเงื่อนไขข้างต้น
// เงื่อนไขในการเข้าร่วมก็คือ
// ผู้เข้าร่วมงานต้องมีอายุมากกว่า 18 ปีขึ้นไป
// และต้องไม่เคยมีประวัติอาชญากรรมมาก่อน

isAllow = isOver18 && !hasCriminalBlacklist;

console.log(isAllow);
