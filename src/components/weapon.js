export const SLOW = 100

export default function weapon (interval, damage, velocity) {
    return {
        name: 'weapon',
        defaults: { interval, damage, velocity }
    }
}
