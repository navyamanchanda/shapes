class iron {
    constructor(x,y){
        var options={
            'density':4,'restitution':0.5,'friction':1.0
        }
        this.body = Bodies.rectangle(x,y,80,50,options)
        this.width=80 
        this.height=50
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
        fill ("blue")
        stroke (" yellow")
        strokeWeight (4)
        rectMode(CENTER)
        rect (0,0,this.width, this.height)
        pop ()
}
}