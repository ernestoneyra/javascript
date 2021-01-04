const students = [];

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

const sum = students.reduce(((accumulated, students) => accumulated + students.age), 0);

let average = sum / students.length;

console.log(average);
