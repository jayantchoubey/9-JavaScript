//primitive datatype
let age = 12;
console.log(age, typeof age); //prints 12 'number'

let fullName = 'Esper';
console.log(fullName, typeof fullName); //prints Esper string

let isFollow = false;
console.log(isFollow, typeof isFollow); //prints false 'boolean'

let x;
console.log(x, typeof x); // prints undefined 'undefined'

let a = null;
console.log(a, typeof a); //prints null 'object'

let b = BigInt('123');
console.log(b, typeof b); //prints 123n 'bigint'

let c = Symbol('hello!');
console.log(c, typeof c); //Symbol(hello!) 'symbol'

//non-primitive datatype
const student = {
    studentName: 'Esper Mob',
    studentAge: 22,
    studentCgpa: 9.5,
    isPass: true,
};
console.log(student, typeof student); //prints  {studentName: 'Esper Mob', studentAge: 22, studentCgpa: 9.5, isPass: true} 'object'

console.log(student.studentAge); //prints 22
console.log(student["studentName"]); //prints Esper Mob
student.studentName = "Esper JC";
student.studentAge = student.studentAge + 2;
console.log(student.studentAge); //prints 24
console.log(student.studentName); //prints Esper JC