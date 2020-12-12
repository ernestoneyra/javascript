/*
x Skapa klassen Player som ska hålla reda på en spelares namn och poäng.
x Skapa metoderna add_points() och deduct_points() som lägger till respektive tar bort poäng från spelaren.
Skapa en statisk metod som tar emot en array av spelare och skriver ut en lista över spelarna i poängordning, en high score-lista. .sort()
Skapa ett par spelare med olika poäng.
Lägg till och ta bort poäng och skriv ut highscore-listan mellan varje för att se att den fungerar.*/


class Player
{
    constructor(name, points)
    {
        this.name = name;
        this.points = points;
      
    }

    add_points(points_upp = 5)
    {
        this.points += points_upp;
        //Player.highscore(); // skriver ut highscore listan. 
    }
    deduct_points(points_down = 5)
    {
        if (this.points > points_down)
        {
            this.points -= points_down;
        }else    
        {
            this.points = 0;
        }
       /// Player.highscore();// skriver ut highscore listan. 
        
    }

    static highscore(players)//parameter players är lika med player_list
    {
        players.sort((player_a, player_b) => player_b.points - player_a.points);
        //console.log(players); // players innehåller arrayen med spelarna.
        
        for (let player of players) // loopar igenom hela arrayen och skriver ut varje värde. 
        {
            console.log(`${player.name} - ${player.points}`); // väljer utskriften för arrayen. i detta fall players namn och points. 

        }
        
    }
    /*
    static player_list(points_a, points_b)
    {
        let player1 = new Player(name, points);
        this.player.push(player1);
        let sorting = points_a - points_b;
        console.log(sorting);
        
    }*/
}

let players_list = []; /// kan skapa en array utanför klassen, men push() och arrayen måste vara i samma "fält"/"ställe"


// dessa pushas in till arrayen ovan som är variabel player.
players_list.push(new Player('Anders', 40)); 
players_list.push(new Player('Erik', 50));
players_list.push(new Player('Erika', 34));
players_list.push(new Player('Johanna', 2));
players_list.push(new Player('Annika', 89));
players_list.push(new Player('Daniel', 65));

Player.highscore(players_list)  //Eftersom det är en statisk metod måste man skriva klassen först. 

//player_list är en array med index. Vill du hitta något måste man skriva indexvärdet.
players_list[2].add_points(40);

Player.highscore(players_list);
players_list[0].deduct_points(10);
Player.highscore(players_list);
/*

let hej = new Player('erns' , 6);
console.log(hej);
//player1.player_list('adam', 45);
hej.add_points(5)

console.log(hej);

hej.deduct_points(15);
console.log(hej);
*/