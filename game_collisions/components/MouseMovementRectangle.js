class MouseMovementRectangle extends Component {
  update() {
    if (Input.mouseX && Input.mouseY) {
      this.transform.x = Input.mouseX - 100
      this.transform.y = Input.mouseY - 100
    }
  }
}