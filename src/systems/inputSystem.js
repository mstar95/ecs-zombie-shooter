import CES from 'ces'
import { getInputXAxis, getInputYAxis } from '../input'

class RenderSystem extends CES.System {

    constructor() {
        super()
    }

    update () {

        const entities = this.world.getEntities('movement', 'hero')
        entities.forEach(entity => {
            const movement = entity.getComponent('movement')

        })
    }
}

export default RenderSystem