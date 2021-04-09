                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222//role to keep the power a cookin'

var roleGunRunner = {
    run: function (creep) {
        var flag1 = Game.flags.grFlag;
        var flag2 = Game.flags.grFlag2;
        var flag3 = Game.flags.grFlag3;
        var flag5 = Game.flags.grFlag5;
        var spawn = creep.memory.spawn;
        var working = creep.memory.working;

        if(Game.rooms.W5S18.terminal.store[RESOURCE_ENERGY] == 0){
            Game.spawns.Spawn2.memory.minGunRunners = 0;
            Game.spawns.Spawn5.memory.minGunRunners = 0;
        }

        if (creep.memory.working == false && creep.store.getUsedCapacity() > 0){//== creep.store.getCapacity()) {
            creep.memory.working = true
        }
        else if (creep.memory.working == true && creep.store.getUsedCapacity() == 0) {
            creep.memory.working = false;
        }
        if (creep.store == 0 && creep.ticksToLive < 25) {
            creep.suicide;
        }


        if (working) {
            if(creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn8'){
                var guns = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (t) => (t.structureType == STRUCTURE_TOWER) && t.energy < 1000
                })
                
                if(guns){
                    if(creep.transfer(guns, RESOURCE_ENERGY) != OK){
                        creep.moveTo(guns);
                        return false;
                    }
                }
                else if(!guns){
                    creep.moveTo(flag1);
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
            else {
                if(spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8'){
                    creep.moveTo(flag1);
                }
                else if(spawn == 'Spawn2' || spawn == 'Spawn5'){
                    creep.moveTo(flag2);
                }
                else if(spawn == 'Spawn6' || spawn == 'Spawn9'){
                    //creep.moveTo(flag4);
                    console.log('placehold');
                }
                else if(spawn == 'Spawn7' || spawn == 'Spawn10'){
                    creep.moveTo(flag5);
                }
            }
        }
        else if (!working) {
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_STORAGE) && st.store[RESOURCE_ENERGY] > 0
            });
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_TERMINAL) && st.store[RESOURCE_ENERGY] > 0
            });
            if (term) {
                if (creep.withdraw(term, RESOURCE_ENERGY) != OK) {
                    creep.moveTo(term);
                    return false;
                }
            }
            else if (strg) {
                if (creep.withdraw(strg, RESOURCE_ENERGY) != OK) {
                    creep.moveTo(strg);
                }

            }
            else{
                if(spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8'){
                    creep.moveTo(flag1);
                }
                else if(spawn == 'Spawn2' || spawn == 'Spawn5'){
                    creep.moveTo(flag2);
                }
                else if(spawn == 'Spawn6'){
                    creep.moveTo(flag3);
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


    module.exports = roleGunRunner;