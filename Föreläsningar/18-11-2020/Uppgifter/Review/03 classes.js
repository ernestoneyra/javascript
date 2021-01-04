/* Klasser är lite som ritningar eller mallar för objekt.
Varje objekt som skapas från en klass, eller instansieras, kommer att innehålla alla de egenskaper och metoder som klassen innehåller.*/

//class onePiece{}

/* Man instansierar ett objekt genom nyckelordet new.*/

/*let newPiece = new onePiece();
console.log(newPiece);*/

class bok
{
    constructor (namn, kapitel)
    {
        this.namn = namn;
        this.kapitel = kapitel;
    }
}

let kapitel = new bok('hemingway', 'alone on the island'); //de tidigare parametrarna måste in inom bok() paranteserna.
console.log(kapitel);