// Rest /spred

// resr before = Spreed after

// const ukraneCities = ['Kyiv', 'Donesk', 'Luhansk', 'Odesa'];
// const europeCities = ['London', 'Paris', 'Berlin', 'Milan'];

// const cities = ukraneCities.concat(europeCities);
// console.log(cities);

// ===========================
// Spred
// const cities = [...ukraneCities, ...europeCities];
// console.log(cities);


// let nums = [10, 20, 30, 50, 5];
// let max = Math.max(...nums);
// console.log(max);


// ======================================
//  Rest and Array Destructuring

// const ukraneCities = ['Kyiv', 'Donesk', 'Luhansk', 'Odesa'];
// const europeCities = ['London', 'Paris', 'Berlin', 'Milan'];

// 'Kyiv' = "AA"
// 'Donesk' = "AH"
// 'Luhansk' = "BB"
// 'Odesa' = "BH"
// [] = ukraneCities;
// const [AA, AH, BB, BH] = ukraneCities;

// console.log(AA);
// console.log(AH);
// console.log(BB);
// console.log(BH);

// const [, , LH] = ukraneCities;
// console.log(LH);

// console.log(ukraneCities[1]);
// console.log(ukraneCities[0]);

// =================================================


// const ukraneCities = ['Kyiv', 'Donesk', 'Luhansk', 'Odesa'];
// const europeCities = ['London', 'Paris', 'Berlin', 'Milan'];

// []

// const [, , ...rest] = ukraneCities;
// console.log(rest);


// const [, DN, ...rest] = ukraneCities;
// console.log(DN);
// console.log(rest);

//===========================================

// let a = 100;
// let b = 200;

// [a, b] = [200, 100];

// console.log('a', a);
// console.log('b', b);

// ====================================================
// ====================================================
// ====================================================

// Spred for objects

// let vova = {
//     name: 'vova',
//     age: 25,
// };

// // console.log(vova);

// let sara = {
//     ...vova,
//     name: 'sara',
// };

// // console.log(sara);

// for (const prop in sara) {
//     console.log(prop, sara[prop]);
// }

// ================================================

// const bmv = {
//     title: 'X5',
//     manufacture: "BMW",
//     colors: ['blsck', 'red', 'white'],
// };

// const AUDI = {
//     ...BMW,
//     title: 'S5',
//     manufacture: 'Audi',
//     discount: 5,
// };

// console.log(AUDI);


