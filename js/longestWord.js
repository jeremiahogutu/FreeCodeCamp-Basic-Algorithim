function longestWord(str){
	var words = str.split(" ");
	var biggest = 0;

	for(var i = 0; i<words.length; i++){
		if (words[i].length>biggest) 
		{
			biggest= words[i].length;
		}

	}
	return biggest;
}	

console.log(longestWord("The quick brown fox jumped over the lazy dog"));