// new Array()

// let friend = {
//     name: 'alex',
//     age: 25,
// };
// console.log(friend.name, friend.age);
// console.log(typeof friend);


// let users = ['alex', 'vova', 'voa', 'mike'];

// users[0];
// users[1];
// users[2];
// users[3];


// console.log(users);

// console.log(typeof users);

// console.log(users[0]);

// =========================================

// check for arr проверить массив ли это или нет

// сconsole.log(Array.isArray(users));
// сconsole.log(Array.isArray(friend));
// сconsole.log(Array.isArray('sara'));
// сconsole.log(Array.isArray(100));

// =========================

// convert to arr

// Array.from();

// console.log(Array.from('sara'));

// console.log(Array.isArray(Array.from('sara')));

// ===================================================

// [].length check for length

// let users = ['alex', 'vova', 'voa', 'mike'];

// console.log(users.length);
// console.log(users);

// if (users.length) {
//     console.log('не пусстий');
// } else {
//     console.log('пусстий');
// }

// ===========================================

// new Array()

// let friend = {
//     name: 'alex',
//     age: 25,
// };
// let numArr = [10,
//     20,
//     30,
//     'sara',
//     true,
//     false,
//     function name(params) { a: 10 },
//     friend, 10]


    // numArr[1][1]
// console.log(numArr[1][1]);
// console.log(numArr);
// console.log(numArr.length);


// ============================================
// Natate Array chenge massive

// [].push()  and to nend any elements
// [].pop()   remoove last
// [].shift() remove first
// [].unshift() add to start
    
// [].slice()
// [].splice()


// let users = ['alex', 'vova', 'voa', 'mike'];

// users.push('sara');
// users.push('sara,' 100, null, undefined, 'vova');

// console.log(users);

// ================================

// let users = ['alex', 'vova', 'voa', 'mike'];

// users.pop();

// console.log(users);

// =======================

// let users = ['alex', 'vova', 'voa', 'mike'];

// users.shift();
// users.unshift();

// console.log(users);

// =====================================

// let users = ['alex', 'vova', 'voa', 'mike'];

// const newUsers = users.slice();  // create new cope from old one
// users.slice();
// console.log(newUsers === users);

// const newUsers = users.slice(2);
// const newUsers = users.slice(1);

// const newUsers = users.slice(start, end[exlude]);

// const newUsers = users.slice(2, 4 );

// console.log(newUsers);

// ==========================================

// let users = ['alex', 'vova', 'voa', 'mike'];
// console.log(users.length);

// delete users[1];

// console.log(users.length);

// console.log(users);


// [].splice(idx, [delCount, arrElem, arrElemn2])

// URLSearchParams.splice(1, 1);
// console.log(users);
// console.log(users.length);
// ==============================================

// let users = ['alex', 'vova', 'voa', 'mike'];

// users.splice(0, 2, 'pizza', 'cola');
// users.splice(0, 0, 'pizza', 'cola');

// console.log(users);


// =================================================

// find in arr
// [].include() // tru / false
// [].indexOf() //idx / -1
// [].findIndex() // idx / -1

// let users = ['alex', 'vova', 'voa', 'mike'];

// if (users.includes('bob')) {
//     console.log('found')
// } else {
//     console.log('not found')
// }

// if (users.indexOf('sara') === -1) {
//     console.log('found')
// } else {
//     console.log('not found')
// }

// =======================================================

// convert to string

// Split Reverse Join

// let users = ['alex', 'vova', 'voa', 'mike'];



// users.toString()
// 100.toString()
// false.toString()

// console.log(typeof users.toString());


// let song = 'dont worry ne happe';

// console.log(osng.split('-'));
// console.log(typeof song.split());
// console.log(Array.isArray(song.split()));

// console.log(song.split('-').reverse().join('-'));

// ==========================================================

// concat

// const name = 'alex';
// const latName = 'reper';
// const fullName = name + latName;

// console.log((fullName));


// let users = ['alex', 'vova', 'voa', 'mike'];
// const num = [10, 20, 30, 40];
// const cities = ['Kyiv', 'Odessa', 'Lviv'];
// // const resArr = users + num;


// const resArr = users.concat(num);
// const resArr = num.concat(users, cities);

// console.log(resArr);
// console.log(typyOf resArr);

