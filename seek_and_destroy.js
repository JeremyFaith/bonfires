function destroyer(arr,first,second) {
  newArr = arr.filter(function(e) {
    if (e != first && e != second) { return e; }
  });
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);