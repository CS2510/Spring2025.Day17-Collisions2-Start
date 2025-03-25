class Text extends Component{
  constructor(fillStyle, font, text){
    super()
    this.fillStyle = fillStyle
    this.font = font
    this.text = text
  }
  draw(){
    ctx.fillStyle = this.fillStyle
      ctx.font = this.font
      ctx.fillText(this.text, this.transform.x, this.transform.y)
  }
}