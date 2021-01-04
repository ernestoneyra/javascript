/*let points = [1,30,24,88,10,1000];

console.log(points);

points.sort(function (a, b) {
    return a - b;
});

console.log(points);

points.sort(function(a,b) {
    if (a < b){
        return -1;
    }
    if (a > b){
        return 1;
    }
    return 0;
});
console.log(points)*/


  



let person = [
    person1 = {
        name: "Herman",
        age: 45,
        färg: "blå"
    },
    person2 = {
        name:"Anders",
        age: 54,
        färg: "grön"
    },
    person3 = {
        name:"Anders",
        age: 50,
        färg: "grön"
    },
    person4 = {
        name:"Göran",
        age: 32,
        färg: "gul"
    }
];

console.log(person);

person.sort(function (a, b){
    if (a.name < b.name){
        return -1;
    }
    if (a.name > b.name){
        return 1;
    }
    if (a.age < b.age){
        return -1;
    }
    if (a.age > b.age){
        return 1;
    }
    return 0;
});

console.log(person);

