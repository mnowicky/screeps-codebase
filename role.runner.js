var roleRunner = {
    run: function (creep) {
        const spawn = creep.memory.spawn;

        if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8') {
            boost = Game.rooms.W6S18.memory.wartime;
        }
        else if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5' || creep.memory.spawn == 'Spawn11') {
            boost = Game.rooms.W5S18.memory.wartime;
        }
        else if(creep.memory.spawn == 'Spawn3') {
            boost = Game.rooms.W1S18.memory.wartime;
        }
        else if(creep.memory.spawn == 'Spawn6' || creep.memory.spawn == 'Spawn9') {
            boost = Game.rooms.W6S17.memory.wartime;
        }
        else if(creep.memory.spawn == 'Spawn7' || creep.memory.spawn == 'Spawn10'){
            boost = Game.rooms.W7S17.memory.wartime;

            if((creep.room.energyCapacityAvailable - 600) <= creep.room.energyAvailable){
                creep.memory.term = false;
            }
            else{
                creep.memory.term = true;
            }
        }

        if (creep.memory.working == true && creep.store.getUsedCapacity() == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.store[RESOURCE_ENERGY] > 0) {
            creep.memory.working = true;
        }
        
        if(creep.memory.working == true){
            //var spawn = creep.memory.spawn;
            //fill the below
            const ext = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (e) => e.structureType == STRUCTURE_EXTENSION && e.energy < e.energyCapacity
            });
            var caps = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_CONTAINER) && s.store[RESOURCE_ENERGY] < s.store.getCapacity()
            });
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_STORAGE) && st.store[RESOURCE_ENERGY] > 0
            });
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TERMINAL) && t.store[RESOURCE_ENERGY] > 0
            });
            var nuke = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (n) => (n.structureType == STRUCTURE_NUKER)
            });

            if(ext){
                if(creep.transfer(ext, RESOURCE_ENERGY)!=OK){
                    creep.moveTo(ext);
                }
            }
            else if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5' || creep.memory.spawn == 'Spawn11'){
                if(term){
                    if(creep.transfer(term, RESOURCE_ENERGY)!=OK){
                        creep.moveTo(term);
                        return false;
                    }
                }
            }
            else if(caps){
                if(creep.transfer(caps, RESOURCE_ENERGY)!=OK){
                    creep.moveTo(caps);
                }
            }
            else if(nuke){
                if(creep.transfer(nuke, RESOURCE_ENERGY)!=OK){
                    creep.moveTo(nuke);
                }
            }
            else if(strg){
                if(creep.transfer(strg, RESOURCE_ENERGY)!=OK){
                    creep.moveTo(strg);
                }
            }
            else if(term){
                if(creep.transfer(term, RESOURCE_ENERGY)!=OK){
                    creep.moveTo(term);
                }
            }
        }
        else if(creep.memory.working == false){
            var caps = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_CONTAINER) && s.store[RESOURCE_ENERGY] > 0
            });
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_STORAGE) && st.store[RESOURCE_ENERGY] > 0
            });
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TERMINAL) && t.store[RESOURCE_ENERGY] > 0
            });

            if (boost === true) {
                //wartime, pulling energy from below sources to fill extensions
                if(caps) {
                    if(creep.withdraw(caps, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(caps);
                    }
                }
                else if(term){
                    if(creep.withdraw(term, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(term);
                    }
                }
                else if(strg) {
                    if(creep.withdraw(strg, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(strg);
                    }
                }
            }
            else if (boost === false) {
                //not wartime, pull energy from middle link to fill sources & extensions
                if(spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8'){
                    var lnk = Game.getObjectById('6064f1003cc1250d7fde151d');
                    if(lnk.store[RESOURCE_ENERGY] > 0){
                        if(creep.withdraw(lnk, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(lnk)
                        }
                    }
                }
                else if(spawn == 'Spawn2' || spawn == 'Spawn5'){
                    var lnk = Game.getObjectById('6058254ff201b625edf5c4c9');
                    var useTerm = creep.memory.term;
                    var useStrg = creep.memory.strg;
                    if(useTerm){
                        if(creep.withdraw(term, RESOURCE_ENERGY)!=OK){
                            creep.moveTo(term);
                        }
                    }
                    else if(useStrg){
                        if(creep.withdraw(strg, RESOURCE_ENERGY)!=OK){
                            creep.moveTo(strg)
                        }
                    }
                    else if(lnk.store[RESOURCE_ENERGY] > 0){
                        if(creep.withdraw(lnk, RESOURCE_ENERGY)!=OK){
                            creep.moveTo(lnk);
                        }
                    }
                }
                else if(spawn == 'Spawn7' || spawn == 'Spawn10'){
                    var lnk = Game.getObjectById('60663f241e8252b4c4109834');
                    var lnk2 = Game.getObjectById('604c7e4eececdb4c22f3fb37');
                    var useTerm = creep.memory.term;
                    var useStrg = creep.memory.strg;
                    if(useTerm){
                        if(creep.withdraw(term, RESOURCE_ENERGY)!=OK){
                            creep.moveTo(term);
                        }
                    }
                    else if(useStrg){
                        if(creep.withdraw(strg, RESOURCE_ENERGY)!=OK){
                            creep.moveTo(strg)
                        }
                    }
                    else if(lnk.store[RESOURCE_ENERGY] > 0){
                        if(creep.withdraw(lnk, RESOURCE_ENERGY)!=OK){
                            creep.moveTo(lnk);
                        }
                    }
                    else if(lnk2.store[RESOURCE_ENERGY] > 0){
                        if(creep.withdraw(lnk2, RESOURCE_ENERGY)!=OK){
                            creep.moveTo(lnk2);
                        }
                    }
                }
            }
        }
    }
};
module.exports = roleRunner;