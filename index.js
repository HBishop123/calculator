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

//display of calculator
let screen = document.getElementById("screen-display");
numberButtons = document.getElementsByClassName('.number-key');

for(let i=0; i<numberButtons.length; i++){
    numberButtons[i].addEventListener('click', screen)
}
numberButtons.addEventListener('click', function(){


})





