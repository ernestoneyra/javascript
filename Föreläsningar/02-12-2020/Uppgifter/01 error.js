/*function divide(x, y)
{
    if (0 === y)
    {
        throw new Error ('Divide by zero')
    }
    return x / y;
}

try
{
    console.log(divide(6, 0));
}catch(error_obj)
{
    console.log(error_obj);
}*/

function divide(a, b) {
    if (0 == b) {
    throw new Error("Divide by zero");
    }
    return a / b;
   }
    
   try {
    console.log(divide(6, 20));
   } catch (error_obj) {
    console.log("här fick vi ett fel");
    console.log(error_obj);
   }
    
   console.log("koden kör vidare...");