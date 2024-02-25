age = 24;
fullName = "Esper"
console.log(fullName); //prints fullname
console.log(age); //prints age
console.log(fullName, age); //prints fullname and age with a space in between

x = null;
console.log(x); //prints null

y = undefined;
console.log(y); //prints undefined

isbool = true;
console.log(isbool); //prints true

//var declaration - can be redeclared and updated
//avoid using it
var myAge = 32;
console.log("my age =", myAge);

//let declaration - cant be redeclared but can be updated
var yourAge = 45;
console.log("your age =", yourAge);

//const declaration - cant be redeclared or updated
const hisAge = 10;
console.log("his age = ", hisAge);