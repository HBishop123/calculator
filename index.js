//display of calculator
let screenBelow = document.querySelector('.display-output').querySelector('.new-number');
let screenAbove = document.querySelector('.display-output').querySelector('.previous-number')
//Buttons
let buttons = Array.from(document.querySelectorAll('button'));
//Equals
let equals =  document.getElementById('equals');
//checking if there is a number
let hasNumber = /\d/;
//selecting all numbers on calc
let numberButtons = document.querySelector('.container').querySelectorAll('.number')
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide')
let multiply = document.getElementById('times')


//switch case for different buttons and their use
buttons.map( button => {
    button.addEventListener('click', (e) => {
        let firstNumber = Number(screenAbove.innerText.slice(0, -1))
        let secondNumber = Number(screenBelow.innerText)
        console.log(screenBelow)
        switch(e.target.innerText){

         //delete all text and return equals to enabled + other button enabling
            case 'AC':
                screenBelow.innerText = ''
                screenAbove.innerText = ''
                equals.disabled = false;
                numberButtons.forEach(numberButtons => numberButtons.disabled = false);
                minus.disabled = false;
                multiply.disabled = false;
                divide.disabled = false;
                plus.disabled = false;


            break;
            //delete one number

            case 'DEL':
                if(screenAbove.innerText.includes('=')){
                screenBelow.innerText = screenBelow.innerText
                }else{
                screenBelow.innerText = screenBelow.innerText.slice(0, -1);}
            break;
            //adds decimal point to end, if one is already added, then it doesn't add another one.
            case '.':
                if (screenBelow.innerText.includes('.')){
                screenBelow.innerText = screenBelow.innerText}    
                else{screenBelow.innerText = screenBelow.innerText + '.'}
            break;

            //default adding number
            default:
                screenBelow.innerText += e.target.innerText;
                minus.disabled = false;
                multiply.disabled = false;
                divide.disabled = false;
                plus.disabled = false;
            break;

            //if someone presses +/- key, the bottom number interchanges from positive to negative
            case '+/-':
                
                if (screenBelow.innerText === ''){
                    screenBelow.innerText === ''
                }else if(screenBelow.innerText > 0){
                    screenBelow.innerText = '-' + screenBelow.innerText
                }else if(screenBelow.innerText.includes('-')){
                    screenBelow.innerText = screenBelow.innerText.slice(1) 
                }

            break;    

            case '+':

               equals.disabled = false;
               numberButtons.forEach(numberButtons => numberButtons.disabled = false);
               minus.disabled = true;
               multiply.disabled = true;
               divide.disabled = true;
               
               // depending on if a calculation has been made previously but without the equals sign, is allows to press other signs and continue calculation - applies to rest of sign case
               if((screenAbove.innerText.includes('+') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
               screenAbove.innerText = firstNumber + secondNumber + '+'
               screenBelow.innerText = ''}

               else if((screenAbove.innerText.includes('x') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
               screenAbove.innerText = firstNumber * secondNumber + '+'
               screenBelow.innerText = ''}

               else if((screenAbove.innerText.includes('/') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
               screenAbove.innerText = firstNumber / secondNumber + '+'
               screenBelow.innerText = ''}

               else if((screenAbove.innerText.includes('-') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
               screenAbove.innerText = firstNumber - secondNumber + '+'
               screenBelow.innerText = ''}
     
 
               //standard add function if a calculaton hasn't already been made - applies to rest of sign case
               else if(!screenAbove.innerText.includes('+')){
               screenAbove.innerText = screenBelow.innerText + '+'
               screenBelow.innerText = ''

               //can use the +-/ or x buttons after having used equals, to continue calculation - applies to rest of sign case
               }else if(screenAbove.innerText.includes('=')){
                screenAbove.innerText = screenBelow.innerText + '+'
                screenBelow.innerText = '';
               }
               //pressing sign by itself buts a 0 in front - applies to rest of sign case
               if(screenAbove.innerText === '+'){
                screenAbove.innerText = '0+'
               }
            break;

            case '/':
               equals.disabled = false;
               numberButtons.forEach(numberButtons => numberButtons.disabled = false);
               minus.disabled = true;
               multiply.disabled = true;
               plus.disabled = true;

               if((screenAbove.innerText.includes('+') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
                screenAbove.innerText = firstNumber + secondNumber + '/'
                screenBelow.innerText = ''}
 
                else if((screenAbove.innerText.includes('x') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
                screenAbove.innerText = firstNumber * secondNumber + '/'
                screenBelow.innerText = ''}
 
                else if((screenAbove.innerText.includes('/') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
                screenAbove.innerText = firstNumber / secondNumber + '/'
                screenBelow.innerText = ''}
 
                else if((screenAbove.innerText.includes('-') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
                screenAbove.innerText = firstNumber - secondNumber + '/'
                screenBelow.innerText = ''}

                else if(!screenAbove.innerText.includes('/')){
                screenAbove.innerText = screenBelow.innerText + '/'
                screenBelow.innerText = ''}   
                           
                else if(screenAbove.innerText.includes('=')){
                screenAbove.innerText = screenBelow.innerText + '/'
                screenBelow.innerText = '';}

               if(screenAbove.innerText === '/'){
                screenAbove.innerText = '0/'
               }
            break;

            case '-':
               equals.disabled = false;
               numberButtons.forEach(numberButtons => numberButtons.disabled = false);
               plus.disabled = true;
               multiply.disabled = true;
               divide.disabled = true;

               if((screenAbove.innerText.includes('+') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
                screenAbove.innerText = firstNumber + secondNumber + '-'
                screenBelow.innerText = ''}
 
               else if((screenAbove.innerText.includes('x') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
               screenAbove.innerText = firstNumber * secondNumber + '-'
               screenBelow.innerText = ''}
 
               else if((screenAbove.innerText.includes('/') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
               screenAbove.innerText = firstNumber / secondNumber + '-'
               screenBelow.innerText = ''}
 
               else if((screenAbove.innerText.includes('-') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
               screenAbove.innerText = firstNumber - secondNumber + '-'
               screenBelow.innerText = ''}

               else if(!screenAbove.innerText.includes('-')){
               screenAbove.innerText = screenBelow.innerText + '-'
               screenBelow.innerText = ''}   
                           
               else if(screenAbove.innerText.includes('=')){
               screenAbove.innerText = screenBelow.innerText + '-'
               screenBelow.innerText = '';}

               if(screenAbove.innerText === '-'){
               screenAbove.innerText = '0-'
               }
            break;

            case 'x':
               equals.disabled = false;
               numberButtons.forEach(numberButtons => numberButtons.disabled = false);
               minus.disabled = true;
               plus.disabled = true;
               divide.disabled = true;

               if((screenAbove.innerText.includes('+') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
               screenAbove.innerText = firstNumber + secondNumber + 'x'
               screenBelow.innerText = ''}
 
               else if((screenAbove.innerText.includes('x') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
               screenAbove.innerText = firstNumber * secondNumber + 'x'
               screenBelow.innerText = ''}
 
               else if((screenAbove.innerText.includes('/') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
               screenAbove.innerText = firstNumber / secondNumber + 'x'
               screenBelow.innerText = ''}
 
               else if((screenAbove.innerText.includes('-') && !screenAbove.innerText.includes('=')) && (hasNumber.test(screenBelow.innerText))){
               screenAbove.innerText = firstNumber - secondNumber + 'x'
               screenBelow.innerText = ''}

               else if(!screenAbove.innerText.includes('x')){
               screenAbove.innerText = screenBelow.innerText + 'x'
               screenBelow.innerText = ''}   
                           
               else if(screenAbove.innerText.includes('=')){
               screenAbove.innerText = screenBelow.innerText + 'x'
               screenBelow.innerText = '';}
               
               if(screenAbove.innerText === 'x'){
                screenAbove.innerText = '0x'
               }
            break;
//do calculation
            case '=':
                
                equals.disabled = true;
                numberButtons.forEach(numberButtons => numberButtons.disabled = true )
            


                if(screenAbove.innerText.includes('+')){
                screenAbove.innerText = `${firstNumber} + ${secondNumber} =`
                screenBelow.innerText = firstNumber + secondNumber

               }else if((screenAbove.innerText.includes('-') && (!screenAbove.innerText.includes('x')) && (!screenAbove.innerText.includes('/')))){
               screenAbove.innerText = `${firstNumber} - ${secondNumber} =`
               screenBelow.innerText = firstNumber - secondNumber

               }else if(screenAbove.innerText.includes('/')){
               screenAbove.innerText = `${firstNumber} / ${secondNumber} =`
               screenBelow.innerText = firstNumber / secondNumber
               if((firstNumber == 0) && (secondNumber == 0)){
                return screenBelow.innerText = 'lol, nice try'
               }
               
               }else if(screenAbove.innerText.includes('x')){
                screenAbove.innerText = `${firstNumber} x ${secondNumber} =`
                screenBelow.innerText = firstNumber * secondNumber
                }
               
               
                
            
            
             }
        
    });
});




// //ADD
// const add = function(x, y){
//     result = x + y;
//     return result;
// }
// //SUBTRACT
// const subtract = function(x, y){
//     result = x - y;
//     return result;

// }
// //MULTIPLY
// const multiply = function(x, y) {
//     result = x*y;
//     return result;
// }
// //DIVIDE
// const divide = function(x, y){
//     result = x / y;
//     return result;
// }


// //function depending on operator used
// let operate = function(x, operator, y){

// switch (operator) {
//     case "+":
//         result = add(x, y);
//         break;
//     case "-":
//         result = subtract(x, y);
//     case "/":
//         result = divide(x, y);
//     case "*":
//         result = multiply(x, y)
// }
// return result
// }



