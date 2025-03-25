class LevelNumberGameObject extends GameObject {
  constructor(name, level){
    this.level = level
  }
  start() {
    this.addComponent(new Text("black", "30px Times New Roman", "Level: " + this.level))
  }
}