class DeathScene extends Scene {
  constructor(){
    super("black")
  }

  start() {
    this.addGameObject(new DeathController())
    this.addGameObject(new DeathTextGameObject(), 0, 20)
    this.addGameObject(new ScoreGameObject(false), 0, 45)
  }
}