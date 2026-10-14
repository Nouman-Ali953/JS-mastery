console.log("Hello! very first JS code snippet");

setTimeout(() => {
  console.log("This is a delayed message after 0 seconds");
}, 0);

const add = (a, b) => {
  return a + b;
};

const result = add(5, 10);
console.log("this is the result of the add function", result);

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

users.forEach((user) => {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
});

console.log("end of the code snippet");

Promise.resolve().then(() => {
  console.log("This is a promise resolved message");
});
