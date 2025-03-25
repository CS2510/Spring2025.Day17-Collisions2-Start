class Transform extends Component{

    x // The x coordinate of the game object with this transform. For circles and rectangles, this is the center x coordinate. For lines, this is x coordinate 1.
    y // The y coordinate of the game object with this transform. For circles and rectangles, this is the center x coordinate. For lines, this is y coordinate 1.
    r // The radius of the circle, or the width of the rectangle, with this transform. For lines, this is the x coordinate 2. See also w and x2.
    h // The height of the rectangle with this transform. Ignored for circles and lines. For lines, this is the y coordinate 2. See also y2.

    get w(){
        return this.r
    }
    set w(value){
        this.r = value
    }

    get x2(){
        return this.r
    }

    get y2(){
        return this.h
    }

    set x2(value){
        this.r = value
    }

    set y2(value){
        this.h = value
    }
}