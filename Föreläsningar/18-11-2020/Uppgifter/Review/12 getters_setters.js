/* The get syntax binds an object property to a function that will be called when that property is looked up.*/

const obj =
{
    log: ['a', 'b', 'c', 'd'], // d är det senaste så det är den som skrivs ut med latest.
    get latest()
    {
        if (this.log.length === 0)
        {
            return undefined;
        }
        return this.log[this.log.length -1];
    }
};

console.log(obj.latest);

/*The set syntax binds an object property to a function to be called when there is an attempt to set that property.*/

const language =
{
    set current(name)
    {
        this.log.push(name);
    },
    log:[]
};

language.current = 'EN';
language.current = 'FR';

console.log(language.log);

/*Getters och setters ser ut som egenskaper för ”användaren”, men är metoder. Det ger oss bättre möjligheter att kontrollera hur värden används, t ex för felkontroll.*/

class subject
{
    constructor(title = "", points = 0)
    {
        this.title = title;
        this.points = points;
    }
}

class student
{
    constructor(title, points)
    {
        this.title = title;
        this.points = points;
        this.subjects = [];
    }
    add_subject(title = "", points = 0)
    {
        this.subjects.push(new subject(title, points));
    }
    get courses()
    {
        return this.subjects
        .map(current_subject => current_subject)
        .join(', ')
    }
    set courses(title)
    {
        if (this.subjects.length < 3)
        {
            this.subjects.push(new subject(title));
        }else
        {
            console.log('too many subjects hahaha');
        }
    }
}

let nagato = new student("nagato", 16);

/*nagato.add_subject('PHP');
nagato.add_subject('JS');
nagato.add_subject('english');*/

nagato.courses = 'cooking';
nagato.courses = 'ramverk';
nagato.courses = 'api';
nagato.courses = 'pasocon';

console.log(nagato);


