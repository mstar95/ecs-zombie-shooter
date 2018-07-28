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

    preUpdate () {
        const x = numberOfZombies - this.entities.length
        if (x && Math.random() * 50 < x) {
            this.spawn()
        }
    }

    spawn () {
        const rnd = Math.random()
        if (rnd > 0.75) {
            this.ecs.addEntity(zombie(Math.random() * WIDTH, 1))
        } else if(rnd > 0.5) {
            this.ecs.addEntity(zombie(Math.random() * WIDTH, HEIGHT))
        } else if (rnd > 2.5) {
            this.ecs.addEntity(zombie(1, Math.random() * HEIGHT))
        } else {
            this.ecs.addEntity(zombie(WIDTH, Math.random() * HEIGHT))
        }
    }
}

export default ZombieSpawnerSystem