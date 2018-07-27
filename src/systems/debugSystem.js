import ECS from 'yagl-ecs'

class DebugSystem extends ECS.System {
   enter(entity) {
       console.log(entity)
   }
}

export default DebugSystem
