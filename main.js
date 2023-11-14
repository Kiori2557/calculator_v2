let operand1 = "";
let operand2 = "";
let operator = "";
let result = "";
let isLastInputOperator = false;

const inputDisplay = document.querySelector(".input");
const resultDisplay = document.querySelector(".result");
const hiddenDisplay = document.querySelector(".calculation");
const numberBtns = document.querySelectorAll(".numberBtn");
const operatorBtns = document.querySelectorAll(".operatorBtn");
const btns = document.querySelectorAll("button");
const allClear = document.querySelector(".clearBtn");
const deleteBtn = document.querySelector(".deleteBtn");

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    if (operand2 == "0") {
      deleteLastInput();
    }
    appendNumber(numberBtn);
    isLastInputOperator = false;
    if (operand1) {
      operand2 += numberBtn.textContent;
      calculate(operand1, operand2, operator);
    }
  });
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    if (inputDisplay.textContent) {
      if (result) {
        operand1 = "";
        operand2 = "";
        hiddenDisplay.textContent = result;
      }
      if (!operand1) {
        operand1 = hiddenDisplay.textContent;
      }
      if (isLastInputOperator) {
        deleteLastInput();
      }
      operator = operatorBtn.textContent;
      appendNumber(operatorBtn);
      isLastInputOperator = true;
    }
  });
});

allClear.addEventListener("click", resetAll);

deleteBtn.addEventListener("click", () => {
  deleteLastInput();
  operand2 = operand2.slice(0, -1);
  calculate(operand1, operand2, operator);
  if (!operand2) {
    isLastInputOperator = true;
    result = "";
  }
  if (!inputDisplay.textContent) {
    resetAll();
  }
  console.log(operand1);
  console.log(operand2);
  console.log(operator);
});

function deleteLastInput() {
  inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
  hiddenDisplay.textContent = hiddenDisplay.textContent.slice(0, -1);
}

function resetAll() {
  operand1 = "";
  operand2 = "";
  operator = "";
  operator = "";
  result = "";
  isLastInputOperator = false;
  inputDisplay.textContent = "";
  hiddenDisplay.textContent = "";
  resultDisplay.textContent = "";
}

function appendNumber(btn) {
  inputDisplay.textContent += btn.textContent;
  hiddenDisplay.textContent += btn.textContent;
}

function calculate(operand1, operand2, operator) {
  operand1 = Number(operand1);
  operand2 = Number(operand2);
  switch (operator) {
    case "−":
      result = subtract(operand1, operand2);
      break;
    case "+":
      result = add(operand1, operand2);
      break;
    case "÷":
      result = divide(operand1, operand2);
      break;
    case "×":
      result = multiply(operand1, operand2);
      break;
  }
  result = roundNumber(result);
  resultDisplay.textContent = result;
}

function roundNumber(number) {
  return Math.round(number * 1000) / 1000;
}

function add(operand1, operand2) {
  return operand1 + operand2;
}
function subtract(operand1, operand2) {
  return operand1 - operand2;
}
function multiply(operand1, operand2) {
  return operand1 * operand2;
}
function divide(operand1, operand2) {
  return operand1 / operand2;
}
