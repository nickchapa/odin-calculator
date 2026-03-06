let num1;
let num2;
let operator;
let result;

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
        operate(num1, num2, operator);
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
    operate(num1, num2, operator);
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
    if(operator == '+') result = add(a, b);
    else if (operator == '-') result = subtract(a, b);
    else if (operator == '*') result = multiply(a, b);
    else if (operator == '/') result = divide(a, b);

    display.textContent = result;
    num1 = result;
    num2 = null;
    operator = null;
}