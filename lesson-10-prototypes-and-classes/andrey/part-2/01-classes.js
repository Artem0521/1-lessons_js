// ES6

// class User {
//     constructor(name, salary, overtime) {
//         this.name = name;
//         this.salary = salary;
//         this.overtime = overtime;
//     }

//     paySalary() {
//         console.log("Parent", this.salary * this.overtime * 0.1 + this.salary);
//     }
// }

// const alex = new User("Alex", 1000, 5);

// console.log(alex);

class Phone {
    constructor(brand, price, discount) {
        this.brand = brand;
        this.price = price;
        this.discount = discount;
    }

    getDiscount() {
        console.log((this.price * (100 - this.discount)) / 100);
    }

    showInfo() {
        console.log(this.brand, this.price);
    }
}

const apple = new Phone("Apple", 1500, 15);
const lg = new Phone("LG", 500, 15);

apple.price = 1700;

console.log(apple);
