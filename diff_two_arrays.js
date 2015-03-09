function diff(arr1, arr2) {
  var newArr = [];
  var small = arr1;
  var large = arr2;
  
  if (arr1.length > arr2.length) { small = arr2; large = arr1; }
  
  for(var i = 0; i < large.length; i++) {
    
    if (small.indexOf(large[i]) == -1 ) { newArr.push(large[i]); }
    if (large.indexOf(small[i]) == -1 && small[i] != null) { newArr.push(small[i]); }
    
  }

  return newArr;
  
}

diff([1, 'calf',3,5, 'piglet'], [1, 'calf', 3, 4]);