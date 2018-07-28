import ECS from 'yagl-ecs';

import './style.css'
import  hero  from './entities/hero';
import  RenderSystem from './systems/RenderSystem';
import MovementSystem from './systems/movementSystem';
import InputSystem from './systems/inputSystem';
import DebugSystem from './systems/debugSystem';
import ZombieSpawnerSystem from './systems/zombieSpawnerSystem';
import HeroFollowSystem from './systems/heroFollowSystem';
import avoidCollisionSystem from './systems/avoidCollisionSystem';

const ecs = new ECS();

function gameLoop() {
    ecs.update(); 
    requestAnimationFrame(gameLoop);
}

ecs.addEntity(hero())

ecs.addSystem(new InputSystem)
ecs.addSystem(new MovementSystem)
ecs.addSystem(new HeroFollowSystem())
ecs.addSystem(new avoidCollisionSystem)
ecs.addSystem(new RenderSystem())
ecs.addSystem(new DebugSystem())
ecs.addSystem(new ZombieSpawnerSystem(ecs))

gameLoop()