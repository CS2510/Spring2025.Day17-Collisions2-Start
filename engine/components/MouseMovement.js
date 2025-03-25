class MouseMovement extends Component {
  start() {
    this.transform.x = 0
    this.transform.y = 0
  }
  update() {
    if (Input.mouseX && Input.mouseY) {
      this.transform.x = Input.mouseX
      this.transform.y = Input.mouseY
    }
  }
}