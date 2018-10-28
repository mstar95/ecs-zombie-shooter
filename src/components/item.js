export const SLOW = 100
export const MEDIUM = 30

export default function item (owner, slot, picked) {
    return {
        name: 'item',
        defaults: { owner, slot, picked}
    }
}
