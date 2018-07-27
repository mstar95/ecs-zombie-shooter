import ECS from 'yagl-ecs';

export default function Entity (...components) {
    const entity = new ECS.Entity()
    components.forEach(component => !component.defaults ? entity.addComponent(component.name)
        : entity.addComponent(component.name, component.defaults))
    return entity
}
