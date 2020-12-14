class Ball
{
    constructor()
    {
        this.r = 10;
        this.reset();
    }

    hasHitPlayer(player)
    {
        if (this.x - this.r <= player.x + player.width && this.x > player.x)
        {
            if (this.isSameHeight(player))
            {
                this.xSpeed = -this.xSpeed;
            }
        }
    }

    hasHitAi(ai)
    {
        if (this.x + this.r >= ai.x && this.x <= ai.x + ai.width)
        {
            if (this.isSameHeight(ai))
            {
                this.xSpeed = -this.xSpeed;
            }
        }
    }

    isSameHeight()
    {
        return this.y >= player.y && this.y <= player.y + player.height;
    }


    update()
    {   // If it hits the top or bottom change direction
        if (this.y < this.r || this.y > height - this.r)
        {
            this.ySpeed = -this,ySpeed;
        }
        // If it gets to the end of the screen restart the game
        if (this.x < this.r || this.x > width + this.r)
        {
            reset();
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    reset()
    {
        this.x = width/2;
        this.y = height/2;

        this.xSpeed = random(3,4);

        //Determines if it's going left or right
        let isLeft = random(1) > .5;
        if (isLeft)
        {
            this.xSpeed = -this.ySpeed;
        }
        this.ySpeed = random(-3,3);
    }
    display()
    {
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}

