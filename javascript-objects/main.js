var student = {
  firstName: 'Brian',
  lastName: 'Luong',
  age: 29
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName ' + fullName);
student.livesInIrvine = true;
student.previousOccupation = 'astronaut';
console.log('value of livesInIrvine: ' + student.livesInIrvine);
console.log('value of previousOccupation: ' + student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2010
};

vehicle.color = 'white';
vehicle.isConvertible = true;
console.log('value of vehicle.color: ' + vehicle.color);
console.log('value of vehicle.isConvertible: ' + vehicle.isConvertible);
console.log(vehicle);

var pet = {
  name: 'Ice Bear',
  type: 'smol bear'
};
delete pet.name;
delete pet.type;
console.log(pet);
