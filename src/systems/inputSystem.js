import ECS from 'yagl-ecs'
import { getX, getY } from '../input'
import { normalizeVector } from '../lib/math';

class InputSystem extends ECS.System {

    constructor() {
        super()
    }

    test (entity) {
        return !!entity.components.hero && !!entity.components.movement
    }

    update (entity) {
        const { movement } = entity.components
        const { x: vx, y: vy } = normalizeVector(getX(), getY())
        movement.x = vx * movement.velocity
        movement.y = vy * movement.velocity
    }
}

export default InputSystem