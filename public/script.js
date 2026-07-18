const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");
const keys = document.querySelector(".calculator__keys");

let expression = "";
let currentValue = "0";
let justEvaluated = false;

function formatDisplay(value) {
	return value === "" ? "0" : value;
}

function updateDisplay() {
	expressionEl.textContent = formatDisplay(expression);
	resultEl.textContent = formatDisplay(currentValue);
}