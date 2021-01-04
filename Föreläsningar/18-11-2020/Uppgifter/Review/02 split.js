/*str.split([separator[, limit]]) används för att dela upp en sträng till en array.*/

let text = 'The fast white horse jumped over a fence next to a dog.';

let vocal = text.split(' '); // texten blir en array ''. först en seperator, som vi gjorde tidigare i join. 
console.log(vocal[3]); // prints out the index number of the array, which is horse.
// prints horse because horse has an index of 3
