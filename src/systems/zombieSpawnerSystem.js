import ECS from 'yagl-ecs'
import { HEIGHT, WIDTH } from '../canvas'
import zombie from '../entities/zombie';

const numberOfZombies = 10

class ZombieSpawnerSystem extends ECS.System {

    constructor(ecs) {
        super(10)
        this.ecs = ecs
    }

    test (entity) {
        return !!entity.components.enemy 
    }

    preUpdate() {
        const x = numberOfZombies - this.entities.length
        if( x &&  Math.random() * 100 < x) {
            this.spawn()
        }
    }

    spawn() {
        this.ecs.addEntity(zombie(Math.random() * WIDTH, Math.random() * HEIGHT))
    }
}

export default ZombieSpawnerSystem