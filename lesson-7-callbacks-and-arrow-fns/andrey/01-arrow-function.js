// ES6

// FD
// function getSum(a, b){
//     return a + b;
// }

// FE
// const getSum = function (a, b){
//     return a + b;
// }

// AF
// ===================================
// Особливості срілочних функцій
// 1. Не хойстяться
// 2. Немає arguments
// 3. Короткий return
// 4. Якщо у нас один паретр можна не ставити круглі дужки
// const satHello = name => `Hello ${name}`;
// 5. Приколи с this
// 6. AF гарно грають у колбеках
// =========================================

// const getSum = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };

// const getSum = (a, b) => a + b;
// console.log(getSum(10, 7));

// const satHello = name => `Hello ${name}`;

// const satHello = name => {
// return `Hello ${name}`
// };

// =========================================
// Short Object return

// const greet = () => {
//     return {
//         name: "Alex",
//         age: 25,
//     };
// };

// const greet = () => ({
//     name: "Alex",
//     age: 25,
// });

// const greet = () => ({ name: "Alex", age: 25 });

// console.log(greet());

// ===========================================
// No shorthand return
// const getMax = (a, b)=>{
//     if (a > b)  {
//         return a
//     } else {
//         return b
//     }
// }
