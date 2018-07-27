import ECS from 'yagl-ecs'
import { ctx, HEIGHT, WIDTH } from '../canvas'

class RenderSystem extends ECS.System {

    test (entity) {
        return !!entity.components.position && !!entity.components.sprite
    }

    preUpdate() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
    }

    update (entity) {
        const {position, sprite} = entity.components
        ctx.beginPath();
        ctx.fillStyle = sprite.color
        ctx.arc(position.x, position.y, 15, 0, 2 * Math.PI)
        ctx.fill()
    }
}

export default RenderSystem