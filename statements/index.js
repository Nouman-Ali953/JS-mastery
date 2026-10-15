///// if statement

if (true) {
  console.log("Hello World");
}

const score = 85;
if (score >= 50) {
  console.log("Congratulations, you passed!");
}

//////////// if else statement
const age = 42;

if (age > 50) {
  console.log("person is more then 42");
} else {
  console.log("person is below 42");
}

const person = age > 50 ? "person is more then 42" : "person is below 42";
console.log(person);

///////else if statement

// const time = prompt("Enter the current time");

// if (time > 8 && time < 12) {
//   alert("Good Morning!!");
// } else if (time < 18) {
//   alert("Good Afternoon! ");
// } else {
//   alert("Good Evening!");
// }

/////// nested if statement

const isLoggedIn = false;
const hasAdminAccess = false;

if (isLoggedIn) {
  if (hasAdminAccess) {
    console.log("user is an admin");
  } else {
    console.log("user is not an admin");
  }
}

//// switch statement

const trafficSignal = "green";

switch (trafficSignal) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("slow");
    break;
  case "green":
    console.log("Go");
    break;
}

/// default case

const userRole = "guest";

switch (userRole) {
  case "admin":
    console.log("Full system access granted.");
    break;
  case "editor":
    console.log("Content editing access granted.");
    break;
  default:
    console.log("Access restricted. Unknown role.");
    break;
}

////////////////// Truthy and Falsy Values

// Purpose: In JavaScript, any value can be evaluated in a boolean context (like an if statement).
//  A falsy value is a value that translates to false when evaluated
//  (specifically: false, 0, -0, 0n, "" (empty string), null, undefined, and NaN).
//  Everything else is considered truthy and translates to true.

// ////////////// When to Use if vs switch
// Purpose: Choosing the right tool for control flow.

// Use if...else chains when checking complex conditions, different variables, boolean expressions,
// or ranges of values (e.g., score > 80).

// Use switch statements when checking a single variable against multiple discrete,
// exact literal values
// (e.g., specific strings or numbers), as it keeps code clean and readable.

//////// Conditional Expressions --- Expressions that evaluate a condition and return a value as a result.

const Role = "admin";

// The conditional expression evaluates and returns a string based on the condition
const accessMessage = Role === "admin" ? "Full Access" : "Limited Access";
console.log(accessMessage); // "Full Access"



///////////////////// short circuit evaluation

/// logical AND
const check = () => {
  return true;
};
const result1 = false && check();
console.log(result1);

// this is the example of short circuit evaluation as in the logical AND the left side is already false
// and we do not need to check the right side so that the circuit picks up the shortest path that is why
// it is AND logical short circuit

/// logical OR
const result2 = true || check();
console.log(result2);
