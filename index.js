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





