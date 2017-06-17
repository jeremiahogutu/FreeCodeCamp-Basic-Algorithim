function rot13(str) { // LBH QVQ VG!
  var results = [];

  for(var i = 0; i<str.length; i++){
    var num = str.charCodeAt(i);

    if (num >= 65 && num <= 77) {
        num += 13;
    }else if (num >= 78 && num <= 90){
        num -= 13;
    }

    results.push(String.fromCharCode(num));
  }
  return results.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));