// Exercise #2: Promotion Conditions
// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

//ให้ Assign ตัว Value ตามของคุณสมบัติของ John
// มียอดสั่งซื้อเดือนที่แล้ว 4001 บาท
// ไปซื้อของวันศุกร์
// ไม่เคยซื้อของในหมวดหมู่ IT มาก่อน
// เคยเข้าร่วมกิจกรรมมหกรรมลดราคาครั้งที่ 2
// เป็น Member ระดับ Gold

lastMonthPaidMoreThan4000 = true;
isWeekday = true;
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = false;

//ให้ Reassign ค่า เป็น Expression ของ Variable อื่นๆ ตามเงื่อนไขข้างต้น
//กรณีที่ 1: ผู้ซื้อมียอดสั่งซื้อสินค้าจากเดือนที่แล้วมากกว่า 4000 บาท และวันที่ซื้อสินค้าเป็นวันจันทร์ถึงวันศุกร์ และไม่เคยซื้อสินค้าจากหมวดหมู่ IT มาก่อน และไม่เคยเข้าร่วมกิจกรรมมหกรรมลดราคามาก่อน
//กรณีที่ 2 : ผู้ซื้อเป็น Member ในระดับ Platinum"

hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    hasBoughtProductFromITCategory &&
    hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
