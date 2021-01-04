/* Om vi vill använda en egenskap inuti objektet kan vi använda nyckelordet this. */

/*I klasser används this likadant. Vi använder this inuti klassen:
• Om vi vill använda en egenskap.
• Om vi vill anropa en metod.*/

/*class kaffe
{
    constructor()
    {
        this.make = "volvo";
        this.model = "v70";
    }
    print()
    {
        //Likadant om vi vill komma åt egenskaper i andra metoder.
        console.log('denna bil är en ' + this.make + ' modell är ' + this.model);
    }
}

let car = new kaffe();
car.print();*/

class test
{
    constructor()
    {
        this.name = 'anders';
        this.age = 45;
    }
    greeting()
    {
        console.log('Hello ' + this.name + ' din ålder är ' + this.age );
    }
}

let honki = new test();
honki.greeting();