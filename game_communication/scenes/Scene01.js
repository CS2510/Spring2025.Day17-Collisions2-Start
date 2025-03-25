class Scene01 extends Scene{
  start(){
    this.addGameObject(new CircleGameObject("Circle Game Object"), 200, 200, 50)
    this.addGameObject(new TextGameObject("Text Game Object"), 0, 100)
  }
}