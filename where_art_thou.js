function where(collection, source) {
  var arr = [];
  collection.forEach(function(e) {
  
   if (e.last == source.last) { arr.push(e); }
    
  });
 
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });

// works but not really correct