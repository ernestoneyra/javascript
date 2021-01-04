for ( let i = 0; i < 30; i++){
    if ( i % 3 === 0){ /*Modulus operator*/

    console.log("hello " + i)
    }
}
/*i+=3 i ökar med tal som är lika med 3. Eftersom talet måste sluta innan den når villkoret för for loopen (t.ex i < 30) så kommer max talet i exemplet att vara 27. Det är under 30, villkoret stämmer. Däför måste jag skriiva nästa delbara siffra vilket är 33. ( let i = 0; i < 30; i++)*/


let i = 0;
let cont= true;
for ( ; cont ; ) {
    console.log(i);
    i++;
    if ( i > 3 ) {
        cont = false;
    }
}

