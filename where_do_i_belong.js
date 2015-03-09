function where(arr, num) {
  if (num < arr[0]) { return 0; }
  
   for(var i = 0; i < arr.length; i++) {
     
    if (arr[i] <= num && num <= arr[i + 1]) {
      return i+1;
    }
     
   }
 return arr.length;
}

where([40, 60], 50);