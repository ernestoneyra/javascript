let today = new Date();

let dd = today.getDate();
let mm = today.getMonth()+1;
let yy = today.getFullYear();

if (dd<10)
{
     dd = `0${dd}`;
}
else if (mm<10)
{
    mm = `0${mm}`;
}
else
{
    today = `${mm} - ${dd} - ${yy}`;
    console.log(today);
    today = `${mm} / ${dd} / ${yy}`;
    console.log(today);
    today = `${dd} + ${mm} + ${yy}`;
    console.log(today);
    today = `${dd} / ${mm} / ${yy}`;
    console.log(today);
}
