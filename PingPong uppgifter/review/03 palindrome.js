/*En palindrom är en följd av skrivtecken som, med blanksteg och skiljetecken exkluderade, förblir oförändrad om man läser den baklänges. [...] Några exempel är "Naturrutan", "kajak", "tillit".

Skapa en funktion som kontrollerar om en sträng är ett palindrom eller inte. Prova den med några strängar.

Ni talar bra latin // true
Lorem ipsum // false*/


function palindrome(str)
{
    //let str = string.split('').join('');
    let reverse_str = str.split('').reverse().join('')
    
    str = str.replaceAll(' ', '').toLowerCase(); // väldigt viktigt
    reverse_str = reverse_str.replaceAll(' ', '').toLowerCase(); // väldigt viktigt

    if (str === reverse_str)
    {
        console.log(`${str} är ett palindrom`);
    }else
    {
        console.log(`${str} är inte ett palindrom`);
    }
    
}


palindrome('racecar racecar');
palindrome('skog ipsum');
palindrome('ni talar bra latin');

