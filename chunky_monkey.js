function chunk(arr, size) {
  newArr = [];
  for(var i = 0; i < arr.length/size; i++) {
    newArr.push(arr.slice(i*size,(i+1)*size));
  }
  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);