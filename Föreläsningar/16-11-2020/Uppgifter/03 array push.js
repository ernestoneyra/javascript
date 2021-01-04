/*let students = [];

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

console.log(students);*/

/*let students = [];

students.push({
  name: "Micke",
  age: 42,
  shoe_size: 43
});

students.push({
  name: "Jessica",
  age: 25,
  shoe_size: 36
});

console.log(students);*/

/*let books = [
    "Hemingway",
    "King",
    "Cruise"
];*/

let books = [];

let material = {
    title: "cruise",
    pages: 245,
    genre: "adventure"
};

books.push(material);

material = {
    title:"Hemingway",
    pages: 365,
    genre: "fun"

};

books.push(material);

material = {
    title: "King",
    pages: 123,
    genre: "horror"
};

books.push(material);


/*books.forEach(function(current_book) {
    console.log(current_book.title);
});*/

for (let current_book of books) {
    console.log(current_book.title);
}