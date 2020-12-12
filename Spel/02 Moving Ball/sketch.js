let x;
let y;

let xSpeed;
let ySpeed;

let radius = 25;

function setup()
{
    createCanvas(400, 600);
    x = width / 2;
    y = height / 2;

    xSpeed = random(2,5);
    ySpeed = random(2,5);
    //This xSpeed and ySpeed are going to be added to the x and y coordinates each frame: x += xSpeed and y += ySpeed.
}

function draw()
{
    background(220);
    fill(143,213,154);
    ellipse(x, y, radius *2, radius * 2);
    //fill(123,213,234);
    //ellipse(x,y,radius *2,radisu *2):
    

    x += xSpeed;
    y += ySpeed;

    if ( x > width - radius || x < radius)
    {
        xSpeed = -xSpeed;
    }
    if ( y > height - radius || y < radius)
    {
        ySpeed = -ySpeed;
    }

}
