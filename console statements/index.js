console.log("Hello from the console statements/index.js file!");

console.warn("This is a warning message.");

console.error("This is an error message.");

// alert("This is an alert message.");

// let userName = prompt("This is a prompt message. Please enter your name:");
// console.log("Hello, " + userName + "!");

// const userConfirmed = confirm("This is a confirmation message. Do you want to proceed?");
// console.log("User confirmed:", userConfirmed);

const names = [
  {
    name: "Alice",
    age: 30,
  },
  {
    name: "Bob",
    age: 25,
  },
  {
    name: "Charlie",
    age: 35,
  },
  {
    name: "David",
    age: 28,
  }
];
console.table(names);

// ------------------------------->
// reading nputs, displaying outputs and debudding using html and javascript
// ------------------------------->


const readUserInput = () => {
    const inputElement = document.getElementById("usernameInput");
    const userValue = inputElement.value;
    console.log("User input value:", userValue);
    inputElement.value = ""; // Clear the input field after reading the value
    const userOutputElement = document.getElementById("userOutputContainer");
    userOutputElement.hidden = false;
    const outputElement = document.getElementById("userOutput");
    outputElement.textContent = userValue;
}


// JavaScript
let score = 42;
let playerName = "Alex";

console.log("Player name is:", playerName); // Regular logging
console.log("Current score:", score);

if (score < 50) {
  console.error("Warning: Score is below the minimum threshold!"); // Highlights errors
}