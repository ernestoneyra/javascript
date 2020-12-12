//Skriv en funktion som tar två parametrar och returnerar sant om den ena är positiv och den andra är negativ.

function pos_neg(x, y)
{
    return ((x <0 &&  y>0) || (x>0 && y<0))

}

console.log(pos_neg(5, -1));