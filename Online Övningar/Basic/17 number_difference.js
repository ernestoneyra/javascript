function diff(n)
{
    if (n < 23)
        return 23-n;
    else
        return (n-23) * 2; // absolute different.
}

console.log(diff(16));
console.log(diff(4));