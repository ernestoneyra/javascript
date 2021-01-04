/*Konstruktorn är en vanlig funktion. Den kan ta emot parametrar. Det är vanligt att använda dem till att sätta egenskaper.*/

class computer
{
    constructor(make, model)
    {
        this.make = make;
        this.model = model;
    }
}

let lenovo = new computer('lenovo', 'ideagaming');
console.log(lenovo);