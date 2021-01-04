/*const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42*/

let obj =
{
   name: 'Anders',
   age: 44
};
Object.preventExtensions(obj);

let prop = 'name'
//console.log(obj[prop]);

//console.log(Object.keys(obj[prop]));

obj.namn = 'Lisa';
console.log(obj);