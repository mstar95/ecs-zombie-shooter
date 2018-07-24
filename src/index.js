import CES from 'ces'

import './style.css'
import { hero } from './entities/hero';

const world = new CES.World()

world.addEntity(hero())