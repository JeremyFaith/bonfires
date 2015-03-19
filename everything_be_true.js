function every(collection, pre) {
  
  if (typeof(pre) === 'string') {
    
    test = collection.every(function(e) {
      return e.hasOwnProperty(pre);
    });
    
  }else if (typeof(pre) === 'object') {
    
    key = Object.keys(pre);
    test = collection.every(function(e) {
      return e[key] === pre[key];
    });
    
  }
  
  return test;
  
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');