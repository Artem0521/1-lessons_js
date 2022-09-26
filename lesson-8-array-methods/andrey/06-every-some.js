// retunrs true/false

let friends = [
    { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
    { id: 2, name: "Sara", age: 22, budget: 3500, isComplete: false },
    { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
    { id: 4, name: "Bob", age: 16, budget: 200, isComplete: false },
];

// Every - должно выполняться для всех!

// const adults = friends.every((friend) => {
//     return friend.age > 18;
// });

// console.log(adults);

// ==================================================
// Some - должно выполняться хотябы для одного!

const children = friends.some((friend) => {
    return friend.age < 18;
});

console.log(children);
