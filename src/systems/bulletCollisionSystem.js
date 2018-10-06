import ECS from 'yagl-ecs'
import collsion from '../lib/collision';

class BulletCollisionSystem extends ECS.System {

    constructor(ecs) {
        super()
        this.ecs = ecs
        this.heroPositionCache = null
    }

    test (entity) {
        return !!entity.components.enemy || !!entity.components.bullet
    }

    update (entity) {
        if (!!entity.components.enemy) {
            this.updateEnemy(entity);
        }
    }

    updateEnemy (entity) {
        const bullet = this.entities.filter(collision => !!collision.components.bullet)
            .find(collision => willCollide(entity, collision))
        if (bullet) {
            this.ecs.removeEntity(entity);
            this.ecs.removeEntity(bullet);
        }
    }
}

function willCollide (e1, e2) {
    return collsion(pointWithSize(e1), pointWithSize(e2), 0)
}

function pointWithSize (entity) {
    const position = entity.components.position
    const radius = entity.components.size.radius
    return { ...position, size: radius }
}

export default BulletCollisionSystem