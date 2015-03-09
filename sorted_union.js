function unite(arr1, arr2, arr3) {
  
  var newArr = [];
  
  arr = arr1.concat(arr2).concat(arr3);
  
  for(var i = 0; i < arr.length; i++) {
    
    if (newArr.indexOf(arr[i]) == -1) { newArr.push(arr[i]); }
  }
  
  return newArr;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);