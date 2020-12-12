function count_vowels(string)
{
    let vowel_list = 'aeiouAEIOU';
    let vcount = 0;

    for (let x = 0; x < string.length; x++)
    {
        if (vowel_list.indexOf(string[x]) !== -1)
        {
            vcount +=1;
        } 
    }
    return vcount;
}

console.log(count_vowels('this big grey fox is a white one'));
