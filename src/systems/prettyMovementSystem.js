import ECS from 'yagl-ecs';

const MAX_LEAN = 0.05
const RADIAN_360 = Math.PI * 2

class PrettyMovementSystem extends ECS.System {

    constructor() {
        super()
        this.lean = 0
        this.counter = MAX_LEAN / 15
    }

    test (entity) {
        return !!entity.components.movement && !!entity.components.rotation && !entity.components.hero
    }

    preUpdate () {
        if (Math.abs(this.lean) > MAX_LEAN) {
            this.counter *= -1
        }
        this.lean += this.counter
    }

    update (entity) {
        const { rotation, movement } = entity.components
        if (movement.x != 0 || movement.y != 0) {
            rotation.angle += RADIAN_360 * this.lean
        }
    }
}

export default PrettyMovementSystem