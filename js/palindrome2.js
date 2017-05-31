function palindrome2(str){
	str = str.toLowerCase().replace(/[\w_]/g, "");
	if (str===str.split("").reverse().join("")){
		return true;
	}else{
		return false;
	}
}
console.log(palindrome2("A man. A plan, A canal, Panama."));
console.log(palindrome2("Hello World"));