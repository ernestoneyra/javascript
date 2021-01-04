/* map()-method skapar en ny array med resultatet av att anropa en funktion för varje array-element.*/
/* map()-method anropar den angivna funktionen en gång per element i arrayen i ordning.*/

/*const bord = [2,4,5,7,8,9]

const myNewBord = bord.map((value, index, array) => 
{
    return value * 2;
});

console.log(bord);
console.log(myNewBord);*/
//////////////////////////////////////////////////////////////////////

let games = []

let spel = 
{
    name: 'Final Fantasy', 
    info: {
        playtime: '100 hours',
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
        playtime: '20 hours',
        genre: "fantasy, alchemy",
        type: "JRPG"
    },
};

games.push(spel);

spel = 
{
    name: 'Nioh',
    info: {
        playtime: '1 hour',
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
        playtime: '10 hours',
        genre: 'fantasy',
        type: 'JRP'
    },
};

games.push(spel);

//console.log(games);

let myNewGames = games.map(spel => (spel.name));
 
console.log(myNewGames);