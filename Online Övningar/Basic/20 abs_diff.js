function sum(n)
{
    if (n <= 19)
        return (19 - n);
    else //(n > 19)
        return (n - 19) * 3;
}

console.log(sum(15));
console.log(sum(19));