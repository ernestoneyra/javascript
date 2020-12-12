function reverse(string)
{
    
    console.log(string.split('').reverse().join(''));
}

reverse('Hejsan gek for geek');

function reverse2(string)
{
     
    console.log(string.split(' ').reverse().join(''));
}

reverse2('Hejsan gek for geek');

function reverse3(string)
{
    
    console.log(string.split('').reverse().join(' '));
}

reverse3('Hejsan gek for geek');