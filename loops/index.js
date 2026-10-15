// /////////////// for loop

// const names = ["Alice", "Bob", "charlie"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`Current index: ${i}`);
// }

// /////////////// while loop

// // let count = 0;

// // while (count < 3 ) {
// //     console.log(`running the while loop until the condition meet ${count}`)
// //     count++
// // }

// ///////// do while loop -- code block should run atleast once
// let x = 0;
// do {
//   console.log(`Do-while value: ${x}`);
//   x++;
// } while (x < 3);

// ///////////// Nested Loop

// // Purpose: Placing one loop inside another loop. The inner loop runs completely from start to finish for every single iteration of the outer loop.
// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let rowStr = "";
//   for (let j = 1; j <= i; j++) {
//     rowStr += "* ";
//   }
//   console.log(rowStr);
// }

// let rws = 5;

// for (let i = 1; i <= rws; i++) {
//   // 1. Add leading spaces
//   let rowStr = " ".repeat(rws - i);

//   // 2. Add stars (with a space in between for alignment)
//   rowStr += "* ".repeat(i);

//   console.log(rowStr);
// }



// // ////////////////// for of loop ---> it gives the values
// const name = "Nauman";

// for (let n of name) {
//   console.log(n);
// }


// // ////////////////// for in loop ---> it gives the index
// const nam = ["nauman", "Ali", "Hamid"];
// for (let n in nam) {
//   console.log(n);
// }



const largeArray = [10, 20, 30, 40, 50];

// 1. Record start time
const startTime = performance.now();

// Your loop code
const len = largeArray.length; 
for (let i = 0; i < len; i++) {
  console.log(largeArray[i]);
}

// 2. Record end time
const endTime = performance.now();

// 3. Calculate the difference
const duration = endTime - startTime;
console.log(`Execution time: ${duration.toFixed(4)} milliseconds`);