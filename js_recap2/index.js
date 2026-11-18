// question - 81: What is Encapsulation?

// Encapsulation is a core concept in the object oriented programming
// the bundles an object's data (attributes) and methods (functions)
// that operator on that data into a single unit, such as class in OOP.

// A class is the primary structural blueprint used to achieve encapsulation in the oop.

console.log("\n");
// question - 82: What is Abstraction?

/* Abstraction is an object oriented principle that hides the complex implementation 
details and logic and only shows the essential features to user.
It focuses on what an object does rather than how it does (similar to a driving car by using the
pedals without knowing how the combusion engine works) */

class CoffeeMachine {
  // Internal complexity hidden from the user (Abstraction)
  #boilWater() {
    return "Boiling water...";
  }

  #grindBeans() {
    return "Grinding coffee beans...";
  }

  #extractCoffee() {
    return "Extracting espresso...";
  }

  // Essential interface exposed to the outside world
  pressStartButton() {
    console.log(this.#boilWater());
    console.log(this.#grindBeans());
    console.log(this.#extractCoffee());
    console.log("Your coffee is ready! ☕");
  }
}

const machine = new CoffeeMachine();
machine.pressStartButton();

// The user interacts with a simple method and doesn't need to
// know or call the complex internal methods (#boilWater, etc.).
console.log("\n");

// question - 83: private class field and public class field?

// The main difference between public and private class fields is where they can be accessed in your code.

/* A public class field is a variable in the class that can be accessed within the class and as well from outside
and we can also modifies it from anywhere in the code */

/* A private class field is a variable defined inside a class that can only be accessed
 or modified from within that exact same class. */

class Car {
  name = "Honda";

  #engine = "Chinese";

  constructor(name, engine) {
    this.name = name; // Public property
    this.#engine = engine; // Initializing private field
  }
  details() {
    console.log(
      `the name of the car is ${this.name} and the engine it uses is of ${this.#engine}`,
    );
  }
}

const car = new Car("Corolla", "Japanese");
car.name = "Prius";
console.log(car.name);
// car.#engine = "German";          // SYNTAX ERROR: Blocked because this is outside!
// console.log(car.#engine);
car.details();
console.log("\n");

// question - 84: What is Method Overriding in JS?

/* Method overriding is an object-oriented programming feature that allows
 a subclass (child class) to provide a specific implementation of a method
  that is already defined in its superclass (parent class).

 When you override a method, the child's version replaces or customizes
 the parent's version when called on an instance of the child class. */

class Animal {
  speak() {
    console.log("some generic animal sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("meow meow!");
  }
}

const cat = new Cat();
cat.speak();

// "Method Overriding is a specific mechanism (technique) used to achieve runtime polymorphism."
console.log("\n");

// question - 85: what is the diff b/w the inheritance and composition?

/* Composition is an object oriented principle where a class
is built by combining other objects as component rather than 
inheriting traits from a parent class 

"Instead of saying “Dog is-a Animal” (Inheritance), composition says “Car has-a Engine” or “Robot has-a Battery”."
*/

class Engine {
  start() {
    return "engine started: vroom vroom 🚀";
  }
}

class GPS {
  getRoute() {
    return "calculating the fastest route ...";
  }
}

class Vehicle {
  constructor() {
    this.engine = new Engine();
    this.gps = new GPS();
  }

  drive() {
    console.log(this.engine.start());
    console.log(this.gps.getRoute());
    console.log("the car is on the road");
  }
}

const myCar = new Vehicle();
myCar.drive();
console.log("\n");

// question - 88:  Synchronous and Asynchronous in js?

/* Synchronous Code: Executed line by line in a strict sequential order.
   Each line must wait for the previous line to completely finish before running.
   Because JavaScript is single-threaded, long-running synchronous tasks
   block the main thread, freezing the app/UI. */

/* Asynchronous Code: Executed non-sequentially. It allows long-running operations (like fetching data from a server or reading a file) to be initiated and handed off, while the program continues running other code immediately. Once the background task finishes,
   it handles the result using callbacks, promises, or async/await. */

// --- SYNCHRONOUS ---
console.log("1: Start sync task");
console.log("2: Middle sync task");
console.log("3: End sync task");
// Output order is guaranteed: 1, then 2, then 3.
console.log("\n");

// --- ASYNCHRONOUS ---
console.log("A: Start");

// setTimeout is asynchronous (handled via the event loop)
setTimeout(() => {
  console.log("B: Data fetched after 2 seconds -- coming from question: 88");
}, 2000);

console.log("C: End");

// Output order:
// A: Start
// C: End
// B: Data fetched after 2 seconds (runs later, after the delay)
console.log("\n");

// question - 88: what are blocking and non blocking operations in js?

/*"A blocking operation halts the execution thread entirely until it completes,
 while a non-blocking operation hands off the task
  so the thread remains free to execute other code immediately."*/



// question - 90: what does single treaded javascript means?

/*
In JavaScript, single-threaded means that the language executes
 one task or command at a time in a single sequence.
  It uses a single Call Stack (the main thread) to track and run functions one after another,
 rather than running multiple pieces of code in parallel. */



// question - 91: what is concurrency and parallelism?

/* "Concurrency is about structure—it's when a program handles multiple tasks
    by interleaving their execution over time, often via context switching on a single core.
    Parallelism is about execution—it's when multiple tasks literally run
    at the exact same time across multiple CPU cores.
    In short, concurrency is dealing with lots of things at once,
    while parallelism is doing lots of things at the exact same instant." */


// question - 92: callback functions and callback hell?    
/* A callback function is simply a function passed as an argument to another function
   to be executed later, usually once an asynchronous operation completes.
   Callback hell occurs when multiple asynchronous tasks depend on each other,
   leading to deeply nested callbacks that form a pyramid structure,
   making code hard to maintain and debug.
   We prevent callback hell primarily by using Promises for cleaner chaining,
   or modern async/await syntax,
   which allows us to write asynchronous code sequentially and readably." */

   