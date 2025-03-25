class Input{
    static keysdown = []
    static keysDownThisFrame = []
    static keysUpThisFrame = []

    static mouseX
    static mouseY

    static mouseDown
    static mouseDownThisFrame
    static mouseUpThisFrame

    static lastMouseX
    static lastMouseY

    static lastWheelDelta

    static touchDown
    static touchDownThisFrame
    static touchUpThisFrame
    static touchX
    static touchY
    static touchStartX
    static touchStartY

    static keydown(event) {
      if (!Input.keysdown.includes(event.code))
        Input.keysdown.push(event.code)
      if(!Input.keysDownThisFrame.includes(event.code))
        Input.keysDownThisFrame.push(event.code)
    }

    static keyup(event) {
      let index = Input.keysdown.indexOf(event.code)
      Input.keysdown.splice(index, 1)
      if(!Input.keysUpThisFrame.includes(event.code))
        Input.keysUpThisFrame.push(event.code)
    }

    static mousemove(event){
      Input.mouseX = event.clientX
      Input.mouseY = event.clientY

    }
    static mouseup(event){
      Input.mouseDown = false
      Input.mouseUpThisFrame = true

    }
    static mousedown(event){
      Input.mouseDown = true
      Input.mouseDownThisFrame = true

    }

    static wheel(event){
      Input.lastWheelDelta = event.wheelDelta
    }

    static touchstart(event){
      Input.touchStartX = event.changedTouches[0].clientX
      Input.touchStartY = event.changedTouches[0].clientY

      console.log(Input.touchStartX)
      
      Input.touchDown = true
      Input.touchDownThisFrame = true
    }

    static touchend(event){
      Input.touchDown = false
      Input.touchUpThisFrame = true

    }
    
    static touchmove(event){
      Input.touchX = event.changedTouches[0].clientX
      Input.touchY = event.changedTouches[0].clientY
      event.preventDefault()
    }

    static update(){
      Input.keysDownThisFrame = []
      Input.keysUpThisFrame = []

      Input.mouseDownThisFrame = false
      Input.mouseUpThisFrame = false

      Input.lastMouseX = Input.mouseX
      Input.lastMouseY = Input.mouseY

      Input.lastWheelDelta = 0

      Input.touchDownThisFrame = false
      Input.touchUpThisFrame = false
    }
}