/*function sum(y, x, z, f, g)
{
    return y + x + z + f + g;
}

let myArr = [1, 3, 5, 6, 7];

console.log(sum(...myArr));*/

function sum(y, x, z, ...numbers)
{
    console.log(y);
    console.log(x);
    console.log(z);
    console.log(numbers)
    return y + x + z;

}
let arrmMy = [1, 3, 5, 7, 8];

console.log(sum(...[1, 3, 5, 7, 8]));
console.log(sum( 1, 3, 5, 7, 8));
//console.log(sum( ...1, 3, 5, 7, 8));