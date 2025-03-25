class TouchMovement extends Component {
  update() {
    if (Input.touchX && Input.touchY) {
      this.transform.x = Input.touchX
      this.transform.y = Input.touchY
    }
  }
}