function long(string)
{
    let long = string.match(/\w[a-z]{0,}/gi);
    let result = [];

    for (x = 0; x < long.length; x++)
    {
        if (result.length < long[x].length)
        {
            result = long[x];
        }
    }
    return result;
}

console.log(long('@ !is at a #house webdevelopment'));