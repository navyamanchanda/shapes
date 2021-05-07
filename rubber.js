class rubber {
    constructor(x,y,r){
        var options={
            'density':4,'restitution':0.5,'friction':1.0
        }
        this.body = Bodies.circle(x,y,r,options)
        this.x= x 
        this.y= y
        this.r= r
        World.add(world,this.body)
    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        //pos.x=mouseX
        //pos.y=mouseY
        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        fill ("red")
        stroke (" cyan")
        strokeWeight (4)
       ellipse (0,0,this.r)
        pop ()
}
}