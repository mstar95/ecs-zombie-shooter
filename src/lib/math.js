export function vector (x1, x2) {
    const val = distance(x1, x2)
    const sign = Math.sign(x1) * Math.sign(x2)
    return val * sign
}

export function distance (x1, x2) {
    return Math.abs(x1) - Math.abs(x2)
}

export function normalizeVectors (x, y) {
    const c = Math.sqrt(x * x + y * y)
    return c ? { x: x / c, y: y / c } : { x: 0, y: 0 }
}

export function addVectors (v1, v2) {
    return { x: v1.x + v2.x, y: v1.y + v2.y }
}
