class Collisions {

  /**
   * Early collision function
   * @param {Number} x1 The x coordinate of the first circle
   * @param {Number} y1 The y coordinate of the first circle
   * @param {Number} r1 The radius of the first circle
   * @param {Number} x2 The x coordinate of the second circle
   * @param {Number} y2 The y coordinate of the second circle
   * @param {Number} r2 The radius of the second circle
   * @returns True if the circles are in collision. False otherwise.
   */
  static inCollision(x1, y1, r1, x2, y2, r2) {
    let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    return distance < r1 + r2
  }

  /*
  * ╔══════════════════════════════════════╗
  * ║                                      ║
  * ║       Main Collision Functions       ║
  * ║                                      ║
  * ╚══════════════════════════════════════╝
  */


  /**
   * Detect if two circles are in collision
   * @param {GameObject} one The first circle game object
   * @param {GameObject} two The second circle game object
   * @returns True if the game objects are in collision. False otherwise.
   */
  static circleCircle(one, two) {
    return Vector2.fromGameObject(one).minus(Vector2.fromGameObject(two)).length() < one.transform.r + two.transform.r
  }

  /**
   * Detect if a circle and rectangle are in collision
   * @param {GameObject} one The circle game object
   * @param {GameObject} two The rectangle game object
   * @returns True if the game objects are in collision. False otherwise.
   */
  static circleRectangle(one, two) {
    let circleCenter = Vector2.fromGameObject(one)
    let radius = one.transform.r
    let [left, right, top, bottom] = Collisions.getEdgesOfRectangle(two)
    let [ul, ur, lr, ll] = Collisions.getLineSegmentsOfRectangle(two)

    if (Collisions.isPointInRectangle(circleCenter, left, right, top, bottom)) return true
    if (Collisions.isCircleIntersectingLineSegment(circleCenter, radius, ul, ur)) return true
    if (Collisions.isCircleIntersectingLineSegment(circleCenter, radius, ur, lr)) return true
    if (Collisions.isCircleIntersectingLineSegment(circleCenter, radius, lr, ll)) return true
    if (Collisions.isCircleIntersectingLineSegment(circleCenter, radius, ll, ul)) return true
    return false

  }

  /**
   * Detect if a circle and line segment are in collision
   * @param {GameObject} one The circle game object
   * @param {GameObject} two The line game object
   * @returns True if the game objects are in collision. False otherwise.
   */
  static circleLine(one, two) {
    let circleCenter = Vector2.fromGameObject(one)
    let radius = one.transform.r
    let [point1, point2] = Collisions.getEndsOfLine(two)

    return Collisions.isCircleIntersectingLineSegment(circleCenter, radius, point1, point2)
  }

  /**
   * Detect if a rectangle and circle are in collision
   * @param {GameObject} one The rectangle game object
   * @param {GameObject} two The circle game object
   * @returns True if the game objects are in collision. False otherwise.
   */
  static rectangleCircle(one, two) {
    return Collisions.circleRectangle(two, one)
  }

  /**
   * Detection if two rectangle are in collision
   * @param {GameObject} one The first rectangle game object
   * @param {GameObject} two The second rectangle game object
   * @returns True if the game objects are in collision. False otherwise.
   */
  static rectangleRectangle(one, two) {
    let [left1, right1, top1, bottom1] = Collisions.getEdgesOfRectangle(one)
    let [left2, right2, top2, bottom2] = Collisions.getEdgesOfRectangle(two)

    return !(left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2)
  }

  /**
   * Detect if a rectangle and line are in collision
   * @param {GameObject} one The rectangle game object
   * @param {GameObject} two The line game object
   * @returns True if the game objects are in collision. False otherwise.
   */
  static rectangleLine(one, two) {
    let [left, right, top, bottom] = this.getEdgesOfRectangle(one)
    let [linePoint1, linePoint2] = Collisions.getEndsOfLine(two)
    let [ul, ur, lr, ll] = Collisions.getLineSegmentsOfRectangle(one)

    if (this.isPointInRectangle(linePoint1, left, right, top, bottom)) return true
    if (this.isPointInRectangle(linePoint2, left, right, top, bottom)) return true

    if (Collisions.areLineSegmentsIntersecting(linePoint1, linePoint2, ul, ur)) return true
    if (Collisions.areLineSegmentsIntersecting(linePoint1, linePoint2, ur, lr)) return true
    if (Collisions.areLineSegmentsIntersecting(linePoint1, linePoint2, lr, ll)) return true
    if (Collisions.areLineSegmentsIntersecting(linePoint1, linePoint2, ll, ul)) return true

    return false
  }


  /**
   * Detect if a line and circle are in collision
   * @param {GameObject} one The line game object
   * @param {GameObject} two The circle game object
   * @returns True if the game objects are in collision. False otherwise.
   */
  static lineCircle(one, two) {
    return Collisions.circleLine(two, one)
  }

  /**
   * Detect if a line and rectangle are in collision
   * @param {GameObject} one The line game object
   * @param {GameObject} two The rectangle game object
   * @returns True if the game objects are in collision. False otherwise.
   */
  static lineRectangle(one, two) {
    return Collisions.rectangleLine(two, one);
  }

  /**
   * Detect if a line and line are in collision
   * @param {GameObject} one The first line game object
   * @param {GameObject} two The second line game object
   * @returns True if the game objects are in collision. False otherwise.
   */
  static lineLine(one, two) {
    let [start1, end1] = Collisions.getEndsOfLine(one)
    let [start2, end2] = Collisions.getEndsOfLine(two)
    return Collisions.areLineSegmentsIntersecting(start1, end1, start2, end2)
  }

  /*
 * ╔══════════════════════════════════════╗
 * ║                                      ║
 * ║           Helper Functions           ║
 * ║                                      ║
 * ╚══════════════════════════════════════╝
 */

  //
  // These helper functions take game objects and convert them into other objects or arrays
  //

  /**
   * Get the left, right, top, and bottom edge of a rectangle
   * @param {GameObject} gameObject The rectangle game object
   * @returns The left, right, top, and bottom edges of a rectangle as an array
   */
  static getEdgesOfRectangle(gameObject) {
    let left = gameObject.transform.x - gameObject.transform.w / 2
    let right = gameObject.transform.x + gameObject.transform.w / 2
    let top = gameObject.transform.y - gameObject.transform.h / 2
    let bottom = gameObject.transform.y + gameObject.transform.h / 2

    return [left, right, top, bottom]
  }


  /**
   * Get the four corners of a rectangle
   * @param {GameObject} gameObject The rectangle game object
   * @returns The upper left, upper right, lower right, and lower left corners of a rectangle as an array
   */
  static getLineSegmentsOfRectangle(gameObject) {
    let [left, right, top, bottom] = Collisions.getEdgesOfRectangle(gameObject)
    let ul = new Vector2(left, top)
    let ur = new Vector2(right, top)
    let lr = new Vector2(right, bottom)
    let ll = new Vector2(left, bottom)

    return [ul, ur, lr, ll]
  }

  /**
   * Get the ends of the line from a game object
   * @param {GameObject} gameObject 
   * @returns The ends of a line segment as Vector2s stored in an array
   */
  static getEndsOfLine(gameObject) {
    let point1 = new Vector2(gameObject.transform.x, gameObject.transform.y)
    let point2 = new Vector2(gameObject.transform.x2, gameObject.transform.y2)

    return [point1, point2]
  }

  //
  // These helper functions find something about the provided geometry
  //

  /**
   * Gets the projection of a point on an infinite line
   * @param {Vector2} point The point we are projecting on the infinite line
   * @param {Vector2} point1 The first point on the infinite line
   * @param {Vector2} point2 The second point on the infinite line
   * @returns The projection of a point on an infinite line
   */
  static findClosestPointOnInfiniteLine(point, point1, point2) {
    let pointMinusOne = point.minus(point1)
    let tangent = point2.minus(point1)
    let tangentNormalized = tangent.normalized()
    let pointOnInfiniteLine = point1.add(tangentNormalized.scaled(tangentNormalized.dot(pointMinusOne)))

    return pointOnInfiniteLine
  }

  /**
   * Get the projection on a point on a line segment, clamped to the two end points
   * @param {*} point The point to project into a line segment
   * @param {*} point1 The first point defining the line segment
   * @param {*} point2 The second point defining the line segment
   * @returns The projection of a point on a line segment, clamped to the two end points
   */
  static findClosestPointOnLineSegment(point, point1, point2) {
    let pointOnLine = this.findClosestPointOnInfiniteLine(point, point1, point2)
    let tangent = point2.minus(point1)
    let tangentNormalized = tangent.normalized()
    let lengthOfLine = point2.minus(point1).length()
    let toPoint = pointOnLine.minus(point1)
    let toPointLength = tangentNormalized.dot(toPoint)

    if (toPointLength < 0) return point1
    if (toPointLength > lengthOfLine) return point2
    return pointOnLine
  }

  /**
   * Get the ABC of Ax+By+C=0 of a line defined by two points
   * @param {Vector2} point1 The first point that defines the line 
   * @param {Vector2} point2 The second point that defines the line
   * @returns The ABC of Ax+By+C=0 of a line defined by two points
   */
  static findLineABC(point1, point2) {
    let A = point2.y - point1.y
    let B = -(point2.x - point1.x)
    let C = -new Vector2(A, B).dot(point1)

    return [A, B, C]
  }

  //
  // These helper functions determine the truth of something
  //

  /**
   * Determine if a point is inside a rectangle
   * @param {Vector2} point The point we are checking
   * @param {Number} left The x coordinate of the left of the rectangle
   * @param {Number} right The x coordinate of the right of the rectangle
   * @param {Number} top The y coordinate of the top (edge with a lower y) of the rectangle
   * @param {Number} bottom The y coordinate of the bottom (edge with a higher y) of the rectangle
   * @returns True if the point is in the rectangle. False otherwise
   */
  static isPointInRectangle(point, left, right, top, bottom) {
    return point.x > left && point.x < right && point.y > top && point.y < bottom
  }

  /**
   * Determine if a point on an infinite line is also within the line segment
   * @param {Vector2} point The point on the infinite line to check
   * @param {Vector2} point1 The first point defining the line segment
   * @param {Vector2} point2 The second point defining the line segment
   * @returns True if the point on an infinite line is also within the line segment. False otherwise
   */
  static isPointOnInfiniteLineWithinLineSegment(point, point1, point2) {
    let lengthOfLine = point2.minus(point1).length()
    let tangent = point2.minus(point1)
    let tangentNormalized = tangent.normalized()
    let toPoint = point.minus(point1)
    let toPointLength = tangentNormalized.dot(toPoint)

    return toPointLength >= 0 && toPointLength <= lengthOfLine
  }

  /**
   * Determine if two line segments intersect
   * @param {Vector2} point1A The first point defining the first line segment
   * @param {Vector2} point2A The second point defining the first line segment
   * @param {Vector2} point1B The first point defining the second line segment
   * @param {Vector2} point2B The second point defining the second line segment
   * @returns True if two line segments intersect. False otherwise.
   */
  static areLineSegmentsIntersecting(point1A, point2A, point1B, point2B) {
    let [A1, B1, C1] = Collisions.findLineABC(point1A, point2A)
    let [A2, B2, C2] = Collisions.findLineABC(point1B, point2B)

    let x = B1 * C2 - B2 * C1
    let y = C1 * A2 - C2 * A1
    let z = A1 * B2 - A2 * B1

    if (z == 0) return false //parallel lines

    let collision = new Vector2(x / z, y / z)

    return this.isPointOnInfiniteLineWithinLineSegment(collision, point1A, point2A) && this.isPointOnInfiniteLineWithinLineSegment(collision, point1B, point2B)
  }

  /**
   * Determine if a circle intersects a line segment
   * @param {Vector2} circleCenter The center of the circle
   * @param {Number} radius The radius of the circle
   * @param {Vector2} point1 The first point defining the line segment
   * @param {Vector2} point2 The second point defining the line segment
   * @returns True if the circle intersects a line segment. False otherwise.
   */
  static isCircleIntersectingLineSegment(circleCenter, radius, point1, point2) {
    if (circleCenter.minus(this.findClosestPointOnLineSegment(circleCenter, point1, point2)).length() < radius) return true
    return false
  }
}