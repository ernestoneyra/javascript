/*Skriv en funktion som tar emot två arrayer som parametrar och lägg till den ena arrayens innehåll i den andra arrayen och returnerar den med hjälp av spread-operatorn.

Tips: https://davidwalsh.name/spread-operator*/



function combine()
{
    let arr1 = [2, 3, 4, 5, 6,];
    let arr2 = [1,3,5,6,7,8,9,];

    //let output = [...arr1, ...arr2];
    let output = arr1.concat(arr2);
    console.log(output);
}

combine();