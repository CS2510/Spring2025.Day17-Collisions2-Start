//Game-specific classes
class Level_02_Scene extends Scene {

    start() {
        this.addGameObject(new PlayerGameObject("Player Game Object"), 125, 90, 50)
        this.addGameObject(new GuardGameObject("Guard Game Object", .75), 100, 200, 20)
        this.addGameObject(new GuardGameObject("Guard Game Object", .75, 1), 100, 250, 20)
        this.addGameObject(new GuardGameObject("Guard Game Object", .75, 2), 100, 300, 20)
        this.addGameObject(new ScoreGameObject("Score Game Object"), 0, 45)
        this.addGameObject(new GameObject().addComponent(new Text("black", "30px Times New Roman", "Level: 2")), 0, 20)
        this.addGameObject(new GameObject().addComponent(new MainSceneController(WinScene)))
    }
}