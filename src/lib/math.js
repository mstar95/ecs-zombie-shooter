export function vector (x1, x2) {
    const val = Math.abs(x1) - Math.abs(x2)
    const sign = Math.sign(x1) * Math.sign(x2)
    return val * sign
}

export function normalizeVectors (x, y) {
    const c = Math.sqrt(x * x + y * y)
    return c ? { vx: x / c, vy: y / c } : { vx: 0, vy: 0 }
}
