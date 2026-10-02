// User Story: ในฐานะสมาชิกกลุ่ม ฉันอยากดูสถานะงานของเพื่อนแต่ละคนว่าใครส่งหรือยังไม่ส่ง เพื่อที่จะติดตามงานกลุ่มได้ครบถ้วน

// ฟังก์ชันค้นหาและกรองงานกลุ่มตามสถานะและผู้รับผิดชอบ
const filterGroupTasks = (tasks, memberName = "", status = "pending") => {
  // กรณีข้อผิดพลาด (Edge Case): ตรวจสอบถ้าไม่ใช่ Array ให้คืนค่า [] ทันที
  if (!Array.isArray(tasks)) {
    return [];
  }

  return tasks.filter((item) => {
    // กรองตามสถานะงาน (เช่น 'pending' หรือ 'done')
    const matchStatus = status ? item.status.toLowerCase() === status.toLowerCase() : true;

    // กรองตามชื่อผู้รับผิดชอบ (ถ้าไม่ระบุชื่อ ให้แสดงงานทั้งหมดในสถานะนั้น)
    const matchMember = memberName
      ? item.assignee.toLowerCase().includes(memberName.trim().toLowerCase())
      : true;

    return matchStatus && matchMember;
  });
};

// ข้อมูลจำลองรายการงานกลุ่ม (Mock Data)
const mockTasks = [
  { id: 1, title: "ออกแบบหน้า UI", assignee: "Ploy", status: "done" },
  { id: 2, title: "เชื่อมต่อฐานข้อมูล", assignee: "Somchai", status: "pending" },
  { id: 3, title: "ทำระบบสุ่มงาน", assignee: "Somchai", status: "pending" },
  { id: 4, title: "ทำสไลด์พรีเซนต์", assignee: "Anek", status: "pending" },
];

// --- การทดสอบ 3 กรณี ---

// กรณีที่ 1 (แสดงรายการทั้งหมด): ดึงงานที่ยังค้างอยู่ (pending) ของทุกคนในกลุ่ม
console.log("1. งานค้างทั้งหมด:", filterGroupTasks(mockTasks, "", "pending"));

// กรณีที่ 2 (ค้นหารายบุคคล): ดึงงานค้างเฉพาะของ Somchai
console.log("2. งานค้างของ Somchai:", filterGroupTasks(mockTasks, "Somchai", "pending"));

// กรณีที่ 3 (กรณีไม่พบข้อมูล / Edge Case): ค้นหาชื่อสมาชิกที่ไม่มีในระบบ
console.log("3. ค้นหาชื่อที่ไม่พบในระบบ:", filterGroupTasks(mockTasks, "Nobody"));