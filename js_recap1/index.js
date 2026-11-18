// What is JavaScript?
// JavaScript is a high level interpreted programming language that adds interactivity and complex logic to static sites.

// what is scripting language?
// A scripting language is a type of programming language that runs scripts (small programs), inside another program or software environment like web browsers, game engines, or server environments.
// Examples of scripting languages include JavaScript, Python, Ruby, and PHP.

// what is interpreted language?
// An interpreted language is a type of programming language where source code is executed line by line at runtime inside a software program called interpreter.

// What is ECMAScript?
// ECMAScript is a standardized scripting language specification that serves as the foundation for JavaScript. It defines the core features and syntax of the language, ensuring consistency across different implementations. JavaScript is an implementation of the ECMAScript standard, and new versions of ECMAScript introduce additional features and improvements to the language.

// question - 5: What is the difference between var, let, and const in JavaScript?
console.log(a); // Output: undefined
// console.log(b); // Output: ReferenceError: b is not defined (Hoisted but not initialized fall in the temporal dead zone)
let b = 20;
{
  var a = 10;
}
console.log(a); // Output: 10

// const c; // Output: SyntaxError: Missing initializer in const declaration

// question - 6: What is the use ""use strict" in JavaScript?
// It force the engine to run code in "strict mode," which catches common coding mistakes and blocks unsafe actions.

// question - 7: data types in JavaScript?
// Primitive:
// primitive values are directly stored in the memory and cannot be changed once created.
// - String
// - Number
// - Boolean
// - Undefined
// - Null
// - Symbol
// - BigInt

// String:
var greeting = "Hello, World!";
// Number:
var age = 25;
// Boolean:
var isStudent = true;
// Undefined:
var x;
// Null:
var y = null;

// BigInt:
var bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber);

// Symbol: Represents a unique and immutable value that can be used as an identifier for object properties.
let id = Symbol("id");
console.log("below is the use case of symbol:\n \n");
console.log(typeof id);

// Preventing Property Collisions:
//  When working with objects from third-party libraries or shared codebases,
//  using string keys can accidentally overwrite existing data.
//  Symbols guarantee your property key will never clash with another

const user = {
  name: "John Doe",
  age: 30,
  id: 12,
  [id]: "secrect-id",
};

console.log(user.id);
console.log(user[id]);

// non primitive data types:

// non-primitive values are stored as references in memory and can be changed after creation.
// - Object
// - Array
// - Function

// question - 8: what are mutable and immutable data types in JavaScript?
// Mutable data types can be changed after they are created,
//  while immutable data types cannot be changed once they are created.

// question - 10: what is dynamic typing in JavaScript?
// Dynamic typing means that variables can hold values of any type,
//  and the type is determined at runtime rather than compile time.

// question -11: what are the truthy and falsy values in JavaScript?

const user1 = {};

console.log(Boolean(user1)); // Output: true

// Unary Operator:
// It is a type of operator that operates on a single operand.

// Question - 12: what is the role of typeof operator in JavaScript?
// It is used to determined the type of an operand or variable. It returns a string indicating the type of the operand.
console.log("\n");
const num1 = 42;
const num2 = "43";
console.log(typeof num1); // Output: "number"

// use Case:
function multiply(a, b) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Both arguments must be numbers!";
  }
  return a * b;
}
const mul = multiply(num1, num2);
console.log(mul);

// question - 13: what is the role of instanceof operator in JavaScript?
// It checks whether the prototype property of a constructor appears anywhere in the prototype chain of an object. It returns true if the object is an instance of the specified constructor, and false otherwise.

console.log("\n");
const car = {
  make: "Toyota",
  model: "Camry",
};

console.log(
  "check whether car is an instance of Object:",
  car instanceof Object,
);

// Question - 14: what is the role of Equality Operator in JavaScript? (== and ===)
// The equality operator (==) checks for equality between two values, performing type coercion if necessary. It returns true if the values are equal after type conversion, and false otherwise.
// The strict equality operator (===) checks for equality without performing type coercion. It returns true only if the values are of the same type and have the same value, and false otherwise.

// question - 15: what is the use of null, undefined, and NaN in JavaScript?
// null is a value that represents no value or no object.
// undefined is a value that indicates that a variable has been declared but has not been assigned a value.
// NaN (Not-a-Number) it means we are expecting a number but the it did not return a valid number. It is a special value that represents an invalid or unrepresentable number result, such as the result of dividing zero by zero or attempting to parse a non-numeric string as a number.

console.log("\n");
const checkNum = 0 / 0; // NaN
console.log(Number.isNaN(checkNum));

// question - 16: BigInt in js?

console.log("\n");
var bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue);

// question - 17: Symbol in js?
console.log("\n");

const ids = Symbol("id");
console.log(typeof ids); // Output: "symbol"

const secretKey = Symbol("secret");
const user2 = {
  name: "Ali",
  [secretKey]: 98765,
};

// When you use a Symbol as a key in an object, it is hidden from standard loops (like for...in or Object.keys())
console.log(Object.keys(user2)); // Output: ["name"]

console.log(user2[secretKey]);

console.log("\n");

// question - 18: Arithmetic, Assignment, Comparison, Logical, Bitwise, unary operator, optional chaining and Ternary Operators in JavaScript?

// Arithmetic Operators:
// Arithmetic operators are used to perform mathematical operations on numbers. They include addition (+), subtraction (-), multiplication (*), division (/), modulus (%), increment (++), and decrement (--).

// Assignment Operators:
// Assignment operators are used to assign values to variables. The most common assignment operator is the equal sign (=), but there are also compound assignment operators like +=, -=, *=, /=, and %=.

// Comparison Operators:
// Comparison operators are used to compare two values and return a boolean result (true or false). They include equal to (==), not equal to (!=), strict equal to (===), strict not equal to (!==), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).

// Logical Operators:
// Logical operators are used to combine or invert boolean values. They include AND (&&), OR (||), and NOT (!).

// Nullish Coalescing Operator (??):
// The nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined values. It returns the right-hand operand if the left-hand operand is null or undefined; otherwise, it returns the left-hand operand.

const value1 = null;
const value2 = "Hello, World!";
const result = value1 ?? value2;
console.log(result); // Output: "Hello, World!"

// Optional Chaining Operator (?.):
// The optional chaining operator (?.) allows you to safely access nested properties of an object without causing an error if a property is undefined or null. If the property exists, it returns its value; otherwise, it returns undefined.
const user3 = {
  name: "John",
};

console.log(user3.address?.city); // Output: undefined

console.log("\n");

// Ternary Operator (?:):
// The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
const age1 = 18;
const canVote = age1 >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"

// Unary Operators:
// Unary operators are operators that operate on a single operand. They include the unary plus (+), unary negation (-), increment (++), decrement (--), and typeof operator.
// example:
let num3 = 5;
console.log(+num3); // Output: 5
console.log(-num3); // Output: -5
console.log(++num3); // Output: 6

// Bitwise Operators:
// Bitwise operators are used to perform operations on the binary representations of numbers. They include AND (&), OR (|), XOR (^), NOT (~), left shift (<<), right shift (>>), and unsigned right shift (>>>). These operators work at the bit level, manipulating individual bits of the operands.

// question - 19: Short-circuit evaluation in JavaScript?
// Short-circuit evaluation is a programming technique where the evaluation of a logical expression stops as soon as the result is determined. In JavaScript, this behavior is commonly observed with logical operators like AND (&&) and OR (||).
console.log("\n");

const a1 = true;
const b1 = false;

const result2 = a1 || b1; // Short-circuits to true, b1 is not evaluated
console.log(result2); // Output: true
console.log("\n");

// question - 20: use of in, void, comma and delete operator in JavaScript?

// The 'in' operator checks if a property exists in an object.
const obj = { name: "John", age: 30 };
console.log("name" in obj); // Output: true
console.log("height" in obj); // Output: false

// The 'void' operator evaluates an expression and returns undefined.
// void operator specifies an expression to be evaluated without returning a value. It is often used to prevent the default behavior of certain expressions or to indicate that the result of an expression is intentionally ignored.
console.log(void 5); // Output: undefined

// The comma operator evaluates multiple expressions and returns the value of the last expression.
let x1 = (1, 2, 3);
console.log(x1); // Output: 3

// The 'delete' operator removes a property from an object.
delete obj.age;
console.log(obj); // Output: { name: "John" }
console.log("\n");

// question - 21: what is destructuring assignment in JavaScript?
// A shorthand syntax that allows you to unpack values from arrays or extract properties from objects into separate, distinct variables.
const colors = ["red", "green", "blue"];

// Destructuring
const [first, second, third] = colors;

console.log(first); // "red"
console.log(second); // "green"
console.log(third); // "blue"

const user4 = { name: "Sara", age: 25, city: "Lahore" };

// Destructuring
const { name, city } = user4;

console.log(name); // "Sara"
console.log(city); // "Lahore"
console.log("\n");

// question - 22: what is rest and spread operator in JavaScript?
// spread operator:The spread operator takes an iterable (like an array or object) and unpacks or expands its elements into individual components.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(...arr2);

// rest operator: The rest operator collects multiple individual elements and packs them into a single array.
const sum = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

const result1 = sum(1, 2, 3, 4);
console.log(result1);
console.log("\n");

// question - 23: What is if else and nested conditions?
/* 
" An if...else statement controls the execution flow of code based on boolean conditions,
  allowing a program to branch down different paths.
  Nested conditions take this a step further by placing conditional checks
  inside other conditional blocks, letting you evaluate secondary dependencies
  only when a primary condition passes."
*/

// question - 24: what is switch statement and do while loop?

// switch statement when we have to check differenct cases against a single expression
let agee = 14;
switch (true) {
  case agee > 10 && agee < 24:
    console.log("you're a child");
    break;
  case agee > 25:
    console.log("you're young");
    break;
  default:
    console.log("not specified yet.");
}

// while loop: it repeatedly executes a block of code until a specified condition remains true

let count = 1;

while (count <= 10) {
  console.log("Hello", count++);
}
console.log("\n");

// question - 25: what are labbled statements and nested loop?

// labbled statements:
/*  The labeled statement in JavaScript is a feature that allows you to prefix any statement
    or loop with an identifier (a name followed by a colon :),
    giving you a way to reference it later—most commonly to control nested loops.
*/

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Stops BOTH loops immediately!
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
console.log("\n");

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/* A nested loop is a loop inside another loop where the inner loop executes completely
   for every single iteration of the outer loop.
*/

searchMatrix: for (let r = 0; r < matrix.length; r++) {
  for (let c = 0; c < matrix[r].length; c++) {
    if (matrix[r][c] === 5) {
      console.log(`Found 5 at row ${r}, col ${c}`);
      break searchMatrix; // Exits both loops at once
    }
  }
}
console.log("\n");

// question - 26: for of and for in and break and continue statements?

// for...in returns the keys (property names of an object).

// for...of returns the values (elements of an iterable collection like an array or string).

const colors1 = ["red", "green", "blue"];
for (let color of colors1) {
  console.log(color);
}

console.log("\n");
const user5 = { name: "Alice", age: 30, role: "Developer" };

for (let key in user5) {
  console.log(key);
}
console.log("\n");

// question - 27: what are functions?
//  Reusable block of code designed to perform a specific task
greet(); // functions are hoisted

function greet() {
  console.log("Good Morning!");
}

console.log("\n");

// question - 28: function declaration and expression?
// A function declaration defines a named function using the function keyword at the statement level.

// difference:
/* "The main difference is hoisting and syntax.
    A function declaration is fully hoisted,
    meaning JavaScript hoists the entire function definition
    to the top of its scope so you can call it before it's written.
    A function expression is assigned to a variable, is not hoisted,
    and cannot be invoked until the execution line reaches it." */

var greeting = function () {
  return "Hello";
};
console.log(greeting());

console.log("\n");

// question - 29: what are anonymous and named and arrow functions?

// A function without name is anonymous function and
//  callbacks is the perfect example of anonymous functions.

// A named function is a function that has an explicit identifier (name) associated with it,
// whether it is created via a function declaration or a named function expression.

// An arrow function is a concise, modern ES6 syntax for writing function expressions
// using a fat arrow (=>) instead of the function keyword.

// question - 30: function parameters and arguments?

const add = (a, b) => {
  // a,b are the parameters
  return a + b;
};

console.log(add(10, 15)); // there are the arguments

// question - 31: what are the default parameters?

// 'guest' is the default parameter value
const greetUser = (name = "Guest") => {
  return `Hello, ${name}!`;
};

console.log(greetUser("Alice")); // Outputs: "Hello, Alice!" (uses passed argument)
console.log(greetUser()); // Outputs: "Hello, Guest!" (uses default parameter)
console.log(greetUser(undefined)); // Outputs: "Hello, Guest!" (undefined triggers default)
console.log("\n");

// question - 32: what are the rest parameters?
// Rest parameters are a JavaScript feature that allows
// a function to accept an indefinite number of arguments as an array,
// using three dots (...) followed by a parameter name.

// ...numbers is the rest parameter
const sumAll = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sumAll(1, 2, 3)); // Outputs: 6
console.log(sumAll(10, 20, 30, 40)); // Outputs: 100
console.log("\n");

// question - 34: what are callback function?
// Two Types of Callbacks ---> Synchronous & Asynchronous callback

// A synchronous callback is executed immediately,
// right inside the parent function before it finishes returning.

// Classic Example: Array methods like .map(), .filter(), or .forEach().
const numbers = [1, 2, 3];

// The callback function is passed in and executed *during* the map operation
const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]

console.log("\n");
// An asynchronous callback is passed into a parent function,
//  but it is held and executed later—usually after a timer finishes,
//  a file reads, or network data arrives.
console.log("Start");

// Asynchronous callback: called *after* 2 seconds, long after setTimeout finishes running
setTimeout(function () {
  console.log("This is an async callback running later!");
}, 2000);

console.log("End");
// Output order: "Start" -> "End" -> (2 seconds later) -> "This is an async callback running later!"

// question - 35: what are the higher order functions?
/* A higher-order function is a function that either accepts another function as an argument,
  returns a function, or both.
  They leverage JavaScript's first-class functions to enable powerful patterns like callbacks,
  array transformations (map, filter), and function factories. */

// 1. The Higher-Order Function (it returns a new function)
const createMultiplier = (factor) => {
  return (number) => {
    return number * factor;
  };
};

// 2. Use the HOF to create specialized functions
const double = createMultiplier(2); // factor is 2
const triple = createMultiplier(3); // factor is 3

// 3. Execute them
console.log(double(5)); // Outputs: 10  (5 * 2)
console.log(triple(5)); // Outputs: 15  (5 * 3)



// lexical scope:
// we have nested function and this nested 
// function as access all the variables of it parent/outer function and this is known as lexical scope?


// Closures in js
// A closure is a nested function that retains access to its outer parent function's variables, even after the
//  parent function has finished executing and returned.
const school = () => {
  let name = "cantt public";
  
  // Return the function *itself*, not its result
  return () => {
    return "new " + name;
  };
};

const getSchoolName = school(); // school finishes executing here
console.log(getSchoolName());   // Outputs: "new cantt public" (Closure in action!)
console.log("\n");


// example:
const createBankAccount = (initialBalance) => {
  // This variable is completely private to the outer function
  let balance = initialBalance;

  // Returning an object containing nested functions (closures)
  return {
    deposit: (amount) => {
      balance += amount;
      return `Deposited $${amount}. Current balance: $${balance}`;
    },
    withdraw: (amount) => {
      if (amount > balance) {
        return "Insufficient funds!";
      }
      balance -= amount;
      return `Withdrew $${amount}. Remaining balance: $${balance}`;
    },
    getBalance: () => {
      return `Balance: $${balance}`;
    }
  };
};

// 1. Initialize the account
const myAccount = createBankAccount(100); 
// At this point, createBankAccount has finished executing and is off the call stack!

// 2. Interact with the account using the returned closures
console.log(myAccount.getBalance()); // Output: "Balance: $100"
console.log(myAccount.deposit(50));  // Output: "Deposited $50. Current balance: $150"
console.log(myAccount.withdraw(30)); // Output: "Withdrew $30. Remaining balance: $120"

// 3. Try to access the private variable directly from the outside
// console.log(balance); 
// ReferenceError: balance is not defined (Total Data Privacy!)


console.log("\n");

{
    var leakedSecret = "I escape the curly braces!";
}

console.log(leakedSecret)


// function borrowing?

// Function borrowing is a JavaScript pattern that allows an object to use a method belonging to another object without
// having to copy, rewrite, or inherit that method.
const user6 = {
  firstName: "Ali",
  lastName: "Khan",
};

const user7 = {
  firstName: "Sara",
  lastName: "Ahmed"
  // Note: user2 does NOT have the getFullName method!
};

function getFullName() {
    return `This is the full name of the user ${this.firstName} ${this.lastName}`;
  }

console.log(getFullName.call(user6))  


