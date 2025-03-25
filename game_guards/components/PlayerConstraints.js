class PlayerConstraints extends Component {
    update() {
        if (this.transform.x < 50) this.transform.x = 50
        if (this.transform.x > 200) this.transform.x = 200
        if (this.transform.y < 75) this.transform.y = 75
    }
}