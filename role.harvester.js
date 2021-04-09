var roleUpgrader = require('role.upgrader');
var labs = require('mod.labs');
const { rm5 } = require('./mod.turrets');


module.exports = {
    run: function(creep) {

        if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8') {
            wartime = Game.rooms.W6S18.memory.wartime;
        }
        else if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5' || creep.memory.spawn == 'Spawn11') {
            wartime = Game.rooms.W5S18.memory.wartime;
        }
        else if(creep.memory.spawn == 'Spawn3') {
            wartime = Game.rooms.W1S18.memory.wartime;
        }
        else if(creep.memory.spawn == 'Spawn6' || creep.memory.spawn == 'Spawn9') {
            wartime = Game.rooms.W6S17.memory.wartime;
        }
        else if(creep.memory.spawn == 'Spawn7' || creep.memory.spawn == 'Spawn10'){
            wartime = Game.rooms.W7S17.memory.wartime;
        }

        //if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == true && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = false;
        }
        if (creep.memory.working == false && (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity())) {
            creep.memory.working = true;
        }

        //if creep is supposed to transfer energy to a structure
        if(creep.memory.working == true) {

            //find closest spawn, extension or tower which is not full
            var structure = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_EXTENSION
                            || s.structureType == STRUCTURE_SPAWN
                            || s.structureType == STRUCTURE_TOWER
                            || s.structureType == STRUCTURE_CONTAINER)
                             && s.energy < s.energyCapacity
            });
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_STORAGE) && st.store[RESOURCE_ENERGY] < st.store.getCapacity()
            });
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
            });
            var caps = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_CONTAINER) && s.store[RESOURCE_ENERGY] < s.store.getCapacity()
            });

            if (structure) {
                creep.say('⚡');;
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }
            else if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8'){
                if(creep.room.energyAvailable >= 12000){
                    if(creep.transfer(caps, RESOURCE_ENERGY) != OK){
                        creep.moveTo(caps);
                        return false;
                    }
                }
            }
            else if(creep.memory.spawn == 'Spawn3'){
                var cSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
                if(cSite){
                    if(creep.build(cSite)!=OK){
                        creep.moveTo(cSite);
                    }
                }
                else{
                    if(creep.upgradeController(creep.room.controller)!=OK){
                        creep.moveTo(creep.room.controller);
                    }
                }
            }
            else if(creep.memory.spawn == 'Spawn6'){
                if(creep.upgradeController(creep.room.controller) != OK){
                    creep.moveTo(creep.room.controller);
                }
            }
            else if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5'){
                if(creep.memory.getBoosted == true){
                    labs.boost_XGH2O(creep);
                    return false;
                }
                else if(creep.transfer(term, RESOURCE_ENERGY) != OK){
                    creep.moveTo(term);
                }
            }
            else if(creep.memory.spawn == 'Spawn7' || creep.memory.spawn == 'Spawn9'){
                if(strg){
                    if(creep.transfer(strg, RESOURCE_ENERGY)!=OK){
                        creep.moveTo(strg);
                    }
                }
                else{
                    if(creep.upgradeController(creep.room.controller)!=OK){
                        creep.moveTo(creep.room.controller);
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
                    filter: (st) => (st.structureType == STRUCTURE_STORAGE) && st.store[RESOURCE_ENERGY] > 0
                });
                var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (t) => (t.structureType == STRUCTURE_TERMINAL) && t.store[RESOURCE_ENERGY] > 0
                });
                if (caps){
                    if(creep.withdraw(caps, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(caps);
                    }
                }
                else {
                    if(strg){
                        if(creep.withdraw(strg, RESOURCE_ENERGY) != OK){
                            creep.moveTo(strg);
                            return false;
                        }
                    }
                    else if(term){
                        if(creep.withdraw(term, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
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
            }
            else if (wartime == false) {
                var structure = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_EXTENSION
                                || s.structureType == STRUCTURE_SPAWN
                                || s.structureType == STRUCTURE_TOWER
                                || s.structureType == STRUCTURE_CONTAINER)
                                 && s.energy < s.energyCapacity
                });
                
                if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8'){

                    var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                    
                    var lnk1 = Game.getObjectById('6064f1003cc1250d7fde151d');
                    var creepsInRoom = creep.room.find(FIND_MY_CREEPS);
                    var numStatHarvA = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryHarvester' && c.memory.src == 'a' );
                    var numStatHarvB = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryHarvester' && c.memory.src == 'b' );
                    var srcb = Game.getObjectById('5bbcac8e9099fc012e635b47');
                    var srca = Game.getObjectById('5bbcac8e9099fc012e635b46');


                    if(lnk1.store[RESOURCE_ENERGY] > 0){
                        if(creep.withdraw(lnk1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(lnk1);
                            return false;
                        }
                    }
                    else if(numStatHarvA == 0 && numStatHarvB == 0){
                        var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source);
                        }
                    }
                    else if(numStatHarvA == 0){
                        if(creep.harvest(srca) != OK){
                            creep.moveTo(srca);
                        }
                    }
                    else if(numStatHarvB == 0){
                        if(creep.harvest(srcb) != OK){
                            creep.moveTo(srcb);
                        }
                    }
                }
                else if(creep.memory.spawn == 'Spawn6'){
                    var rm4_lnk_rec1 = Game.getObjectById('603b12bd697acc7c476cf711');
                    if(rm4_lnk_rec1.store[RESOURCE_ENERGY] > 0){
                        if(creep.withdraw(rm4_lnk_rec1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.moveTo(rm4_lnk_rec1)
                        }
                    }
                    else{
                        var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source);
                        }  
                    }
                }
                else if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5'){
                    var useTerm = creep.memory.term;
                    var useStrg = creep.memory.strg;
                    creep.memory.term == true;
                    var lnk = Game.getObjectById('6058254ff201b625edf5c4c9');
                    var creepsInRoom = creep.room.find(FIND_MY_CREEPS);
                    var numStatHarvA = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryHarvester' && c.memory.src == 'a' );
                    var numStatHarvB = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryHarvester' && c.memory.src == 'b' );
                    if(useTerm){
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        
                        if(creep.withdraw(term, RESOURCE_ENERGY) != OK){
                            creep.moveTo(term)
                            return false;
                        }
                    }
                    else if(useStrg){
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (s) => (s.structureType == STRUCTURE_STORAGE)
                        });
                        if(creep.withdraw(strg, RESOURCE_ENERGY) != OK){
                            creep.moveTo(strg);
                            return false;
                        }
                    }
                    else if(lnk.store[RESOURCE_ENERGY] > 0){
                        if(creep.withdraw(lnk, RESOURCE_ENERGY) != OK){
                            creep.moveTo(lnk);
                            return false;
                        }
                    }
                    else if(numStatHarvA == 0 && numStatHarvB == 0){
                        var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source);
                        }
                    }

                    if((numStatHarvA > 0 || numStatHarvB > 0) && creep.store[RESOURCE_ENERGY] > 0){
                        creep.memory.working = true;
                    }
                }
                else if(creep.memory.spawn == 'Spawn7' || creep.memory.spawn == 'Spawn10'){
                    var rm5_lnk_ext = Game.getObjectById('60663f241e8252b4c4109834');
                    var src_n = Game.getObjectById('5bbcac819099fc012e635937');
                    var useTerm = creep.memory.term;
                    var useStrg = creep.memory.strg;

                    if(useTerm){
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        
                        if(creep.withdraw(term, RESOURCE_ENERGY) != OK){
                            creep.moveTo(term);
                        }
                    }
                    else if(useStrg){
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (s) => (s.structureType == STRUCTURE_STORAGE)
                        });
                        if(creep.withdraw(strg, RESOURCE_ENERGY) != OK){
                            creep.moveTo(strg);
                        }
                    }
                    else if(creep.harvest(src_n) == ERR_NOT_IN_RANGE){
                        creep.moveTo(src_n);
                    }
                }
                else if(creep.memory.spawn == 'Spawn3'){
                    var src_a = Game.getObjectById('5bbcacd49099fc012e63647f');
                    var src_b = Game.getObjectById('5bbcacd49099fc012e636481');
                    /*var lnk = Game.getObjectById('6062dd9b573415d224c189fc');
                    if(lnk.store[RESOURCE_ENERGY]>0){
                        if(creep.withdraw(lnk, RESOURCE_ENERGY)!=OK){
                            creep.moveTo(lnk);
                            return false;
                        }
                    }*/
                    if(src_b.energy > 0){
                        if(creep.harvest(src_b) != OK){
                            if(creep.moveTo(src_b)!=OK){
                                if(creep.harvest(src_a)!=OK){
                                    creep.moveTo(src_a);
                                    return false;
                                }
                            }
                        }
                    }
                    else if(src_b.energy == 0){
                        if(creep.harvest(src_a)!=OK){
                            creep.moveTo(src_a);
                        }
                    }
                }
                else{
                    var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                }
            }
        }
    }
};