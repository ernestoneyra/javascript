/*Skriv funktioner som tar emot strängar och returnerar:

Antalet bokstäver i ett ord i genomsnitt.
Det mittersta ordet.*/

//Det längsta ordet.
function findLongestWord(string)
{
    //split string into an array
    const wordArray = string.split(' ');
  
    //order the length of words in the array from highest to lowest using the sort array method 
    const sorteredArray = wordArray.sort((a, b) => b.length - a.length)
  
    //pick out the longest which would be the first item in the array with index 0
    const longestWord2 = sorteredArray[0]
    return longestWord2
  
}
  
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

//Det kortaste ordet.
function findShortestWord(str)
{
    let shortWordArr = str.split(' ')

    let sortedtext = shortWordArr.sort((a, b) => a.length + b.length)

    let shortestWord2 = sortedtext[0]
    return shortestWord2
}



console.log(findShortestWord('The quick brown fox jumped over are the lazy dog'));
