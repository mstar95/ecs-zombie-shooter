import CES from 'ces'

class Position extends CES.Component {
    constructor(x, y) {
        super()
        this.name = 'position'
        this.x = x
        this.y = y;
    }
}

export default Position