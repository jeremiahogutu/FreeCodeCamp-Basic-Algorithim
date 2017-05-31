function largestOfFour(){
	var largestNumbers = [];
	arr.forEach(function(subArray){
		largestNumbers.push(subArray.sort(function(a,b){
			return b -a;
		}));
	});
	return largestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);