/*filter tar emot samma argument som map och fungerar liknande. Enda skillnaden är att callback-funktionen måste returnera true eller false. Om den returnerar true kommer arrayen att behålla elementet, om den returnerar false kommer det att filtreras bort.*/

/*const myFilter = [ 
    3,4,5,6,7,8
]

// det fungerade inte när jag använde en let. måste kanske vara en const för filter. 
const myNewFilter = myFilter.filter(value => value % 3 === 0);


console.log(myFilter);
console.log(myNewFilter);*/


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
.map(spel => spel.name);
                
 
console.log(playName);
//console.log(myNewList);

