let color = [
    "yellow",
    "beige",
    "purple",
    "aqua",
    "violet"
]

color.pop();

color.push("red"); //använd push för att lägga till ett värde i arrayen.

let yellow = color.shift();

color.forEach(function(crystal)
{
    console.log(crystal);
});

console.log(yellow);

/*
for (bright of color)
{
    console.log(bright);
}*/