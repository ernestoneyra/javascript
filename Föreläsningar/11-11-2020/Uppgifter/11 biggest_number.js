/* 

Skriv en funktion som jämför två tal och returnerar det största.

*/

let x = 7;
let y = 90;



function biggestNumber()
{
    if (x < y)
    {
        return(y);
        
    }
    else {
        return(x);
    }
}

console.log(biggestNumber());