document.addEventListener("DOMContentLoaded", function(event){
    /////////Ernesto////////////
    let ernesto = document.getElementById('ernesto');
    let ernesto_email = document.getElementById('ernestoemail');
    let ernesto_age = document.getElementById('ernestoage');
    ////////////Emma///////////////
    let emma = document.getElementById('emma');
    let emma_email = document.getElementById('emmaemail');
    let emma_age = document.getElementById('emmaage');
    ///////////Johan///////////////////////////
    let johan = document.getElementById('johan');
    let johan_email = document.getElementById('johanemail');
    let johan_age = document.getElementById('johanage');
    //////////////////Krister/////////////
    let krister = document.getElementById('krister')
    let krister_email = document.getElementById('kristeremail');
    let krister_age = document.getElementById('kristerage');
    ///////////////////Stina////////////////
    let stina = document.getElementById('stina');
    let stina_email = document.getElementById('stinaemail');
    let stina_age = document.getElementById('stinaage');
    /////////////////Contact//////////////////////////
    let input_name = document.getElementById('name');
    let input_email = document.getElementById('email');
    let input_age = document.getElementById('age');
    let update_contact = document.getElementById('updateper');
    let new_contact = document.getElementById('newper')
    /////////////////////////////////////////////

    new_contact.addEventListener('click', function(e){
        let x = document.createElement('input');
        x.setAttribute('type', 'text')
        document.body.querySelector('.cont_table').appendChild(x);
    })

})
