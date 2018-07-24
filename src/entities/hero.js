import CES from 'ces'
import Position from '../components/position'
import Sprite from '../components/sprite'
import { WIDTH, HEIGHT } from '../canvas'
export default function hero () {
    const hero = new CES.Entity()
    hero.addComponent(new Position(WIDTH / 2, HEIGHT / 2))
    hero.addComponent(new Sprite("red"))
    return hero
}