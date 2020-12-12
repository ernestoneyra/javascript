/*Skriv en funktion som jämför två tal och returnerar det största.*/

function biggest_number(...numbers)
{
    numbers.sort((a, b) => a-b);
    console.log(numbers);
    
    
}
biggest_number(29, 29, 9, 30, 13);