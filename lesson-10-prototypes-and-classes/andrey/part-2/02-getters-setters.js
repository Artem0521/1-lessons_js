// getters / setters
class Phone {
    constructor(brand, price, discount) {
        this.brand = brand;
        this.price = price;
        this.discount = discount;
    }
    // Getter
    // get brandName() {
    //     return this.brand;
    // }

    // Setter

    // set brandName(newBrand) {
    //     this.brand = newBrand;
    // }

    getBrand() {
        return this.brand;
    }

    setBrand(newBrand) {
        this.brand = newBrand;
    }

    // getDiscount() {
    //     console.log((this.price * (100 - this.discount)) / 100);
    // }

    // showInfo() {
    //     console.log(this.brand, this.price);
    // }
}

const apple = new Phone("Apple", 1500, 15);
apple.setBrand("Samsung");
console.log(apple.getBrand());

// console.log(apple);
// Setter
// apple.brandName = "Apple gold";

// Getter
// console.log(apple.brandName);
