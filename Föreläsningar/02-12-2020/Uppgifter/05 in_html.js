/*document.addEventListener('DOMContentLoaded', function()
{
    let headline = document.getElementById("headline");
    
    let oldText = headline.innerHTML;
headline.innerHTML = "New Headline";
headline.style.color = "#0000ff";



    let text = headline.innerHTML;
}
*/

/*let guess = prompt("Vilket nummer gissar du på?");
let correct_number = Math.floor(Math.random() * 10 + 1)
//let correct_number = 5;

while (guess !== correct_number)
{
if (guess > correct_number) {
    alert("Din gissning är för hög!")
    prompt("Försök igen!")
}else if (guess < correct_number) {
    alert("Din gissning är för låg!")
    prompt("Försök igen!")
} 
else
{
    alert("Din gissning var rätt!")
}
}*/
/*ggggggggggggggggggg
let guessNumber = prompt("Gissa numret jag tänker på mellan 0-10");
//let number = 7;
let number = Math.floor(Math.random() * 10 + 1);

while (guessNumber !== number){
if (guessNumber === number){
    alert("Wow du hade rätt");
} if (guessNumber < number){
    alert("Det är för lågt");
    prompt("Gissa numret jag tänker på mellan 0-10");
}
if (guessNumber > number)
    alert('Det är för högt');
    prompt('gissa igen');
}*/

let guess = prompt("Vilket nummer gissar du på?");
let correct_number = 5;

while (guess !== correct_number) {
    if (guess > correct_number) {
        alert("Jag tänker på ett lägre nummer.")
        
        return;
    } else if (guess < correct_number) {
        alert("Jag tänker på ett högre nummer.")
        return;
    }
}    

prompt("Wow det var rätt!");