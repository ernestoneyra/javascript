function first_last(string)
{
    if (string.length <= 1)
    {
        return string;
    }
    mid_char = string.substring(1, string.length -1);
    return (string.charAt(string.length-1)) + mid_char + string.charAt(0);
    
}

console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));
console.log(first_last('hello world'));