import ECS from 'yagl-ecs'
import { mouse } from '../input'
import bulletEntity from '../entities/bullet';

class ShootSystem extends ECS.System {

    constructor(ecs) {
        super()
        this.ecs = ecs
    }

    test(entity) {
        return !!entity.components.weapon
    }

    update(entity) {
        const { weapon } = entity.components
        if (mouse.down && checkInterval(weapon)) {
            this.shot(entity.components)
        }
        count(weapon)
    }

     shot({ position: sourcePos, rotation, weapon }) {
        const bullet = bulletEntity()
        const { position, movement } = bullet.components
        setPosition(position, sourcePos)
        setMovement(movement, rotation, weapon)
        this.ecs.addEntity(bullet)
    }
}

export default ShootSystem

function checkInterval(weapon) {
    return weapon.counter == 0
}

function count(weapon) {
    if (weapon.interval && weapon.counter++ == weapon.interval) {
        weapon.counter = 0
    }
}

function setMovement (movement, rotation, weapon) {
    movement.x = Math.cos(rotation.angle) * weapon.velocity;
    movement.y = Math.sin(rotation.angle) * weapon.velocity;
    movement.velocity = weapon.velocity;
}

function setPosition (position, sourcePos) {
    position.x = sourcePos.x;
    position.y = sourcePos.y;
}
