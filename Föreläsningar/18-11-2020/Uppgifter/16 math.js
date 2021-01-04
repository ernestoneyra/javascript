/*for (let i = 0; i < 10; i++){
    let random = Math.round(Math.random() * 10);
    console.log(random);
}*/

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


for (let i = 0; i < 10; i++){
console.log(getRandomInt(2, 10));
}