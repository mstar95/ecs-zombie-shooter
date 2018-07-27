import ECS from 'yagl-ecs';

import './style.css'
import  hero  from './entities/hero';
import  RenderSystem from './systems/RenderSystem';
import MovementSystem from './systems/movementSystem';
import InputSystem from './systems/inputSystem';
import DebugSystem from './systems/debugSystem';
import ZombieSpawnerSystem from './systems/zombieSpawnerSystem';

const ecs = new ECS();

function gameLoop() {
    ecs.update(); 
    requestAnimationFrame(gameLoop);
}

ecs.addEntity(hero())

ecs.addSystem(new InputSystem)
ecs.addSystem(new MovementSystem)
ecs.addSystem(new RenderSystem())
ecs.addSystem(new ZombieSpawnerSystem(ecs))
ecs.addSystem(new DebugSystem())

gameLoop()