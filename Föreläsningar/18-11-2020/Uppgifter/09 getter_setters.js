class Test{
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

console.log(obj.latest);