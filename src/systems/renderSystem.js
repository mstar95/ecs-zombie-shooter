import CES from 'ces'
import { ctx } from '../canvas'

class RenderSystem extends CES.System {

    constructor() {
        super()
    }

    update () {

        const entities = this.world.getEntities('position')

        entities.forEach(entity => {
            console.log(entity)
            const position = entity.getComponent('position')
            ctx.beginPath();
            ctx.arc(position.x, position.y, 50, 0, 2 * Math.PI);
            ctx.stroke();
        })
    }
}

export default RenderSystem