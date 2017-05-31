function confirmEnding(str, target){

	str = str.toLowerCase().replace(/\W_/g, "");
	return target === str.substr(-Math.abs(target.length));

}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a name", "me"));
