/*Det är vanligt att låta konstruktorn ta emot parametrar men att ge dem default-värden.*/

/*class Vehicle
{
    constructor(make = 'ford')
    {
        this.make = make;
    }
}
let car = new Vehicle();
let car1 = new Vehicle('vovlo');

console.log(car);
console.log(car1);*/

class floor
{
    constructor(name = '', building = 0)
    {
        this.name = name;
        this.building = building;
    }
    print()
    {
        console.log('this buildings name is ' + this.name + ' and age is ' + this.building + '.');
    }
}

let thFloor = new floor();

thFloor.print();