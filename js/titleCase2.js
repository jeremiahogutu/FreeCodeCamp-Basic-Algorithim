function titleCase(str){
	return str.split(' ').map(function(word){
		return word[0].toUppercase() + word.slice(1).toLowerCase();
	});.join(' ');
}
console.log(titleCase("Im a little tea pot"));