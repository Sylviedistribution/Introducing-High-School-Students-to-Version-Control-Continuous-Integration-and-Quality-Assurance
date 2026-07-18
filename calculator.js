function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }

    return a / b;
}

function percent(value) {
    return value / 100;
}

function calculate(left, operator, right) {
    switch (operator) {
        case "+":
            return add(left, right);

        case "-":
            return subtract(left, right);

        case "*":
            return multiply(left, right);

        case "/":
            return divide(left, right);

        default:
            throw new Error("Unknown operator");
    }
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    percent,
    calculate
};