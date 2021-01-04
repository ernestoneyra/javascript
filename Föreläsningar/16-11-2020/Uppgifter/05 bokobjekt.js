
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