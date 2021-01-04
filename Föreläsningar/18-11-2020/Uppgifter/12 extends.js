class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print(){
        console.log("person: " + this.name);
    }
}

// Den nya klassen ärver constructor från den andra klassen. används extends.
class Employee extends /* Arv */ Person {
     constructor(name, age, salary){
         console.log("Creating employe");
        
         super(name, age); //Kallaer class Persons constructor.

        this.salary = salary;

         
     }
    
    print() {
        console.log("employee: ");
        super.print(); // skriver ut metoden från class Person.
}
}


let person1 = new Person("Kalle", 33);
console.log(person1);
person1.print();

let employee1 = new Employee("Anders", 25, 25000);
console.log(employee1);
employee1.print();

