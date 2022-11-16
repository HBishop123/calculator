//ADD
const add = function(x, y){
    result = x + y;
    return result;
}
//SUBTRACT
const subtract = function(x, y){
    result = x - y;
    return result;

}
//MULTIPLY
const multiply = function(x, y) {
    result = x*y;
    return result;
}
//DIVIDE
const divide = function(x, y){
    result = x / y;
    return result;
}


//function depending on operator used
let operate = function(x, operator, y){

switch (operator) {
    case "+":
        result = add(x, y);
        break;
    case "-":
        result = subtract(x, y);
    case "/":
        result = divide(x, y);
    case "*":
        result = multiply(x, y)
}
return result
}


//try to get one number added to with each click instead of pushing to array.

//empty array of numbers    
let number = []
let numberInt = ''

//display of calculator
let screen = document.getElementById("screen-display");

//function to grab value of numbers and show them on calc screen

function display(el){
let amount = el.getAttribute('value');
screen.innerHTML += amount;
number.push(amount);
}

let plus = document.getElementById('+');
plus.addEventListener('click', function(){

})

console.log(numberInt)
console.log(number)







// numberArray.push(Number(numberForArray1));
