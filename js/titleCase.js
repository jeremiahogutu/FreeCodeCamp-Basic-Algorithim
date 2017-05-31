function titleCase(str){
	var array = str.split(" ");
	var mapped = array.map(function(word){
		return word[0].toUpperCase() + word.slice(1).toLowerCase()
	});
	return mapped.join(" ");
}

console.log(titleCase("I'm a little tea pot"))