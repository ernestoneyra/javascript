/*Skapa en funktion som tar emot en sträng och skapar en förkortning genom att ta den första bokstaven i varje ord och göra om dem till VERSALER.*/


function acronym(string)
{
    let str = string.split('');

 
    console.log(string.split(' ')
    .map(bokstav => bokstav[0])
    .join('').toUpperCase());
}


acronym('det här är en lång sträng');
/*
function big_letter(string)
{
    let str = string.split('');
    console.log(str.map(bokstav => bokstav.toUpperCase()));
    //ska kolla igenom arrayen och plocka ut första bokstaven.
    //for (let letter of str)
    {
        //console.log(letter.charAt(0,1));
    }
}



big_letter('det här en lång sträng');*/