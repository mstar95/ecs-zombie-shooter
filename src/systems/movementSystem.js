import ECS from 'yagl-ecs'

class MovementSystem extends ECS.System {

    test (entity) {
        return !!entity.components.position && !!entity.components.movement
    }

    update (entity) {
        const {position, movement} = entity.components
        position.x += movement.x
        position.y += movement.y
    }
}

export default MovementSystem