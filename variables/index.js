// conventions

// firstName       OK
// FirstName       OK
// first_name    OK

// 1firstName       NOT OK
// !firstName      NOT OK
// first-Name       NOT OK

//  var is the global scoped variable - it means it can be accessed from anywhere in the code. It is not recommended to use var in modern JavaScript because it can lead to unexpected behavior due to its function-scoped nature.
// it value can be changed and it can be redeclared in the same scope. It is better to use let or const for variable declarations in modern JavaScript.

if (true) {
  var firstName = "John";
}

var age = 20;
console.log("Age is", age);
console.log("First Name is", firstName);
age = 25; // reassigning the value of age
console.log("Updated Age is", age);

// let is the block scoped variable - it means it can only be accessed within the block it is defined in. It is recommended to use let for variable declarations when the value of the variable needs to be changed.

if (true) {
  let lastName = "Doe";
  console.log("Last Name is", lastName);
}

// console.log("Last Name is", lastName); // This will throw an error because lastName is not defined outside the block.
let marks = 30;
console.log("Marks is", marks);
marks = 35; // reassigning the value of marks
console.log("Updated Marks is", marks);


// const is the block scoped variable - it means it can only be accessed within the block it is defined in. It is recommended to use const for variable declarations when the value of the variable should not be changed.

if (true) {
  const country = "USA";
  console.log("Country is", country);
}

// console.log("Country is", country); // This will throw an error because country is not defined outside the block.
const pi = 3.14;
console.log("Value of pi is", pi);
// pi = 3.14159; // This will throw an error because pi is a constant and cannot be reassigned.
// console.log("Updated Value of pi is", pi); 