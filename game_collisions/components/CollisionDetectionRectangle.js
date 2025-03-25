class CollisionDetectionRectangle extends Component{
  constructor(){
    super()
  }
  update(){
    let line = Engine.currentScene.findGameObject("Line Game Object")
    let rectangle = Engine.currentScene.findGameObject("Rectangle Game Object")
    let circle = Engine.currentScene.findGameObject("Circle Game Object")

    if(Collisions.rectangleCircle(this, circle)){
      this.parent.findComponent(Rectangle).fillStyle = "blue"
    }
    else if(Collisions.rectangleLine(this, line)){
      this.parent.findComponent(Rectangle).fillStyle = "red"
    }
    else if(Collisions.rectangleRectangle(this, rectangle)){
      this.parent.findComponent(Rectangle).fillStyle = "green"
    }
    else{
      this.parent.findComponent(Rectangle).fillStyle = "darkgray"
    }
  }
}