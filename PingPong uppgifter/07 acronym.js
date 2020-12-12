//Skapa en funktion som tar emot en sträng och skapar en förkortning genom att ta den första bokstaven i varje ord och göra om dem till VERSALER.

function acronymn(string)
{
    return string.split(' ') // split on words boundaries (i, know, right). texten börjar högst upp bredvid function. för att den redan är definierad när man kommer hit kan man returnera den. 
    .map(letter => letter[0]) //get first letter of each letter (i, k, r). 0 is the first letter of the seperated words. index. 
    .join(', ').toUpperCase(); // convert to uppercase string. ('') is a seperator. now the result is I, K, R because the seperator is ('I, K, R')

}

console.log(acronymn('i know right'));