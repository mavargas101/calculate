let currentDisplay = "";
let previousDisplay = "";
let currentOperator = "0";

const maxCharacters = 8;

// EVENT LISTENERS
const numbers = document.querySelectorAll(".numberBtn");
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', () => appendNumber(numbers[i]))
}

const operations = document.querySelectorAll(".operationBtn");
for(let i = 0; i < operations.length; i++){
    operations[i].addEventListener('click', function(){
        if(currentDisplay != "0"){
            if(currentOperator != ""){calculate(previousDisplay, currentDisplay)}
            currentOperator = operations[i].innerText;
            previousDisplay = `${currentDisplay}`;
            updateDisplay();
            currentDisplay = "0";
        }else{
            currentOperator = operations[i].innerText;
            currentDisplay = previousDisplay;
            updateDisplay();
            currentDisplay = "0";
        }
    })
}

const equals = document.querySelector('.equalsBtn');
equals.addEventListener('click', () => calculate(previousDisplay, currentDisplay));

const display = document.querySelector('.display'); 
const prevDisplay = document.querySelector('.prevDisplay'); 

const allClearBtn = document.querySelector('.allClearBtn');
allClearBtn.addEventListener('click', () => allClear());

const ellipsisBtn = document.querySelector('.ellipsisBtn');
ellipsisBtn.addEventListener('click', () => appendEllipsis());

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', () => removeNumber())

function allClear(){
    currentDisplay = "0";
    previousDisplay = "";
    currentOperator = "";
    updateDisplay();
}
function removeNumber(){
    currentDisplay = currentDisplay.slice(0, currentDisplay.length -1);
    if(currentDisplay.length === 0){ currentDisplay = '0'}
    updateDisplay();
}
function appendNumber(button){
    if(currentDisplay == 0){currentDisplay = button.innerText}
    else if(currentDisplay.length <= maxCharacters){currentDisplay += button.innerText;}
    updateDisplay();
}

function appendEllipsis(){
    if(!currentDisplay.includes('.')){
        currentDisplay += '.';
    }
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
    prevDisplay.innerText = `${previousDisplay} ${currentOperator}`;
}
function calculate(num1, num2){
    if(currentDisplay != ""){
        switch (currentOperator){
            case '+':
                previousDisplay += ` ${currentOperator} ${num2} =`;
                currentDisplay = add(parseFloat(num1), parseFloat(num2));
                break;
            case '-':
                previousDisplay += ` ${currentOperator} ${num2} =`;
                currentDisplay = subtract(parseFloat(num1), parseFloat(num2));
                break;
            case '*':
                previousDisplay += ` ${currentOperator} ${num2} =`;
                currentDisplay = multiply(parseFloat(num1), parseFloat(num2));
                break;
            case '/':
                previousDisplay += ` ${currentOperator} ${num2} =`;
                currentDisplay = divide(parseFloat(num1), parseFloat(num2));
                break;
        } 
        currentOperator = '';
        updateDisplay();
    }
}