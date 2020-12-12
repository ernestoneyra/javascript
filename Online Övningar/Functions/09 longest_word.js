/*Assume string = '@Web Development #Tutorial';

The .match() method is used to retrieve the matches when matching a string against a regular expression.
Therefore str.match(/\w[a-z]{0,}/gi) will return ["Web", "Development", "Tutorial"].

For loop checks the length of the array element and compare with previous one and finally return the longest string.

The length property represents an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.
Syntax -> arr.length*/ 

function longest_word(string)
{
    let arr1 = string.match(/\w[a-z]{0,}/gi);
    let result = [0];

    for (let x = 0; x < arr1.length; x++)
    {
        if (result.length < arr1[x].length)
        {
            result = arr1[x];
        }
    }
    return result;
}

console.log(longest_word('@Webdevelopment #trainer at house'));