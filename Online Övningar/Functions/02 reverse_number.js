function reverse(string)
{
    string = `${string}`;
    return string.split('').reverse().join('');
}

console.log(reverse('Hello how are you'));

console.log(reverse(123456));
