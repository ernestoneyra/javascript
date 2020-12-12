/*function leapYear(year)
{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
}

console.log(leapYear(1990));
console.log(leapYear(1997));
console.log(leapYear(2016));
console.log(leapYear(2018));
console.log(leapYear(1567));
console.log(leapYear(2000));*/


function leapYear(start_year, end_year){
    for (let year = start_year; year <= end_year; year++) {
        let leap = leapYear(year) ? 'skottår' : 'ej skottår';
        
        console.log(year + ': ' + leapYear(year));
    }
}

leapYear(2000, 2015);