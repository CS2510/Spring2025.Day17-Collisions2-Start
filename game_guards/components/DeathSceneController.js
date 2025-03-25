class DeathSceneController extends Component{
  
  timeSinceDeath

  start(){
    this.timeSinceDeath = 0
  }
  
  update(){
    this.timeSinceDeath += Time.deltaTime
    if (this.timeSinceDeath > 3) {
      //Start main scene
      Globals.score = 0
      Engine.nextScene = new Level_01_Scene()
    }
  }
}