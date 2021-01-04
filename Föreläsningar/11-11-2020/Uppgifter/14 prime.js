/* 

Ett primtal är bara jämnt delbart med sig själv. Skriv en funktion som tar en parameter och kontrollerar om talet är ett primtal eller inte.

*/

//let pr = 7;

function prime(pr)
{
    if (pr % 2 !== 0)
    {
        console.log(pr + " Detta är ett primtal.");
    }
    else
    {
        console.log(pr + " Detta är inte ett primtal");
    }
}

prime(7);