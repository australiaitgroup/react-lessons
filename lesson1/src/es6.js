// ================= const ==========
// const pi = 3.14

// // WRONG
// pi = 4

// ============ template string ====
// const name = 1
// const age = 12
// const str = name + '' + age
// const str2 = `${name}${age}`
// console.log(str2)

// // ============ let ============
// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log(i) // 3

// for (let j = 0; j < 3; j++) {
//     console.log(j);
// }
// console.log(j); 

// // ============ arrow function ============
// function sayHello(name) {
//     console.log('******', this)
//     console.log(`hello, ${name}!`);
// }

// const sayHello1 = (name) => {
//     console.log('=====', this)
//     console.log(`hello, ${name}!`);
// }

// sayHello('foo')
// sayHello1('foo')


// // ============ destructuring =======
// const student = { school: 'UNSW', gender: 'F', name: 'foo' };
// // const school = student.school;
// // const gender = student.gender;

// const { school, gender } = student;
// console.log(school, gender)

// // ============ spread =======
// const computerScienceStudent = {
//     major: 'Computer Science',
//     language: 'English',
//     university: 'UNSW'
// };
// const mary = {
//     ...computerScienceStudent,
//     language: 'Chinese',
//     age: 25
// };
// console.log(mary) // mary = { major: 'Computer Science', language: 'Chinese', university = 'UNSW', age: 25 }

// ============ class =======
class Student {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.university = 'UNSW';
    }
    greeting() {
        console.log(`Hello, I'm ${this.name} from ${this.university}`);
    }
}
const jane = new Student('Jane', 'F');
jane.greeting(); // Hello, I’m Jane from UNSW