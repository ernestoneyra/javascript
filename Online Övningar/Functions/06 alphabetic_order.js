function alp_order(string)
{
    return string.split('').sort().join('');
}

console.log(alp_order('aggriculture'));

function order_two(string_two)
{
    
    return string_two.split(' ').sort().join(' ');
}
console.log(order_two('this is a sorting of words'));