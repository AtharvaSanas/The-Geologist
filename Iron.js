class Iron {
    constructor(x, y) {
      var options = {
        'density':1.8,
        'friction':2,
        'restitution':2
      };
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 50;
      this.height = 90;
      World.add(world, this.body);
    };
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };