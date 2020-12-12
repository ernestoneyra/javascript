/*En palindrom är en följd av skrivtecken som, med blanksteg och skiljetecken exkluderade, förblir oförändrad om man läser den baklänges. [...] Några exempel är "Naturrutan", "kajak", "tillit".

Wikipedia

Skapa en funktion som kontrollerar om en sträng är ett palindrom eller inte. Prova den med några strängar.

Ni talar bra latin // true
Lorem ipsum // false*/


// program to check if the string is palindrome or not

/*function checkPalindrome(string) {

    // convert string to an array = .split
  

    // reverse the array values = .reverse
   

    // convert array to string = .join
    

    let reverseString = string.split('').reverse().join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
//const string = prompt('Enter a string: ');

checkPalindrome(Ni talar bra latin);*/

function palindrome(string)
{
  
    // convert string to an array = .split
    // reverse the array values = .reverse
    // convert array to string = .join
    let reversed = string.split('').reverse().join('');
    // The result after .split('').reverse().join('') is the same as the original string get true.
    if (reversed === string) 
    {
        return 'True, this is a palindrome';
    }
    
        return 'False, this is not a palindrome';

}

console.log(palindrome('abba abba'));

console.log(palindrome('hello world'));

console.log(palindrome('ni talar bra latin'));