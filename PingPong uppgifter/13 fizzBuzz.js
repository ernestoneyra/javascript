//FizzBuzz är ett programmeringsproblem där man skriver ut tal i en talserie. Om det aktuella talet är jämnt delbart med 3 skriver man ut Fizz, är det jämnt delbart med 5 skriver man ut Buzz, är det jämnt delbart med båda skriver man ut FizzBuzz och annars skriver man ut talet. Lös uppgiften för talen 0-100.


function fizzbuzz()
{
    for (let x = 0; x<101;x++)
    {
        if (x % 3 === 0)
        {
            console.log('fizz');
        }
        if ( x % 5 === 0)
        {
            console.log('buzz');
        }
        if (x % 15 === 0)
        {
            console.log('fizzBuzz');
        }
    }
}
fizzbuzz();
