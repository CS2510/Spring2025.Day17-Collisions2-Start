class ScoreUpdater extends Component{
  constructor(shouldUpdate){
    super()
    this.shouldUpdate = shouldUpdate
  }
  
  update() {
    if(this.shouldUpdate)
      Globals.score += Time.deltaTime
    let roundedTime = Math.floor(Globals.score * 100) / 100
    this.parent.components[1].text = "Score: " + roundedTime
  }
}