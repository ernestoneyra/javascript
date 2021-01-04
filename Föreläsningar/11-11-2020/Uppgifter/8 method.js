let course = {
    students: [
        "Kalle",
        "Jessica",
        "Stina",
        "Ali"
    ],
    oldteacher: "Micke",
    newteacher: "Johan",
    schedule: ["Måndag", "Onsdag"],
    hello: function () {
        console.log("Hello " + this.newteacher);
    },
    goodbye: function() {
        console.log("Goodbye " + this.oldteacher);
    }
};
course.hello();
course.goodbye();
