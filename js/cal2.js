let screenValue = "0";
let storedOperation;
let storedNumber = "0";
let calResult = "0";

enterDigit = (digit) => {
  if (screenValue.length > 11) {
    return false;
  }

  if (digit === "." && screenValue.includes(".")) {
    return false;
  }

  if (
    screenValue.startsWith("0") &&
    digit !== "." &&
    screenValue.indexOf(".") == -1
  ) {
    screenValue = screenValue.substring(1);
  }

  screenValue += digit;
  updateCalDisplay();
};

clearCalDispaly = () => {
  screenValue = "0";
  storedOperation = null;
  storedNumber = "0";
  updateCalDisplay();
};

enterOperation = (operation) => {
  //validate if operation is valid
  const validOperations = ["+", "-", "*", "/"];
  if (!validOperations.includes(operation)) {
    return false;
  }

  storedOperation = operation;
  storedNumber = screenValue;
  screenValue = storedNumber + operation;
  updateCalDisplay();
  screenValue = "0";
};

calculateSum = () => {
  if (!storedOperation) {
    return false;
  }
  let value = 0;
  switch (storedOperation) {
    case "+":
      value = parseFloat(storedNumber) + parseFloat(screenValue);
      break;
    case "-":
      value = parseFloat(storedNumber) - parseFloat(screenValue);
      break;
    case "*":
      value = parseFloat(storedNumber) * parseFloat(screenValue);
      break;
    case "/":
      value = parseFloat(storedNumber) / parseFloat(screenValue);
      break;
  }

  storedOperation = null;
  storedNumber = "0";
  screenValue = value.toString();
  updateCalDisplay();
  screenValue = "0";
};

updateCalDisplay = () => {
  document.getElementById("calculator-display").innerHTML = screenValue;
};
