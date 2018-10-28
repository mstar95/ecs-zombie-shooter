import ECS from 'yagl-ecs';

import './style.css'
import hero from './entities/hero';
import RenderSystem from './systems/RenderSystem';
import MovementSystem from './systems/movementSystem';
import InputSystem from './systems/inputSystem';
import DebugSystem from './systems/debugSystem';
import ZombieSpawnerSystem from './systems/zombieSpawnerSystem';
import HeroFollowSystem from './systems/heroFollowSystem';
import PrettyMovementSystem from './systems/prettyMovementSystem';
import { loadAssets } from './loadAssets/load'
import ShootSystem from './systems/shootSystem';
import AvoidCollisionSystem from './systems/avoidCollisionSystem';
import BulletCollisionSystem from './systems/bulletCollisionSystem';
import OutputSystem from './systems/outputSystem';
import MeleeEnemyAttackSystem from './systems/meleeEnemyAttackSystem';
import HeroPropsToWeaponsSystem from './systems/heroPropsToWeaponsSystem';
import weapon from './entities/weapon';

const ecs = new ECS();

function gameLoop () {
    ecs.update();
    requestAnimationFrame(gameLoop);
}

ecs.addEntity(hero())
ecs.addEntity(weapon())

ecs.addSystem(new InputSystem)
ecs.addSystem(new MovementSystem)
ecs.addSystem(new HeroFollowSystem())
ecs.addSystem(new AvoidCollisionSystem)
ecs.addSystem(new MeleeEnemyAttackSystem())
ecs.addSystem(new HeroPropsToWeaponsSystem(ecs))
ecs.addSystem(new ShootSystem(ecs))
ecs.addSystem(new BulletCollisionSystem(ecs))
ecs.addSystem(new PrettyMovementSystem())
ecs.addSystem(new RenderSystem())
ecs.addSystem(new DebugSystem())
ecs.addSystem(new ZombieSpawnerSystem(ecs))
ecs.addSystem(new OutputSystem())

loadAssets()
    .then(gameLoop)
