import ECS from 'yagl-ecs'
import { getX, getY } from '../input'
import { normalizeVectors } from '../lib/math';

class InputSystem extends ECS.System {

    constructor() {
        super()
    }

    test (entity) {
        return !!entity.components.hero && !!entity.components.movement
    }

    update (entity) {
        const { movement } = entity.components
        const { vx, vy } = normalizeVectors(getX(), getY())
        movement.x = vx * movement.velocity
        movement.y = vy * movement.velocity
    }
}

export default InputSystem