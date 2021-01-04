/*• Skriv klassen Die med egenskapen value.
• Lägg till metoden throw() som ger tärningen ett nytt värde från 1 till 6.
• Anropa metoden throw() i konstruktorn.
• Skriv klassen Dice med egenskapen dice, som ska innehålla en array.
• Låt konstruktorn ta emot en parameter som säger hur många träningar vi vill skapa med default-värdet 5 och lägga till så många objekt av klassen Die i egenskapen dice.
• Lägg till metoden throw() som slår alla tärningarna med hjälp av metoden throw() i Die-klassen.*/

class Die
{
    constructor(value = 0)
    {
        this.value =  value;
        this.throw();
    }
    throw()
        {
            this.value = Math.ceil(Math.random() * 6) + 1;
        }
}

class Dice
{
    constructor(no_of_dice = 5) // ta emot en parameter. default värde 5.
    {
        this.dice = []; // . egenskaper.

        for (let i = 0; i < no_of_dice; i++) //skapar nytt objekt och pushar upp.
        {
            let current_dice = new Die(); // innehåller ett objekt av klassen dice.current_dice är ett objekt. 

            this.dice.push(current_dice); // pushar till arrayen this.dice
        }
    }

    throw()
    {
        for (let current_die of this.dice)
        {
            current_die.throw();
        }
    }
}

let dice = new Dice();

for ( let x = 0; x < 5; x++)
{
    dice.throw();
    console.log(dice);
}
