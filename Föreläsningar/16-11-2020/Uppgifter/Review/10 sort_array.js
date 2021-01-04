/*let numebers = 
[
    2,8,1,6,0,4,5,7,100,234
]
let sortednumbers = numebers.sort(function(a, b)
{
    return a-b;
});

console.log(sortednumbers);*/

/*let name = 
[
    'kalle',
    'johan',
    'annika',
    'örjan',
    'xerxes'
]

let sortedNames = name.sort();

console.log(sortedNames);*/

/*function compare(c, g)
{
    if (c < g)
    {
        //console.log('Yasuko is the best');
        return -1;
    }
    if (c > g)
    {
        return 1;
    }
    return 0;
}

console.log(compare(2, 5));*/
/////////////////////////////////////////////////////////////////////////

/*let tal = [
    1, 7, 2, 4, 243, 1009, 567, 65,33
]

tal.sort(function (a, b)
{
    
    return a - b;
});

console.log(tal);*/
/////////////////////////////////////////////////////////////////


let person =
[
    pers1 = 
    {
        name: 'rjan',
        color: 'blue',
        shoes: 23
    },
    pers2 = 
    {
        name: 'seito',
        color: 'blakc',
        shoes: 23
    },
    pers3 =  
    {
        name: 'azzle',
        color: 'red',
        shoes: 25
    },
    pers4 =  
    {
        name: 'azzle',
        color: 'blue',
        shoes: 25
    },
    pers45 =  
    {
        name: 'seito',
        color: 'black',
        shoes: 25
    },
]


person.sort(function (a, b)
{
    if (a.name < b.name)
    {
        return -1;
    }
    if (a.name > b.name)
    {
        return 1;
    }
    if (a.shoes < b.shoes)
    {
        return -1;
    }
    if (a.shoes > b.shoes)
    {
        return 1;
    }
    if (a.color < b.color)
    {
        return -1;
    }
    if (a.color > b.color)
    {
        return 1;
    }
    return 0;
});

console.log(person);