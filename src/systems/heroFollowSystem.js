import ECS from 'yagl-ecs'
import { HEIGHT, WIDTH } from '../canvas'
import zombie from '../entities/zombie';
import { vector, normalizeVector } from '../lib/math';

class HeroFollowSystem extends ECS.System {

    constructor(ecs) {
        super()
        this.ecs = ecs
        this.heroPositionCache = null
    }

    test (entity) {
        return (!!entity.components.enemy && !!entity.components.movement && !!entity.components.movement)
            || entity.components.hero
    }

    enter (entity) {
        if (!!entity.components.hero) {
            this.heroPositionCache = entity.components.position
        }
    }

    update (entity) {
        if (!!entity.components.enemy) {
            const { movement, position } = entity.components
            const x = vector(this.heroPositionCache.x, position.x)
            const y = vector(this.heroPositionCache.y, position.y)
            const { x: vx, y: vy } = normalizeVector(x, y)
            movement.x = vx * movement.velocity
            movement.y = vy * movement.velocity
        }
    }
}

export default HeroFollowSystem