class MouseMoveCircleGameObject extends GameObject{
  constructor(name){
    super(name)
  }
  start(){
    this.addComponent(new Circle("darkgray", "lightgray", 2))
    this.addComponent(new CollisionDetectionCircle())
    this.addComponent(new MouseMovement())
  }
}