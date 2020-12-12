/*Ett primtal är bara jämnt delbart med 1 och sig själv. Skriv en funktion som tar en parameter och kontrollerar om talet är ett primtal eller inte.*/

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

function prime(n)
{
    if (n < 2)
    
        return false;
    
    for (let x = 2; x < n; x++)
    {
        if (n % x === 0)
        
        return false;
        
    }
    return true;
}

for ( let x = 0; x<100; x++)
{
    if (prime(x)) //om den returnerar true.
    
        console.log(x);
    

}