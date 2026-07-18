const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");
const keys = document.querySelector(".calculator__keys");

let expression = "";
let currentValue = "0";
let justEvaluated = false;
