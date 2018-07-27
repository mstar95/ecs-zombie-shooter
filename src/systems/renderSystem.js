import ECS from 'yagl-ecs'
import { ctx } from '../canvas'

class RenderSystem extends ECS.System {

    constructor() {
        super()
       console.log(this)
    }
    test (entity) {
        console.log(entity)
        return !!entity.components.position && !!entity.components.sprite
    }

    update (entity) {
        const {position, sprite} = entity.components
        ctx.fillStyle = sprite.color
        ctx.arc(position.x, position.y, 15, 0, 2 * Math.PI)
        ctx.fill()
    }
}

export default RenderSystem