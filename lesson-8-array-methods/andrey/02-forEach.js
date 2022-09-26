// [].forEach() - нічого не вертає, тільки пербирає

// Formula for all HOF methods (higth order function)
// [].methods((elem, idx, arr)=>{})
// [].methods(function(elem, idx, arr){})
// function arrFn(elem, idx, arr){}
// [].methods(arrFn)

// Reduce has other Formula
// [].reduce()

// ====================================================
let users = ["vova", "sara", "mike", "bob"];

// users.forEach((a, b, c)=>{})
// users.forEach((elem, idx, arr) => {
//     // console.log(elem.toUpperCase());
//     // console.log(idx);
//     // console.log(arr);
//     console.log(`${elem}:${idx}`);
// });

// ============================================
// нічого не вертає, тільки пербирає
let fruits = ["apples", "banana", "pear", "melon"];

// const data = fruits.forEach((el, i, arr) => {
//     // console.log(el);
//     return el; //не повертае тільки перебирає
// });

// console.log(data);

// =====================================================

// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// friends.forEach((item) => {
//     console.log(item.name, item.budget);
// });

// friends.forEach(({ name, budget, isComplete }) => {
//     console.log(name, budget);
// });



