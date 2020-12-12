/*Skriv en funktion som tar ett år (number) som parameter och returnerar true om året är ett skottår, annars false.
Skriv en annan funktion som tar två parametrar, start_year och end_year, och som skriver ut varje år i intervallet och om året är ett skottår eller inte.*/
/*
function leaps(year)
{
    if (year % 100 !== 0 || year % 400 === 0 || year % 4 === 0)
    return true;
    return false;
}
console.log(leaps(1900));*/

function leap_year(start_year, end_year)
{
    for (let year = start_year; year <= end_year; year++)
    {
        if (year % 100 === 0 || year % 400 === 0 || year % 4 === 0)
        {
            console.log(year + ' detta är ett leap year');
            
            
        }
        else
        {
            console.log(year + ' detta är inte ett leap year');
            
        }
    }
    
}

leap_year(1900, 1920);
