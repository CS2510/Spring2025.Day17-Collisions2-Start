class Rectangle extends Component {
  constructor(fillStyle, strokeStyle, lineWidth) {
    super()
    this.fillStyle = fillStyle
    this.strokeStyle = strokeStyle
    this.lineWidth = lineWidth
  }

  draw() {
    ctx.beginPath()
    ctx.fillStyle = this.fillStyle
    ctx.strokeStyle = this.strokeStyle
    ctx.lineWidth = this.lineWidth
    ctx.rect(this.transform.x - this.transform.w/2, this.transform.y - this.transform.h/2, this.transform.w, this.transform.h)

    ctx.fill()
    ctx.stroke()
  }
}