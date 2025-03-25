class LineGameObject extends GameObject{
  constructor(name){
    super(name);
  }
  start(){
    this.addComponent(new Line("#FF000099", 5))
  }
}