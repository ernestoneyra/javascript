/*The split() method is used to split a String object into an array of strings by separating the string into substrings.
console.log(str.split(' '));
Output : ["the", "quick", "brown", "fox"] //Substrings (0, 1, 2, 3,)!
First substrings -> "the"
Code to convert first character of the above sting to upper case-> array1[x].charAt(0).toUpperCase()
//console.log(array1[x].charAt(0).toUpperCase()); [here x=0]
Output : "T"
Rest part of the string "the" -> array1[x].slice(1)
console.log(array1[0].slice(1));
Output : "he"
Final string :
console.log(array1[0].charAt(0).toUpperCase()+array1[0].slice(1));
Output : "The"
Now insert the above string into another array :
newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));*/

function capital_letter(string)
{
    let str = string.split(' ');
    let arr = [];

    for (let y = 0; y < str.length; y++)
    {
        arr.push(str[y].charAt(0).toUpperCase()+str[y].slice(1));
    }
    return arr.join(' ');
}   

console.log(capital_letter('the fox is brown and quick'));