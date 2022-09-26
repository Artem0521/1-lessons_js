// this -Контекст візова
// this - єто  тот кто візівает функцию
// Не важно где обьявленная функция важно кто ее візівает

//========================================
// this in Global f



//=======================================
// this in object and methods


// const alex = {
//     name: 'Alex',
//     age: 40,

//     info() {
//         console.log(this.name, this.age);
//         console.log(this);
//     },
//     greet() {
//         this.info();
//     },
// };
// alex.info();
// alex.greet();


//===========================
//this in callback function lost contecst


// const alex = {
//     name: 'Alex',
//     age: 40,

//     info() {
//         console.log(this.name, this.age);
//         // console.log(this);
//     },
    
// };

// function greet(clbFn) {
//     console.log(`Calbkac function ${clbFn()}`);
//     // clbFn();
// };

// greet(alex.info);

// =================================

// this is in arrow function  контекст юереться з місця її натискання

// const info = () => {
//     console.log('info global', this);
// };
// const alex = {
//     name: 'Alex',
//     age: 40,
    
//     info,
// };

// alex.info = () => {
//     console.log('info global', this)
// };
// alex.info();


//========================


// const alex = {
//     name: 'Alex',
//     age: 40,

    // info () {
    //     console.log(this.name, this.age);
    // },
    // info() function {
    //     console.log(this.name, this.age);
        
    // },
    // info: () => { // undefined
    //     console.log(this.name, this.age);
    // },

//     info () {
//         const greet = () => {
//             console.log(this);
//         };
//         greet();
//     },
// };

// alex.info();


//=====================
// this in event listeners

const btn = document.querySelector('button');

// console.log(btn);

// btn.addEventListener('click', () => {
//     console.log(this);
// });

// btn.addEventListener('click', function () {
//     console.log(this);
// });

// const onBtnClick = () => {
//     console.log(this);
//     }

// btn.addEventListener('click', onBtnClick); 

//===========================

// this in ES5 Classes

// function User() {}

// User();

//new User();

// console.log(new User());
// console.log(User);


// const str = 'Alex';
// console.log(str.constructor);

// const num = 100;
// console.log(num.construnctor);

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// };

// const al = new User('Alex', 25);
// const sara = new User('Sara', 18);

// // console.log(al);
// // console.log(sara);

// console.log(sara.name);
// console.log(al.name);



// ==============

// this in ES6 Classes

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// };

// class User{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     }
// };
// const al = new User('Alex', 25);
// const sara = new User('Sara', 18);

// console.log(al.name);
// console.log(al.age);
// console.log(al.sara);

