// this is the demostration of primitive and non-primitive data types in JavaScript.

// primitives are the most basic data types in JavaScript. They include:

// 1. Number: Represents numeric values, both integers and floating-point numbers. Example: 42, 3.14
// 2. String: Represents sequences of characters enclosed in single or double quotes. Example: "Hello, World!", 'JavaScript'
// 3. Boolean: Represents a logical value that can be either true or false. Example: true, false
// 4. Undefined: Represents a variable that has been declared but has not been assigned a value. Example: let x; console.log(x); // undefined
// 5. Null: Represents the intentional absence of any object value. Example: let y = null; console.log(y); // null

// primitives are immutable, meaning their values cannot be changed once they are created. When you assign a primitive value to a variable, the variable holds the actual value itself.

let num = 42; // Number
let secondNum = num;

console.log("num:", num); // Output: 42
console.log("secondNum:", secondNum); // Output: 42

let name1 = "Alice";
let name2 = name1; // A brand new copy of "Alice" is made

name2 = "Bob";
console.log(name1); // "Alice" (Unchanged)
console.log(name2); // "Bob"

// non-primitives, on the other hand, are more complex data types that can hold multiple values or objects. They include:

// 1. Object: Represents a collection of key-value pairs. Example: { name: "Alice", age: 30 }
// 2. Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
// 3. Function: Represents a reusable block of code that can be called with arguments. Example: function greet() { console.log("Hello!"); }

// non-primitives are mutable, meaning their values can be changed after they are created. When you assign a non-primitive value to a variable, the variable holds a reference to the actual value in memory.

let person = { name: "Alice", age: 30 };
let anotherPerson = person; // anotherPerson holds a reference to the same object in memory

console.log("person:", person); // Output: { name: "Alice", age: 30 }

anotherPerson.age = 35; // Modifying the age property of the object
console.log("person after modification:", person); // Output: { name: "Alice", age: 35 }

// BigInt

let b = 9007199254740991n;

console.log(b + 1n); // Output: 9007199254740992n
console.log(b + 2n); // Output: 9007199254740993n

// symbol

let uniqueId = Symbol("Id");

console.log(uniqueId); // Output: Symbol(Id)

// Objects in JS

const person1 = {
  name: "John",
  age: 30,
};
person1.name = "Jane"; // Modifying the name property of the object

console.log(person1.name); // Output: Jane
console.log(person1.age); // Output: 30

// Arrays in JS

const colors = ["red", "green", "blue"];

console.log(colors[0]); // Output: red
console.log(colors[1]); // Output: green
console.log(colors[2]); // Output: blue

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log(typeof colors); // Output: object ---> array are objects in JS
console.log(Array.isArray(colors)); // Output: true ---> to check if the variable is an array or not
console.log(typeof null); // famous bug in JS, null is not an object but it returns object when we check the type of null.

// Dynamic Typing
// JavaScript is a dynamically typed (or loosely typed) language.
// This means you do not have to explicitly declare the data type of a variable when you create it,
//  and a variable can change its data type at any time during execution.

// Primitive Values vs. Reference Values in Action
// To clearly see how reference values behave compared to primitives:

let aa = 10;
let bb = aa;

bb = 20;
console.log(aa); // Output: 10 (primitive value remains unchanged)

let obj3 = { firstName: "Alice" };
let obj4 = obj3;

obj4.firstName = "Bob";
console.log(obj3.firstName); // Output: Bob (reference value is changed)


// Type Conversion (Explicit)
// When you manually and deliberately convert a value from one data type to another using built-in functions like String(), Number(), or Boolean().


let num1 = 42;
let str1 = String(num1);

console.log(str1); // Output: "42"
console.log(typeof str1); // Output: string


// Type Coercion (Implicit)
// When JavaScript automatically converts data types behind the scenes to complete an operation. This can sometimes lead to unexpected behavior if you aren't careful!

console.log(5 + "5"); // Output: "55" (number 5 is coerced to string "5")

console.log("5" - 2) // Output: 3 (string "5" is coerced to number 5)
console.log("5" * 2) // Output: 10 (string "5" is coerced to number 5)
console.log("5" / 2) // Output: 2.5 (string "5" is coerced to number 5)