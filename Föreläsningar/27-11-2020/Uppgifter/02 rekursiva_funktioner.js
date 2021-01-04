function factorial(n)
{
    if (n <= 1)
    {
        return 1;
    }
    else
    {
        return (n * factorial(n -1));// anropar function igen, men med 5-1 = 4.
    }
}

//console.log(factorial(5));

function factorial(n = 2)
{
    if (n <= 1)
    {
        return 1;
    }
    else
    {
        return (n * factorial(2));// anropar function igen, men med 5-1 = 4.
    }
}


function factorial(n = 4)
{
    if (n <= 1)
    {
        return 1;
    }
    else
    {
        return (n * factorial(3));// anropar function igen, men med 5-1 = 4.
    }
}



console.log(factorial(2));