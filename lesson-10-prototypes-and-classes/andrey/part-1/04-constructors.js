// ES-5 Constructors or Class
// 2015

// function Car() {
// 1. {}
// 2. this
// 3. return {}
// }

// console.log(new Car());
// console.log(Car);

// ================================

function Car(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;

    this.showInfo = function () {
        console.log(this.brand, this.price, this.discount);
    };

    this.getPriceWithDiscount = function () {
        console.log((this.price * (100 - this.discount)) / 100);
    };
}

// instance
// экземпляр обьекта
// сущность
// обьект
const audi = new Car("Audi", 55000, 10);
const bmw = new Car("BMW", 85000, 10);

// audi.showInfo();
// bmw.showInfo();

// audi.getPriceWithDiscount();
// bmw.getPriceWithDiscount();

// console.log(audi);
// console.log(bmw);

// audi.price = 35000;

// console.log(audi.price);

// console.log(audi);

// =================================

// instanceof

// console.log(audi instanceof Car);
// console.log(audi instanceof Number);

// const str = "abc";

// const str = new String("abc");

// console.log(str instanceof String);
