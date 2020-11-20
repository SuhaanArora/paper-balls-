class Dustbin {
    constructor(x,y,r) {
    var options={
    isStatic:true,
    restitution:0.3,
    friction:0.5, 
    density:1.2 }
    this.x=x;
    this.y=y;
    this.image=loadImage("sprites/dustbin.png");
    
    this.body=Bodies.circle(this.x, this.y,this.width,this.height, options)
      World.add(world, this.body);
    } display()
     { var pos=this.body.position; 
      push() ;
     translate(pos.x, pos.y);
    rectMode(CENTER); 
    imageMode (CENTER);
    image(this.image,pos.x,pos.y,this.weight,this.height);
       pop() } 
     }