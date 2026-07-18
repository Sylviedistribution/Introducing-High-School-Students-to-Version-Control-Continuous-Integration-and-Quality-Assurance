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

function clearAll() {
	expression = "";
	currentValue = "0";
	justEvaluated = false;
}

function deleteLast() {
	if (justEvaluated) {
		clearAll();
		return;
	}

	if (currentValue.length > 1) {
		currentValue = currentValue.slice(0, -1);
		return;
	}

	if (expression.length > 0 && isOperator(expression.at(-1))) {
		expression = expression.slice(0, -1);
		currentValue = "0";
		return;
	}

	currentValue = "0";
}

function applyPercent() {
	const numericValue = Number(currentValue);
	if (!Number.isNaN(numericValue)) {
		currentValue = String(numericValue / 100);
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

keys.addEventListener("click", (event) => {
	const button = event.target.closest("button");
	if (!button) {
		return;
	}

	const { action, value } = button.dataset;

	if (value && /^[0-9]$/.test(value)) {
		appendDigit(value);
	} else if (value && isOperator(value)) {
		appendOperator(value);
	} else if (action === "clear") {
		clearAll();
	} else if (action === "delete") {
		deleteLast();
	} else if (action === "decimal") {
		appendDecimal();
	} else if (action === "equals") {
		calculate();
	} else if (action === "percent") {
		applyPercent();
	}

	updateDisplay();
});

document.addEventListener("keydown", (event) => {
	const { key } = event;

	if (/^[0-9]$/.test(key)) {
		appendDigit(key);
	} else if (["+", "-", "*", "/"].includes(key)) {
		appendOperator(key);
	} else if (key === ".") {
		appendDecimal();
	} else if (key === "Enter" || key === "=") {
		event.preventDefault();
		calculate();
	} else if (key === "Backspace") {
		deleteLast();
	} else if (key === "Escape") {
		clearAll();
	}

	updateDisplay();
});

updateDisplay();
