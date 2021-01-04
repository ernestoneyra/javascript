/*reduce tar en array och reducerar den till ett enda värde. Du kan t ex använda det för att räkna ut medelvärdet av alla värden i arrayen.*/
// acc accumulate.
/*const myNumbers = 
[
    2,3,4,5,6,7,8,0
]

const newNumbers = myNumbers.reduce((acc, currValue) => acc + currValue); 

console.log(newNumbers); //värdet av siffrorna i arrayen eftetr att de har blivit adderade.

const avg = newNumbers / myNumbers.length;  //Dela summan man får från return (new Numbers) med antal siffror i arrayen.

console.log(avg);
console.log(Math.round(avg));*/

let games = []

let spel = 
{
    name: 'Final Fantasy', 
    info: {
        playtime: 100,
        genre: "fantasy",
        type: "JRPG"
    },
};

// vilket object(etc.) ska jag pusha till. (Vilket object(etc) ska jag pusha.
games.push(spel);

spel = 
{
    name: 'Atelier Ryza',
    info: {
        playtime: 20,
        genre: "fantasy, alchemy",
        type: "JRPG"
    },
};

games.push(spel);

spel = 
{
    name: 'Nioh',
    info: {
        playtime: 1,
        genre: 'action',
        type: 'rpg'
    },
};

games.push(spel);

spel = 
{
    name: 'Octopath Traveler',
    info: 
    {
        playtime: 10,
        genre: 'fantasy',
        type: 'JRP'
    },
};

games.push(spel);

//console.log(games);

let playName = games
.filter(spel => (spel.info.playtime > 15))
.map(spel => spel.name)
.reduce(((spel, ) => spel + spel.info.playtime), 0);

//const totalPlaytime = games.reduce(((playtime, games) => games + spel.info.playtime), 0);
 
console.log(playName);
//console.log(totalPlaytime);

