/*An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

Man behöver inte använda return i funktionen*/

//let hej = (a, b) => /*return*/ a+b;

// Eller

//let hej = (a, b) => {return a+b}; // {} behövs egentligen nte här.

/* Om det endast finns 1 parameter kan man skippa paranteserna.

*/

//let hej = a => a;

let value = 5; 

[1,2,3,4].filter(function(value)
{
    return value % 2 === 0;
});

[1,2,3,4].filter(value => value % 2 === 0);

