import CES from 'ces'

class Movement extends CES.Component {
    constructor(velocity) {
        super()
        this.name = 'movement'
        this.velocity = velocity
        this.vx = 0
        this.vy = 0
    }
}

export default Movement