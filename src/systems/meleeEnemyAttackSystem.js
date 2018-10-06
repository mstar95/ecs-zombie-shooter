import ECS from 'yagl-ecs'
import { vector1D, normalizeVector, angle } from '../lib/math';
import collsion from '../lib/collision';

class MeleeEnemyAttackSystem extends ECS.System {

    constructor() {
        super()
        this.heroPositionCache = null
    }

    test (entity) {
        return (!!entity.components.enemy && !!entity.components.position && !!entity.components.meleeAttacker)
            || entity.components.hero
    }

    enter (entity) {
        if (!!entity.components.hero) {
            this.heroPositionCache = entity.components.position
            this.heroSizeCache = entity.components.size
        }
    }

    update (entity) {
        if (!!entity.components.enemy && this.inRange(entity)) {
            const { meleeAttacker } = entity.components
            if (checkCooldown(meleeAttacker)) {
                this.entities.filter(e => !!e.components.hero)
                    .forEach(hero => attackHero(hero, meleeAttacker))
            }
        }
    }

    inRange (entity) {
        const { position, size, meleeAttacker } = entity.components
        return collsion({ ...position, size: size.radius }, { ...(this.heroPositionCache), size: this.heroSizeCache.radius }, meleeAttacker.range)
    }
}

function checkCooldown (meleeAttacker) {
    if (meleeAttacker.cooldown == 0) {
        meleeAttacker.cooldown = meleeAttacker.speed
        return true
    }
    meleeAttacker.cooldown--
    return false
}

function attackHero (hero, meleeAttacker) {
    const { health } = hero.components
    health.value -= meleeAttacker.damage
}


export default MeleeEnemyAttackSystem
