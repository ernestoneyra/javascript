/*• Ibland vill man kunna skriva metoder som inte direkt hör till ett objekt. Det kan man göra genom att skriva statiska metoder med hjälp av nyckelordet static.
• Man anropar metoden genom att ange klassens namn.*/


class Vehicle 
{
    static print()
    {
        console.log("This is a common text, not associated with any vehicle in particular.");
    }
}

Vehicle.print();

/*• Man kan också göra statiska egenskaper. Vad har Rectangle.counter för funktion?*/

class Rectangle
{
    constructor()
    {
        console.log("Creating rectangle");
        Rectangle.counter++;
    }
}


/*• Statiska egenskaper fungerar inte i alla browsers/ JS-motorer än.*/

