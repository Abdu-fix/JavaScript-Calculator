let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');

function appendToDisplay(num) {
  display.value += num;
}

function clearAll() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  result = '';
  display.value = '';
}

function setOperator(op) {
  firstNumber = display.value;
  operator = op;
  display.value = '';
}

function calculate() {
  const displayValue = display.value;
  if (operator === '/') {
    if (displayValue === '0') {
      alert("Cannot divide by zero");
      clearAll();
      return;
    }
  }

  secondNumber = Number(displayValue);
  if (firstNumber && operator) {
    result = eval(`${firstNumber} ${operator} ${secondNumber}`);
    display.value = result;
    firstNumber = result;
    secondNumber = '';
    operator = '';
  } else {
    firstNumber = Number(displayValue);
    display.value = '';
  }
}

// Attach event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendToDisplay(button.value);
  });
});

// Attach event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    setOperator(button.value);
  });
});

// Attach event listener to clear button
clearButton.addEventListener('click', () => {
  clearAll();
});

// Attach event listener to equals button
equalsButton.addEventListener('click', () => {
  calculate();
});
