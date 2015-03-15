function sumPrimes(num) {
  
  sum = 2;

  for(var i = 3; i <= num; i = i + 2) {
    
    if ( prime(i) ) { sum = sum + i; }
    
  }
  

  function prime(n) {
    
    sqrtN = Math.floor(Math.sqrt(n));
    
    for(var j = 3; j <= sqrtN; j = j + 2) {
      
        if (n%j === 0) { return false; }
      
    }
    
    return true;
    
  }

  return sum;
  
}

sumPrimes(10);