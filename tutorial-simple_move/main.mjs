import { getObjectsByPrototype } from "/game/utils";
import { Creep, Flag } from "/game/prototypes";

export function loop() {
  let creeps = getObjectsByPrototype(Creep);
  let flags = getObjectsByPrototype(Flag);
  creeps[0].moveTo(flags[0]);
}
