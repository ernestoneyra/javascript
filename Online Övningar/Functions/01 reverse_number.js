function reverse(string)
{
    string = string + '';
    return string.split('').reverse().join('');
}

console.log(reverse('Helllo'));