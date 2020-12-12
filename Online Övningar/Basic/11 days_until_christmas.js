let today = new Date();
let cmas = new Date(today.getFullYear(), 11, 25) //year, month, day. december is 11 and janaury is 0. sunday is 0 and monday is 1.

if(today.getMonth() === 11 && today.getDate()>25)
{
    cmas.setFullYear(cmas.getFullYear()+1);
}

   let one_day = 1000*60*60*24;
    console.log(`${Math.ceil((cmas.getTime()-today.getTime())/(one_day))} days left until Christmas!`);

    //alltid dagens dagen som den utgår ifrån. 
    //Utgår ifrån datorns datum. Ändrar datumet på datorn ändras dagarna som är kvar. 