const buttons = document.querySelectorAll("button");
const calculatorDisplay = document.querySelector(".calculator-display");

let calculation = [];
let count;

calculate = (button) => {
  const value = button.textContent;

  if (value === "CLEAR") {
    calculation = [];
    calculatorDisplay.textContent = calculation;
  } else if (value === "=") {
    calculatorDisplay.textContent = eval(count);
  } else {
    calculation.push(value);
    count = calculation.join("");
    calculatorDisplay.textContent = count;
  }
};

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
