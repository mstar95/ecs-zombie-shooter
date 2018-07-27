import Entity from '../lib/Entity'
import sprite from '../components/sprite'
import position from '../components/position'
import heroComponent from '../components/hero'

import { WIDTH, HEIGHT } from '../canvas'
import movement from '../components/movement';
export default function hero () {
    return Entity(
        position(WIDTH / 2, HEIGHT / 2),
        movement(5),
        sprite("red"),
        heroComponent()
    )
}