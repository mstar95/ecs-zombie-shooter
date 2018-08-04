import ECS from 'yagl-ecs'
import { vector, normalizeVector, addVectors, length2D } from '../lib/math';

const AVOID_COLLISION_SPEED = - 3
const DEFAULT_SIZE = 15
const epsilon = 2
const PUSH_BACK_CONST = 100

class avoidCollisionSystem extends ECS.System {

    constructor(ecs) {
        super()
        this.ecs = ecs
        this.heroPositionCache = null
    }

    test (entity) {
        return !!entity.components.position
    }

    update (entity) {
        if (!!entity.components.enemy) {
            this.entities.filter(collision => collision.id != entity.id)
                .filter(collision => willCollide(entity, collision))
                .forEach(collision => {
                    const { movement, position } = entity.components
                    const { position: collisionPos } = collision.components
                    const x = vector(collisionPos.x, position.x)
                    const y = vector(collisionPos.y, position.y)
                    const { x: vx, y: vy } = normalizeVector(x, y)
                    const lenght = length2D(position, collisionPos)
                    const pushBackPwr = pushBackPower(lenght)
                    movement.x += vx * pushBackPwr
                    movement.y += vy * pushBackPwr
                })
        }
    }
}

function willCollide (e1, e2) {
    const { movement: m1, position: p1 } = e1.components
    const { movement: m2, position: p2 } = e2.components
    const nextP1 = addVectors(m1, p1)
    const nextP2 = addVectors(m2, p2)
    const minDistance = e2.components.hero ? DEFAULT_SIZE * 2 : DEFAULT_SIZE * 2 + epsilon
    const distance = length2D(nextP1, nextP2)
    return distance < minDistance
}

function pushBackPower (r) {
    return - PUSH_BACK_CONST / r
}

export default avoidCollisionSystem