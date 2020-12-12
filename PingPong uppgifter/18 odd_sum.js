/*Skriv en funktion som tar emot ett okänt antal tal i en rest-parameter och räknar ihop summan av alla udda tal och returnerar det.

Använd en filter-funktion och en reduce-funktion.*/

function odd_sum(...numbers)
{                                               // returnerar siffror som ej är jämnt delbara med 2.
    /*numbers = numbers.filter(current_number => current_number % 2 !== 0);
                            //ackumulerade värdet, value det värde vi är på just nu.  0 är accumulateds värde från början.
    numbers = numbers.reduce((accumulated, value) => accumulated + value, 0);*/

    return numbers  // chain together.
                    .filter(current_number => current_number % 2 !== 0)
                    .reduce((accumulated, value) => accumulated + value, 0);

}
  

console.log(odd_sum(1,2,3,4,5,6,7));