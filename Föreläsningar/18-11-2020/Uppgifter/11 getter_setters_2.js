class Subject{
    constructor(title = "Science", points = 43){
    this.title = title;
    this.points = points;
    
    }
}

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.subjects = ['JS', 'English', 'French', 'Spanish'];
    }
    get latest() {
        if (this.subjects.length === 0) {
            return this.subjects;
        }
        return this.subjects(this.subjects.length - 1)
    }
    
  
   add_subject(title = "", points = 0) {
    this.subjects.push(new Subject(title, points));
   }
}

let student1 = new Student("John", 44);

student1.add_subject("JS", 44);
student1.add_subject("PHP", 67);

console.log(student1);

/*class Test{  Getter
    constructor() {
        this.log = ['a', 'b', 'c', 'd'];
        
    }
    get latest() {
        if (this.log.length === 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    }
}

let obj = new Test();

console.log(obj.latest);*/

/* Setter
const language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log);

/*class Test {  Setter
    constructor() {
        this.log = [];
    }
    current(name) {
        this.log.push(name);
    }
}

let obj = new Test();
obj.current('a');
obj.current('b');

console.log(obj);*/