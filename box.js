class Box {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,50,100, options);
      this.width=50;
      this.height=100;     
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x,pos.y, this.width, this.height);
     
    }
  }