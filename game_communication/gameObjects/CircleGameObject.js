class CircleGameObject extends GameObject{
  constructor(name){
    super(name)
  }
  start(){
    this.addComponent(new Circle("red", "pink", 10))
    // this.addComponent(new SineMovement(1))
    // this.addComponent(new MouseMovement())
    // this.addComponent(new MouseUpdater())
    // this.addComponent(new WheelUpdater())
    // this.addComponent(new TouchMovement())
    this.addComponent(new TouchDeltaMovement())
  }
}