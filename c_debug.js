const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];

// แก้จุดที่ 1: เอาปีกกาออก เพื่อให้คืนค่า b.late ได้ถูกต้อง
const laterRoutes = buses.filter(b => b.late).map(b => b.route);

// แก้จุดที่ 2: เติม , 0 ต่อท้าย เพื่อตั้งค่าเริ่มต้นให้ตัวสะสม sum เป็นตัวเลข 0
const total = buses.reduce((sum, b) => sum + b.passengers, 0);

console.log("สายที่มาสาย:", laterRoutes);  // ได้: ["NGV-2", "NGV-3"]
console.log("ผู้โดยสารรวม:", total);      // ได้: 145