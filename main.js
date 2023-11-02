const numberBtns = document.querySelectorAll(".numberBtn");
const operatorBtns = document.querySelectorAll(".operatorBtn");
const btns = document.querySelectorAll("button");
const inputDisplay = document.querySelector(".input");
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => appendNumber(numberBtn));
});
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    if (inputDisplay.textContent) {
      appendNumber(operatorBtn);
    }
  });
});

function appendNumber(btn) {
  inputDisplay.textContent += btn.textContent;
}
