// Static

// Math.max(10, 5, 45);
// Date.now();

class Calculator {
    static PI = 3.14;

    static min(a, b) {
        return Math.min(a, b);
    }

    static sum(a, b) {
        return a + b;
    }
}

// const calc = new Calculator();

// console.log(calc.PI);

// console.log(Calculator.PI);

console.log(Calculator.min(100, 10));
console.log(Calculator.sum(100, 10));
