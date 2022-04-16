import { getObjectsByPrototype, findClosestByPath } from "/game/utils";
import { Creep } from "/game/prototypes";
import { ERR_NOT_IN_RANGE, ATTACK, RANGED_ATTACK } from "/game/constants";
import { Flag } from "/arena";

export function loop() {
  let myCreeps = getObjectsByPrototype(Creep).filter((creep) => creep.my);
  let enemyCreeps = getObjectsByPrototype(Creep).filter((creep) => !creep.my);
  let enemyFlag = getObjectsByPrototype(Flag).find((flag) => !flag.my);

  for (let creep of myCreeps) {
    let closestEnemy = findClosestByPath(creep, enemyCreeps);

    if (creep.body.some((bodyPart) => bodyPart.type == RANGED_ATTACK)) {
      if (creep.rangedAttack(closestEnemy) == ERR_NOT_IN_RANGE) {
        creep.moveTo(closestEnemy);
      }
    }

    if (creep.body.some((bodyPart) => bodyPart.type == ATTACK)) {
      if (creep.attack(closestEnemy) == ERR_NOT_IN_RANGE) {
        creep.moveTo(closestEnemy);
      }
    }

    creep.moveTo(enemyFlag);
  }
}
