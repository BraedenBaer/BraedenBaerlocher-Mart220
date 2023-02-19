class MyCircle{

    constructor(x,y,diameter)
    {

        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }

drawCircle()
{
    fill(225,200,109);
    circle(this.x,this.y,this.diameter);
}
}