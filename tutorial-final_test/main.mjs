import { getObjectsByPrototype } from "/game/utils";
import { Creep, StructureSpawn } from "/game/prototypes";
import { MOVE, ATTACK, RANGED_ATTACK, ERR_NOT_IN_RANGE } from "/game/constants";

let creep;

export function loop() {
  let mySpawn = getObjectsByPrototype(StructureSpawn)[0];
  let enemyCreep = getObjectsByPrototype(Creep).find((creep) => !creep.my);

  if (!creep) {
    creep = mySpawn.spawnCreep([MOVE, ATTACK]).object;
  } else {
    if (creep.body.some((bodyPart) => bodyPart.type == ATTACK)) {
      if (creep.attack(enemyCreep) == ERR_NOT_IN_RANGE) {
        creep.moveTo(enemyCreep);
      }
    }
  }
}
