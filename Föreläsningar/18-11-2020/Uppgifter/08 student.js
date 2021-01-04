/*class Vehicle {
    constructor(make = "Ford", model = "Focus"){
        this.make = make;
        thia.model = model;
       
    }

    hello(){
        console.log("hello");
    }
}

let car1 = new Vehicle("Volkswagen", "Passat");
let car2 = new Vehicle();


console.log(car1);
console.log(car2);*/

class Subject{
    constructor(title = "", points = 0){
    this.title = title;
    this.points = points;
    
    }
}

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.subjects = [];
    }
  
   add_subject(title = "", points = 0) {
    this.subjects.push(new Subject(title, points));
   }

   get courses()
        {
            //return ['JavaScript', 'PHP'].join(' + '); // Javascript + PHP
            return this.subjects /* Subject { title: 'JS', points: 44 },
                                    Subject { title: 'PHP', points: 67 }*/
            .map(current_subject => current_subject.title) // { 'JS', 'PHP'}
            .join(', ')
        }
        set courses(title)
        {
            if (this.subjects.length < 3)
            {
                this.subjects.push(new Subject(title));
            } else
            {
                console.log("Too many subjects");
            }
            
        }
}

let student1 = new Student("John", 44);

/*student1.add_subject("JS");
student1.add_subject("PHP");
student1.add_subject("Ramverk");*/

student1.courses = "Cooking";
student1.courses = "Cleaning";
student1.courses = "Shoppping";
student1.courses = "Trading";

console.log(student1);
