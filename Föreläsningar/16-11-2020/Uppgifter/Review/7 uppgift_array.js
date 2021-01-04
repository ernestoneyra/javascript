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

for (let title of games) // en ny variabel (title) med spelens namn och info. för att få ut titeln måste jag gå in i variabeln och logga ut infon jag vill ha genom title.name för att få ut namnet.
{
    console.log(title.name);
}



