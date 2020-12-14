class Paddle
{
    constructor(x)
    {
        this.x = x; // horizontellt
        this.y = height / 2; // vertical placement.
        this.height = 80; // height of paddle. goes down.
        this.width = 20 // width of paddle

        this.isUp = false;
        this.isDown = false;
    }

    display()
    {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }

    up()
    {
        if (this.y > 0)
        {
            this.y -= 2; // number is the speed. // vertical speeed
        }
       
    }

    down()
    {
        if (this.y < height - this.height)
        {
            this.y += 2;
        }
        
    }
}