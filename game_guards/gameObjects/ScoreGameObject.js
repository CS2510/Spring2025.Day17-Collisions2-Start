class ScoreGameObject extends GameObject {
  constructor(shouldUpdate = true){
    super()
    this.shouldUpdate = shouldUpdate;
  }
  start() {
    this.addComponent(new Text("black", "30px Times New Roman", "Score: "))
    this.addComponent(new ScoreUpdater(this.shouldUpdate))
  }
}