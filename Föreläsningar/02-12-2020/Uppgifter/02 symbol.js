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