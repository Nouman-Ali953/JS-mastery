console.log("hello this is hello world from functions");

// Called before declaration due to hoisting
greetUser();

function greetUser() {
  console.log("Welcome back!");
}

// Function expressions are not hoisted, so you cannot call them before the line where they are defined.

// greetPerson(); // ReferenceError if called here!

const greetPerson = function () {
  console.log("Hello from a function expression!");
};

greetPerson(); // Called after definition

// Anonymous Function --> A function without a name
// setTimeout(() => {
//     console.log("hello I'm an anonymous function")
// }, 2000);

// parameters and arguments in a function

// 'name' and 'age' are parameters
function introduce(name, age) {
  console.log(`I am ${name} and I am ${age} years old.`);
}

// "Alice" and 25 are arguments passed into the function
introduce("Alice", 25);

/////////////// Lexical Scope
// Purpose: Means that a child function has access to the variables defined in its outer (parent) lexical environment.
//  This is determined by where the code is written in your script, not where it is called.

function outerFuntion() {
  const outerValue = "This is the outer function variable";
  function innerFunction() {
    console.log(outerValue);
  }
  innerFunction();
}

outerFuntion();

////// Nested Funtions

function add(x, y) {
  const result = x + y;
  console.log("addition", result);
  function mul(z) {
    return result * z;
  }
  return mul(5);
}

console.log(add(2, 3));

///// callback funtions

const apps = (age, callback) => {
  console.log("age is", age);
  callback();
};

apps(25, () => {
  console.log(`the code part is completed here `);
});

// Higher-Order Functions ---  A function that either takes one or more functions as arguments,
// Built-in array methods like .map(), .filter(), and .reduce() are classic examples.

const fruits = ["Apple", "Banana", "Orange"];

fruits.map((name) => console.log(name));



//////Immediately Invoked Function Expressions (IIFE)

(function () {
  const secretMessage = "this is the local secret scope";
  console.log(secretMessage);
})();


////// recursive function

function countdown(n) {
  if (n <= 0) {
    console.log("Liftoff!");
    return; // Base case stops the recursion
  }
  console.log(n);
  countdown(n - 1); // Calls itself with a smaller number
}
countdown(3);


/////Rest Parameters

function summarize(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(summarize(1, 2, 3, 4)); // 10