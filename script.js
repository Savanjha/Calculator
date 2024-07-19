const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'C') {
            clear();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            setOperator(value);
        } else {
            addToInput(value);
        }
    });
});

function addToInput(value) {
    if (operator === '') {
        operand1 += value;
        currentInput = operand1;
    } else {
        operand2 += value;
        currentInput = operand2;
    }
    updateDisplay(currentInput);
}

function setOperator(value) {
    if (operand1 !== '') {
        operator = value;
        currentInput = '';
    }
}

function calculate() {
    if (operand1 !== '' && operator !== '' && operand2 !== '') {
        const result = eval(`${operand1} ${operator} ${operand2}`);
        updateDisplay(result);
        operand1 = result;
        operand2 = '';
        operator = '';
    }
}

function updateDisplay(value) {
    display.value = value;
}

function clear() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
    updateDisplay('');
}
