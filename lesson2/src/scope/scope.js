/**
 * let is block scope
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

// let x = 1;

// if (x === 1) {
//   x = 2;

//   console.log(x);
// }

// console.log(x);


/**
 * const is block scope as well
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */
// const number = 42;

// // error handling
// try {
//   number = 99;
// } catch (err) {
//   console.log(err);
// }

// console.log(number);

// =========================================
/**
 * var is functional scope
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 * 
 * hoisting
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting
 * 
 * declaration will be hoisted, not initialization
 */

// var x = 1;

// if (x === 1) {
//   var x = 2;

//   console.log(x);
// }

// console.log(x);

/**
 * =======================================
 * scope chain
 */
// const globalVar = 'globalVar';
// function outer() {
//     const outerVar = 'outerVar';
//     console.log(`outer: ${globalVar}`);
//     function inner() {
//         console.log(`inner: ${outerVar}, ${globalVar}`);
//         // has access to all variables outside, this is scope chain
//     }
//     inner()
// }
// outer()

/**
 * =======================================
 * closure
 */
// function createCounter() {
//     let number = 0;

//     // a,b,c...
//     return function counter() {
        
//         number++;

//         // has access to a, b , c
//         return number;
//     }
// }

// const response = createCounter()
// console.log(response)
// console.log(response()) // 1


function makeFuncs() {
    const funcs = [];
    for (var i = 0; i < 3; i++) {
        funcs[i] = function() {
            console.log(`func ${i}: ${i}`);
        };
    }
    // console.log(i)
    // i = 3 when var
    // i is not defined when let
    return funcs;
}
const functions = makeFuncs();

/**
 * functions = [
    * function() { console.log(`func ${i}: ${i}`)},
    * function() { console.log(`func ${i}: ${i}`)},
    * function() { console.log(`func ${i}: ${i}`)},
 * ]
 */

// for (var j = 0; j < 3; j++) {
//     functions[j]();
// }

/**
 * =====================
 * practice
 */

function makePistol() {
    let bullets = 6;
    return {
        log: function() {
            console.log(bullets)
        },
        shoot: function() {
            if (bullets === 0) {
                console.log('No bullets left!');
                return;
            }
            bullets--;
            console.log(`Bang! Bullets left: ${bullets}`);
        },
        reload: function() {
            bullets = 6;
            console.log(`Reloaded! Bullets left: ${bullets}`);
        }
    }
}


// console.log(makePistol())
// makePistol().shoot() // 5
// makePistol().shoot() // 4

const pistol = makePistol()
pistol.shoot()
pistol.shoot()




// const pistol = makePistol()
// pistol.log()
// pistol.shoot()
// pistol.log()
// pistol.shoot()
// pistol.log()

// makePistol().shoot()
// makePistol().shoot()