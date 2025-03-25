class DeathController extends GameObject{
  start(){
    this.addComponent(new DeathSceneController())
  }
}