var roleRepairer = require('role.repairer');
var labs = require('mod.labs');

var roleBuilder = {
    run: function (creep) {
        
        if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8') {
            var lnk1 = Game.getObjectById('60548d48ececdb3597f6dc13');
            var creepsInRoom = creep.room.find(FIND_MY_CREEPS);
            var numStatHarvA = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryHarvester' && c.memory.src == 'a');
            var numStatHarvB = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryHarvester' && c.memory.src == 'b');


            if (creep.working == false && lnk1.store[RESOURCE_ENERGY] > 0) {
                if (creep.withdraw(lnk1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(lnk1);
                    return false;
                }
            }
            else if (numStatHarvA == 0 && numStatHarvB == 0) {
                var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            }
            wartime = Game.rooms.W6S18.memory.wartime;
            if(creep.memory.getBoosted == true && creep.memory.isBoosted == false){
                if(creep.memory.boost == 'build'){
                    labs.boost_LH2O(creep);
                    return false;
                }
            }
        }
        else if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5') {
            wartime = Game.rooms.W5S18.memory.wartime;
            //creep.memory.term = true;
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
        
        
        if (creep.memory.working == true && creep.store.getUsedCapacity() == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()) {
            creep.memory.working = true;
        }
        
        if(creep.memory.working == true){
            var ramparts = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_RAMPART && r.hits < 30000
            });
            var highRamparts = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (r) => r.hits < r.hitsMax && (r.structureType == STRUCTURE_RAMPART || r.structureType == STRUCTURE_WALL) && r.hits < 1000000
            });
            var highestRamparts = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_RAMPART && r.hits < 100000000
            });
            var walls = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_WALL
            });
            var lowRamparts = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_RAMPART && r.hits < 50000
            });
            
            
            var constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            /*if (lowRamparts){
                if(creep.repair(lowRamparts)!=OK){
                    creep.moveTo(lowRamparts);
                }
            }*/
            if (constructionSite) {
                creep.say('⛏️');
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite);
                }
            }
            else{
                roleRepairer.run(creep);
            }
        }
        else if (creep.memory.working == false) {
            var useTerm = creep.memory.term;
            var useStrg = creep.memory.strg;
            var spawn = creep.memory.spawn;
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_STORAGE) && st.store[RESOURCE_ENERGY] > 0
            });
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TERMINAL) && t.store[RESOURCE_ENERGY] > 0
            });


            if (creep.memory.spawn == 'Spawn6') {
                var rm4lnk = Game.getObjectById('603b12bd697acc7c476cf711');
                if (rm4lnk.store[RESOURCE_ENERGY] > 0) {
                    if (creep.withdraw(rm4lnk, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(rm4lnk)
                    }
                }
            }
            else if (spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8') {
                var useTerm = creep.memory.term;

                creep.memory.term = true;

                if (useTerm) {
                    var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                        filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                    });

                    if (creep.withdraw(term, RESOURCE_ENERGY) != OK) {
                        creep.moveTo(term)
                        return false;
                    }
                }
            }
            else if (creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5') {
                creep.memory.term = true;
                if (useTerm) {
                    if (creep.withdraw(term, RESOURCE_ENERGY) != OK) {
                        creep.moveTo(term)
                        return false;
                    }
                }
                else {
                    var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                        return false;
                    }
                }
            }
            else if (creep.memory.spawn == 'Spawn7' || creep.memory.spawn == 'Spawn9') {
                creep.memory.strg = true;
                if (useStrg) {
                    if (creep.withdraw(strg, RESOURCE_ENERGY) != OK) {
                        creep.moveTo(strg);
                        return false;
                    }
                }
                else if (useTerm) {
                    if (creep.withdraw(term, RESOURCE_ENERGY) != OK) {
                        creep.moveTo(term);
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
            var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }
};
module.exports = roleBuilder;