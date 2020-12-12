function string_check(string)
{
    if (string === null || string === undefined || string.substring(0, 2) === 'Py')
    {
        return string;
    }
    return "Py"+string;
}

console.log(string_check('Python'));
console.log(string_check('thon'));
console.log(string_check('applepie'));