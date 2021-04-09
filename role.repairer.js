//var roleUpgrader = require('role.upgrader');
//var roleBuilder = require('role.builder');
var roleWR = require('role.wallRepairer');

module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        var deposit = creep.memory.deposit;

        // if creep is trying to repair something but has no energy left
        if (creep.memory.working == true && creep.store.getUsedCapacity() == 0) {
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()) {
            creep.memory.working = true;
        }
        
        const src_act = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
        if(!src_act) {
            if(creep.store.getUsedCapacity() > 0){
                creep.memory.working = true;
            }
        }

        // if creep is supposed to repair something
        if (creep.memory.working == true) {
            
            var structure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
            });
            var walls = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (w) => w.hits < 1000000 && (w.structureType == STRUCTURE_RAMPART || w.structureType == STRUCTURE_WALL)
            })
            var constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);

            if (structure) {
                creep.say('🛠️');
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }
            else if(constructionSite){
                creep.say('build!');
                if(creep.build(constructionSite)!=OK){
                    creep.moveTo(constructionSite);
                }
            }
            else if(walls){
                creep.say('walls!');
                if(creep.repair(walls)!=OK){
                    creep.moveTo(walls);         
                }
            }
        }
        // go harvest energy
        else if (creep.memory.working == false) {
            var useStore = creep.memory.strg;
            var useTerm = creep.memory.term;
            var useCaps = creep.memory.caps;
            
            if(useCaps){
                var cap = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_CONTAINER) && s.store.getUsedCapacity() > 0
                });
                
                if(cap){
                    if(creep.withdraw(cap, RESOURCE_ENERGY) != OK){
                        creep.moveTo(cap);
                    }
                }
                else{
                    var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                }
            }
            
            else if(useStore){
                var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (st) => (st.structureType == STRUCTURE_STORAGE) && st.store[RESOURCE_ENERGY] > 0
                });
                
                if(strg){
                    if(creep.withdraw(strg, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(strg);
                    }
                }
                else{
                    var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                }
            }
            else if(useTerm){
                var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                });
                if(term){
                    if(creep.withdraw(term, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
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
            else if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn 5' || creep.memory.spawn == 'Spawn11'){
                var lnk = Game.getObjectById('6058254ff201b625edf5c4c9');
                if(lnk.store[RESOURCE_ENERGY] > 0 && creep.memory.working == false){
                    if(creep.withdraw(lnk, RESOURCE_ENERGY)!=OK){
                        creep.moveTo(lnk);
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
};