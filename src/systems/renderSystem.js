import CES from 'ces'
import { ctx } from '../canvas'

class RenderSystem extends CES.System {

    constructor() {
        super()
    }

    update () {

        const entities = this.world.getEntities('position', 'sprite')

        entities.forEach(entity => {
            console.log(entity)
            const position = entity.getComponent('position')
            ctx.fillStyle = entity.getComponent('sprite').color
            ctx.arc(position.x, position.y, 15, 0, 2 * Math.PI)
            ctx.fill()
        })
    }
}

export default RenderSystem