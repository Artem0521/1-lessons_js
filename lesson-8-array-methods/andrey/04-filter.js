// Если не находить, то возвращает пустой массив []
// return true / false

// ====================================
let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 25, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 18, budget: 200, isComplete: false },
];

// const done = friends.filter((friend) => {
//     return friend.isComplete;
// });

// console.log(done);

// const done = friends.filter(({ isComplete }) => isComplete);
// console.log(done);

// const notDone = friends.filter((friend) => {
//     return !friend.isComplete;
// });

// const notDone = friends.filter(({ isComplete }) => !isComplete);
// console.log(notDone);

// ===========================================
// const budget = friends.filter((friend) => {
//     return friend.budget > 1000;
// });

// const budget = friends.filter(({ budget }) => budget > 1000);
// console.log(budget);

// =======================================
// Все кроме Sara

// const noSara = friends.filter((friend) => {
//     return friend.name !== "Sara";
// });

// console.log(noSara);

// =========================
// Только Сара

// const onlySara = friends.filter((friend) => {
//     return friend.name === "Sara";
// });

const onlySara = friends.filter(({ name }) => name === "Pizza");
console.log(onlySara);










