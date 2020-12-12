//Ett primtal är bara jämnt delbart med sig själv. Skriv en funktion som tar en parameter och kontrollerar om talet är ett primtal eller inte.

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97


function prime(n)
{   // om man väler 1 blir det false. 
    if (n < 2)
    {
        return false;
    }
    //börja från 2 för att primtal börjar från 2.
    // kollar bara upp till n nummret.
    for (let x = 2; x < n; x++)
    { // x är fortfarande lika med 2. nedanstående betyder n % 2 === 0(om n är jämnt delbart delbart med 2. eftersom det inte stämmer blir det false.)
        if (n % x === 0)
        {
            return false;
        }
    }
    //kommer man hit, då är det ett primtal. 
    return true;

}

// så länge talet är mindre än 100 kommer loopen och prime function att köras. console.log() finns inne i loopen.
for (let x = 1; x<100;x++)
{
    if (prime(x) )
    {
        console.log(x)
    }
}