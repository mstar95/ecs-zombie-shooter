export function vector (x1, x2) {
    const val = length1D(x1, x2)
    const sign = Math.sign(x1) * Math.sign(x2)
    return val * sign
}

export function length1D (x1, x2) {
    return Math.abs(x1) - Math.abs(x2)
}

export function length2D (p1, p2) {
    const x = length1D(p1.x, p2.x)
    const y = length1D(p1.y, p2.y)
    return Math.sqrt(x * x + y * y)
}

export function normalizeVector (x, y) {
    const c = Math.sqrt(x * x + y * y)
    return c ? { x: x / c, y: y / c } : { x: 0, y: 0 }
}

export function addVectors (v1, v2) {
    return { x: v1.x + v2.x, y: v1.y + v2.y }
}

export function radians(degrees) {
  return degrees * (Math.PI/180);
}

export function angle(x, y) {
    return Math.atan2(y, x)
}
