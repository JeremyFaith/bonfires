var Person = function(firstAndLast) {
  
  var firstName = firstAndLast.split(" ")[0];
  var lastName  = firstAndLast.split(" ")[1];
  
  
  this.getFullName = function(){
    return firstAndLast;
  };
  
  this.getFirstName = function(){
    return firstName;
  };
  
  this.getLastName = function(){
    return lastName;
  };
  
  this.setFullName = function(full){
    firstAndLast = full;
  };
  
  this.setFirstName = function(first){
    firstName = first; 
  };
  
  this.setLastName = function(last){
    lastName = last;
  };
  
};

var bob = new Person('Bob Ross');
bob.getFullName();