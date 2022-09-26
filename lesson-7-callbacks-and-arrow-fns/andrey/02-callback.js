// HOF - Hight order function (функции высшего порядка)
// функция высшего порядка может принимать как параметр другую ф-цию и(или) возвращать другую функцию

// Функция обратного вызова - ее вызыват интерпетатор в нужный момент
// Callback function

// Функция обратного вызова - это функция, которая передается другой функции в качестве аргумента и та, в свою очередь вызывает переденную функцию

// const myFunc = (a)=>{
//     a()
// }

// clb
// callback
// clbFn
// fn

// const myFunc = (fn)=>{
//     fn()
// }

// ==========================================

// function sayHello(fn) {
//     console.log("First");
//     fn();
//     console.log("End");
// }

// function greet() {
//     console.log("Alex");
// }

// sayHello(greet);

/// =========================================
// Анонымний інлайновий колбек

// function sayHello(fn) {
//     console.log("First");
//     fn();
//     console.log("End");
// }

// // sayHello(function () {
// //     console.log("Alex");
// // });

// sayHello(() => {
//     console.log("Alex");
// });

// ================================
// Calculator

// const sum = function(a, b){
//     return a + b
// }

// const sub = function(a, b){
//     return a - b
// }

// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const div = (a, b) => a / b;
// const mult = (a, b) => a * b;

// function calc(a, b, fnClb) {
//     return fnClb(a, b);
// }

// console.log(calc(10, 5, sum));
// console.log(calc(10, 5, sub));
// console.log(calc(10, 5, mult));
// console.log(calc(10, 5, div));
// ==========================================

// function calc(a, b, fnClb) {
//     return fnClb(a, b);
// }

// calc(10, 5, (a, b) => {
//     console.log(a + b);
// });

// calc(10, 5, (x, y) => {
//     console.log(x + y);
// });

// calc(10, 5, (x, y) => {
//     console.log(x - y);
// });

// calc(10, 5, (x, y) => {
//     console.log(x / y);
// });

// calc(10, 5, (x, y) => {
//     console.log(x * y);
// });

// =============================================
// const calc = (a, b, fnClb) => {
//     return fnClb(a, b);
// };

// calc(10, 5, (x, y) => {
//     console.log(x * y);
// });
