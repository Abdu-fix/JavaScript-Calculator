let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';


function appendToDisplay(num) {
  document.getElementById('display').value += num;
}

function clearAll() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  result = '';
  document.getElementById('display').value = '';
}

function setOperator(op) {
  firstNumber = document.getElementById('display').value;
  operator = op;
  document.getElementById('display').value = '';
}

function calculate() {
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

  document.getElementById('display').value = result;
  firstNumber = result;
  secondNumber = '';
  operator = '';
}