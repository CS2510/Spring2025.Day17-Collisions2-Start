class WinController extends GameObject{
  start(){
    this.addComponent(new WinSceneController())
  }
}