import Entity from '../lib/Entity'
import { WIDTH, HEIGHT } from '../canvas'

import sprite from '../components/sprite'
import position from '../components/position'
import heroComponent from '../components/hero'
import movement from '../components/movement'
import rotation from '../components/rotation';

export default function hero () {
    return Entity(
        position(WIDTH / 2, HEIGHT / 2),
        movement(5),
        sprite('hero.png'),
        heroComponent(),
        rotation(0)
    )
}