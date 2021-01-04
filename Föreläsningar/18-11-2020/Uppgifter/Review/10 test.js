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

