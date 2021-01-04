class GuessNumber
{
    constructor()
    {
        this.random = null;
        this.continue_game = true;
        this.counter = null;
        this.message = null;

        this.init();
        this.start_game();
        
    }

    static random_number(number = 100)
    {
        return Math.round(Math.random() * number);    
    }
    init()
    {
        this.random = GuessNumber.random_number();
        this.counter = 0;
        this.message = "";
               
    }
    start_game()
    {
        
        while(this.continue_game)
        {
            let answer = prompt(this.message + "\nJag tänker på ett nummer 1-100. Vilket tror du det är? (Avsluta med Avbryt.)");
            let guess = Number(answer);
            this.counter++;
    
            if (!guess) {
                this.continue_game = false;
                break;
            }
    
            if (guess < this.random) {
                this.message = "Mitt tal är större.";
            } else if (guess > this.random) {
                this.message = "Mitt tal är mindre.";
            } else {
                this.continue_game = confirm(`Du gissade rätt! det tog ${counter} gissningar! Spela igen?`);
                this.init();
            }
        }
    }
}

/*let game = new GuessNumber()
console.log(game);*/

function start_game()
{
    new GuessNumber();
}


/*
function random_number(number = 100) {
    return Math.round(Math.random() * number);
}

function guess_number() {
    let random = random_number();
    let continue_game = true;
    let counter = 0;
    let message = "";

    while(continue_game) {
        let answer = prompt(message + "\nJag tänker på ett nummer 1-100. Vilket tror du det är? (Avsluta med Avbryt.)");
        let guess = Number(answer);
        counter++;

        if (!guess) {
            continue_game = false;
            break;
        }

        if (guess < random) {
            message = "Mitt tal är större.";
        } else if (guess > random) {
            message = "Mitt tal är mindre.";
        } else {
            continue_game = confirm(`Du gissade rätt! det tog ${counter} gissningar! Spela igen?`);
            counter = 0;
            message = "";
            random = random_number();
        }
    }
}

*/