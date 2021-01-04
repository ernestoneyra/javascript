/*let name = 'Bob', time = 'today';
'Hello ' + name + ', how are you' + time + '?'

console.log();*/

let name = 'Bob', time = 'today';

let person = 
{
    name: 'Annika',
    age: 34
}

function age()
{
    return 28;
}

let test = `Hello ${name}, how are you ${age()}?`;

console.log(test);

console.log(`Hello ${person.name}, how are you ${person.age}?`);

console.log(`Hello ${person.name}, how are you ${age()}?`);