/*Skriv klassen Vehicle med egenskaperna make, model, color och no_of_wheels med default-värdet 4.
• Låt konstruktorn ta emot parametrar för samtliga egenskaper.
• Skriv klassen Motorcycle som ärver från Vehicle.
• no_of_wheels ska ha default-värdet 2.
• Skriv konstruktorn så att den kan skicka vidare alla konstruktor-parametrar till föräldraklassens konstruktor.
• Skapa objekt av båda klasserna och skriv ut dem.*/



class vehicle 
{
    constructor(make = "", model = "", color = "", no_of_wheels = 4)
    {
        this.make = make;
        this.model = model;
        this.color = color;
        this.no_of_wheels = no_of_wheels;
    }
    print()
    {
        console.log("vehicle no print: ");
    }
}

class motorcycle extends vehicle
{
    constructor(make = "", model = "", color = "", no_of_wheels = 2)
    {
      
        super(make, model, color, no_of_wheels);
        
    }
    print()
    {
        //console.log("motorcycle no print");
        super.print();
    }
  
}

let vehicle1 = new vehicle("Honda", "civic", "blue");
console.log(vehicle1);
vehicle1.print();


let mc1 = new motorcycle("suzuki", "sky", "black");
console.log(mc1);
mc1.print();
