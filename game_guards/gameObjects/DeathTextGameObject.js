class DeathTextGameObject extends GameObject{
  start(){
    this.addComponent(new Text("red", "30px Times New Roman", "You are dead"))
  }
}