// upgrader role, during peace time will fill the spawn capacitors.
// if ever a turret needs to be reloaded, these guys will be first to do so.
module.exports = {
    run: function (creep) {
        if (creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8') {
            var wartime = Game.rooms.W6S18.memory.wartime;
            var lnk = Game.getObjectById('5ffe35b66efa2a652c53fba3');
        }
        else if (creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5') {
            var wartime = Game.rooms.W5S18.memory.wartime;
            var lnk = Game.getObjectById('600ab0cc820e7b26a398b0b8');
        }
        else if (creep.memory.spawn == 'Spawn6') {
            var wartime = Game.rooms.W6S17.memory.wartime;
            var lnk = Game.getObjectById('604c7e4eececdb4c22f3fb37');
        }


        // if creep is bringing energy to the controller but has no energy left
        if (creep.store.getUsedCapacity() == 0 && creep.memory.working == true) {
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.store.getUsedCapacity() == creep.store.getCapacity() && creep.memory.working == false) {
            creep.memory.working = true;
        }

        const src_act = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
        if (!src_act) {
            if (creep.store.getUsedCapacity() > 0) {
                creep.memory.working = true;
            }
        }

        // if creep is supposed to transfer energy to the controller

        if (creep.memory.working == true) {
            var emptyGuns = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_TOWER) && s.energy < s.energyCapacity
            });

            if (emptyGuns) {
                creep.say('RELOAD!');
                if (creep.transfer(emptyGuns, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(emptyGuns);
                    return false;
                }
            }
            else if (!wartime) {
                // fill spawn capacitors
                var caps = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_CONTAINER) && s.store.getUsedCapacity() < s.store.getCapacity()
                });
                var nuke = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (n) => (n.structureType == STRUCTURE_NUKER) && n.energy < n.energyCapacity
                });
                var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (st) => (st.structureType == STRUCTURE_STORAGE) && st.energy < st.energyCapacity
                });

                if (caps) {
                    if (creep.transfer(caps, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(caps);
                    }
                }
                else if (nuke) {
                    if (creep.transfer(nuke, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(nuke);
                    }
                }
                else if (strg) {
                    if (creep.transfer(strg, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(strg);
                    }
                }
                else if (creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8') {
                    var strg = Game.getObjectById('6005bbe57038ee851c7e9faf');
                    if (creep.transfer(strg, RESOURCE_ENERGY) != OK) {
                        creep.moveTo(strg);
                    }
                }
                else if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
            if (wartime) {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
        // if creep is supposed to harvest energy from source
        else if (creep.memory.working == false) {
            /*if(creep.memory.signRoom = true){
                var sign1 = 'Beware of dog 🐶💀';
                var sign = '💀';
                if(creep.signController(creep.room.controller, sign)!=OK){
                    creep.moveTo(creep.room.controller);
                    return false;
                }
            }
            */
            if (creep.memory.spawn == 'Spawn6') {
                var rm4_lnk_rec1 = Game.getObjectById('603b12bd697acc7c476cf711');
                if (rm4_lnk_rec1.store[RESOURCE_ENERGY] > 0) {
                    if (creep.withdraw(rm4_lnk_rec1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(rm4_lnk_rec1)
                    }
                }
                else {
                    var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                }
            }
            else if(creep.memory.spawn == 'Spawn3'){
                var rm3_lnk_ctrl = Game.getObjectById('6062dd9b573415d224c189fc');
                if(rm3_lnk_ctrl.store[RESOURCE_ENERGY] > 0){
                    if(creep.withdraw(rm3_lnk_ctrl, RESOURCE_ENERGY)!=OK){
                        creep.moveTo(rm3_lnk_ctrl);
                        return false;
                    }
                }
                else{
                    var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                }
            }
            else if (creep.memory.spawn == 'Spawn7') {
                var recLnk = Game.getObjectById('604c7e4eececdb4c22f3fb37');
                if (recLnk.store[RESOURCE_ENERGY] > 400) {
                    if (creep.withdraw(recLnk, RESOURCE_ENERGY) != OK) {
                        creep.moveTo(recLnk);
                        return false;
                    }
                }
                else {
                    var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                }
            }
            else if (creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8') {
                var lnk1 = Game.getObjectById('60548d48ececdb3597f6dc13');
                var lnk2 = Game.getObjectById('6052d8d1b4c30d0608c4485b');
                if (lnk1.store[RESOURCE_ENERGY] > 0) {
                    if (creep.withdraw(lnk1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(lnk1);
                        return false;
                    }
                }
                else if (creep.store[RESOURCE_ENERGY] > 0) {
                    creep.memory.working = true;
                }
                else {
                    return false;
                }
            }
            else {
                var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            }
        }
    }
};
