class CircleGameObject extends GameObject{
  constructor(name){
    super(name);
  }
  start(){
    this.addComponent(new Circle("#0000FF99", "lightblue", 5));
    // this.addComponent(new CircleLineTracker())
  }
}
