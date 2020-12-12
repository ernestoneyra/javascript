/*Del 1
x Skapa en klass för cirklar med lämpliga egenskaper.
x Skapa en metod som returnerar omkrets. (Kolla upp om det finns någon konstant för PI i x x x JavaScript.) Math.PI().
x Skapa en metod som returnerar area. The area of a circle is pi times the radius squared (A = π r²).
x Skapa en array som innehåller ett par olika cirklar.
x Skapa statiska sorteringsmetoder som sorterar cirklarna efter storleksordning.

Del 2
x Vi har en cirkel med radien x och en kvadrat som precis innesluter cirkeln.
x Skapa metoden circle_in_square_area som räknar ut den blå arean, arean i kvadraten som inte upptas av cirkeln.*/


class Circles
{
    constructor(radius)
    {
        this.radius = radius;
    }
    area()
    {
        return Math.PI * this.radius * this.radius;
    }
    omkrets()
    {
        return 2 * Math.PI * this.radius;
    }
    static sort_by_size(circle_a, circle_b)
    {
        return circle_a.radius - circle_b.radius;
    }
    circle_in_square_area()
    {
        return (4 * Math.pow(this.radius, 2)) - this.area();    
    }
    
}

let circle = 
[
    new Circles(16), //[0]
    new Circles(8), //[1]
    new Circles(2), //[2]
    new Circles(5), //[3]
    new Circles(20) //[4]
];



console.log(circle[1].circle_in_square_area());
/*
circle.sort(Circles.sort_by_size);
console.log(circle);*/

