import Entity from '../lib/Entity'
import { WIDTH, HEIGHT } from '../canvas'

import sprite from '../components/sprite'
import position from '../components/position'
import heroComponent from '../components/hero'
import movement from '../components/movement'

export default function hero () {
    return Entity(
        position(WIDTH / 2, HEIGHT / 2),
        movement(5),
        sprite("red"),
        heroComponent()
    )
}