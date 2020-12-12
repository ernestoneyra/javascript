function mult(number)
{
    if (number % 3 === 0 || number % 7 === 0)
    {
        return true;
    }
    return false;
}

console.log(mult(5));
console.log(mult(7));
console.log(mult(21));
console.log(mult(15));
console.log(mult(20));