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

