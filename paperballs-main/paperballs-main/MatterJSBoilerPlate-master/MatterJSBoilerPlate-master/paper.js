class PaperBall{
    constructor(x,y,radius){
    var options= {
        friction:0.5,
        density:1.2,
        restitution:0.3
    }
    this.image = loadImage("sprites/paper.png")
    this.radius = radius;
    this.body = Matter.Bodies.circle(x,y,radius,options);
    World.add(world,this.body)
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      image(this.image,0,0,this.radius,this.radius)
      pop();  
    }
    }