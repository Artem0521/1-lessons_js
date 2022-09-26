// fruits.sort().reverse();
// ''.split('').reverse().join('')
// [].map().filter().reduce()

// ============================
let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2000, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3000, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
];

// const arrChain = friends
//     .filter((friend) => {
//         return friend.isComplete;
//     })
//     .map((friend) => {
//         return {
//             info: `id:${friend.id}, name:${friend.name}`,
//             budget: friend.budget,
//         };
//     })
//     // .reduce((total, friend) => {
//     //     return total + friend.budget;
//     // }, 0);

//     .sort((a, b) => {
//         console.log(a); // a.budget
//         console.log(b); // b.budget

//         return a.budget - b.budget;
//     });

// console.log(arrChain);

// ----------------------------------
const arrChain = friends
    .filter(({ isComplete }) => isComplete)
    .map(({ id, name, budget }) => ({
        info: `id:${id}, name:${name}`,
        budget,
    }))
    // .reduce((total, { budget }) => total + budget, 0);

    .sort((friend_1, friend_2) => friend_1.budget - friend_2.budget);

console.table(arrChain);
