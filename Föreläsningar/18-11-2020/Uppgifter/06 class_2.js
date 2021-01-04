class Computer {
    constructor(name, age){
        this.name = "John";
        this.age = 45;
    }
    greeting(){
        console.log("Hello, " + this.name);
        console.log("Your age is " + this.age)
    }
}

let model = new Computer();

model.greeting();