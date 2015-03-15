function sumFibs(num) {
  
  sum = 0;
  i   = 1;

  while (fibo(i) <= num) {
    
    if (fibo(i)%2 == 1) { sum = sum + fibo(i);}
    i++;
    
  }

  function fibo(n) {
    
    return (n < 3)? 1: fibo(n-1)+fibo(n-2);
    
  }

  return sum;
  
}

sumFibs(4);