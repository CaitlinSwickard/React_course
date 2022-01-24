// arrow function 
const func = () => {
  console.log(name);
}
func("Caitlin");


const multiply = (number) => {
  return number * 2
}
console.log(multiply(2));

// rewrite short arrow function
const multiply = number => number * 2;
console.log(multiply(2));
// -----------------------------------------------------------------------------------------------


// export and import statements
// file person.js
const person = {
  name: 'John',
}
// uses the default keyword
export default person;

// file utility.js
export const clean = () => { };
export const baseData = 10;

// file app.js
// DEFAULT EXPORT
// imports default and only export of the file Name
import person from './person.js';

// NAMED EXPORTS
// import uses {} to specifically target named exports (by the const name between {})
import { clean } from './utility.js';
import { baseData } from './utility.js';

// OR import as a bundle
// import * as bundled from './utiliy.js';
// -----------------------------------------------------------------------------------------------


// understanding classes
class Person {
  // property
  name = "John"
  // method
  call = () => {

  }
}

// usage (constructor function)
const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);

// inheritance
class Person extends Master;



  // another example
  class Human {
    gender = 'male';

    printGender = () => {
      console.log(this.gender)
    }
  }

// extends needs to use SUPER in older ways
  class Person2 extends Human {
    name = "John"
    gender = 'female'

    printMyName = () => {
      console.log(this.name);
    }
  }

const person = new Person2();
person.printMyName();
person.printGender();
// -----------------------------------------------------------------------------------------------


// classes, properties methods
// properties are like 'variables' attached to classes/objects
// methods are like 'functions' attached to classes/objects

// ES6 property
constructor() {
  this.myProperty = 'value';
}
// ES7
myProperty = 'value';

// ES6 method
myMethod() {
}
// ES7 (arrow function)
myMethod = () => {
}
// -----------------------------------------------------------------------------------------------


// spread and rest operator
// spread = {...}
// used to split up array elements Or object properties
// spread will take all the elements form oldArray/oldObject and add it to the newArray/newProp
// with any other elements we want to add
const newArray = [...oldArray, 1, 2]
const newObject = { ...oldObject, newProp: 5 }

// array
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6];
console.log(newNumbers); //prints [1, 2, 3, 4, 5, 6]

// object
const person = {
  name: 'John',
}
3
const newPerson = {
  ...person,
  age: 21
}
console.log(newPerson) // prints object {John, 21}


// rest = { ...}
// used to merge a list of function arguments into an array
// 
function sortArgs(...args) {
  return args.sort();
}

const filter = (...args) => {
  return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3)); //prints [1]
// -----------------------------------------------------------------------------------------------


// destructuring
// easily extract array elements or object properties and store them in variables

// array destructuring
const numbers = [1, 2, 3,];
[num1, , num3] = numbers;
console.log(num1, num3) // prints 1, 3 because we are only destructuring those 2 from the array, leave blank space , , to skip 2

// object destructuring
{ name } = { name: "John", age: 21 }
console.log(name) // prints "John"
consle.log(age) // prints undefined because we only destructure name
// -----------------------------------------------------------------------------------------------


// array functions refresh
const numbers = [1, 2, 3,];

// map returns a new array
const doubleNumArray = numbers.map((num) => {
  return num * 2;
});
console.log(numbers) // prints 1,2,3
console.log(doubleNumArray) // prints 2,4,6 as a new array


//Particularly important in this course are JS Array Functions:

// map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice