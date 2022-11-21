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
let screenBelow = document.querySelector('.display-output').querySelector('.new-number');
let screenAbove = document.querySelector('.display-output').querySelector('.previous-number')
let buttons = Array.from(document.querySelectorAll('button'));



buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){

            case 'AC':
                screenBelow.innerText = ''
                screenAbove.innerText = ''
                break;

            case 'DEL':
                screenBelow.innerText = screenBelow.innerText.slice(0, -1);
                break;
            
            default:
                
                screenBelow.innerText += e.target.innerText;
                break;

            case '+':
                screenAbove.innerText = screenBelow.innerText + '+'
                screenBelow.innerText = ''
                break;

            case '/':
               screenAbove.innerText = screenBelow.innerText + '/'
               screenBelow.innerText = ''
            break;

            case '-':
               screenAbove.innerText = screenBelow.innerText + '-'
               screenBelow.innerText = ''
            break;

            case '=':
                let firstNumber = Number(screenAbove.innerText.slice(0, -1))
                let secondNumber = Number(screenBelow.innerHTML)

                if(screenAbove.innerText.includes('+')){
                screenAbove.innerText = `${firstNumber} + ${secondNumber}`
                screenBelow.innerText = firstNumber + secondNumber

               }else if(screenAbove.innerText.includes('-')){
               screenAbove.innerText = `${firstNumber} - ${secondNumber}`
               screenBelow.innerText = firstNumber - secondNumber
               }



        }
        
    });
});





