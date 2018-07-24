import CES from 'ces'

import './style.css'
import  hero  from './entities/hero';
import  RenderSystem from './systems/RenderSystem';

const world = new CES.World()

world.addEntity(hero())
world.addSystem(new RenderSystem())

requestAnimationFrame(function () {
    world.update(/* interval */);
})
