
function slasher(arr, howMany) {

  if(howMany>=arr.length) {
    return[]
  } else {
    for(var i = 1; i<=howMany; i++){
        arr.shift();
    }
    return arr;
  }
}

console.log(slasher([1, 2, 3], 2));