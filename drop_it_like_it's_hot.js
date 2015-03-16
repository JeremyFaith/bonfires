function drop(arr, func) {
  
  arr = arr.reverse();
  
  for(var i = arr.length-1; i >= 0; i--) {
   
    if (func(arr[i])) { return arr.reverse(); }   
    arr.pop();
    
  }
  
  return arr;
}

drop([1, 2, 3], function(n) { return n < 3; });