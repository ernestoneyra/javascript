/* 

Skriv en funktion som tar ett år (number) som parameter och returnerar true om året är ett skottår, annars false.

Skriv en annan funktion som tar två parametrat, start_year och end_year, och som skriver ut varje år i intervallet och om året är ett skottår eller inte.

*/

function leapyear(year)
{
    return ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0));
    
}
console.log(leapyear(2021));


/*let start_year = 1900;
let year_end = 2020;


function skottAr()
{
    for (i = 1900; i < 2021; i++)
    {
        if ((i % 4 === 0) && (i % 100 !== 0) || (i % 400 === 0))
        {
            console.log(i + " Är ett skottår!");
        }
        else
        {
            console.log(i);
            

        }
    }
}

skottAr();*/