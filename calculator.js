let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';


function appendToDisplay(num) {
  // Get the display element and append the number
  document.getElementById('display').value += num;
}

function clearAll() {
  // Clear all variables and the display element
  firstNumber = '';
  secondNumber = '';
  operator = '';
  result = '';
  document.getElementById('display').value = '';
}

function setOperator(op) {
  // Store the first number and Operator, and clear the display element
  firstNumber = document.getElementById('display').value;
  operator = op;
  document.getElementById('display').value = '';
}

function calculate() {
  // Checking for division by zero
  if (operator === '/') {
    if (document.getElementById('display').value === '0') {
      alert("Cannot divide by zero");
      clearAll();
      return;
    }
  }
  // Store the second number and perform the calculation based on the operator
  secondNumber = document.getElementById('display').value;
  switch(operator) {
    case '+':
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case '-':
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case '*':
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case '/':
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    default:
      result = '';
      break;
  }
  // Update the display and reset the variables
  document.getElementById('display').value = result;
  firstNumber = result;
  secondNumber = '';
  operator = '';
}