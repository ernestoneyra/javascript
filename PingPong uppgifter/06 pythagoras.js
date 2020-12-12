/*Denna uppgift kräver lite efterforskningar om hur trianglar, Pythagoras sats och kanske fler saker fungerar.

Skapa klassen Triangel med lämpliga egenskaper.
Summan av vinklarna i en triangel är 180 grader. Skriv metoden right_angled() som tittar på två av vinklarna i triangeln och räknar ut om triangeln är rätvinklig.
Skapa metoden hypotenuse() som räknar ut hypotenusan utifrån bredden och höjden */


class Triangel
{
    constructor(width, heigth)
    {
        this.width = width;
        this.heigth = heigth;
        this.angles = [];
    }
    right_angled()
    {
        let sum = this.angles.reduce((acc,current) => acc + current);
        return 90 === sum;
    }
    hypotenuse()
    {          //få tillbaka squareroot. (räkna ut this.width upphöjt till 2 + this.height upphöjt till två) Math.pow(xxx, 2 (upphöjt till))
        return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.heigth, 2));
    }
}
let triangle1 = new Triangel(10,15);
triangle1.angles.push(30);
triangle1.angles.push(60);

console.log(triangle1.hypotenuse());
