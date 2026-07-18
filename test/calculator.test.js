const calculator = require("../calculator");

describe("Calculator", () => {

    test("should add two numbers", () => {
        expect(calculator.add(5, 3)).toBe(8);
    });

    test("should subtract two numbers", () => {
        expect(calculator.subtract(10, 4)).toBe(6);
    });

    test("should multiply two numbers", () => {
        expect(calculator.multiply(6, 7)).toBe(42);
    });

    test("should divide two numbers", () => {
        expect(calculator.divide(20, 5)).toBe(4);
    });

    test("should calculate percentage", () => {
        expect(calculator.percent(50)).toBe(0.5);
    });

    test("should throw when dividing by zero", () => {
        expect(() => calculator.divide(5, 0)).toThrow();
    });

    test("should calculate using operator", () => {
        expect(calculator.calculate(6, "+", 2)).toBe(8);
        expect(calculator.calculate(6, "-", 2)).toBe(4);
        expect(calculator.calculate(6, "*", 2)).toBe(12);
        expect(calculator.calculate(6, "/", 2)).toBe(3);
    });

});