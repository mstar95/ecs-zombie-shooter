import { length2D } from "./math";

export default function collsion (entity1, entity2, epsilon) {
    const minDistance = entity1.size + entity2.size + epsilon
    const distance = length2D(entity1, entity2)
    return distance < minDistance
}