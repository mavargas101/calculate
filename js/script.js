let currentDisplay = "";
let previousDisplay = "";
let currentOperator = "";


// EVENT LISTENERS
const numbers = document.querySelectorAll(".numberBtn");
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', () => appendNumber(numbers[i]))
}

const operations = document.querySelectorAll(".operationBtn");
for(let i = 0; i < operations.length; i++){
    operations[i].addEventListener('click', function(){
        if(currentDisplay != ""){
            if(currentOperator != "" || currentOperator === operations[i].innerText){calculate(previousDisplay, currentDisplay)}
            currentOperator = operations[i].innerText;
            previousDisplay = `${currentDisplay}`;
            updateDisplay();
            currentDisplay = "";
        }
        else{
            currentOperator = operations[i].innerText;
            previousDisplay = `${previousDisplay}`;
        }

    })
}

const equals = document.querySelector('.equalsBtn');
equals.addEventListener('click', () => calculate(previousDisplay, currentDisplay));

const display = document.querySelector('.display'); 
const prevDisplay = document.querySelector('.prevDisplay'); 

const allClearBtn = document.querySelector('.allClearBtn');
allClearBtn.addEventListener('click', () => allClear());

function operationBtn(btn){
    currentOperator = btn.innerText;

}

function allClear(){
    currentDisplay = "0";
    previousDisplay = "";
    currentOperator = "";
    updateDisplay();
}
function appendNumber(button){
    if(currentDisplay == 0){currentDisplay = button.innerText}
    else{currentDisplay += button.innerText;}
    updateDisplay();
    
}

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function updateDisplay(){
    display.innerText = currentDisplay;
    prevDisplay.innerText = previousDisplay;
}

function calculate(num1, num2){
    switch (currentOperator){
            case '+':
                previousDisplay += ` ${num2}`;
                currentDisplay = add(parseInt(num1), parseInt(num2));
                break;
            case '-':
                previousDisplay += ` ${num2}`;
                currentDisplay = subtract(parseInt(num1), parseInt(num2));
                break;
            case '*':
                previousDisplay += ` ${num2}`;
                currentDisplay = multiply(parseInt(num1), parseInt(num2));
                break;
            case '/':
                previousDisplay += ` ${num2}`;
                currentDisplay = divide(parseInt(num1), parseInt(num2));
                break;
        } 
        currentOperator = '';
    
    updateDisplay();

}