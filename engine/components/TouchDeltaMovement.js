class TouchDeltaMovement extends Component {
  update() {
    if (Input.touchDown) {
      let deltaX = (Input.touchX - Input.touchStartX) / 100
      if (deltaX)
        this.transform.x += deltaX
      
      let deltaY = (Input.touchY - Input.touchStartY) / 100
      if (deltaY)
        this.transform.y += deltaY
   
    }
  }
  draw() {
    if (Input.touchDown) {
      ctx.beginPath()
      ctx.fillStyle = "black"
      ctx.rect(Input.touchStartX-5, Input.touchStartY-5, 10, 10)
      ctx.fill()
    }
  }
}