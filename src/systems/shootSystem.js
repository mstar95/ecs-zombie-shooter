import ECS from 'yagl-ecs'
import { mouse } from '../input'
import bulletEntity from '../entities/bullet';

class ShootSystem extends ECS.System {

    constructor(ecs) {
        super()
        this.counter = 0
        this.ecs = ecs
    }

    test(entity) {
        return !!entity.components.hero
    }

    update(entity) {
        const { weapon } = entity.components
        if (mouse.down && this.checkInterval(weapon.interval)) {
            this.shot(entity.components)
        }
        this.count()
    }

    shot({ position: sourcePos, rotation, weapon }) {
        const bullet = bulletEntity()
        const { position, movement } = bullet.components
        setPosition(position, sourcePos)
        setMovement(movement, rotation, weapon)
        this.ecs.addEntity(bullet)
    }

    checkInterval(interval) {
        this.interval = interval
        return this.counter == 0
    }

    count() {
        if (this.interval && this.counter++ == this.interval) {
            this.counter = 0
            this.interval = null
        }
    }
}

export default ShootSystem

function setMovement (movement, rotation, weapon) {
    movement.x = Math.cos(rotation.angle) * weapon.velocity;
    movement.y = Math.sin(rotation.angle) * weapon.velocity;
    movement.velocity = weapon.velocity;
}

function setPosition (position, sourcePos) {
    position.x = sourcePos.x;
    position.y = sourcePos.y;
}
