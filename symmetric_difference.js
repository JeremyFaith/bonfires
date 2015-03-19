function sym(arr0,arr1,arr2) {

  if (arr1 === undefined) { arr1 = []; }
  if (arr2 === undefined) { arr2 = []; }
  
  arr4 = symDiff(union(arr0,arr1), intersection(arr0,arr1));
  
  return symDiff(union(arr4,arr2), intersection(arr4,arr2));
  
  function union(arg1,arg2) {
    
    combine = arg1.concat(arg2);
    
    unionSet = combine.filter(function(e,i) {
      return combine.indexOf(e) == i;
    });
    
    return unionSet;
    
  }
    
  function intersection(arg1,arg2) {
    
    combine = arg1.concat(arg2);
    
    intersectionSet = combine.filter(function(e,i) {
      return arg1.indexOf(e) != -1 && arg2.indexOf(e) != -1 && combine.indexOf(e) == i;
    });
    
    return intersectionSet;
    
  }
    
  function symDiff(union, intersection) {
    
    symDiffSet = union.filter(function(e,i) {
      return intersection.indexOf(e) == -1;
    });
    
    return symDiffSet;
    
  }
  
}

sym([1, 2, 3], [5, 2, 1, 4]);