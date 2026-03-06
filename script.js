let num1;
let num2;
let operator;

const display = document.getElementById('display');

const digit_0 = document.getElementById('0');
digit_0.addEventListener('click', (e) => {
});

const digit_1 = document.getElementById('1');
digit_1.addEventListener('click', (e) => console.log('1 button clicked!'));

const equals = document.getElementById('=');
equals.addEventListener('click', (e) => {
    
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