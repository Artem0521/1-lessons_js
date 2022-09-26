// /*
//  * Работа с коллекцией (массивом объектов)
//  */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// /*
//  * Ищем друга по имени
//  */

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     // console.log(friend);
//     // console.log(friend.name);

//     if (friend.name === friendName) {
//       return 'НАШЛИ!!!';
//     }
//   }

//   return 'НЕ НАШЛИ :(';
// };

// // console.log(findFriendByName(friends, 'Poly'));
// // console.log(findFriendByName(friends, 'Chelsy'));

// /*
//  * Получаем имена всех друзей
//  */

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//   return names;
// };

// // console.log(getAllNames(friends));

// /*
//  * Получаем имена только друзей которые онлайн
//  */
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// };

// // console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend.online);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }

//   return offlineFriends;
// };

// // console.log(getOfflineFriends(friends));

// // создать 2 массива онлайн и офлайн?
// // если тру - в первый, если нет - во второй

// const getFriendsByStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }

//     friendsByStatus.offline.push(friend);

//     // const key = friend.online ? 'online' : 'offline';
//     // friendsByStatus[key].push(friend);
//   }

//   return friendsByStatus;
// };

// console.log(getFriendsByStatus(friends));


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }




// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (let product of products) {
//   if (product.name === productName) {
//     return product.price;
//   }
// }
// return null;
//   // Change code above this line
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));




const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const names = [];
  const keys = Object.values(products);

  for (const product of products) {
    // console.log(product.name);

    for (const keys in product) {
      if (keys === propName) {
        names.push(product[keys])
      }
      
    }

  }
  return names;

  // Change code above this line
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"));











