class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var roofPos=this.body.position;
      rectMode(CENTER);
      strokeWeight(4);
      fill("red");
      rect(roofPos.x, roofPos.y, this.width, this.height);
      
    }
  }