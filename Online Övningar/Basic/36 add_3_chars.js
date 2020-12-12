function three_chars(string)
{
    if (string.length >=3)
    {
        string_len = string.length-3;
        back = string.substring(string.length-3);
        return `${back}${string}${back}`;
    }
    return `The word is too short`;
}

console.log(three_chars('Hello World'));
console.log(three_chars('He'));
console.log(three_chars('Hello how are you'));