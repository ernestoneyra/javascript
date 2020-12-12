/*Skriv en klass som beskriver böcker och en klass som beskriver författare.
Ge författar-klassen egenskapen books och låt den innehålla de bok-objekt som författaren har skrivit.
Skriv en metod i bok-klassen som skriver ut boken på något bra sätt, t ex: "Mio, min Mio, 373 sidor, äventyr". (Ni får anpassa lite om ni vill.)
Skriv en metod i författarklassen som skriver ut alla författarens böcker.
Skriv en metod i författarklassen som sorterar hens böcker på titel.
Skriv en metod i författarklassen som sorterar hens böcker på utgivningsår.*/


class Books
{
    constructor(title, /*author,*/ year, pages, genre = []) //genre är en array.
    {
        this.title = title;
        //this.author = author;
        this.year = year;
        
        this.pages = pages;
        this.genre = genre;
        //this.language = language;
    }
    print()
    {
        console.log(`${this.title}, published ${this.year}, ${this.pages} sidor, genre: ${this.genre}`);
    }

    
    static sort_by_title(book_a, book_b)
    {
        if (book_a.title < book_b.title)
        {
            return -1;
        }
        if (book_a.title > book_b.title)
        {
            return 1;
        }
        return 0;
    }
    static sort_by_year(book_a, book_b)
    {
        return book_a.year - book_b.year;
    }

}


class Author
{
    constructor(name, age, country)
    {
        this.name = name;
        this.age = age;
        this.country = country;
        this.book = [];
    }
    add_book(add_title, add_year, add_pages, add_genre = [])
    {
        let book1 = new Books(add_title, add_year, add_pages, add_genre);
        this.book.push(book1);
       
    }
    print()
    {
        for (let current_book of this.book)
        {
            current_book.print();
        }
       
    }
    
}



let writer1 = new Author('Crusoe', 56, 'England');
let writer2 = new Author('Rowling', 34, 'England');
let writer3 = new Author('Tolkien', 54, 'USA');
let writer4 = new Author('Planey', 33, 'France');


writer1.add_book('Potter', 1999, 276, ['fantasy', ' adventure', ' magic']);
writer1.add_book('Arvvinge', 1879, 154, ['adventure', ' chill']);
writer1.add_book('Rings', 1989, 321, ['fantasy', ' fiction', ' thrill']);
//writer4.add_book();



writer1.print();
console.log('-----------------------');
writer1.book.sort(Books.sort_by_title);
writer1.print();
console.log('--------------------------')
writer1.book.sort(Books.sort_by_year);
writer1.print();

/*writer1.book[0].print();
writer1.book[1].print();
writer1.book[2].print();*/


//console.log(writer1);
console.log(writer2);
writer2.print();
//console.log(writer3);
//console.log(writer4);


//let book1 = new Books('Robinson', 1879, 154, ['adventure', 'chill']); //genre är en array så det måste vara inom [].
//let book2 = new Books('Potter', 1998, 276, ['fantasy', 'adventure', 'magic']);
let book3 = new Books();
let book4 = new Books('Frankenstein', 1904, 243, ['action', 'horror']);

/*
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);*/