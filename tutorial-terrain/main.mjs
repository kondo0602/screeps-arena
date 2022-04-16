import { getObjectsByPrototype, findClosestByPath } from "/game/utils";
import { Creep, Flag } from "/game/prototypes";

export function loop() {
  let creeps = getObjectsByPrototype(Creep).filter((i) => i.my);
  let flags = getObjectsByPrototype(Flag);

  for (var creep of creeps) {
    let flag = creep.findClosestByPath(flags);
    creep.moveTo(flag);
  }
}