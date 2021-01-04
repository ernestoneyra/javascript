/* 

Skriv en funktion som tar emot ett okänt antal tal i en rest-parameter och räknar ihop summan av allla udda tal och returnerar det.

Använd en filter-funktion och en reduce-funktion.

*/



function sum(...numbers) {
  
    let uddatal = numbers.filter((value,index,array) => {return value % 2 !== 0;});
    console.log(uddatal);
    let uddasum = uddatal.reduce((acc, currValue) => {return acc + currValue}, 0);
    console.log(uddasum);
}

sum (3,5,6,9,21,5,6,7);