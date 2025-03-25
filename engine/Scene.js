//Game Engine class
class Scene {
  started
  constructor(backgroundColor = "white"){
    this.backgroundColor = backgroundColor
    this.started = false
  }

  gameObjects = []

  start() {
    // for (let gameObject of this.gameObjects) {
    //   gameObject.start()
    // }
    this.gameObjects.forEach(g=>g.start())
  }

  draw() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = this.backgroundColor
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill()

    // for (let gameObject of this.gameObjects) {
    //   gameObject.draw()
    // }
    this.gameObjects.forEach(g=>g.draw())
  }

  update() {
    if(!this.started){
      this.started = true
      this.start()
    }
    
    // for(let gameObject of this.gameObjects){
    //   if(!gameObject.started){
    //     gameObject.started = true
    //     gameObject.start()
    //   }
    // }
    this.gameObjects.filter(g=>!g.started).forEach(g=>{g.start(); g.started = true;})
    this.gameObjects.forEach(g=>g.update())

    this.gameObjects = this.gameObjects.filter(g=>!g.markForDelete)
  }

  addGameObject(gameObject, x = 0, y = 0, r = 1, h=1) {
    this.gameObjects.push(gameObject)
    gameObject.transform.x = x
    gameObject.transform.y = y
    gameObject.transform.r = r
    gameObject.transform.h = h
  }
  
  findGameObject(name) {
    for (let gameObject of this.gameObjects) {
      if (gameObject.name == name) {
        return gameObject
      }
    }
    return null
  }

  findGameObjects(name) {
    let toReturn = []
    for (let gameObject of this.gameObjects) {
      if (gameObject.name == name) {
        toReturn.push(gameObject)
      }
    }
    return toReturn
  }
}