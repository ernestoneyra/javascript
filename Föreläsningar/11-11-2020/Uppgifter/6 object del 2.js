/*let students = [
    "Lisa",
    "Jessica",
    "Ali", 
    "Johan",
    "Stina"
];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);*/
/*Arrays börjar på 0*/
/*Skriver varje array var för dig*/

/*console.log(students)*/
/*Skriver ut varje array i listan*/

/*let vehicle = {
    maker: {
        name: "Peugot",
        country: "France"
    },
    model: "407SW",
    color: "silver",
    speed: "245km/h"
};

console.log(vehicle.maker.country);
console.log(vehicle.color);*/


let course = {
    students: [
        "Lisa",
        "Jessica",
        "Andrea",
        "Erika",
        "Daniel"
    ],
   
    course: "Javascript",
    teachername: {
        first: "Jonas",
        last: "Johansson"
    },
    schedule: [
        "Monday",
        "Wednesday"
    ],
        
        time: "08:00-17:00",
    place: "school",
    list_students: function() {​​​​​
        for ( let i = 0; i < this.students.length; i++) {​​​​​
        console.log(this.students[i]);
        }​​​​​
        }​​​​​,
}
course.list_students();
console.log(course);


/* course.print();
print: function() {
        console.log(list_students);
    },*/