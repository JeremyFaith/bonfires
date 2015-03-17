function pairwise(arr, arg) {
  
  indexJUsed = [];
  count = 0;
  
  for(var i = 0; i < arr.length-1; i++) {
    
    indexIUsed = false;
   
    for(var j = i+1; j < arr.length; j++) {
    
      test = indexJUsed.every(function(e) { return e !== j && e != i; });
      
      if(test) { 
        
        if(arr[i] + arr[j] === arg && indexIUsed === false) { 
          count = count + i + j; indexIUsed = true; indexJUsed.push(j); 
        }
        
      }
          
    }
    
  }
  
  return count;
  
}

pairwise([1,1,1], 2);
