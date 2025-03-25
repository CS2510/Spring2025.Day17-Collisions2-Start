class PlayerGameObject extends GameObject {
  start() {
    this.addComponent(new Circle("#AA8E39", "#554000", 5))
    this.addComponent(new KeyboardMovement(50))
    this.addComponent(new PlayerConstraints())
  }
}