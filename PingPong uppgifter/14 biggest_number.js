function biggest_number(x,y)
{
    if (x<y)
    {
        return y;
    }
    if (x>y)
    {
        return x;
    }
}
let result = biggest_number(20,35);

console.log(result);