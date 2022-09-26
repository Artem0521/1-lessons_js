// class StringBuilder {
//     constructor(value) {
//       this.value = value;
//     }
    
//     getValue() {
//       return this.value;
//     }
  
//     padEnd(str) {
//       this.value += str;
//     }
  
//     padStart(str) {
//       this.value = str + this.value;
//     }
  
//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
  
    
//   }
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="
  

// class Car {
//     // Change code below this line
//   #brand;
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//   getBrand() {
//     return this.#brand;
//   }
  
//     changeBrand(newBrand) {
//       this.#brand = newBrand;
//     }
//     // Change code above this line
//   }
// class Car {
//     // Change code below this line
//     #brand;
  
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
  
//     getBrand() {
//       return this.#brand;
//     }
  
//     changeBrand(newBrand) {
//       this.#brand = newBrand;
//     }
  
//     getModel() {
//       return this.model;
//     }
  
//     updateModel(newModel) {
//       this.model = newModel;
//     }
  
//     getPrice() {
//       return this.price;
//     }
  
//     setPrice(newPrice) {
//       this.price = newPrice;
//     }
//     // Change code above this line
//   }

  
//   class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Change code below this line
//   class Admin extends User {
//     static AcessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',
//     }
//   }

