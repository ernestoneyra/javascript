class Vehicle {
    constructor(make = "", model = "", color = "", no_of_wheels = 4){
        this.make = make;
        this.model = model;
        this.color = color;
        this.no_of_wheels = no_of_wheels;
    }
}

class Motorcycle extends Vehicle {
    constructor(make = "", model = "", color = "", no_of_wheels = 2){
        super(make, model, color, no_of_wheels);
        
        
    }
}

let car = new Vehicle("Ford", "Focus", "black");
console.log(car);

let bike = new Motorcycle("Suzuki", "model", "White");
console.log(bike);