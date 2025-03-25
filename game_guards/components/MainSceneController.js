class MainSceneController extends Component{
    constructor(nextScene){
        super()
        this.nextScene = nextScene
    }
    update() {
        let playerGameObject = Engine.currentScene.findGameObject("Player Game Object")
        let guardGameObjects = Engine.currentScene.findGameObjects("Guard Game Object")

        for (let guardGameObject of guardGameObjects) {
            if (Collisions.inCollision(playerGameObject.transform.x, playerGameObject.transform.y, playerGameObject.transform.r, guardGameObject.transform.x, guardGameObject.transform.y, guardGameObject.transform.r)) {
                Engine.nextScene = new DeathScene()
            }
            
        }

        if (playerGameObject.transform.y > 350) {
            Engine.nextScene = new this.nextScene()
        }

        if(Input.keysdown.includes("Space")){
            Engine.nextScene = new DeathScene()
        }
        if(Input.keysdown.includes("Enter")){
            Engine.nextScene = new this.nextScene()
        }
        if(Input.keysdown.includes("Tab")){
            Engine.currentScene.findGameObjects("Guard Game Object").forEach(g=>g.destroy())

        }
    }
}