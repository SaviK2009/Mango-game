  class Tree{
    constructor(x, y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 1, 1, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 500, 500);
        pop();
    }
}