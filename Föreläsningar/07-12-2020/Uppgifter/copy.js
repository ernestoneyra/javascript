document.addEventListener("DOMContentLoaded", function(e){

/////////Variables//////////////////////

let name = document.getElementById('name');
let email = document.getElementById('email');

/////////Birthday ang age////////
let bday = new Date(document.getElementById('bday').value);
let bday_month = bday.getMonth();
let bday_day = bday.getDate();
let today = new Date();
let one_day = 1000 * 60 *60 *24;
let bday_year = today > new Date(today.getFullYear(), bday_month, bday_day)
? today.getFullYear()+1
: today.getFullYear();
let next_bday = new Date(bday_year, bday_month, bday_day);
let days_to_bday = Math.ceil((next_bday - today) / one_day);
let age = today.getFullYear()-bday.getFullYear();

//let age = document.getElementById('age');
/////////////////////////////////////

let favorite_day = document.getElementById('favday');

let message = document.getElementById('message');
let color = document.getElementById('favcolor');
let mac = document.getElementById('mac');
let pc = document.getElementById('pc');
let friends = document.getElementById('checkFriends');
let csi = document.getElementById('checkCSI');
let psych = document.getElementById('checkPsych');
let checkbox = document.getElementById('check_box');
let presentation = document.getElementById('presentation_output');

let btn = document.getElementById('btnSave');
//////////////////////Variables/////////////

///////////////EventListeners///////////////

btn.addEventListener('click', function(e){

   
    ///////Print Name/////
    console.log(`Hello ${name.value}. Welcome!`)


    /////////Brirthday//////////
    console.log(`Your age is ${age} and youy birthday is in ${days_to_bday} days!`);

    //Right Age//////////////////
    let right_age = age == document.getElementById('age').value
    ? ''
    : 'not';
    console.log(`you wrote ${right_age}, which is the right age!`)

    ////////////Favorite Day////////////



    /////Change Color//////
    document.body.style.backgroundColor = color.value;

    //////Mac or PC/////////////
    let dator = [];
    if (mac.checked === true)
    {
        dator.push(mac.value);
        console.log(`${mac.value}`)
    }
    if (pc.checked === true)
    {
        dator.push(mac.value);
        console.log(`${pc.value}`);
    }

    ////////////TV-Shows/////////////
    let tv_show = [];
    if (friends.checked === true)
    tv_show.push(friends.value)
    if (csi.checked === true)
    tv_show.push(csi.value);
    if (psych.checked === true)
    tv_show.push(psych.value)

    //////Presentation Output///////
    presentation.innerHTML = `Hello ${name.value}. From the information you have inputted I can see that your favorite color is ${color.value}, I hope you enjoy the background, your age is ${age} years old, that you ${dator} and that you enjoy watching ${tv_show}. Your favorite day is ${favorite_day.value}
    Thank you!`
    


})





})