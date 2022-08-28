'use strict';

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jen';
nameLet = 'Julie'; // error let nameLet = 'Julie'
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

var petName = getPetName();
console.log('petName', petName);

// Block scoping

var fullName = 'Jen Mead';
var firstName = void 0;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log('firstName', firstName);
