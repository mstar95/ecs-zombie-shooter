import Entity from '../lib/Entity'
import sprite from '../components/sprite'
import position from '../components/position'
import heroComponent from '../components/hero'

import { WIDTH, HEIGHT } from '../canvas'
export default function hero () {
    return Entity(position(WIDTH / 2, HEIGHT / 2),  sprite("red"), heroComponent())
}