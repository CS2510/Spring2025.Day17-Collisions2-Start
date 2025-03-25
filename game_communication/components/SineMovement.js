class SineMovement extends Component {
  constructor(speed, offset = 0){
      super()
      this.speed = speed
      this.offset = offset
  }

  elapsedTime

  start() {
      this.elapsedTime = 0
      this.startX = this.transform.x
  }
  
  update() {
      this.elapsedTime += Time.deltaTime
      this.transform.x = this.startX + 100 * Math.sin(this.elapsedTime * this.speed + this.offset)
  }
}