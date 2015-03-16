function steamroller(arr) {
  
  newArr = [];
  
  for(var i = 0; i < arr.length; i++) {
    
    if (typeof(arr[i]) != 'object') { newArr.push(arr[i]); }
    else {
      
      for(var j = 0; j < arr[i].length; j++) {
        flatten(arr[i][j]);
      }
      
    }
    
  }
  
  function flatten(element) {
      test = element;
      
      while( typeof(test) == 'object') {
        test = test[0];
      }
      
      newArr.push(test);
  }
  
  return newArr;
   
}

steamroller([1, [2], [3, [[4]]]]);