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

function isOperator(char) {
	return ["+", "-", "*", "/"].includes(char);
}

function appendDigit(digit) {
	if (justEvaluated) {
		expression = "";
		currentValue = "0";
		justEvaluated = false;
	}

	if (currentValue === "0" && !expression.length) {
		currentValue = digit;
	} else if (currentValue === "0" && expression.length && !isOperator(expression.at(-1))) {
		currentValue = digit;
	} else {
		currentValue = currentValue === "0" ? digit : `${currentValue}${digit}`;
	}
}
