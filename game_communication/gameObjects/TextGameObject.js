class TextGameObject extends GameObject{
  constructor(name){
    super(name)
  }
  start(){
    this.addComponent(new Text("black", "30px Arial", "Start Text"))
    this.addComponent(new TextUpdater())
  }
}