console.log("this is the file for the advance js functions");

/////////////////////////////////////////
///// callback functions
/////////////////////////////////////////
console.log("\n");

const add = (a, b, callback) => {
  const result = a + b;
  callback(result);
};

add(4, 5, (result) => {
  console.log(
    "I'm the callback and the main event is completed and the output is: ",
    result,
  );
});
console.log("\n");

/////////////////////////////////////////
///// Higher-Order Functions (HOF)
/////////////////////////////////////////
console.log("\n");

// Higher order functions are the functions that accepts another function as it argument or may return a function as it's output
///////------ upper callback function is also the example of higher order function

const mul = () => {
  const result = 5 * 7;
  return () => {
    console.log("this is the result of the multiplication", result);
  };
};

const result = mul();
result();
console.log("\n");

/////////////////////////////////////////
///// Closures in JS
/////////////////////////////////////////
console.log("\n");

let count = 0;` `
function addOne() {
  if (count === 0) {
    count += 1;
  }

  return () => {
    console.log((count += 1));
  };
}

const output = addOne();
output();
output();
output();
console.log("\n");

/////////////////////////////////////////
///// currying in JS
/////////////////////////////////////////
console.log("\n");

function multiple(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

case1 = multiple(2);
response = case1(3)(3);
console.log("this is the result of the currying function ", response);
console.log("\n");

/////////////////////////////////////////
///// Partial Application in JS -- it is a technique in which some of the arguments of a func are fixed in advance and a new function is returned that takes the remaining arguments as input
/////////////////////////////////////////
console.log("\n");
function additon(a, b, c) {
  return a + b + c;
}
const add5 = additon.bind(null, 5);
console.log(
  "this is the result of the partial application function ",
  add5(10, 15),
);
console.log("\n");



// callback
// idempotency
// higher order function
// lexical scope
// closures
// currying
// partial application
// debouncing
// throttling
// recursion
// memorization
// contruct function
// this keyward in normal and arrow function
// rest and spread in functions
// IIFE (Immediate Invoke Functional Expression)
