class TextUpdater extends Component{
  update(){
    let text = this.parent.findComponent(Text)

    let circleGameObject = Engine.currentScene.findGameObject("Circle Game Object")
    text.text = Math.round(circleGameObject.transform.x) + ", " + circleGameObject.transform.y
  }
}