class Scene01 extends Scene{
  start(){
    
    this.addGameObject(new CircleGameObject("Circle Game Object"), 200, 200, 50)
    this.addGameObject(new LineGameObject("Line Game Object"), 300, 300, 350, 350)
    this.addGameObject(new RectangleGameObject("Rectangle Game Object"), 400, 400, 75, 75)

    this.addGameObject(new MouseMoveCircleGameObject("Mouse Move Circle Game Object"), 200, 200, 25)
    this.addGameObject(new MouseMoveRectangleGameObject("Mouse Move Rectangle Game Object"), 200, 200, 25, 25)
    this.addGameObject(new MouseMoveLineGameObject("Mouse Move Line Game Object"), 200, 200, 225, 225)
    


    
  }
}