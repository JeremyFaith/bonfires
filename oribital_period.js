function orbitalPeriod(arr) {
  
  var newArr = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  for(var i = 0; i < arr.length; i++) {
    
    var a = earthRadius + arr[i].avgAlt;
    newArr.push( {name: arr[i].name, orbitalPeriod: Math.round( (2*Math.PI)*Math.sqrt(Math.pow(a,3)/GM) )} );
    
  }
  
  return newArr;
  
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);