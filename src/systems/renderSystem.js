import ECS from 'yagl-ecs'
import { ctx, HEIGHT, WIDTH } from '../canvas'
import { assets } from '../loadAssets/load'
import { radians } from '../lib/math';
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
        const { position, rotation } = entity.components
        const sprite = assets[entity.components.sprite.src]
        if (rotation) {
            drawRotated(sprite, rotation.angle, position)
        } else {
            ctx.drawImage(sprite.image, position.x - sprite.width, position.y - sprite.height)
        }
    }
}

export default RenderSystem


function drawRotated (sprite, angle, position) {
    ctx.save()
    ctx.translate(position.x, position.y)
    ctx.rotate(angle)
    ctx.drawImage(sprite.image, -sprite.width, -sprite.height)
    ctx.restore()
}

