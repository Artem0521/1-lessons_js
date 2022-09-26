// Замыкание - это механизм когда функции доступны внешние перменные

// Замыкание(англ.closure) в программировании — функция первого класса (или функция вісшего порядка), в теле которой присутствуют ссылки на переменные, объявленные вне тела этой функции в окружающем коде и не являющиеся её параметрами.Говоря другим языком, замыкание — функция, которая ссылается на свободные переменные в своей области видимости.

// function calcFn(n) {
//     return function () {
//         // console.log(10 * n);
//         return 10 * n;
//     };
// }

// // const calc = calcFn(5);
// const calc = calcFn(4);

// console.log(calc());

// =======================================

// function getSum(n) {
//     return function (i) {
//         return i + n;
//     };
// }

// const two = getSum(5);
// console.log(two(2));

// const one = getSum(10);
// console.log(one(1));

// ================================
// Карирование
// Carring

// function getSum(n) {
//     return function (i) {
//         return i + n;
//     };
// }

// const one = getSum(10)(1);
// const two = getSum(5)(2);
// console.log(one);
// console.log(two);

// =========================================

// function getSum(n) {
//     return function (i) {
//         return function (k) {
//             return n + i + k;
//         };
//     };
// }

// const res = getSum(10)(2)(5);
// console.log(res);

// =========================================
// uri

// https://www.google.com/
// https://www.facebook.com/

// https://www.unian.net/

// function generateURI(domainName) {
//     return function (url) {
//         return `https://www.${url}.${domainName}`;
//     };
// }

// const google = generateURI("com")("google");
// console.log(google);

// const google = generateURI("com");
// console.log(google("google"));

// const facebook = generateURI("com")("facebook");
// console.log(facebook);

// const unian = generateURI("net")("unian");
// console.log(unian);

// ==================================================

function frameWorksGenerator() {
    const frameworks = ["Angular", "Vue"];

    return {
        show() {
            console.log(frameworks);
        },
        add(item) {
            frameworks.push(item);
        },
    };
}

const manager = frameWorksGenerator();
// console.log(manager);

manager.show();
manager.add("React");
manager.show();
