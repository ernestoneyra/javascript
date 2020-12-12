/*Skriv en funktion som tar ett år (number) som parameter och returnerar true om året är ett skottår, annars false.
Skriv en annan funktion som tar två parametrar, start_year och end_year, och som skriver ut varje år i intervallet och om året är ett skottår eller inte.*/


/*
function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 !== 0) return true;
    return year % 4 === 0;
  }*/


function leap_years(start_year, end_year)
{
    

    for ( let year = start_year; year <= end_year; year++)
    {

        if (year % 400 === 0)
        {
            console.log(`${year} is leap year`)
        }
        if (year % 100 === 0) 
        {
            console.log(`${year} is not leapyear`);
        }
        if (year % 4 === 0)
        {
            console.log(`${year} is a leap year`)
        }


    }
}

leap_years(1900,1950);