class Test {
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

console.log(obj);