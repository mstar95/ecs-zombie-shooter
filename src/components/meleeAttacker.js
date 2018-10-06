export default function meleeAttacker (damage, speed, range = 5) {
    return {
        name: 'meleeAttacker',
        defaults: { damage, speed, range, cooldown: 0}
    }
}
