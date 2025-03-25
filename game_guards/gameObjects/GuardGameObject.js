class GuardGameObject extends GameObject {
  constructor(name, speed, offset = 0){
    super(name)
    this.speed = speed
    this.offset = offset
  }
  start() {
    this.addComponent(new Circle("blue", "purple", 5))
    this.addComponent(new GuardMovement(this.speed, this.offset))
  }
}