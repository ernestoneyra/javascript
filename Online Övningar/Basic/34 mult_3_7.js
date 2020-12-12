function mult(number)
{
    if (number % 3 === 0 || number % 7 === 0)
    {
        console.log('This number is multipliable by 3 or 7');
    }
    else
    {
    console.log('This number is NOT multipliable by 3 or 7');
    }
}

mult(5);
mult(7);
mult(21);
mult(15);
mult(20);