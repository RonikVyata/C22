class Cannon {
  //Properties the part that goes in setup 
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_img = loadImage("assets/cannon.png");
    this.cannonBase_img = loadImage("assets/cannonBase.png");
  }

  //Functions the part that goes in draw;
  display(){
    //To stop the changes from leaking out;
    push();
    //To change the x and y in such a way that the object turns;
    translate(this.x, this.y);
    //the angle at which an object will turn;
    rotate(this.angle);
    //to make x and y the center of the object instead of top left position ;
    imageMode(CENTER);
    image(this.cannon_img, 0, 0, this.width, this.height);
    pop();
    image(this.cannonBase_img,70,20,200,200);
  }
}
