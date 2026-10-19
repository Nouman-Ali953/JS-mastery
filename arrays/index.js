console.log("this is the practicing session on arrays");

const arr1 = [1, 2, 43, 5, "Nauman", "Cantt"];

console.log(typeof arr1);
console.log(Array.isArray(arr1));
arr1.push(11);

for (let arr of arr1) {
  console.log(arr);
}

const arr2 = new Array(1, 2, 3, 4, 5);
console.log("this is the second arrar", arr2);

for (let value of arr2) {
  console.log(value);
}

const arr3 = Array.of(5);
console.log(arr3);

// ... ///////////Array Indexing & Length

arr1.length = 2;
console.log(
  "the length of arr1 is ",
  arr1.length,
  "\nthis is the array ",
  arr1,
  "\nthis is what on 1st index",
  arr1[1],
);

// Accessing, Adding, and Updating Elements

const numbers = [12, 32, 53];

numbers[0] = 100;
console.log(numbers);

numbers[5] = 101;
console.log(numbers);

console.log(numbers[4]);

// ----------------------------- Multidimensional & Nested Arrays
// Arrays can contain other arrays as elements.

const arr4 = [{ isHuman: false }, 2, 3, 4, 5, [12, 2, 32, 1]];
console.log("\n");

for (value of arr4) {
  console.log(value);
}

console.log("\n");
const arr5 = [
  [1, 2, 4],
  [5, 6, 7],
  [8, 9, 0],
];

console.log(arr5[0][2]);
console.log("\n");

for (const row of arr5) {
    // Loop 1: Grabs each sub-array
    for (const item of row) {
        // Loop 2: Grabs each item inside that sub-array
        console.log(item);
    }
}
console.log("\n");

////////////-         --Three Layers Deep (3D Array)

const array3D = [
  [ ['cube1', 'cube2'], ['cube3'] ],
  [ [12,42]]
];
// const array3D = [
//   [ ['cube1', 'cube2'], ['cube3'] ],
//   [ 2 ]
// ];

// for (const layer of array3D) {
//   for (const row of layer) {
    
//     // Check if the item is an array before starting the 3rd loop
//     if (Array.isArray(row)) {
//       for (const item of row) {
//         console.log("Found in nested array:", item);
//       }
//     } else {
//       // Handle the item directly if it's not an array
//       console.log("Found direct item:", row);
//     }

//   }
// }

for (const layer of array3D) {
  for (const row of layer) {
    for (const item of row) {
      console.log(item);
    }
  }
}


console.log('\n')

const mixed3D = [
    [ 
    ['cube1', 'cube2'], 
    'Just a standard string' // Mixed item
  ]
];

for (const layer of mixed3D) {
  for (const row of layer) {
    
    // Check if the item is an array before starting the 3rd loop
    if (Array.isArray(row)) {
      for (const item of row) {
        console.log("Found in nested array:", item);
      }
    } else {
      // Handle the item directly if it's not an array
      console.log("Found direct item:", row);
    }

  }
}

console.log('\n')



// Array Destructuring
// Unpack values from arrays into distinct variables.

const rgb = ['red', 'green', 'blue'];

const [red, green, blue]= rgb;
console.log(blue)

console.log('\n')
const arr6 = [1,2,3,4,5,6,7,8,9]

const [first, , ...rest] = arr6
console.log(first, '\n')
console.log(rest, '\n')
console.log(arr6)




// Adding, Removing, and Manipulating Elements

const stack = [1, 2];
stack.push(3);    // [1, 2, 3]
stack.pop();      // Returns 3, array is [1, 2]
stack.shift();    // Returns 1, array is [2]
stack.unshift(0); // [0, 2]
console.log('\n')


console.log(stack)



// slice() vs splice()

console.log('\n')

const arr7 = [1,2,3,4,5,6,7,8,9]

const array1 = arr7.slice(0,4)

console.log(array1)
console.log(arr7)


const arr8 = [1,2,3,4,5,6,7,8,9]
const array2 = arr8.splice(0,4)
console.log(array2)
console.log(arr8)


//...////////// concat() and join()
console.log('\n')
const arrA = [1, 2];
const arrB = [3, 4];

const combined = arrA.concat(arrB)
console.log(combined)

const words = ["Hello", "World"];
const sentence = words.join(" ");
console.log(sentence)


// Searching and Locating ///////////
const nums = [10, 20, 30, 20];
console.log(nums.indexOf(20));     // 1
console.log(nums.lastIndexOf(20)); // 3
console.log(nums.includes(30));    // true


const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Bob'}];

const found = users.find(u => u.name === 'Bob');
console.log(found)



////4. Iteration and Transformation Methods
console.log('\n')


const arr10 = [1,2,3,4,5,6,7,8]

const aa = arr10.forEach((num)=> console.log(num * 2))
console.log(arr10)
console.log(aa)

const bb = arr10.map((num)=> num * 3)

console.log(arr10)
console.log(bb)


///// foreach  provided function once for each array element. Always returns undefined
///// map return a brand new array results of calling a function on every element.


// filter(): Creates a shallow copy containing all elements that pass the test implemented by the callback.
const arr11 = [1,2,4,6,2,3,33,12,3,88,44]
const filterData = arr11.filter((num) => num % 3 === 0)

console.log(filterData)
console.log(arr11)



////// reduce() ////////

console.log('\n')
const arr12 = [1,2,3,4,5,6,6]


const sum = arr12.reduce((acc, num)=> acc + num, 0)

console.log(sum)


// Conditionals: some() and every()
// some(): Returns true if at least one element passes the test.

// every(): Returns true if all elements pass the test.

const scores = [85, 90, 78];
const hasHighScore = scores.some(s => s > 90); // false
const allPassed = scores.every(s => s >= 60);  // true

console.log(hasHighScore, '  ', allPassed)



const unsorted = [3, 1, 4, 2];
const sorted = unsorted.sort()
console.log( sorted)




// Flattening: flat() and flatMap()
// flat(depth): Flattens nested arrays up to the specified depth.

// flatMap(): Maps each element using a mapping function, then flattens the result by depth 1.


console.log('\n')

const nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]

const arr = [1, 2, 3];
const mapped = arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
console.log(mapped)

console.log('\n')


// Copying, Cloning & Immutability
// Shallow Copy vs Deep Copy
// Shallow Copy: Copies top-level properties. Nested objects/arrays are still referenced by reference.

// Deep Copy: Recursively clones all nested objects and arrays.


// Deep copy modern native approach
const original = { a: 1, nested: { b: 2 } };
const deepClone = structuredClone(original);

console.log(deepClone)



// Array Spread Syntax (...)
// Creates a shallow copy or merges arrays immutably.
const originalArr = [1, 2, 3];
const clone = [...originalArr]; // Shallow copy
const merged = [...originalArr, 4, 5]; // [1, 2, 3, 4, 5]

console.log(merged)