class Rope{
    constructor(bodyA,bodyB) {
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.1,
            length : 20
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y
        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}