// ============== bind, apply, call ================
// they are used to change context

// this refers to the thing that calls f()
// function f() {
//   console.log(this);
// }
// f();

// this.message = 'hello'

// // arrow function: lexcial scope
// // this refers to where function is defined
// const f = () => {
//     console.log(this);
// }
// f();


// const dragon = {
//   weapon: 'fire',
//   attack: function () {
//     console.log(`attacking with ${this.weapon}`);
//   }
// }

// dragon.attack();

// const slowMotion = {
//   action: 'jumping off the building...',
//   play: function () {
//     // async action
//     setTimeout(function(){
//       console.log(`${this.action} after 2 seconds`);
//     }, 2000);

//     // bind is used to change context
//     // use bind this to perserve context
//     setTimeout(function(){
//         console.log(`${this.action} after 2 seconds`);
//     }.bind(this), 2000);

//     // use arrow function to preserve context
//     setTimeout(() => {
//       console.log(`${this.action} after 2 seconds`);
//     }, 2000);
//   }
// }
// slowMotion.play();

const man = {
  message: 'This is madness, This is Sparta!',
  speak: function (arg = '') {
    console.log(this.message, arg);
  }
}

// man.speak();

// const anotherSpeak = man.speak.bind(
//   { message: 'This is Javascript' }
// );
// anotherSpeak()

// // apply and call is to change context as well, but execute the function immediately
// /**
//  * different between apply and call is
// this and context are always 1:1
//  * func.apply(this, [arg1, arg2])
//  * func.call(this, arg1, arg2)
//  */

man.speak.apply({ message: 'This is Javascript' }, ['from apply']);
man.speak.call({ message: 'This is Javascript' }, 'from call');



// EVENT handling in DOM https://jsfiddle.net/jackiet/suk7ctne/4/