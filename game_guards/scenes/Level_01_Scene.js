//Game-specific classes
class Level_01_Scene extends Scene {

    start() {
        this.addGameObject(new PlayerGameObject("Player Game Object"), 125, 90, 50)
        this.addGameObject(new GuardGameObject("Guard Game Object", 1), 100, 200, 20)
        this.addGameObject(new GuardGameObject("Guard Game Object", 1), 100, 250, 20)
        this.addGameObject(new ScoreGameObject("Score Game Object", 1), 0, 45)
        this.addGameObject(new GameObject().addComponent(new Text("black", "30px Times New Roman", "Level: 1")), 0, 20)
        this.addGameObject(new GameObject().addComponent(new MainSceneController(Level_02_Scene)))
    }
}