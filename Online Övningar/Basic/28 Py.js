function py_string(string)
{
    if (string === null ||string === undefined || string.substring(0,2) === "Py")
    {
        return string;
    }
    return `Py${string}`;
}

console.log(py_string('Python is a racecar'));
console.log(py_string('thon'));
console.log(py_string('racecar'));