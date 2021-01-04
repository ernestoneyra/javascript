/*Om vi vill använda en metod inuti en klass använder vi också this.*/

class test
{
    constructor()
    {
        this.name = 'johanna';
        this.age = 18;
    }
    hello()
    {
        console.log('Jensa på dig ' + this.name + ' ålder är ' + this.age);
    }
    /*constructor()
    {
        this.name = 'anders';
        this.age = 45;
    }*/
    hejsan()
    {
        console.log('eller hur var det?');
    }
    greeting()
    {
        this.hello();
    }
}

let honki = new test();
honki.greeting();
honki.hejsan();