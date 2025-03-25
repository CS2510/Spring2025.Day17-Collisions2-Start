class CollisionDetectionLine extends Component{
  constructor(){
    super()
  }
  update(){
    let line = Engine.currentScene.findGameObject("Line Game Object")
    let rectangle = Engine.currentScene.findGameObject("Rectangle Game Object")
    let circle = Engine.currentScene.findGameObject("Circle Game Object")

    if(Collisions.lineCircle(this, circle)){
      this.parent.findComponent(Line).strokeStyle = "blue"
    }
    else if(Collisions.lineLine(this, line)){
      this.parent.findComponent(Line).strokeStyle = "red"
    }
    else if(Collisions.lineRectangle(this, rectangle)){
      this.parent.findComponent(Line).strokeStyle = "green"
    }
    else{
      this.parent.findComponent(Line).strokeStyle = "darkgray"
    }
  }
}