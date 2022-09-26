// Inharitance

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

// class Phone {}
// class Data{}

// class Customer extends User {
//     constructor(name, salary, overtime, membership) {
//         super(...arguments);

//         this.membership = membership;
//     }

//     showInfo() {
//         super.paySalary();
//     }
// }

// const bob = new Customer("Bob", 4000, 10, "Basic");

// bob.showInfo();

// bob.paySalary();

// console.log(bob);

// =========================================
// Public class Fields

class User {
    constructor(name, salary, overtime) {
        this.name = name;
        this.salary = salary;
        this.overtime = overtime;
    }
    // public field
    status = "Admin";
    // public field
    hobbies = [1, 2, 3, 4];

    // paySalary() {
    //     console.log(this);
    //     console.log("Parent", this.salary * this.overtime * 0.1 + this.salary);
    // }

    // public field
    paySalary = () => {
        console.log(this);
        console.log("PF", this.salary * this.overtime * 0.1 + this.salary);
    };
}

const alex = new User("Alex", 1000, 5);

console.log(alex);

alex.paySalary();
