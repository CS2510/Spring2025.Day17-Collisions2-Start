class WinTextGameObject extends GameObject{
  start(){
    this.addComponent(new Text("green", "30px Times New Roman", "You beat the game. Horray."))
  }
}