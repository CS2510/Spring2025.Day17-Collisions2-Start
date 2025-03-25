class MouseMovementLine extends Component{
  update() {
    if (Input.mouseX && Input.mouseY) {
      this.transform.x = Input.mouseX + 75
      this.transform.y = Input.mouseY - 50
      this.transform.x2 = Input.mouseX + 75 + 25
      this.transform.y2 = Input.mouseY - 50 - 25
    }
  }
}