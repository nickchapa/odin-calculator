let num1 = [];
let num2 = [];
let operator;
let result;

const display = document.querySelector('#display');
const digits = document.querySelector('#digits');
const decimal = document.querySelector('#decimal');
const operators = document.querySelector('#operators');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');

document.addEventListener('click', (e) => document.activeElement.blur());

window.addEventListener('keydown', (e) => {
    const key = e.key;
    const digitArray = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operatorArray = ['+', '-', '*', '/'];

    if (digitArray.includes(key)) digitEvent(key);
    else if (key == '.') decimalEvent();
    else if (operatorArray.includes(key)) operatorEvent(key);
    else if (key == 'c') clearEvent();
    else if (key == '=' || key == 'Enter') equalsEvent();
    else if (key == 'Backspace') backspaceEvent();
})

digits.addEventListener('click', (e) => {
    const element = e.target.closest('.digit');
    let digitClicked;
    element ? digitClicked = element.textContent : digitClicked = null;
    digitEvent(digitClicked);
});

decimal.addEventListener('click', () => {    
    decimalEvent();
})

operators.addEventListener('click', (e) => {
    const element = e.target.closest('.operator');
    let operatorClicked;
    element ? operatorClicked = element.textContent : operatorClicked = null;
    operatorEvent(operatorClicked);
});

clear.addEventListener('click', (e) => {
    clearEvent();
});

equals.addEventListener('click', (e) => {
    equalsEvent();
})

backspace.addEventListener('click', (e) => {
    backspaceEvent();
});

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0){
        return "Error";
    } else return a / b;
}

function operate(a, b, op){
    a = +a.join("");
    b = +b.join("");

    if(op == '+') result = add(a, b);
    else if (op == '-') result = subtract(a, b);
    else if (op == '*') result = multiply(a, b);
    else if (op == '/') result = divide(a, b);

    result == typeof Number? result.toFixed(2) : result;

    if(!daisuki(a, b)) displayOperation();

    if(result === 'Error') num1 = [];
    else num1 = [result];
    num2 = [];
    operator = null;
}

function fullClear(){
    num1 = [];
    num2 = [];
    operator = null;
    result = null;
}

function displayOperation(){
    display.textContent = `
    ${num1.length ? num1.join("") : ""}
    ${operator != null ? operator : ""}
    ${num2.length ? num2.join("") : ""} = 
    ${result != null ? result : ""}
    `;
}

function digitEvent(digitInput){
    if(digitInput != null){
        if (num1.length === 0) num1.push(digitInput);
        else if (num1.length && operator == null) num1.push(digitInput);
        else if (num2.length === 0) num2.push(digitInput);
        else if (num2.length) num2.push(digitInput);
        displayOperation();
    }
}

function decimalEvent(){
    if (num2.length !== 0 && !num2.includes('.'))
        num2.push('.');
    else if (num2.length === 0 && num1.length !==0 && !num1.includes('.'))
        num1.push('.');

    displayOperation();
}

function operatorEvent(operatorInput){
    if (num1.length === 0) result = 'Error';
    else if (
        num1.length &&
        num2.length &&
        operator != null
    ){
        operate(num1, num2, operator);
        if (result != 'Error') {
                operator = operatorInput;
                result = null;
        }
    }
    else if (num1.length) operator = operatorInput;

    if (result != 'Error') displayOperation();
    if (result == 'Error') fullClear();
}

function clearEvent(){
    fullClear();
    display.textContent = '0';
}

function equalsEvent(){
    operate(num1, num2, operator);
    fullClear();
}

function backspaceEvent(){
    if (
        num1.length &&
        operator != null &&
        num2.length
    ){
        num2.pop();
        displayOperation();
    } else if (
        num1.length &&
        operator != null
    ){
        operator = null;
        displayOperation();
    } else if (
        num1.length
    ){
        num1.pop();
        displayOperation();
    }
}

function daisuki(a, b){
    num1Span = document.createElement('span');
    num2Span = document.createElement('span');
    plusSpan = document.createElement('span');
    equalsSpan = document.createElement('span');
    resultSpan = document.createElement('span');

    display.textContent = '';

    if (a == 12291){
        num1Span.style.color = 'blue';
        num1Span.textContent = '12291';
        display.append(num1Span);
    } else if (a == 12094){
        num1Span.style.color = 'pink';
        num1Span.textContent = '12094';
        display.append(num1Span);
    }

    plusSpan.textContent = ' + ';
    display.append(plusSpan);

    if (b == 12094){
        num2Span.style.color = 'pink';
        num2Span.textContent = '12094';
        display.append(num2Span);
    } else if (b == 12291){
        num2Span.style.color = 'blue';
        num2Span.textContent = '12291';
        display.append(num2Span);
    }

    equalsSpan.textContent = ' = ';
    display.append(equalsSpan);
    
    if (a == 12291 || a == 12094) {
        if (b == 12291 || b == 12094)
        {
            result = '<3';
            resultSpan.style.color = 'red';
            resultSpan.textContent = result;
            display.append(resultSpan);
            return true;
        }
    }
}