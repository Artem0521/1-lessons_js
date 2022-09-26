// ES5 Inharitance - наследование
// function Car(brand, price, discount) {
//     this.brand = brand;
//     this.price = price;
//     this.discount = discount;
// }

// Car.prototype.showInfo = function () {
//     console.log(this.brand, this.price, this.discount);
// };

// Car.prototype.getPriceWithDiscount = function () {
//     console.log((this.price * (100 - this.discount)) / 100);
// };

// const audi = new Car("Audi", 55000, 10);
// const bmw = new Car("BMW", 85000, 10);

// console.log(bmw);

// ===========================================
// Inharitance
function User(name, salary, overtime) {
    this.name = name;
    this.salary = salary;
    this.overtime = overtime;
}

User.prototype.paySalary = function () {
    console.log("Parent", this.salary * this.overtime * 0.1 + this.salary);
};

// const alex = new User("Alex", 1000, 5);
// const sara = new User("Sara", 1500, 25);

// alex.paySalary();
// sara.paySalary();

// ===========================================
// Функціональне наслідування
function Customer(name, salary, overtime, membership) {
    User.apply(this, arguments);
    this.membership = membership;
}

// Прототипне наслідування
// 1. Явно передати прототип
Customer.prototype = Object.create(User.prototype);
// 2. Явно вказати конструктор
Customer.prototype.constructor = Customer;

User.prototype.paySalary = function () {
    console.log("Child", this.salary);
};

User.prototype.showInfo = function () {
    console.log("Child", this.name, this.salary);
};

const bob = new Customer("Bob", 4000, 10, "Basic");
bob.paySalary();
bob.showInfo();

console.log(bob);
