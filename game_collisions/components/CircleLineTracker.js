class CircleLineTracker extends Component{
  constructor(){
    super()
  }
  update(){
    let one = Engine.currentScene.findGameObject("Mouse Move Circle Game Object")
    let two = Engine.currentScene.findGameObject("Line Game Object")

    let line = two.findComponent(Line)
    let tangent = line.tangent()
    let difference = new Vector2(one.transform.x, one.transform.y).minus(new Vector2(two.transform.x2, two.transform.y2))
    let dot = tangent.normalized().dot(difference)
    let closestPoint = tangent.normalized().scaled(dot).add(new Vector2(two.transform.x2, two.transform.y2))
    // this.transform.x = closestPoint.x
    // this.transform.y = closestPoint.y

  }

  draw(){

    //Draw where the mouse circle intersects the infinite line of the static line
    let one = Engine.currentScene.findGameObject("Mouse Move Circle Game Object")
    let two = Engine.currentScene.findGameObject("Line Game Object")
    
    let line = two.findComponent(Line)
    let tangent = line.tangent()
    let difference = new Vector2(one.transform.x, one.transform.y).minus(new Vector2(two.transform.x2, two.transform.y2))
    let dot = tangent.normalized().dot(difference)
    let closestPoint = tangent.normalized().scaled(dot).add(new Vector2(two.transform.x2, two.transform.y2))
    // this.transform.x = closestPoint.x
    // this.transform.y = closestPoint.y
    
    ctx.beginPath()
    
    ctx.strokeStyle = "black"
    ctx.arc(closestPoint.x, closestPoint.y, 5, 0, Math.PI*2);
    ctx.stroke()
    


    //Draw where the two lines cross
    let startOne = new Vector2(two.transform.x, two.transform.y)
    let endOne = new Vector2(two.transform.x2, two.transform.y2)


    let mouseLine = Engine.currentScene.findGameObject("Mouse Move Line Game Object")
    let startTwo = new Vector2(mouseLine.transform.x, mouseLine.transform.y)
    let endTwo = new Vector2(mouseLine.transform.x2, mouseLine.transform.y2)



    let A1 = endOne.y - startOne.y
    let B1 = -(endOne.x - startOne.x)
    let v1 = new Vector2(A1, B1).normalized()
    A1 = v1.x
    B1 = v1.y
    let C1 = -new Vector2(A1, B1).dot(startOne)
    
    let A2 = endTwo.y - startTwo.y
    let B2 = -(endTwo.x - startTwo.x)
    let v2 = new Vector2(A2, B2).normalized()
    A2 = v2.x
    B2 = v2.y
    let C2 = -new Vector2(A2, B2).dot(startTwo)
    
    //Find the cross product
    let cpX = B1*C2-C1*B2
    let cpY = C1*A2-A1*C2
    let cpZ = A1*B2-B1*A2

    if(cpZ == 0) return //parallel

    let collision = new Vector2(-cpX, -cpY)



    ctx.beginPath()
    
    ctx.strokeStyle =  this.pointOnLineSegment(collision, startOne, endOne) && this.pointOnLineSegment(collision, startTwo, endTwo)  ? "purple" : "orange"
    ctx.arc(collision.x, collision.y, 5, 0, Math.PI*2);
    ctx.stroke()

    
  }

  pointOnLineSegment(point, one, two){
    let difference = point.minus(two)
    let tangent = new Vector2(one.x - two.x, one.y-two.y)
    let dot = difference.dot(tangent.normalized())
    //console.log(dot)
    if(dot > tangent.length()) return false
    if(dot < 0) return false
    return true
  }
}