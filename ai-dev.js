const calcFare = (distanceKm) => {
	// ตรวจสอบระยะทางและปัดเศษกิโลเมตรขึ้น
	if (!Number.isFinite(distanceKm) || distanceKm <= 0) {
		return 0;
	}

	const roundedDistance = Math.ceil(distanceKm);
	return roundedDistance <= 2
		? 10
		: 10 + (roundedDistance - 2) * 2;
};

module.exports = calcFare;
