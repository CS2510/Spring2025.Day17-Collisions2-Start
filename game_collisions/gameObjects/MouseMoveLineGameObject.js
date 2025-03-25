class MouseMoveLineGameObject extends GameObject{
  constructor(name){
    super(name)
  }
  start(){
    this.addComponent(new Line("darkgray", "lightgray", 2))
    this.addComponent(new CollisionDetectionLine())
    this.addComponent(new MouseMovementLine())
  }
}