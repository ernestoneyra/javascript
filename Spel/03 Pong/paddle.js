class Paddle
{
    constructor(x)
    {
        this.x = x; // horizontellt
        this.y = height / 2; // vertical placement. 351/2 = 175,5
        this.height = 80; // height of paddle. goes down.
        this.width = 20 // width of paddle

        this.isUp = false;
        this.isDown = false;

        
    }
    update()
    {
        if (this.isUp)
    {
        this.up();
    }
    else if (this.isDown)
    {
        this.down();
    }
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
        if (this.y < height - this.height) //this.y < 351 - 80 || this.y < 271
        {
            this.y += 2;
        }
        
    }
}