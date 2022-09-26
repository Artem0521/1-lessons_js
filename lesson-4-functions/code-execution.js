// Hoisting щу раз


let a = 'a';
console.log(a);
// // работает
// seyHi();
// function seyHi() {
//     console.log('Hello');
// }
// seyHi();
// seyHi();
// seyHi();



// Not hoisded

// seyHi();
// const seyHi = function () {
//     console.log('Hello');
// }

// seyHi();
// const seyHi = () => {
//     console.log('Hello');
// }


// function seyHi() {
//     console.log('Hello');
// }
// seyHi();
// seyHi();


// function funcA() {
//     console.log('Start A');
//     funcB();
//     console.log('End A')
// }
// function funcB() {
//     console.log('Function B execution')
// }
// // functB();
// functA();



// function funcA() {
//     console.log('Start A');
//     funcB();
//     console.log('End A');
//     function funcB() {
//     console.log('Function B execution');
// }
// }

// // functB();
// functA();


// function funcA() {
//     console.log('Start A');
//     funcB();
//     console.log('End A');
//     function funcB() {
//         console.log('Inner Function B execution');
// }
// }

// function funcB() {
//     console.log('OuterFunction B execution');
// }

// // functB();
// functA();


// =================================================

// Показаты event loop



// event loop

// console.log('A');
// console.log('B');
// console.log('C');
// console.log('D');

// const seyHi = function() {
//     console.log('hello');
// }
// seyHi();










