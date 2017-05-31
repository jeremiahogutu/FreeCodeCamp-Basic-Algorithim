function largestNumber(arr){
	var largestValue = [];
	var currentValue;

	for(var i = 0; i < arr.length; i++){
		currentValue=0;
		for (var j = 0; j < arr[i].length; j++) {
			if (arr[i][j]>currentValue) {
				currentValue=arr[i][j];
			}
		}
		largestValue.push(currentValue);
	}
	return largestValue;
}

console.log(largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));