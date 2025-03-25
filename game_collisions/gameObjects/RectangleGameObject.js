class RectangleGameObject extends GameObject{
  constructor(name){
    super(name);
  }
  start(){
    this.addComponent(new Rectangle("#00FF0099", "lightgreen", 5));
  }
}