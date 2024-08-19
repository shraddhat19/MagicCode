const prompt = require('prompt-sync')();

let factorial = parseInt(prompt("Enter a number to calculate it's factorial :"), 10);

if (isNaN(factorial) || factorial < 0) {
    console.log("Please enter a valid number");
}
else {
    let mult = 1;

    for (let i = factorial; i > 0; i--) {
        mult = mult * i;
    }

    console.log(`The Factorial of ${factorial} is ${mult}.`)

}


let a = 6;

function factorials(number){
    let arr = Array.from(Array(number+1).keys);
    let c = arr.slice(1,).reduce((a,b) => a*b);
    return c;    
}

factorials(a);


// Function to calculate factorial using reduce
// function factorials(n) {
//     if (n < 0) return 'Factorial is not defined for negative numbers.';
//     if (n === 0 || n === 1) return 1;

//     // Create an array with numbers from 1 to n
//     const numbers = Array.from({ length: n }, (_, i) => i + 1);

//     // Use reduce to calculate the factorial
//     return numbers.reduce((acc, curr) => acc * curr, 1);
// }

// // Get user input
// const input = prompt('Enter a positive integer to calculate its factorial: ');
// const number = parseInt(input, 10);

// if (isNaN(number) || number < 0) {
//     console.log('Please enter a valid positive integer.');
// } else {
//     console.log(`The factorial of ${number} is ${factorials(number)}.`);
// }

