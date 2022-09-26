// // Знакомство с массивами

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// // console.log(friends);



// console.table(friends);
// // console.log(friends[2]); достучаться до масива

// friends[1] = 'qwqwqw';

// console.log(friends);

// // const lastIndex = friends.length - 1;
// // console.log(lastIndex);

// ===========================================


// Передача по ссылке и по значению
//  - приметивы и сложные типы
//  - Ссылочное равенство(referntial equality)

// let a = 10;
// let b = a;    // копия передача по значени

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

// ===================================================
// передача по ссылке

// const a = [1, 2, 3];  //храниться указатель, pointer
// const b = a;            // просто показывает указатели, 9тоже самое значение

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);

// console.group([1, 2, 3] === [1, 2, 3]);

// ============================================

// Перебор(интерация) массива

//  for - если нужен индекс или нужно изменить элементы массива
// for ... of - если индекс не нужен и в массиве ничего не нужно менять

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.log(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//     // console.log(i);
//     // console.log(friends[i]);

//     friends[i] += '-1';
// }

// for (const friend of friends) {
//     console.log(friends);
// }


// console.log(friends);


// =========================================================

// ЗАДАЧИ


// const cart = [54, 28, 105, 70, 92, 17, 120];
// // 2 сделать переменную total до цыкла
// let total = 0;

// // 1 перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     // 3 каждый элемент присоединить к тоталу
//     total += cart[i];
    
// }

// for (const value of cart) {
//     total += value;
// }

// console.log('total', total);

// добавить такс

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }
// for (let value of cart) {
//     value = Math.round(value * 1.1);
// }
// console.log(cart);
// ============================================

// Четное число

// const number = [1, 5, 8, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// // 1 переменная тотал

// // 2 перебрать массив
// for (let i = 0; i < number.length; i += 1) {
//     console.log(number[i]);

//     // 3 на каждой операции проверить элемент на четносбть
//     if (number[i] % 2 === 0) {
//         console.log('Четное!');

//         // 4 если четний плюсуем к тотал

//         total += number[i];
//     }
    
// }

// console.log("Total", total)




// const number = [1, 5, 8, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// // 1 переменная тотал

// // 2 перебрать массив
// for (let i = 0; i < number.length; i += 1) {
//     const numbers = number[i];

//     console.log(number[i]);

//     // 3 на каждой операции проверить элемент на четносбть
    // if (numbers % 2 === 0) {
    //     console.log('Четное!');

    //     // 4 если четний плюсуем к тотал

    //     total += numbers;
    // }
    
// }
//     for (const numbers of number) {
//         console.log(numbers)
//             if (numbers % 2 === 0) {
//         console.log('Четное!');
//         total += numbers;
//     }
//     }

// console.log("Total", total)

// ================================================================




// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

// let total = ' ';

//     total = message.split;
// return total;
//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));



// ================================================================


// const login = ['qwertyu1', 'asdfghj2', 'polyscute', 'zxcvbnm3'];
// const loginToFind = 'polyscute';
// let message = `user ${loginToFind} not found`;


// for (const logins of login) {
//     console.log('Login:', login);
//     console.log(`${loginToFind}:`, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('the same');
//         message = `user ${loginToFind} found`;
//         break;
//     }

// }
// console.log(message);


// const message = login.includes(loginToFind) ? `user ${loginToFind} found` : `user ${loginToFind} not found`;

// console.log(message);



// ==========================================================

// Напиши числа самого маленького числа в массиве
// при условии что числа уникальные(не повторяються);


// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber);





// ============================================

// --НАписать скрипт который обединяет все елементы массива в одно строковое
// --значение

// --элементов может быть произвольное количество
// --пусть элементы массива в строке будут разделены запятой
// ---------сначало через for
// ---------потом через join

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// // let string = '';

// // for (const friend of friends) {
// //     string += friend + ',';
// // }

// // string = string.slice(0, -1);

// const string = friends.join(',');

// console.log(string);

// ===========================================================

//  Напиши скрипт который заменяет регитр каждого символа в строке на
// противоположний
// Например, если строка 'JavaScript' то на выходе должно быть строка
// 'jAVAsCRIPT'

// const string = 'JavaScript';
// const letters = string.split('');
// let inverstedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter)

//     // if (letter === letter.toLowerCase()) {
//     //     console.log('lower register', letter);

//     //     inverstedString += letter.toUpperCase();
//     // } else {
//     //     inverstedString += letter.toLocaleLowerCase();
//     // }

//     // inverstedString +=
//     //     letter === letter.toLowerCase()
//     //     ? letter.toUpperCase()
//     //     : letter.toLowerCase();

//     const isEqual = letter === letter.toLowerCase();
//     inverstedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();

// }

// console.log(inverstedString);


// ===========================================================

// Делаем  SLUG в URL из названия статьи(например на dev.to)
// Заголовок статьи только из букв и пробелов

// нормализируем строку
// разбиваем по словам
// сшиваем в строку с разделителями

// должно получитсья top -10-benefits-of react-freamworl

// const title = 'Top 10 benefits of React freamwork';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');
    
// console.log(slug1);



// ==============================================================

// Напиши скрипт который считает элементы двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let total = 0;

// for (let i = 0; i < array1.length; i += 1) {
//     console.log(array1[i]);
//     console.log(array2[i]);
// так не работает и не хорошо делать
// }

// самый плохой вариант но рабочий

// for (let i = 0; i < array1.length; i += 1) {
//     total += array1[i];
// }
// for (let i = 0; i < array2.length; i += 1) {
//     total += array2[i];
// }
// console.log(total);

// хорошо работает и проще, меньше кода

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);






// =====================================================

// Работаем с колекцией карточок в trello

// метод splice()
// Удалить
// Добавить
// Обновить

// nu

// ------------Удалить по индексу indexOf()

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// // console.log(cards.splice(index, 1));

// console.table(cards);

//---------------Добавить по индексу

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.table(cards);


// ------------обновление по индексу

// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Обновленная карточка - 4')

// console.table(cards);


// ========================================================


// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let result = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// }
//  // Change code above this line

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// =====================================================================


// function getEvenNumbers(start, end) {
//    // Change code below this line
//     const numbers = [];
// for (let i = start; i <= end; i += 1){

//     if (i % 2 == 0) {
//         numbers.push(i);;
//     }
//     return numbers;
// }
//     // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// function findNumber(start, end, divisor) {
//   // Change code below this line
//     let number;

//     for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//         return i;

//     }
// }

//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));


// function includes(array, value) {
//   // Change code below this line
//   let result = [];
  
// for (let i = 0; i < array.length; i += 1) {
//     if (value.includes(array[i])) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }
  // Change code above this line

// function includes(array, value) {


//     for (const element of array) {

//         if (element === value) {
//             return true;
//         }
        
//     }
//     return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));