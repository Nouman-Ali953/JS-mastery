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
let id = Symbol('id');
console.log("below is the use case of symbol:\n \n");
console.log(typeof id);

// Preventing Property Collisions:
//  When working with objects from third-party libraries or shared codebases,
//  using string keys can accidentally overwrite existing data.
//  Symbols guarantee your property key will never clash with another

const user = {
    name: 'John Doe',
    age: 30,
    id: 12,
    [id]: "secrect-id"
}

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