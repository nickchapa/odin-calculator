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

window.addEventListener('keydown', (e) => {
    const element = e.key;
    const digitArray = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operatorArray = ['+', '-', '*', '/'];

    if (digitArray.includes(element)) {
        console.log('digit key clicked!');
    }
    else if (element == '.') console.log('decimal clicked');
    else if (operatorArray.includes(element)){
        console.log(element);
    }
    // equals
    // clear. use 'c' for clear?
    // backspace
})

digits.addEventListener('click', (e) => {
    const element = e.target.closest('.digit');
    let digitClicked;
    element ? digitClicked = element.textContent : digitClicked = null;

    if(digitClicked != null){
        if (num1.length === 0) num1.push(digitClicked);
        else if (num1.length && operator == null) num1.push(digitClicked);
        else if (num2.length === 0) num2.push(digitClicked);
        else if (num2.length) num2.push(digitClicked);
        displayOperation();
    }
});

decimal.addEventListener('click', (e) => {    
    if (num2.length !== 0 && !num2.includes('.'))
        num2.push('.');
    else if (num2.length === 0 && num1.length !==0 && !num1.includes('.'))
        num1.push('.');

    displayOperation();
})

operators.addEventListener('click', (e) => {
    const element = e.target.closest('.operator');
    let operatorClicked;
    element ? operatorClicked = element.textContent : operatorClicked = null;

    if (num1.length === 0) result = 'Error';
    else if (
        num1.length &&
        num2.length &&
        operator != null
    ){
        operate(num1, num2, operator);
        if (result != 'Error') {
                operator = operatorClicked;
                result = null;
        }
    }
    else if (num1.length) operator = operatorClicked;

    if (result != 'Error') displayOperation();
    if (result == 'Error') fullClear();
});

clear.addEventListener('click', (e) => {
    fullClear();
    display.textContent = '0';
});

equals.addEventListener('click', (e) => {
    operate(num1, num2, operator);
    fullClear();
})

backspace.addEventListener('click', (e) => {
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
    console.log(num1, num2, operator, result);
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

    result = result.toFixed(2);
    displayOperation();
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