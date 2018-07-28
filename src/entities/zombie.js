import Entity from '../lib/Entity'
import sprite from '../components/sprite'
import position from '../components/position'
import movement from '../components/movement'
import enemy from '../components/enemy'

export default function zombie (x, y) {
    return Entity(
        position(x, y),
        movement(3),
        sprite("green"),
        enemy()
    )
}