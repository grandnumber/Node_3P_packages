var person = {
  name: 'jbb',
  age: 0
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);



console.log('==================');

var animal ='{"name": "Me"}'
// console.log(typeof animal);
var animalJs = JSON.parse(animal);
animalJs.age = 4;
console.log(animalJs.name);
console.log(typeof animalJs);
var animalJSON = JSON.stringify(animalJs);
console.log(animalJSON);
console.log(typeof animalJSON);

// convert to js object
// add age
// convert back to json
