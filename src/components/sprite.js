import CES from 'ces'

class Sprite extends CES.Component {
    constructor(color) {
        super()
        this.name = 'sprite'
        this.color = color
    }
}

export default Sprite