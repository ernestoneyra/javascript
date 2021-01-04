/*

Skapa en array som innehåller 10 provresultat, tal från o till 100, motsvarande hur många procent man klarat på tentan. Loopa igenom arrayen och skriv ut varje resultat och vilket betyg man får för detta resultat om gränsen för G går vid 50% och gränsen för VG går vid 80%.

*/



let point = 
[
    "0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"
];

let pn = point.length; 

function grades()
{
    for (pn = 0; pn < 11; pn++)
    {
      
        if (pn <= 4)
        {
            console.log(point[pn] + " Betyg IG");
        }
        else if ((pn >= 5) && (pn <= 7))
        {
            console.log(point[pn] + " Betyg G");
        }
        else 
        {
            console.log(point[pn] + " Betyg VG");
        }
    }
}

grades();