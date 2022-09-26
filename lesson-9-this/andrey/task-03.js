



const calculator = {
    a: null,
    b: null,

    read(a, b) {
        this.a = a;
        this.b = b;
        
    },
    add() {
        return this.a + this.b;
    },
    mult() {
        return this.a * this.b;
    },
};

calculator.read(10,5)
console.log(calculator.add());
console.log(calculator.mult());


console.log(calculator);

