console.log('====================================');
console.log("this is the practice1 file for the practice of js topics");
console.log('====================================');

function help(){
    let count = 1;
    const incre = () => {
       return count = count + 3;
    }
    const result = incre();
    return result;
}

const result = help()
console.log("here is the result ", result)

// the upper example is the lexical scope


const res = callApi()

function callApi(){
    let count = 1;
    console.log("count is ", count);
}



async function getUser() {
  console.log("1. Requesting user data...");
  
  // 'await' pauses only this function, leaving the rest of the app free
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  
  console.log("2. Data received:", data.name);
}

getUser();
console.log("3. User can still click buttons while data loads!");