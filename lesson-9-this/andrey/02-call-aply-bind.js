// CALL, APPLY, BIND -ЯВНИЙ указание THIS




//===============
// CALL

// const alex = {
//     name: 'Alex',
//     age: 40,

//     showInfo() {
//         console.log(this.name, this.age);

//     },
// };

// alex.showInfo();


// const sara = {
//     name: 'Sara',
//     age: 25,

//     showInfo() {
//         console.log(this.name, this.age);

//     },
// };

// // sara.shiwInfo();

// alex.showInfo.call(sara);


// const bob = {
//     name: 'Alex',
//     age: 18,
// };

// alex.showInfo.call(bob);


// const alex = {
//         name: 'Alex',
//         age: 40,
//     };
    
//     const sara = {
//         name: 'Sara',
//         age: 25,
//     };
    
// const info = {
//     showInfo() {
//         console.log(this.name, this.age);
//     },
// };

// info.showInfo.call(alex);
// info.showInfo.call(sara);

// =====================

// APPLY

// const arr = [100,20,200,50,1000];

// const min = Math.min(...arr);

// const min = Math.min.apply(Math, arr); // так уло до 2015 року, зараз новий
// console.log(min);


//=========================

// Bind

// const alex = {
//     name: 'Alex',
//     age: 40,

//     showInfo() {
//         console.log(this.name, this.age);

//     },
// };

// const sara = {
//     name: 'Sara',
//     age: 25,
// };

// // alex.showInfo.call(sara);
// // const res = alex.showInfo.bind(sara);
// // res();

// alex.showInfo.bind(sara)();

// const alex = {
//         name: 'Alex',
//         age: 40,
//     };
    
//     const sara = {
//         name: 'Sara',
//         age: 25,
//     };
    
// const info = {
//     showInfo() {
//         console.log(this.name, this.age);
//     },
// };

// // info.showInfo.call(alex);
// // const res = info.showInfo.bind(sara);
// // res();
// // console.log(res);

// info.showInfo.bind(sara)();

//=================

const alex = {
    name: 'Alex',
    age: 40,

    showInfo() {
        console.log(this.name, this.age);

    },
};

const btn = document.querySelector('button');

// btn.addEventListener('click', alex.showInfo.call(alex));
btn.addEventListener('click', alex.showInfo.bind(alex));




