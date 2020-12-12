class line1{
    constructor(x,y,width,height){
        var line1_options ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,width,height,line1_options);
        this.w=width;
        this.h=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}