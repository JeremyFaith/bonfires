function binaryAgent(str) {
  
  newArr = [];
  arr = str.split(" ");
  
  for(var i = 0; i < arr.length; i++) {
    
    newArr.push( convert(arr[i]) );
    
  }
  
  function convert(element) {
    
    sum = 0;
    for(var j = 7; j >= 0; j--) {
      sum = sum + element[7-j] * Math.pow(2,j);
    }
  
    return String.fromCharCode(sum);
  }
  
  return newArr.join("");
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');