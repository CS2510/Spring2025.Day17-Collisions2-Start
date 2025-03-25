class GuardMovement extends Component {
    constructor(speed, offset = 0){
        super()
        this.speed = speed
        this.offset = offset
    }

    elapsedTime

    start() {
        this.elapsedTime = 0
    }
    
    update() {
        this.elapsedTime += Time.deltaTime
        this.transform.x = 100 + 100 * Math.sin(this.elapsedTime * this.speed + this.offset)
    }
}