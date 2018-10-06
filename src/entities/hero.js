import Entity from '../lib/Entity'
import { WIDTH, HEIGHT } from '../canvas'

import sprite from '../components/sprite'
import position from '../components/position'
import heroComponent from '../components/hero'
import movement from '../components/movement'
import rotation from '../components/rotation';
import weapon, { SLOW, MEDIUM } from '../components/weapon';
import health from '../components/health';
import size from '../components/size';

export default function hero () {
    return Entity(
        position(WIDTH / 2, HEIGHT / 2),
        movement(5),
        sprite('hero.png'),
        heroComponent(),
        rotation(0),
        weapon(MEDIUM, 2, 10),
        health(100),
        size(15)
    )
}