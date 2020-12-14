let playerPaddle;
let aiPaddle;
let ball;

function setup()
{
    createCanvas(634, 351);
    playerPaddle = new Paddle(26) // the class Paddle from paddle.js
    aiPaddle = new Paddle(width - 48); // width - 48 bestämmer vart den ska vara horizontellt. 0 lägger den sig precis utanför spelplanen. ju högre desto längre till vänster
    ball = new Ball();
    
}

function draw()
{
    background(0);
    playerPaddle.display(); // display method from paddle.js
    aiPaddle.display(); // samma för att den ska se likadan ut som den första.

    
    playerPaddle.update();
    aiPaddle.update();

    ball.update();
    ball.display();

    processAI();

    ball.hasHitPlayer(playerPaddle);
    ball.hasHitAi(aiPaddle);

    stroke(255);
    line(width/2, 0, width/2, height);

    /*
    if (playerPaddle.isUp)
    {
        playerPaddle.up();
    }else if (playerPaddle.isDown)
    {
        playerPaddle.isDown();
    }*/


    
}

function processAI()
    {
    let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2;

    if (middleOfPaddle > ball.y)
    {
        aiPaddle.isUp = true;
        aiPaddle.isDown = false;
    }else
    {
        aiPaddle.isDown = true;
        aiPaddle.isUp = false;  
    }
    }


function keyPressed()
{
    if (keyCode == UP_ARROW)
    {
        playerPaddle.isUp = true;
    }else if (keyCode == DOWN_ARROW)
    {
        playerPaddle.isDown = true;
    }
}

function keyReleased()
{
    if (keyCode == UP_ARROW)
    {
        playerPaddle.isUp = false;
    }else if (keyCode == DOWN_ARROW)
    {
        playerPaddle.isDown = false;
    }
}
