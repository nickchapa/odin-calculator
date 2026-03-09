let num1 = [];
let num2 = [];
let operator;
let result;
const validOperators = ['+', '-', '*', '/'];

const display = document.querySelector('#display');
const digits = document.querySelector('#digits');
const operators = document.querySelector('#operators');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');

digits.addEventListener('click', (e) => {
    const digitClicked = +e.target.textContent;

    if(!isNaN(digitClicked)){
        if (num1.length === 0) num1.push(digitClicked);
        else if (num1.length && operator == null) num1.push(digitClicked);
        else if (num2.length === 0) num2.push(digitClicked);
        else if (num2.length) num2.push(digitClicked);
        displayOperation();
    }
});

operators.addEventListener('click', (e) => {
    const operatorClicked = e.target.textContent;
    if (validOperators.includes(operatorClicked)){
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
    }
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
    ${num1.length ? +num1.join("") : ""}
    ${operator != null ? operator : ""}
    ${num2.length ? +num2.join("") : ""} = 
    ${result != null ? result : ""}
    `;
}