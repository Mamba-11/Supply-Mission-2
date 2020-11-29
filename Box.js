class Box{
        constructor(x,y,width,height){

            var options = {
                restitution: 0.4
            }

            this.body = Bodies.rectangle(x-25,y-25,width,height,options);

            this.width = width;
            this.height = height;
            World.add(world,this.body);
        }

        display(){

            var pos = this.body.position;
            var angle = this.body.angle;


            push();
            fill("red")
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(25,25,this.width,this.height);
            pop();
        }


}      