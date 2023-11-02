let operand1 = "";
let operand2 = "";
let operator = "";
let isLastInputOperator = false;

const numberBtns = document.querySelectorAll(".numberBtn");
const operatorBtns = document.querySelectorAll(".operatorBtn");
const btns = document.querySelectorAll("button");
const inputDisplay = document.querySelector(".input");
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    isLastInputOperator = false;
    appendNumber(numberBtn);
  });
});
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    if (inputDisplay.textContent) {
      isLastInputOperator = true;
      if (!operand1) {
        operand1 = inputDisplay.textContent;
      }
      appendNumber(operatorBtn);
      operator = operatorBtn.textContent;
    }
  });
});

function appendNumber(btn) {
  inputDisplay.textContent += btn.textContent;
  assignVariable(btn);
  //   console.log(operand1);
  //   console.log(operand2);
  //   console.log(operator);
}

function assignVariable(btn) {
  if (operand1 && operator) {
    operand2 += btn.textContent;
    calculate(operand1, operand2, operator);
  }
}

function calculate(operand1, operand2, operator) {
  switch (operator) {
    case "−":
      console.log(subtract(operand1, operand2));
      break;
    case "+":
      console.log(add(operand1, operand2));
      break;
    case "÷":
      console.log(multiply(operand1, operand2));
      break;
    case "×":
      console.log(divide(operand1, operand2));
      break;
  }
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
