/*Del 1
x Skapa klassen Vehicle med egenskaperna model, make, color, speed, no_of_wheels samt x x x x x max_speed.
x Skapa klasserna Truck, Motorcycle och Car som ärver från Vehicle. Konstruktorerna ska kalla x på föräldrakonstruktorerna.
x Truck ska ha max-hastigheten 50, Motorcycle ska ha max-hastigheten 200 och Car ska ha 180. x Dessa värden ska inte kunna ändras i konstruktorn.
x De andra egenskaperna ska kunna sättas i konstruktorn.
x Egenskapen no_of_wheels ska ha olika default-värden för olika klasser (MC: 2, bil: 4,       x lastbil: 6) men man ska kunna ange no_of_wheels i konstruktorn om man vill.

Del 2
x Klassen Vehicle ska ha metoderna speed_up() och speed_down(). Metoderna ska ta en parameter x som säger hur mycket hastigheten ska ändras. Om hastigheten är 100 och du anropar speed_up  x (5) så ska den nya hastigheten bli 105.
x Du ska kontrollera så att hastigheten inte överstiger max_speed eller understiger 0. Om    x hastigheten exempelvis är 10 och du anropar speed_down(15) så ska hastigheten bli 0.
x Vehicle ska ha metoden print() som skriver ut ett fordon.

Lägg till minst två fordon av vardera Truck, Motorcycle och Car och skriv ut dem. Visa att dina metoder speed_up och speed_down fungerar.*/

class Vehicle
{
    constructor(make, model, color, speed, no_of_wheels, max_speed)
    {
        this.model = model;
        this.make = make;
        this.color = color;
        this.speed = speed;
        this.no_of_wheels = no_of_wheels;
        this.max_speed = max_speed;
    }
    speed_up(speed_change)
    {

        if ((this.speed +  speed_change) <= this.max_speed)
        {
            this.speed += speed_change;
        }
        else
        {
            this.speed = this.max_speed;
        }
        
    }
    speed_down(speed_change)
    {
        if ((this.speed - speed_change) >= 0)
        {
            this.speed -= speed_change;
        }
        else
        {
            this.speed = 0;
        }
        
    }
    print()
    {
        console.log(`Märke ${this.make} modell ${this.model} färg ${this.color}`);
    }
 
}



class Truck extends Vehicle
{
    constructor(make, model, color, speed = 0, no_of_wheels = 6) // man ska inte kunna ändra max_speedd i consrtructor.
    {
        super(make, model, color, speed, no_of_wheels, 50)
    }
    
}

class Motorcycle extends Vehicle
{
    constructor(make, model, color, speed = 0, no_of_wheels = 2)
    {
        super(make, model, color, speed, no_of_wheels, 200)
    }
}


class Car extends Vehicle
{
    constructor(make, model, color, speed = 0, no_of_wheels = 4)
        {
            super(make, model, color, speed, no_of_wheels, 180)
        }
}



let car1 = new Car('Honda', 'Civic', 'blue');
let truck1 = new Truck('Volvo', 'Tigs', 'silver');
let mc1 = new Motorcycle('Suzuki', 'Dragster', 'red');

car1.print();
truck1.print();
mc1.print();




/*
console.log(car1);
console.log(truck1);
console.log(mc1);
mc1.speed_up(200);
console.log(mc1);
mc1.speed_up(50);
console.log(mc1);
mc1.speed_down(260);
console.log(mc1);*/