class MouseMoveRectangleGameObject extends GameObject{
  constructor(name){
    super(name)
  }
  start(){
    this.addComponent(new Rectangle("darkgray", "lightgray", 2))
    this.addComponent(new CollisionDetectionRectangle())
    this.addComponent(new MouseMovementRectangle())
  }
}