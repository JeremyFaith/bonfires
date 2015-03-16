function smallestCommons(arr) {
  
num = Math.max(arr[0],arr[1]);
lowerBound = Math.ceil(Math.sqrt(num));
lcm = 1;
highestPower = [];

for(var i = lowerBound; i <= num; i++) {
      
    if (prime(i)) { 
      
        lcm = lcm * i;
      
    }else {
      
        for(var j = 2; j < lowerBound; j++) {
          
            highestPower[j] = ( highestPower[j] )? highestPower[j]:j;
            element = i;
            factor = 1;
            
            while ( element % j === 0) {
              
                factor = factor * j;
                element = element / j;
              
            }// while loop
            
            if (factor > highestPower[j]) { highestPower[j] = factor; }
          
        }// for j loop
      
    }//else
  
}// for i loop

for(var k = 2; k < highestPower.length; k++) {lcm = lcm * highestPower[k]; }

function prime(n) {
  
    if(n % 2 === 0) { return false; }
  
    sqrtN = Math.floor(Math.sqrt(n));
    
    for(var p = 3; p <= sqrtN; p = p + 2) {
        
        if (n % p === 0) { return false; }
        
    }
    
    return true;
    
}
  return lcm;
}

smallestCommons([1,5]);