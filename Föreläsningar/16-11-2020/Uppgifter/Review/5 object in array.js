let colors = [];

let bright = {
    name: "White",
    strength: "strong",
    found: "out"
};

colors.push(bright);

bright = {
    name: "grey",
    strength: "light",
    found: "clothes"
}

colors.push(bright);
console.log(colors);


for (let light of colors)
{
    console.log(light.name);

}
