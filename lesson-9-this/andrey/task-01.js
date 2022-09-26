





// const shop = {
//     stones: [
//         { name:'Ruby', price: 100, qty: 10 },
//         { name:'Diamond', price: 105, qty: 15 },
//         { name:'Saphore', price: 150, qty: 15 },    
//     ],
//     calcTotalPrice(stoneName) {
//         // console.log(this.stones);
//         const jem = this.stones.find((stone) => {
//             return stone.name === stoneName;
//         });
//         if (jem) {
//             return jem.price * jem.qty;
//         },
//     },
// };

// console.log(shop.calcTotalPrice('Ruby'));


const shop = {
    stones: [
        { name:'Ruby', price: 100, qty: 10 },
        { name:'Diamond', price: 105, qty: 15 },
        { name:'Saphore', price: 150, qty: 15 },    
    ],
    calcTotalPrice(stoneName) {

        const jem = this.stones.find(({name}) => name === stoneName);

        if (jem) {
            const { price, qty } = jem
        }
    },
};

console.log(shop.calcTotalPrice('Ruby'));





