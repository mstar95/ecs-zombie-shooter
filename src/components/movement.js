export default function movement (velocity) {
    return {
        name: 'movement',
        defaults: { velocity, x: 0, y: 0 }
    }
}
