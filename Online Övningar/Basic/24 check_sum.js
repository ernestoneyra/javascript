function check(x)
{
    return (Math.abs(100-x)<=20 || (Math.abs(400 -x)<=20));
}
console.log(check(10));
console.log(check(90));
console.log(check(99));
console.log(check(199));
console.log(check(80));