import ECS from 'yagl-ecs'
import { ctx, HEIGHT, WIDTH } from '../canvas'
import { assets } from '../loadAssets/load'
class RenderSystem extends ECS.System {

    constructor(ecs) {
        super()
    }

    test (entity) {
        return !!entity.components.position && !!entity.components.sprite
    }

    preUpdate () {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
    }

    update (entity) {
        const { position } = entity.components
        const sprite = assets[entity.components.sprite.src]
        ctx.drawImage(sprite.image, position.x + sprite.image.width / 2, position.y - sprite.image.height / 2)
    }
}

export default RenderSystem