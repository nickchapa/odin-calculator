let num1;
let num2;
let operator;

const display = document.getElementById('display');
const digits = document.querySelector('#digits');
const operators = document.querySelector('#operators');
const clear = document.querySelector('#clear');

digits.addEventListener('click', (e) => console.log(e.target));
operators.addEventListener('click', (e) => console.log(e.target));
clear.addEventListener('click', (e) => console.log(e.target));

const digit_0 = document.getElementById('0');
digit_0.addEventListener('click', (e) => {
    if(num1 == null || !operator) num1 = 0;
    else  num2 = 0;

    display.textContent = '0';
});

const digit_1 = document.getElementById('1');
digit_1.addEventListener('click', (e) => {
    if(num1 == null || !operator) num1 = 1;
    else  num2 = 1;

    display.textContent = '1';
});

const operator_plus = document.getElementById('+');
operator_plus.addEventListener('click', (e) => {
    if(num1 != null) operator = '+';
})

const equals = document.getElementById('=');
equals.addEventListener('click', (e) => {
    let result = operate(num1, num2, operator);
    display.textContent = result;
    num1 = result;
    num2 = null;
    operator = null;
})

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
    return a / b;
}

function operate(a, b, operator){
    if(operator == '+') return add(a, b);
    else if (operator == '-') return subtract(a, b);
    else if (operator == '*') return multiply(a, b);
    else if (operator == '/') return divide(a, b);
}