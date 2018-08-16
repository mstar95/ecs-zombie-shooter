import ECS from 'yagl-ecs'
import { getX, getY, mouse } from '../input'
import { normalizeVector, vector, angle } from '../lib/math';

class InputSystem extends ECS.System {

    constructor() {
        super()
    }

    test (entity) {
        return !!entity.components.hero
    }

    update (entity) {
        updateMovement(entity)
        updateRotation(entity)
    }
}

function updateMovement (entity) {
    const { movement } = entity.components
    const { x: vx, y: vy } = normalizeVector(getX(), getY())
    movement.x = vx * movement.velocity
    movement.y = vy * movement.velocity
}

function updateRotation (entity) {
    const { position, rotation } = entity.components
    const x = vector(mouse.x, position.x)
    const y = vector(mouse.y, position.y)
    const { x: vx, y: vy } = normalizeVector(x, y)
    rotation.angle = angle(vx, vy)
}

export default InputSystem