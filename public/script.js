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

function appendOperator(operator) {
	if (justEvaluated) {
		expression = currentValue;
		justEvaluated = false;
	}

	if (!expression && currentValue) {
		expression = currentValue;
	}

	const lastChar = expression.at(-1);
	if (lastChar && isOperator(lastChar)) {
		expression = `${expression.slice(0, -1)}${operator}`;
	} else {
		expression = `${expression}${operator}`;
	}

	currentValue = "0";
}

function appendDecimal() {
	if (justEvaluated) {
		expression = "";
		currentValue = "0";
		justEvaluated = false;
	}

	if (!currentValue.includes(".")) {
		currentValue = `${currentValue}.`;
	}
}

function safeEvaluate(rawExpression) {
	if (!rawExpression) {
		return currentValue;
	}

	const sanitized = rawExpression.replace(/[^0-9.+\-*/]/g, "");
	if (!sanitized) {
		return currentValue;
	}

	try {
		const computed = Function(`"use strict"; return (${sanitized});`)();
		if (!Number.isFinite(computed)) {
			return "Erreur";
		}
		return String(Number.parseFloat(computed.toFixed(10)));
	} catch {
		return "Erreur";
	}
}

function calculate() {
	const fullExpression = `${expression}${currentValue}`;
	const computed = safeEvaluate(fullExpression);

	if (computed === "Erreur") {
		expression = "";
		currentValue = "Erreur";
		justEvaluated = true;
		return;
	}

	expression = fullExpression;
	currentValue = computed;
	justEvaluated = true;
}
