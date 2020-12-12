function vowel(string)
{
    let vowel_list = 'aeiouAEIOU';
    let vcount = 0;

    for (let x = 0; x < string.length; x++)
    {
        //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. Syntax arr.indexOf(searchElement[, fromIndex]).
        //Parameters : searchValue : A string representing the value to search for. fromIndex(Optional)-> The index at which to start the searching forwards in the string. It can be any integer. The character(s) of the string will be counted as vowel if the condition (vowel_list.indexOf(str1[x]) !== -1) matched.
        if (vowel_list.indexOf(string[x]) !== -1)
        {
            vcount +=1;
        }
    }
    return vcount;
}

console.log(vowel('Hello world this is not a wovel aeo'));