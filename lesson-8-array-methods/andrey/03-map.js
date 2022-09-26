

const friendWithBonus = frineds.map((friend) =>{
    if (friend.name === 'Sara') {
        console.log('Friend');
    }
});

// [].map() - returns new arr

// [].map((elem, idx, arr)=>{})

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

// const newNums = numbers.map((elem, idx, arr) => {
//     // console.log(elem, idx);
//     // console.log(arr);

//     return elem * 10;
// });

// console.log(newNums);
// console.log(newNums === numbers);

// ===========================================
// arr copy make

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

// const newNums = [...numbers];
// const newNums = numbers.map((elem, idx, arr) => {
//     return elem;
// });

// const newNums = numbers.map((elem) => elem);

// console.log(newNums);
// console.log(newNums === numbers);

// =============================================================
// array of objects
let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
];

// const budgets = friends.map((friend) => {
//     return friend.budget;
// });

// console.log(budgets);

// const names = friends.map((friend) => {
//     return friend.name;
// });

// const names = friends.map(({ name }) => name);

// console.log(names);

// =====================================

const friendsWithBonus = friends.map((friend) => {
    if (friend.name === "Sara") {
        // console.log(friend);
        return {
            ...friend,
            budget: friend.budget + 500,
            age: 18,
        };
    }

    return friend;
});

console.log(friendsWithBonus);

// { id: 2, name: "Sara", age: 25, budget: 4000, isComplete: false },

// const vova = {
//     name: "Vova",
//     age: 25,
// };

// const sara = {
//     ...vova,
//     name: "Sara",
// };

// console.log(vova);
// console.log(sara);
