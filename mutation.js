function mutation(arr) {

  var firstElement = arr[0].toLowerCase();
  var secondElement = arr[1].toLowerCase();
  for(var i = 0; i < arr[1].length; i++) {
    if ( firstElement.indexOf(secondElement[i]) === -1) { return false; }
  }
  return true;
}

mutation(['hello', 'hey']);