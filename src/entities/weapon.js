import Entity from '../lib/Entity'
import { WIDTH, HEIGHT } from '../canvas'

import rotation from '../components/rotation';
import position from '../components/position'
import weaponComponent, { SLOW, MEDIUM } from '../components/weapon';
import item from '../components/item'

export default function weapon() {
    return Entity(
        weaponComponent(MEDIUM, 2, 10),
        item(),
        position(WIDTH / 2, HEIGHT / 2),
        rotation(0),
    )
}