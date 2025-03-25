class CollisionDetectionCircle extends Component{
  constructor(){
    super()
  }
  update(){
    let line = Engine.currentScene.findGameObject("Line Game Object")
    let rectangle = Engine.currentScene.findGameObject("Rectangle Game Object")
    let circle = Engine.currentScene.findGameObject("Circle Game Object")

    if(Collisions.circleCircle(this, circle)){
      this.parent.findComponent(Circle).fillStyle = "blue"
    }
    else if(Collisions.circleLine(this, line)){
      this.parent.findComponent(Circle).fillStyle = "red"
    }
    else if(Collisions.circleRectangle(this, rectangle)){
      this.parent.findComponent(Circle).fillStyle = "green"
    }
    else{
      this.parent.findComponent(Circle).fillStyle = "darkgray"
    }
  }
}