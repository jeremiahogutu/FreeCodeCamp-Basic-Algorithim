function getIndexToIns(arr, num) {
  // 1 add the number to the arr.
  // 2 sort the new array
  // 3 index position of the num

  return arr.concat(num).sort(function(a,b){
    return a-b;
  }).indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));