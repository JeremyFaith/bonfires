function spinalCase(str) {
  
  var newArr = [];
  var start = 0;

  
  if ( (/[^a-z]/i).test(str) ) { spacer = 2; }else{ spacer = 1; }
  
  str =str.concat(" ");
    
  for(var i=0; i<str.length; i++) {
  
    if ( (/[a-z]/).test(str[i]) && (/[^a-z]/).test(str[i+1]) ) {
      
      newArr.push(str.slice(start,i+1));
      start = i+spacer;
      
    }
    
  }
  
  return newArr.join("-").toLowerCase();
  
}

spinalCase('This Is SpinalTap');