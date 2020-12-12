//Först måste jag få dagarna i variabler. 
let today = new Date(); //var Date: DateConstructor new () => Date (+4 overloads)
let day = today.getDay(); //(method) Date.getDate(): number Gets the day-of-the-month, using local time.
// Skriv en lista på dagarna i en array.
let daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//console.log() för att kunna skriva ut arrayen. [day] hänvisar till day variabeln med today.getDate() metoden.
console.log('Today is ' + daylist[day] + '.');

//Alla dessa måste vara kopplade till new Date(), vilket betyder att jag måste skriva today.xx.
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

//American time
/*let prepand = (hour >= 12)? ' PM': ' AM';
hour = (hour >= 12)? hour - 12: hour;
if (hour === 0 && prepand === ' PM ')
{
    if (minute === 0 && second === 0)
    {
        hour = 12;
        prepand = ' Noon';
    }
    else
    {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM')
{
    if (minute === 0 && second === 0)
    {
        hour = 12;
        prepand = ' Midnigth';
    }
    else
    {
        hour = 12;
        prepand = ' AM';
    }
}*/

console.log('Current Time: ' + hour + ':' + minute + ':' + second/* + prepand*/);
