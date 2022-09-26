// const a = 10;

// function info() {
//     console.log(a);

//     function fnB() {
//         console.log("from fnB", a);
//     }

//     fnB();
// }

// info();

// ===============================

// const a = 10;

// function info(a) {
//     // const a = 20;
//     console.log(a);
// }

// info(30);

// ========================================
// Lexical ENV

// const a = 10;

// const ENV_GLOBAL = {
//     a: 10,
// };

// function info() {
//     const ENV_INFO = {};

//     console.log(a);

//     function fnB() {
//         const ENV_fnB = {};

//         console.log("from fnB", a);
//     }

//     fnB();
// }

// info();

// // ENV_GLOBAL
// //     ENV_INFO
// //          ENV_fnB

// ================================================

const a = 10;

const ENV_GLOBAL = {
    a: 10,
};

function info() {
    const a = 20;
    const ENV_INFO = {
        a: 20,
    };

    console.log(a);

    function fnB() {
        const a = 30;
        const ENV_fnB = {
            a: 30,
        };

        console.log("from fnB", a);
    }

    fnB();
}

// let a = 100; //  Identifier 'a' has already been declared

info();

// ENV_GLOBAL
//     ENV_INFO
//          ENV_fnB
