// Прототипи
// Object.create()
// hasOwnProperty()

// let arr_1 = [10, 20, 30, 40, 50];
// let arr_2 = ["vova", "sara", "bob", "mike"];
// let arr_3 = [null, false, true, 10, 0, "hello"];

// arr_1.push();
// arr_2.push();

// arr_1.splice();
// arr_3.splice();

// console.log(arr_1.__proto__);
// console.log(arr_3.__proto__);

// console.log(arr_1);
// console.log(arr_1.constructor);

// const car = {
//     title: "X5",
//     manufacturer: "BMW",
// };

// // console.log(car.__proto__);
// console.log(car);
// =====================================
// Обьекти юзають власні і не власні пропи (ключіб властивості)

// hasOwnProperty

let objA = {
    a: 10,
    b: 20,
};

// // []
// new Array()

let objB = Object.create(objA);
objB.x = 100;
objB.y = 200;

// objB.b = 1000;
// objB.a = 100;
// objB.b = 200;

// console.log(objB);
// console.log(objB.a);
// console.log(objB.b);

// let b = objB.hasOwnProperty("b");
// console.log(b);

for (let prop in objB) {
    console.log(prop, objB[prop]);
}

// for (let prop in objB) {
//     if (objB.hasOwnProperty(prop)) {
//         console.log(prop, objB[prop]);
//     }
// }

/*
[[Prototype]]
    [[Prototype]]
        [[Prototype]]
            [[Prototype]]
                    [[Prototype]]
                    */
