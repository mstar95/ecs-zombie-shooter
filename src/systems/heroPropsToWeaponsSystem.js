import ECS from 'yagl-ecs'


class HeroPropsToWeaponSystem extends ECS.System {

    constructor() {
        super()
    }

    test (entity) {
        return !!entity.components.weapon ||
            !!entity.components.hero && !!entity.components.position && !!entity.components.rotation
    }

    update (entity) {
        if (!!entity.components.hero) {
            this.hero = entity
        } else {
            if (this.hero) {
                this.updateWeapon(entity)
            }
        }
    }

    updateWeapon (entity) {
        const { position, rotation } = entity.components
        const { position: heroPos, rotation: heroRotation } = this.hero.components
        position.x = heroPos.x
        position.y = heroPos.y
        rotation.angle = heroRotation.angle
    }
}

export default HeroPropsToWeaponSystem
