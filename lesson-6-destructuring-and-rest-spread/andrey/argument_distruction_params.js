// Pattern Arguments dest
// Pattern pParams Obj




// addItem({
//     id: '5',
//     name: 'melon',
//     price: 150,
//     aty: 50,
//     category: 'fruits',
// });

// Problem
// function addItem(id, name, price, qty, category) {
//     return obj;
// }

// Good practis
// function addItem(obj) {
//     return obj;
// }
// console.log(addItem({
//     id: '5',
//     name: 'melon',
//     price: 150,
//     aty: 50,
//     category: 'fruits',
// }));


// ======================================


function addItem(obj) {
    return { id, name, price, qty, category };
}

const melon = {
    id: '5',
    name: 'melon',
    price: 150,
    qty: 50,
    category: 'fruits',
};

const { id, name, price, qty, category } = melon;
consy.log(addItem(melon));

