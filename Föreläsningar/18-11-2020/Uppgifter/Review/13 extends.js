class car
{
    constructor(make, model)
    {
        this.make = make;
        this.model = model;
    }
    print()
    {
        console.log("car " + this.make);
    }
}

// den nya klassen som ärver car klassens constructor, dvs make och model.
class sportCar extends car
{
    constructor(make, model, color)
    {
        console.log("creating car with color");
        super(make, model); //kallar på car klassens make och model, dvs constructor.
        this.color = color; //den här är i denna klassens constructor. ärvs inte.
    }
    print()
    {
        console.log("sportcar: ");
        super.print(); // skriver ut metoden från class car för att metoden har samma namn och jag  använder super. samma regel som constructorn.
    }

}

let car1 = new car("Honda ", "Civic");
console.log(car1);
car1.print();

let sportCar1 = new sportCar("Aviot", "Sky", "black");
console.log(sportCar1);
sportCar1.print();
