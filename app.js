// Select Elements
const screen = document.querySelector(".screen");
const btn = document.querySelectorAll(".btn");

const nodeList = [];
for (let i = 0; i < btn.length; i++) {
  nodeList.push(btn[i]);
}

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["C", "&lt;", "/", "X", "-", "+", "="];
const numbersArray = nodeList.filter((elem) => {
  if (numbers.includes(elem.innerHTML)) {
    return elem;
  }
});

const operatorsArray = nodeList.filter((elem) => {
  if (operators.includes(elem.innerHTML)) {
    return elem;
  }
});

let numberString = "";
numbersArray.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (screen.innerHTML === "0" && elem.innerHTML !== "0") {
      if (elem.innerHTML === ".") {
        numberString += "0.";
        screen.innerHTML = numberString;
      } else {
        numberString += elem.innerHTML;
        screen.innerHTML = numberString;
      }
    } else if (screen.innerHTML !== "0" && numberString.length < 16) {
      if (numberString.includes(".") && elem.innerHTML === ".") {
        numberString += "";
        screen.innerHTML = numberString;
      } else {
        numberString += elem.innerHTML;
        screen.innerHTML = numberString;
      }
    }
  });
});

operatorsArray[0].addEventListener("click", () => {
  screen.innerHTML = "0";
  numberString = "";
});

operatorsArray.forEach((oper) => {
  oper.addEventListener("click", () => {});
});
