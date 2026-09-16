// ฟังก์ชันคำนวณค่าโดยสารรถ NGV ในมหาวิทยาลัย
const calcFare = (distanceKm) => {
	// ระยะทางติดลบหรือไม่ใช่ตัวเลข ให้คืน 0
	if (!Number.isFinite(distanceKm) || distanceKm <= 0) {
		return 0;
	}

	// เศษของกิโลเมตรปัดขึ้น
	const roundedDistance = Math.ceil(distanceKm);

	// 2 กม.แรก 10 บาท กม.ถัดไปคิด กม.ละ 2 บาท
	return roundedDistance <= 2
		? 10
		: 10 + (roundedDistance - 2) * 2;
};

// ตัวอย่างการเรียกใช้งาน function
console.log(calcFare(2));    // 10
console.log(calcFare(2.1));  // 12
console.log(calcFare(4));    // 14
console.log(calcFare(-1));   // 0
console.log(calcFare("2"));  // 0

module.exports = calcFare;