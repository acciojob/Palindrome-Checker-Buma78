// complete the given function

function palindrome(str){
     let str1 = str.tolowerCase();
	let len = str1.length-1;
	let start = 0;
	while (start<len) {
		if(str1.charAt(start)!=str1.charAt(len)){
			return false;
		}
		start++;
		len--;
	}
	return true;
	
}
module.exports = palindrome
