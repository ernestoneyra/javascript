//Create a new string from a given string taking the last 3 characters and added at both the front and back

function front_back(string)
{
    if (string.length >= 3)
    {
        string_len = 3;
    back = string.substring(string.length-3);
    return `${back}${string}${back}`;
        
    }else
    {
    return "Too short of a word";
    }
    
}
console.log(front_back('racecar is a racecar'));
console.log(front_back('Hello'));