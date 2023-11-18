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

window.addEventListener("keydown", function (e) {
  let keyValue = e.key;
  if (keyValue >= 0 && keyValue <= 9) {
    appendNumber(keyValue);
    isLastInputOperator = false;
    if (operand1) {
      operand2 += keyValue;
      calculate(operand1, operand2, operator);
    }
  }
  if (keyValue == "Backspace") {
    deleteLastInput();
    if (!operand2 && !operator) {
      operand1 = operand1.slice(0, -1);
    } else if (operand2 && operator) {
      operand2 = operand2.slice(0, -1);
    } else {
      operator = "";
      isLastInputOperator = false;
    }
    console.log(operand1);
    console.log(operand2);
    calculate(operand1, operand2, operator);
    if (!operand2 && operator) {
      isLastInputOperator = true;
      result = "";
      resultDisplay.textContent = "";
    }
  }
  if (
    keyValue == "+" ||
    keyValue == "-" ||
    keyValue == "*" ||
    keyValue == "/"
  ) {
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
      appendNumber(keyValue);
      isLastInputOperator = true;
    }
  }
  convertOperator(keyValue);
  console.log(operand1);
  console.log(operand2);
  console.log(operator);
  console.log(result);
});

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    numberValue = numberBtn.textContent;
    if (!isLastInputOperator && !operand2) {
      if (numberValue == "." && operand1.includes(".")) return;
      operand1 += numberValue;
    } else if (operand1) {
      if (numberValue == "." && operand2.includes(".")) return;
      operand2 += numberValue;
      calculate(operand1, operand2, operator);
      console.log(operand2);
    }
    console.log(operand1);
    appendNumber(numberValue);
    isLastInputOperator = false;
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
      appendNumber(operator);
      isLastInputOperator = true;
    }
  });
});

allClear.addEventListener("click", resetAll);

deleteBtn.addEventListener("click", () => {
  deleteLastInput();
  if (!operand2 && !operator) {
    operand1 = operand1.slice(0, -1);
  } else if (operand2 && operator) {
    operand2 = operand2.slice(0, -1);
  } else {
    operator = "";
    isLastInputOperator = false;
  }
  console.log(operand1);
  console.log(operand2);
  calculate(operand1, operand2, operator);
  if (!operand2 && operator) {
    isLastInputOperator = true;
    result = "";
    resultDisplay.textContent = "";
  }
});

function deleteLastInput() {
  inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
  hiddenDisplay.textContent = hiddenDisplay.textContent.slice(0, -1);
}

function resetAll() {
  operand1 = "";
  operand2 = "";
  operator = "";
  result = "";
  isLastInputOperator = false;
  inputDisplay.textContent = "";
  hiddenDisplay.textContent = "";
  resultDisplay.textContent = "";
}

function appendNumber(btn) {
  inputDisplay.textContent += btn;
  hiddenDisplay.textContent += btn;
}

function convertOperator(keyValue) {
  switch (keyValue) {
    case "-":
      operator = "−";
      break;
    case "+":
      operator = "+";
      break;
    case "*":
      operator = "×";
      break;
    case "/":
      operator = "÷";
      break;
  }
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
