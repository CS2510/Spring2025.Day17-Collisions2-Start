class WinScene extends Scene {
  constructor(){
    super("yellow")
  }
  //Variables for the win scene
  
  start() {
    this.addGameObject(new WinController())
    this.addGameObject(new WinTextGameObject(), 0, 20)
    this.addGameObject(new ScoreGameObject(false), 0, 45)
  }

}