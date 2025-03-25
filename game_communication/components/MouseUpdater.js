class MouseUpdater extends Component{
  start(){

  }
  update(){
    if(Input.mouseDown){
      this.parent.findComponent(Circle).strokeStyle = "blue"
    }
    else{
      this.parent.findComponent(Circle).strokeStyle = "pink"
    }

    if(Input.mouseDownThisFrame){
      console.log("mouse down")
    }
    if(Input.mouseUpThisFrame){
      console.log("mouse up")
    }
    
  }
}