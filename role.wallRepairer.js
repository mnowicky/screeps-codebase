//works to build up the walls and ramparts. 
// if there are no walls/ramparts to build up, then run the builder role. 

var roleUpgrader = require('role.upgrader');

module.exports = {
    run: function(creep) {
        if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8') {
            wartime = Game.rooms.W6S18.memory.wartime;
        }
        else if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5') {
            wartime = Game.rooms.W5S18.memory.wartime;
        }
        else if(creep.memory.spawn == 'Spawn3') {
            wartime = Game.rooms.W1S18.memory.wartime;
        }
        else if(creep.memory.spawn == 'Spawn6') {
            wartime = Game.rooms.W6S17.memory.wartime;
        }
        
        if (creep.memory.working == true && creep.store.getUsedCapacity() == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            
            /*var emptyGuns = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_TOWER) && s.energy < s.energyCapacity
            });

            if (emptyGuns) {
                creep.say('RELOAD!');
                if (creep.transfer(emptyGuns, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(emptyGuns);
                }
            }*/
            var lowWallRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (r) => (r.structureType == STRUCTURE_RAMPART || r.structureType == STRUCTURE_WALL) && r.hits < 100000
            });
            var regWallRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (r) => (r.structureType == STRUCTURE_RAMPART || r.structureType == STRUCTURE_WALL) && r.hits < 1000000
            });
            
            if(lowWallRepair){
                if(creep.repair(lowWallRepair) == ERR_NOT_IN_RANGE){
                    creep.moveTo(lowWallRepair);
                }
            }
            else if(regWallRepair){
                if(creep.repair(regWallRepair) == ERR_NOT_IN_RANGE){
                    creep.moveTo(regWallRepair);
                }
            }
            else{
                var target = undefined;

                // loop with increasing percentages
                for (let percentage = 0.0001; percentage <= 1; percentage = percentage + 0.0001){
                    // find a wall with less than percentage hits
                    for (let wall of walls) {
                        if (wall.hits / wall.hitsMax < percentage) {
                            target = wall;
                            break;
                        }
                    }
                    if (target != undefined) {
                        // break the loop
                        break;
                    }
                }
                if (target != undefined) {
                    if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }
            }
        }
        else if (creep.memory.working == false) {
            if (wartime == true) {
                var caps = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_CONTAINER) && s.store[RESOURCE_ENERGY] > 0
                });

                var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (st) => (st.structureType == STRUCTURE_STORAGE) && st.store[RESOURCE_ENERGY] > 20000
                });
                
                var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (t) => (t.structureType == STRUCTURE_TERMINAL) && t.store[RESOURCE_ENERGY] > 0
                });
                
                if(creep.memory.spawn == 'Spawn6'){
                    if(creep.withdraw(strg, RESOURCE_ENERGY) != OK){
                        creep.moveTo(strg);
                        return false;
                    }
                }
                
                if (caps) {
                    if(creep.withdraw(caps, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(caps);
                    }
                }
                else if(!caps) {
                    if(creep.withdraw(term, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(term);
                    }
                }
            }
            else if (wartime == false) {
                if(creep.memory.spawn == 'Spawn3'){
                    var rm3lnk_ctrl = Game.getObjectById('60405df8b2bf690a04fab087');
                    var rm3lnk_middle = Game.getObjectById('60403e87bc00e53a185003a2');

                    if(rm3lnk_ctrl.store[RESOURCE_ENERGY] > 0){
                        if(creep.withdraw(rm3lnk_ctrl, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(rm3lnk_ctrl);
                        }
                    }
                    else if(rm3lnk_middle.store[RESOURCE_ENERGY] > 0){
                        if(creep.withdraw(rm3lnk_middle, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(rm3lnk_middle);
                        }
                    }
                }
                else if(creep.memory.spawn == 'Spawn6'){
                    var rm4lnk = Game.getObjectById('603b12bd697acc7c476cf711');
                    if(rm4lnk.store[RESOURCE_ENERGY] > 0){
                        if(creep.withdraw(rm4lnk, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(rm4lnk)
                        }
                    }
                }
                else if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8'){
                    var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                        filter: (t) => (t.structureType == STRUCTURE_TERMINAL) && t.store[RESOURCE_ENERGY] > 0
                    });
                    if(term){
                        if(creep.withdraw(term, RESOURCE_ENERGY)!=OK){
                            creep.moveTo(term);
                        }
                    }
                    else{
                        var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source);
                        }
                    }
                }
                var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }                    
            }
        }
    }
};