//role to keep the power a cookin'

var roleSoldier = {
    run: function (creep) {
        var spwn = creep.memory.spawn;
        var working = creep.memory.working;

        if (creep.memory.working == false && creep.store.getUsedCapacity() > 0){//== creep.store.getCapacity()) {
            creep.memory.working = true
        }
        else if (creep.memory.working == true && creep.store.getUsedCapacity() == 0) {
            creep.memory.working = false;
        }
        if (creep.store == 0 && creep.ticksToLive < 50) {
            creep.suicide;
        }


        if (working) {
            if(creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn8'){
                var guns = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (t) => (t.structureType == STRUCTURE_TOWER) && t.energy < 900
                })
                
                if(creep.transfer(guns, RESOURCE_ENERGY) != OK){
                    creep.moveTo(guns);
                    return false;
                }
            }
            var guns = creep.pos.findInRange(FIND_MY_STRUCTURES, 25, {
                filter: (s) => (s.structureType == STRUCTURE_TOWER) && s.energy < 900
            });
            
            var gun = reloadNext(guns);
            
            if(gun){
                if(creep.transfer(gun, RESOURCE_ENERGY) != OK){
                    creep.moveTo(gun);
                }
            }
            //creep.transfer(gun, RESOURCE_ENERGY);

        }
        else if (!working) {
            if(creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn8' || creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5'){
                var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                });
                if (term) {
                    if (creep.withdraw(term, RESOURCE_ENERGY) != OK) {
                        creep.moveTo(term);
                        return false;
                    }
                }
                
                
            }
            
            
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_STORAGE)
            });
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
            });

            if (strg) {
                if (creep.withdraw(strg, RESOURCE_ENERGY) != OK) {
                    creep.moveTo(strg);
                }
            }
            else if (term) {
                if (creep.withdraw(term, RESOURCE_ENERGY) != OK) {
                    creep.moveTo(term);
                }

            }


        }
    }
};

function reloadNext(towers) {
    var count = towers.length;
    for (var i = 0; i < count; i++) {
        //return towers[i];
        return towers[Math.floor(Math.random() * towers.length)];
    }
}


module.exports = roleSoldier;