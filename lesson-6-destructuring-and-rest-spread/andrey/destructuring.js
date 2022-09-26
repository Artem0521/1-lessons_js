// Object Destructuring

// const bmw = {
//     title: 'X5',
//     manufacture: "BMW",
//     colors: ['black', 'red', 'white'],
//     delerShip: {
//         city: 'Berlin',
//         zip: 12345,
//         option: {
//             dscount: 3,
//             wipers: 'Brembo',
//             tires: 'Mishlen',
//         },
//     },
// };

// bmw['title']
// bmw['colors']

// console.log(bmw.manufacture);

// const { manufacture, title } = bmw;
// console.log(manufacture);
// console.log(title);



// const { delerShip: { city }, } = bmw;
// console.log(city);

// console.log(bmw.delerShip.zip);

// ==============================================

// const { delerShip: { option: { tires }}} = bmw;

// console.log(tires);

// if (tires === 'Mishlen') {
//     console.log(('Super'));
// };

// ===================================================

// Naming

const bmw = {
    title: 'X5',
    manufacture: 'BMW',
};

let title = "S5";
console.log(title);

// const { title: bmwTitle } = bmw;
// console.log(bmwTitle);

// const { title: bmwTitle, manufacture: plant } = bmw;
// console.log(bmwTitle);
// console.log(plant);








