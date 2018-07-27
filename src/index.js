import ECS from 'yagl-ecs';

import './style.css'
import  hero  from './entities/hero';
import  RenderSystem from './systems/RenderSystem';

const ecs = new ECS();

function gameLoop() {
    ecs.update(); 
    requestAnimationFrame(gameLoop);
}

ecs.addEntity(hero())
ecs.addSystem(new RenderSystem())


gameLoop()