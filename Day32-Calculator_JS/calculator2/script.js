const prompt = require("prompt-sync")();

let Firstnum = parseFloat(prompt("Enter first number: "));
let Secondnum = parseFloat(prompt("Enter second number: "));

console.log("1.Addition");
console.log("2.Multiplication");
console.log("3.Substraction");
console.log("4.Division");

let Operation = parseFloat(prompt("Enter no.of Operation to be perform: "));

function sum(Firstnum, Secondnum) {
    return Firstnum + Secondnum;
}
function multiply(Firstnum, Secondnum) {
    return Firstnum * Secondnum;
}
function subtract(Firstnum, Secondnum) {
    return Firstnum - Secondnum;
}
function divide(Firstnum, Secondnum) {
    if (Secondnum === 0) {
        return "Cannot divide by zero!";
    }
    return Firstnum / Secondnum;
}

switch(Operation){
    case 1:
        console.log("The addition of the numbers is :", sum(Firstnum, Secondnum));
        break;

    case 2:
        console.log("The multiplication of the numbers is :",multiply(Firstnum, Secondnum));
        break;

    case 3:
        console.log("The subtraction of the numbers is :",subtract(Firstnum, Secondnum));
        break;
        
    case 4:
        console.log("The division of the numbers is :",divide(Firstnum, Secondnum));
        break;
    
    default:
        console.log("Enter valid number from 1-4 ");
}

