class WinSceneController extends Component{

  timeSinceWin
  
  start(){
    this.timeSinceWin = 0
  }

  update(){
    this.timeSinceWin += Time.deltaTime
    if (this.timeSinceWin > 3) {
      //Start main scene
      Globals.score = 0
      Engine.nextScene = new Level_01_Scene()
    }
  }
}