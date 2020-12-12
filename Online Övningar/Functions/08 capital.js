function capital_l(string)
{
    let str = string.split(' ');
    let arr = [];

    for (x = 0; x < str.length; x++)
    {
        arr.push(str[x].charAt(0).toUpperCase()+str[x].slice(1));

    }   
    return arr.join(' '); 
}

console.log(capital_l('the brown and quick fox'));