import ECS from 'yagl-ecs'
import { getX, getY } from '../input'

class InputSystem extends ECS.System {

    test (entity) {
        return !!entity.components.hero && !!entity.components.movement
    }

    update (entity) {
        const { movement } = entity.components
        const x = getX()
        const y = getY()
        const c = Math.sqrt(x * x + y * y)
        if (c == 0) {
            movement.x = 0
            movement.y = 0
        } else {
            movement.x = (x / c) * movement.velocity
            movement.y = (y / c) * movement.velocity
        }
    }
}

export default InputSystem