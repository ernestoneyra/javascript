/*const myArray = [1,2,3,4,5,6,7,8,9,10];

const myEvenArray = myArray.filter((value,index,array) =>{ return value % 2 === 0;
});


console.log(myEvenArray);*/

let students = [];

students.push({
    name:"Johan",
    age:23,
    shoe_size:43
});

students.push({
    name:"Johanna",
    age:34,
    shoe_size:32
});

students.push({
  name: "John",
  age: 42,
  shoe_size: 52
});

students.push({
  name: "Jessica",
  age: 25,
  shoe_size: 36
});

students.push({
    name: "Annika",
    age: 56,
    shoe_size: 45
});

console.log(students);

let students_name = students
        .filter(students => students.age > 25)
        .map(students => students.name);



/*const older_than_25Array = students.filter(students => students.age > 25);

const students_name = older_than_25Array.map(students => students.name);*/

//console.log(older_than_25Array);
console.log(students_name);

