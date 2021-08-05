class SlingShot {

    constructor(body1,pointOnAcanvas){
var options = {
    bodyA : body1,
pointB : pointOnAcanvas,
    length : 20,
    stiffness : 0.1
}
this.pointB = pointOnAcanvas
this.connection = Matter.Constraint.create(options)
World.add(world,this.connection) 

}

fly(){
    this.connection.bodyA = null 
}
display(){
if(this.connection.bodyA != null){
strokeWeight (3)
line(this.connection.bodyA.position.x,this.connection.bodyA.position.y,this.pointB.x,this.pointB.y)
}
}
}