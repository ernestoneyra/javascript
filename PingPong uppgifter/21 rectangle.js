/*Del 1
Skriv klassen Rectangle med egenskaperna width och height.
Lägg till parametrarna width och height i konstruktorn med default-värdena 6 och 4.
Lägg till metoder som returnerar rektangelns omkrets och area.
Skapa objekt och testa.
Del 2
Skriv klassen Square som ärver av klassen Rectangle. Fundera över hur många parametrar som kan vara lämpliga i konstruktorn.*/

class Rectangle
{
    constructor(width = 6, height = 4)
    {
        this.width  = width;
        this.height = height;
    }
    calc_omkrets()
    {
        return 2 * (this.width + this.height);

        /*return this.width * this.height;
        let area = this.height * this.width;
        let omkrets = (this.height * 2) + (this.width * 2);*/
    }
    calc_area()
    {
        return this.width * this.height;
    }


    /*
    let rektangel = 
    {

    }*/
}


class Square extends Rectangle
{
    constructor(/*width*/ side = 5)
    {
        super(side, side)// skickar man  2 gånger blir breddem och höjden samma. Super har två parametrar, därför måste man skicka in 2. 1 = side, 2 = side.
        //super(width);
        this.side = side;
        
    }
    //Jag kan använda metoderna i Rectangle klassen istället. 
    /*
    calc_square()
    {
        return this.side * 4;
    }*/
}

let square1 = new Square();
let square2 = new Square(6);
console.log(square1);
console.log(square2);
console.log('square1 omkrets är', square1.calc_omkrets(), 'cm');
console.log('square2 omkrets är', square2.calc_omkrets(), 'cm');
console.log('square2 omkrets är', square2.calc_square(), 'cm');



//Detta äe objekt. rectangle1 rectangle2 är object.
let rectangle1 = new Rectangle(); //() skrivs endast när man gör dem till object.
let rectangle2 = new Rectangle(10, 5);
console.log(rectangle1);
console.log(rectangle2);

console.log('omkretsen är', rectangle1.calc_omkrets(), 'cm');// glöm inte ()
console.log('omkretsen är', rectangle2.calc_omkrets(), 'cm');// glöm inte ()

console.log('arean är', rectangle1.calc_area(), 'cm'); // glöm inte ()
console.log('arean är', rectangle2.calc_area(), 'cm');// glöm inte ()