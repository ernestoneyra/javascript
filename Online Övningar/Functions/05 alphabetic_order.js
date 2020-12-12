function alp_order(string)
{
    return string.split(' ').sort().join(', ');
}

console.log(alp_order('webmaster racecar house alpha'));