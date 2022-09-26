// Guard- clause преждевременный возврат

// 1. Ми відкидаємо else if i else
// 2. Першочергове ми обробляємо falsy value
// 3. це робить в функціях

// Guard- clause Він для того щоб не писати if

// =====================================================
// ПРоблема багато вложенысть

// if (true) {

// } else if (true) {

// } else if (true) {
    
// } else if (true) {
    
// }

// Краще так робити
// function login(userName) {
//     if (!userName) {
//         console.log('Empty name');
//         return;
        
//     }
//     if (userName === 'Alex') {
//         return true;
//     }
//     return false;
// }


// для новачків
// function login(userName) {

//     if (userName === 'Alex') {
//         return true;
//     } else {
//         return false
//     }
// }



// ====================================================

// const ligtht = 'yellow';
// if (ligtht === 'red') {
//     console.log('Stop');
// } else if (ligtht === 'yellow') {
//     console.log('weit');
// } else if (ligtht === 'green') {
//     console.log('Go');
// } else {
//     console.log('Broken');
// }

const light = 'qwe';

function getLight() {
    if (!light) {
        console.log('No signal');
        return;
    }

    if (light === 'red') {
        console.log('Stop');
        return;
    }

    if (light === 'yellow') {
        console.log('weit');
        return; 
    }
        if (light === 'green') {
        console.log('Go');
        return; 
    }
    console.log('Broken');
}

getLight();













