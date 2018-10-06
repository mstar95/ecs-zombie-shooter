import ECS from 'yagl-ecs'
import { printHealth } from '../output';

class OutputSystem extends ECS.System {

    constructor() {
        super()
    }

    test (entity) {
        return !!entity.components.hero
    }

    update (entity) {
        const { health } = entity.components
        printHealth(health.value)
    }
}

export default OutputSystem