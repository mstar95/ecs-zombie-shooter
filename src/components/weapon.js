export const SLOW = 100
export const MEDIUM = 30

export default function weapon (interval, damage, velocity) {
    return {
        name: 'weapon',
        defaults: { interval, damage, velocity }
    }
}
