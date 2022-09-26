// [].methods((elem, idx, arr)=>{})
// [].method((elem, idx,arr)=>{ return имененный массив})

/*
[].reduce((acc, elem, idx, arr)=>{
    return 'измененнный аккумулятор'
}, 'начальное значение вккумулятора')
*/

// ''
// ""
// []
// 0,
// 100,
// {},
// true,
// undefined

// const nums = [10, 20, 30, 40];

// nums.reduce((acc, elem, idx, arr) => {
//     // console.log(`${elem}: ${acc}`);
//     // console.log(idx);
//     // console.log(arr);
// }, "Pizza");

// const total = nums.reduce((acc, elem, idx, arr) => {
//     console.log(`${elem}: ${acc}`);
//     return acc + elem;
// }, 0);

// console.log(total);

// =============================================
// let friends = [
//     { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
//     { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
//     { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
//     { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
// ];

// const totalBudget = friends.reduce((acc, item, idx, arr)=>{}, 0)
// const totalBudget = friends.reduce((total, friend) => {
//     return total + friend.budget;
// }, 0);

// const totalBudget = friends.reduce((total, { budget }) => total + budget, 1000);

// console.log(totalBudget);

// =========================================

// let cart = [
//     { id: "1", name: "bananes", price: 5, qty: 50, category: "fruits" },
//     { id: "2", name: "apples", price: 10, qty: 40, category: "fruits" },
//     { id: "3", name: "potato", price: 15, qty: 50, category: "vegetables" },
//     { id: "4", name: "tomatoes", price: 35, qty: 100, category: "vegetables" },
// ];

// 5 * 50
// 10 * 40
// 15 * 50
// 35 * 100

// const sum = cart.reduce((total, item) => {
//     return total + item.price * item.qty;
// }, 0);

// const sum = cart.reduce((total, { price, qty }) => total + price * qty, 0);

// console.log(sum);

// ============================

// const names = cart.map((item) => {
//     return item.name;
// });

// const names = cart.reduce((name, cartItem) => {
//     // console.log(name, cartItem);

//     name.push(cartItem.name);
//     return name;
// }, []);

// console.log(names);
