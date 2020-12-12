/*En fibonacci-sekvens består av en serie tal där man får nästa tal i ordningen genom att lägga ihop de två talen innan:

1 kommer från att lägga ihop de två talen i serien innan (0 + 1)
2 kommer från att lägga ihop de två talen i serien innan (1 + 1)
3 kommer från att lägga ihop de två talen i serien innan (1 + 2)
5 kommer från att lägga ihop de två talen i serien innan (2 + 3)
8 kommer från att lägga ihop de två talen i serien innan (3 + 5)
osv

Skriv en rekursiv funktion som räknar ut fibonacci-serien från 0 till ett godtyckligt tal.
Det ser ut att vara en loop för att fuktionen återkalllar sig själv hela tiden. number är antal gånger */
/*
function fibonacci(number)
{
    if ( number === 1)
    {
        return [0,1]; //en lista på siffror är en array. det här blir series. array length. intresserad av 0 och 1 från 3 så lengthg-2 och length-1
    }else

    {
        let series = fibonacci(number -1);
        series.push(series[series.length-2] + series[series.length-1]); // 0,1 från tidigare kod. sedan är man på 2 och då blir det (series[0]) + (series[1] för att man var på index 2 när man började igen. Sedan är man på index 3 så då blir det series[1] + series[2] vilket är 1+1)
        return series;
    }

    
}

console.log(fibonacci(8));*/



































//jag har en array som jag vill lägga in saker i. då måste jag välja arrray och .push() saker till den. 
function fibonacci(number)
{  
    if (1 === number)
    {
        return [0,1];
    }else
    {
        let series = fibonacci(number -1);
        series.push(series[series.length-2] + series[series.length-1]); /*//(2-2=0) + (2-1=1); på 2 index - 2. gå tillbaka 2 steg i indexet då kommer jag till 0. index -1 går tillbaka ett steg i indexet/ arrayen så kommer jag till 1 0+1 blir då 1.*/
        return series; // måste finnas. denna returneras till förra anropet. den ökar med den senaste siffran.
    }
        
        
        
}


console.log(fibonacci(8));