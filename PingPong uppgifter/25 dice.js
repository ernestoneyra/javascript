/*x Skriv klassen Die med egenskapen value.
x Lägg till metoden throw() som ger tärningen ett nytt värde från 1 till 6.
x Anropa metoden throw() i  konstruktorn.
x Skapa ett objekt av klassen, anropa throw() några gånger och skriv ut objektet efter varje gång så du ser att värdet ändras.
x Skriv klassen Dice med egenskapen dice, som ska innehålla en array.
x Låt konstruktorn ta emot en parameter som säger hur många tärningar vi vill skapa med default-värdet 5 och lägg till så många objekt av klassen Die i egenskapen dice.
Lägg till metoden throw() som slår alla tärningarna med hjälp av metoden throw() i Die-klassen.
Skapa ett objekt av klassen, anropa throw() några gånger och skriv ut objektet efter varje gång så du ser att värdena ändras.*/

class Die //Skriv klassen Die med egenskapen value.
{
    constructor(/*value*/)
    {
        this.value = null /*value*/;
        this.throw(); //Anropa metoden throw() i  konstruktorn.
    }
    throw()
    {   // Lägg till metoden throw() som ger tärningen ett nytt värde från 1 till 6.
        this.value = Math.floor(Math.random() * 6) + 1; // maxvärde är 6 och min värde är 1.
    }
}

class Dice //Skriv klassen Dice med egenskapen dice, som ska innehålla en array.
{
    constructor (throw_dices = 5) //Låt konstruktorn ta emot en parameter som säger hur många tärningar vi vill skapa med default-värdet 5
    {
        this.dice_obj = []; //Skriv klassen Dice med egenskapen dice, som ska innehålla en array. detta är en egenskap.
        //this.throw_dices = throw_dices;

      
        for (let dice_counter = 0; dice_counter < throw_dices; dice_counter++)
        {
            this.dice_obj.push(new Die());
        }
    }
    throw()
    {
        for (let current_dice of this.dice_obj)
        {
            current_dice.throw();
        }
    }
    
}

//let kasta = new Die(); //Skapa ett objekt av klassen

let dice_example = new Dice(); //anger antalet tärningar. () blir default värdet 5.
console.log(dice_example);

dice_example.throw(); // dice_example är Dice klassen. .throw() är throw metoden i Dice klassen. class Dice --> throw().
console.log(dice_example);


/*for (let i = 0; i < 10; i++) //kastar tärningen upp till 10 gånger. Man kan säga att i är tärningsnummer. börjar på 0 kastas upp till 10 gånger kastats 1 gång i taget.
{
    kasta.throw();//anropa throw() några gånger och skriv ut objektet efter varje gång så du ser att värdet ändras.

    console.log(kasta);
}

*/