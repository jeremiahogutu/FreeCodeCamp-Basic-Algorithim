function repeatStringNumTimes(str, num) {
	if (num>=0) {
		return str.repeat(num);
	}
}

console.log(repeatStringNumTimes("abc", 9));