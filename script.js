let num1;
let num2;
let operator;

const display = document.getElementById('display');
const digits = document.querySelector('#digits');
const operators = document.querySelector('#operators');
const clear = document.querySelector('#clear');

digits.addEventListener('click', (e) => {
    const digitClicked = +e.target.id;

    if(num1 == null || !operator) num1 = digitClicked;
    else  num2 = digitClicked;

    display.textContent = digitClicked;
});

operators.addEventListener('click', (e) => {
    const operatorClicked = e.target.id;
    if(
        num1 != null &&
        num2 != null &&
        operator != null
    )
    {
        let result = operate(num1, num2, operator);
        display.textContent = result;
        num1 = result;
        num2 = null;
        operator = null;
        operator = operatorClicked;
    }else if(num1 != null) operator = operatorClicked;
});

clear.addEventListener('click', (e) => {
    num1 = null;
    num2 = null;
    operator = null;
    display.textContent = '0';
});

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