import Entity from '../lib/Entity'

import sprite from '../components/sprite'
import position from '../components/position'
import movement from '../components/movement'
import bulletComponent from '../components/bullet'

export default function bullet() {
    return Entity(
        position(0, 0),
        movement(0),
        sprite('zombie.png'),
        bulletComponent(0)
    )
}