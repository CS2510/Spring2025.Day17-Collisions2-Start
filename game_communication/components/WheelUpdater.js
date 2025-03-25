class WheelUpdater extends Component {
  update() {
    if (Input.lastWheelDelta != 0) {
      
      if (Input.lastWheelDelta > 0) {
        Engine.currentScene.findGameObject("Text Game Object").transform.y--
      }
      else{
        Engine.currentScene.findGameObject("Text Game Object").transform.y++;
      }
    }
  }
}