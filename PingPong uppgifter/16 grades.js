//Skapa en array som innehåller 10 provresultat, tal från 0 till 100, motsvarande hur många procent man klarat på tentan. Loopa igenom arrayen och skriv ut varje resultat och vilket betyg man får för detta resultat om gränsen för G går vid 50% och gränsen för VG går vid 80%.

/*function grades()
{
    let score = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    for (let index = 0; index < score.length; index++)
    {
        if (index <= 40)
        {
            console.log(`${index} betyg är IG`);
        }
        if (index > 40 && index <= 70)
        {
            console.log(`${index} Betyg är G`);
        }
        if ( index >= 80)
        {
            console.log(`${index} Betyg är VG`)
        }
    }

}
grades();*/
/*
let score = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (index = 0; index < score.length; index++)
{
    
    let result = score[index];
    let grade;

    if (result < 50)
    {
        grade = 'IG';
    }
    else if (result >= 50 && result < 80)
    {
        grade = 'G';
    }
    else 
    {
        grade = 'VG';
    }
    console.log(result + ' : ' + grade);
}*/




function grades(percentage)
{

    if (percentage < 50)
    {
       return 'IG';
    }
    else if (percentage < 80)
    {
        return 'G';
    }
    else 
    {
        return 'VG';
    }

}
let score = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let index = 0; index < score.length; index++)
{
    let result = score[index];
    let grade = grades(result);

    console.log(result + ' : ' + grade);
}
