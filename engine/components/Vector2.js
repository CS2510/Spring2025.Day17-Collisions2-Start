class Vector2{
  constructor(x, y){

    this.x = x
    this.y = y
  }

  static fromGameObject(gameObject){
    return new Vector2(gameObject.transform.x, gameObject.transform.y)
  }

  length(){
    return Math.sqrt(this.x**2+this.y**2)
  }

  normalized(){
    let length = this.length()
    return new Vector2(this.x/length, this.y/length)
  }

  add(other){
    return new Vector2(this.x + other.x, this.y + other.y)
  }

  minus(other){
    return new Vector2(this.x - other.x, this.y - other.y)
  }

  dot(other){
    return this.x * other.x + this.y * other.y
  }
  
  scaled(scalar){
    return new Vector2(this.x * scalar, this.y * scalar)
  }

  negate(){
    return new Vector2(-this.x, -this.y)
  }

}