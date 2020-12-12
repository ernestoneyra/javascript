//Skriv en funktion som tar emot ett objekt och skriver ut dess egenskaper. Objektet kan vara vilket som helst, men här är ett exempel:

let student = {
  name : "Jessica",
  age : 44,
  grade : "VG"
};

console.log(Object.keys(student));


/*
Utskrift: name,age,grade
Ni kan ha nytta av denna dokumentation:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

 */



 
// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  } 
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']