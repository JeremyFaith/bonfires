function sumAll(arr) {
  var first = arr[0];
  var last  = arr[1];
  var sum   = 0;
  
  if (arr[0] > arr[1]) { first = arr[1]; last = arr[0]; }
  
  for(var i = first; i <= last; i ++) {
    sum = sum + i;
  }
  
  return sum;
  
}

sumAll([1, 4]);