
"use strict"
console.log("hello this is the scoping practicing file in JS..");

/////////////////////////////////////////
///// Global, local and function Scope in JS
/////////////////////////////////////////
console.log("\n");

// When a variable is declared outside of any function or block, it has global scope.
// This means it can be accessed and modified from anywhere in your JavaScript code,
// including inside functions and blocks.

const globalMessage = "Hello, this global message";
console.log(globalMessage);
function check() {
  let localMessage = "Hello, this is the local message";
  // upper this is the variable that is the function scope, Variables declared inside a JavaScript function are function-scoped.
  //  They are born when the function runs and disappear when the function finishes.
  // You cannot access them from outside the function.
  var localMessage2 = "I will not leak out in the function scope";
  console.log(globalMessage);
}
// console.log(localMessage); //ReferenceError: localMessage is not defined
// console.log(localMessage2); //ReferenceError: localMessage is not defined
console.log(globalMessage);
console.log("\n");




/////////////////////////////////////////
///// Block Scope in JS
/////////////////////////////////////////
console.log("\n");

{
  let blockMessage = "I'm trapped inside the block";
  var notBlockScoped = "I leak out!";
}
// console.log(blockScoped); // Error! Not accessible outside the block
console.log(notBlockScoped); // "I leak out!" (var ignores block scope)
console.log("\n");





/////////////////////////////////////////
///// Lexical Scope in js
/////////////////////////////////////////
console.log("\n");

// lexical scope is the scope that can access the value of outer function as well the variables that are defined in the global scope.

const GlobalName = "Hamid Ali";
function a() {
  const name1 = "Hamid";
  function b() {
    const name2 = "Ali";
    console.log(
      "the last name is ",
      name2,
      "the first name is ",
      name1,
      "and the full name is ",
      GlobalName,
    );
  }
  b();
}
a();
console.log("\n");




/////////////////////////////////////////
///// Variable shadowing
/////////////////////////////////////////
console.log('\n');

let message = "Hello from Global"; // Outer variable

function sayHello() {
  let message = "Hello from Function"; // Shadows the outer variable
  console.log(message); // "Hello from Function"
}

sayHello();
console.log(message); // "Hello from Global" (outer variable is unaffected outside)
console.log('\n');





/////////////////////////////////////////
///// Hoisting in jS
/////////////////////////////////////////
console.log('\n');
// Hoisting is JavaScript’s default behavior of moving variable and function declarations
// to the top of their respective scopes before code execution begins.

// var declarations: Hoisted to the top and initialized with a value of undefined.
// 
// let and const declarations: Hoisted to the top, but not initialized (they sit in the TDZ).
// 
// Function declarations: Fully hoisted (both declaration and body), meaning you can call them before they appear in the code.

console.log(myVar)
var myVar = "Hello and hoisted and can be access before declaration with value undefined"


// console.log(letValue); //ReferenceError: Cannot access 'letValue' before initialization

let letValue = "Hosited but exists in TDZ"

console.log('\n');



/////////////////////////////////////////
///// Temporal Dead Zone (TDZ)
/////////////////////////////////////////
console.log('\n');
// Temporal Dead Zone (TDZ)	The period before let/const is initialized	Accessing the variable in this zone throws a ReferenceError.
console.log('\n');


const x = 10;
console.log(x)