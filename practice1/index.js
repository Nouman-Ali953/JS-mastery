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