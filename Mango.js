class Mango{
    constructor(x,y,r,width,height){
        var options={
            'isStatic': true,
            'restitution': 0,
            'friction': 1.0
        }
        this.body = Bodies.circle(x,y,r,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.r = r;
        this.image = loadImage('mango.png');
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}