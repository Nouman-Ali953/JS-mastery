console.log("this is the demonstration of the objects");

const obj1 = { id: 1, name: "Alice", age: 2 };
console.log(typeof obj1, "\t", obj1);

const car = new Object();
car.name = "Toyota";
console.log(car);

const proto = { type: "Animal" };
const animal = Object.create(proto);
console.log(animal);

const name = "Bob";
const age = 30;

// Shorthand syntax (instead of { name: name, age: age })
const person = { name, age };

console.log(person);

/////////////////////////////////////
/// dot notation and bracket notation
/////////////////////////////////////

console.log("\n");
const user = {
  firstName: "Jane",
  "favorite color": "blue",
  score: 95,
};

console.log(user.firstName);
console.log(user["favorite color"]);
const prop = "score";
console.log(user[prop]);
console.log("\n");

const book = { title: "JavaScript 101", pages: 200 };

// 1. Adding properties
book.author = "John Doe";
book["publisher"] = "TechPress";

// 2. Updating properties
book.pages = 250;

// 3. Deleting properties
delete book.publisher;

console.log(book);
// { title: 'JavaScript 101', pages: 250, author: 'John Doe' }

//// nested objects

console.log("\n");
const nested = {
  name: "codezbit",
  address: {
    city: "lahore",
  },
  greeting() {
    console.log(`Hello, my name is ${this.name}`);
    return this.name;
  },
};

console.log(nested?.address?.city);
console.log(nested?.greeting());

console.log("\n");

// Objects are reference types. When you assign an object to a variable, you store a reference to its location in memory, not the object itself. Two distinct objects with identical content are not equal.
const objA = { name: "Alice" };
const obj2 = { name: "Alice" };
const obj3 = objA;

console.log(objA === obj2); // false (different memory addresses)
console.log(objA === obj3); // true (same memory reference)

// Shallow Copy vs. Deep Copy
// Shallow Copy: Copies top-level properties. Nested objects/arrays are still shared by reference.

// Deep Copy: Recursively clones all nested structures.

// JavaScript
const original = { a: 1, nested: { b: 2 } };

// Shallow copy using spread syntax
const shallow = { ...original };

// Deep copy using structuredClone (modern native API)
const deep = structuredClone(original);

// Computed Property Names
// Use square brackets inside object literals to evaluate dynamic property keys.

const propKey = "dynamic";

const obj4 = {
  [propKey]: "better now",
  age: 10,
};

console.log(obj4);
console.log("\n");

// 3. Inspection & Property Checking/
// The in Operator
// Checks if a property exists in an object (including properties inherited from its prototype chain).
const obj5 = {
  name: "hamid",
};

console.log("name" in obj5);
console.log("age" in obj5);
console.log("toString" in obj5); // true (inherited from Object.prototype)
console.log("\n");

// Object.hasOwn()
// A safer, modern alternative to hasOwnProperty() that checks if a property exists directly on the object itself.

// JavaScript

console.log("\n");

const usr = { name: "David" };
console.log(Object.hasOwn(usr, "name")); // true
console.log(Object.hasOwn(usr, "toString")); // false
console.log("\n");

/////////////////////////////////////////
///// Object Shorthand Properties
/////////////////////////////////////////

const Age = 24;
const Name = "hamid";

const student = { Age, Name };

console.log("data type is ", typeof student, "object is: ", student);

const props = "score";
const bio = {
  [props + "Level"]: 9,
};

console.log("Here is the score level", bio.scoreLevel);

/////////////////////////////////////////
///// Iteration & Static Methods
/////////////////////////////////////////
console.log("\n");

const obj10 = { name: "Noman", Age: 24 };

console.log(Object.hasOwn(obj10, "name"));
console.log(Object.keys(obj10));
console.log(Object.values(obj10));
console.log(Object.entries(obj10));
console.log("\n");

/////////////////////////////////////////
///// Advanced Utilities & Protection
/////////////////////////////////////////
console.log("\n");

//// object.assign --> Copies enumerable own properties from one or more source objects to a target object (shallow copy).
const source = { a: 1, b: 2 };
const target = { c: 3, d: 4 };

const result = Object.assign(source, target);
console.log(result);

// Object.create() --------- Creates a new object using an existing object as its prototype.
// • Object.create() (Prototype Link):
//  The new object starts completely empty. It has no properties of its own.
//  It simply has a hidden pointer (called __proto__) pointing to the original object.

const obj11 = {
  name: "Faizan",
  greeting() {
    console.log("Hello");
  },
};
const obj12 = Object.create(obj11);
console.log(obj12.greeting());

// Freezing and Sealing Objects
// Object.freeze(): Makes an object completely immutable (cannot add, delete, or modify properties).

// Object.seal(): Prevents adding or deleting properties, but allows modifying existing property values.

const config = { api: "v1" };
Object.freeze(config);
config.api = "v2"; // Fails silently (or throws in strict mode)
console.log(config);
console.log("\n");

/////////////////////////////////////////
///// Object Shorthand Properties
/////////////////////////////////////////
console.log("\n");

const data = { id: 1, active: true };

const jsonString = JSON.stringify(data);
console.log(jsonString, "and here is the datatype ", typeof jsonString);

const parsedObj = JSON.parse(jsonString);
console.log(parsedObj, "and here is the datatype ", typeof parsedObj);
console.log("\n");
