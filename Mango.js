class Mango {

constructor(x,y,radius){

    var options={
        'isStatic':true,
        'restitution':0,
        'friction':1
    }

    this.body=Bodies.circle(x,y,radius,options);
     this.radius=radius;
     this.image=loadImage("mango.png");
     World.add(world,this.body);

     
}
display(){
    push();
    var pos=this.body.position;

    imageMode(CENTER);
    image(this.image,pos.x,pos.y,50,50);

    pop();
}
}