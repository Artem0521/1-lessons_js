// let msg = 'Be be or not to be';

// msg[0];
// msg[1];
// msg[2];
// msg[3];
// msg[4];



// console.log(msg);
// console.log(msg[0]);
// console.log(msg[1]);
// console.log(msg[2]);
// console.log(msg[3]);
// console.log(msg[4]);

// ===========================

// for                  important  90%
// while                second
// do ...while          do not use


// for of
// for in

// [].forEach()
// [].map()
// [].reduce()

// =================================

// A - loop start
// B - Boolean
// C - Continue next

// for (A; B; C){}


// Increment  це +1
// idx++; postfix
// ++idx; prefix

// Decrement це -1
// --idx;postfix
// idx--; prefix


// for (let idx = 1; idx <= 10; idx += 1) {
//     console.log('iteration', idx);
// }

// for (let idx = 10; idx >= 0; idx -= 1) {
//     console.log('iteration', idx);
// }

// let msg = 'Be be or not to be';

// for (let i = 0; i < msg.length; i += 1) {

//     console.log(msg[i].toLocaleUpperCase());
    
// }

// ==============================================

// while
// A - loop start
// B - Boolean
// C - Continue next


// A
// while (B) {

//     loop body
//     C
// }

// for (let idx = 10; idx >= 0; idx -= 1) {
//     console.log('iteration', idx);
// }

// ============================================

// do while
// A - loop start
// B - Boolean
// C - Continue next

// A
// do {
//     C
// } while (B) {

// }

// let idx = 1;

// do {
//     console.log('intration', idx);
//     idx += 1;
// } while (idx <= 10);



// ========================================

// break - це виихі з циклу
// continue - пропустити поточну операцію


// for (let i = 1; i <= 10; i++) {
//     // if (i % 2 == 0) {
//     //     console.log(i);
//     // }

//         if (i === 7) {
//             break;
//     }
//     console.log(i);
    
// }

// for (let i = 1; i <= 10; i += 1) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// for (let i = 1; i <= 10; i++) {
//         if (i === 6) {
//             continue;
//     }
//     console.log(i);
    
// }


// let userInput = prompt('Enter Name');
// let nameToSearch = 'Sara';
// // console.log(userInput);

// if (userInput) {
//     for (let i = 1; i <= 4; i += 1) {

//         if (userInput === nameToSearch) {
//             console.log('User is logined');
//             console.log('Try ${ i }');
//         }
//     }
// } not working xheck why


// let userInput = null;
// let nameToSearch = 'Sara';

// for (let i = 1; i < 4; i += 1) {
//     userInput = prompt('Enter Name');
//     console.log('лишилось спроb' : ${i})

//     if (!userInput) {
//         console.log('Cansele')
//         break;
//     }
//     if (userInput === nameToSearch) {
//         console.log('Login success');
//         break;
//     }
// }  



