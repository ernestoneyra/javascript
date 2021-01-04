/*• JS innehåller olika bibliotek med hjälpfunktioner, egenskaper och konstanter. Ett av dessa är Math.
• Math.random() ger ett slumpmässigt decimaltal som är 0 till 1 (men inte 1).*/

/*• Math.round() avrundar till närmaste heltal.
Math.floor() avrundar nedåt till närmaste heltal.
Math.ceil() avrundar uppåt till närmaste heltal.
Math.min() returnerar det minsta av flera tal.
Math.max() returnerar det största av flera tal.
Läs mer om Math-biblioteket här:
• https://developer.mozilla.org/en-US/docs/Web/JavaScript/
Reference/Global_Objects/Math*/

/*• Vad gör följande funktion?*/

/*function getRandomInt(max)
{
    return Math.floor(Math.random() * Math.floor(max));
}*/


/*• Uppgift: Skriv om funktionen så att den
även tar en undre gräns, dvs att anropet (längst ner efter koden)
getRandomInt(5, 10) ger ett
slumpmässigt tal från 5 till 10.*/


function getRandomInt(min, max) // jag måste ha en min och en max.
{
    min = Math.ceil(min);// här skapar jag en min, avrundar uppåt till närmaste heltal. 
    max = Math.floor(max); // hör skapar jag en max, avrundar nedåt till närmaste heltal. 
    //return Math.ceil(Math.random() * (max - min) + min);
    return Math.floor(Math.random() * (max - min) + min);
    // * (10 - 2) + 2; (8) + 2 = 10. 10 = max. ska alltid vara lika med max siffran. 
    // Math.ceil() avrundar uppåt. Math.floor() avrunda nedåt.
}

for (let i = 0; i < 10; i++) // 10 random siffror
{
    console.log(getRandomInt(2, 11)); // min, max. 
}