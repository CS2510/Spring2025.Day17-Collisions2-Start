class Circle extends Component{
    constructor(fillStyle, strokeStyle, lineWidth){
        super()
        this.fillStyle = fillStyle
        this.strokeStyle = strokeStyle
        this.lineWidth = lineWidth
    }
    draw(){
        ctx.beginPath()
        ctx.fillStyle = this.fillStyle
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.lineWidth
        ctx.arc(this.transform.x, this.transform.y, this.transform.r, 0, Math.PI * 2)
    
        ctx.fill()
        ctx.stroke()
    }
}