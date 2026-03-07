let num1;
let num2;
let operator;
let result;
let isError = false;

const display = document.getElementById('display');
const digits = document.querySelector('#digits');
const operators = document.querySelector('#operators');
const clear = document.querySelector('#clear');

digits.addEventListener('click', (e) => {
    const digitClicked = e.target.id;

    if (num1 == null) num1 = digitClicked;
    else if (num1 != null && operator == null) num1 += digitClicked;
    else if (num2 == null) num2 = digitClicked;
    else if (num2 != null) num2 += digitClicked;

    displayOperation();
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

    displayOperation();
});

clear.addEventListener('click', (e) => {
    fullClear();
    display.textContent = '0';
});

const equals = document.getElementById('=');
equals.addEventListener('click', (e) => {
    operate(num1, num2, operator);
    fullClear();
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
    if (b === 0){
        isError = true;
        return "Error";
    } else return a / b;
}

function operate(a, b, op){
    a = +a;
    b = +b;

    if(op == '+') result = add(a, b);
    else if (op == '-') result = subtract(a, b);
    else if (op == '*') result = multiply(a, b);
    else if (op == '/') result = divide(a, b);

    displayOperation();
    if(isError) num1 = null;
    else num1 = result;
    fullClear(true);
}

function fullClear(holdnum1 = false){
    if(!holdnum1) num1 = null;
    num2 = null;
    operator = null;
    result = null;
    isError = false;
}

function displayOperation(){
    display.textContent = `
    ${num1 != null ? num1 : ""}
    ${operator != null ? operator : ""}
    ${num2 != null ? num2 : ""} = 
    ${result != null ? result : ""}
    `;
}