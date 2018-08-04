import Entity from '../lib/Entity'
import sprite from '../components/sprite'
import position from '../components/position'
import movement from '../components/movement'
import enemy from '../components/enemy'
import rotation from '../components/rotation';

export default function zombie (x, y) {
    return Entity(
        position(x, y),
        movement(2),
        sprite('zombie.png'),
        enemy(),
        rotation(0)
    )
}