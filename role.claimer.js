// this is a general 'multi-purpose' creep to go into a foreign room and harvest/upgrade/build
// depending on how creep.memory.task is set. Used to get new rooms up and running. 

var roleUpgrader = require('role.upgrader');
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var labs = require('mod.labs');

var flag = Game.flags.claimerFlag;

var roleClaimer = {
    run: function (creep) {
        if(creep.memory.getBoosted == true){
            if(creep.memory.boost == 'upgrade'){
                labs.boost_XGH2O(creep);
                return false;
            }
            else if(creep.memory.boost == 'build'){
                labs.boost_LH2O(creep);
                return false;
            }
        }
//=========================================================================
        if (creep.memory.task == '1') {
            taskHarvest(creep);
        }
        else if (creep.memory.task == '2') {
            taskUpgrade(creep);
        }
        else if (creep.memory.task == '3') {
            taskBuild(creep);
        }
        else if (creep.memory.task == '4') {
            taskRepair(creep);
        }
        else if (creep.memory.task == '5'){
            taskCollect(creep);
        }
        //else if(creep.memory.task == '5'){
        //    taskClaim(creep);
        //}
    }
};

function taskCollect(creep){
    var flag = Game.flags.claimerFlagCollect;
    var homeFlag = Game.flags.claimerFlagCollectHome;
    var working = creep.memory.working;
    //var target = Game.getObjectById('5fc4fe625f3a8410bc6291f5');
    if(creep.room != flag.room && creep.store.getUsedCapacity() == 0){
        creep.memory.working = false;
    }
    else if(creep.room == flag.room && creep.store.getUsedCapacity() == creep.store.getCapacity()){
        creep.memory.working = true;
    }

    if (working){
        if (creep.room == homeFlag.room){
            var homeStrg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_STORAGE)
            });

            if(homeStrg){
                for(const resourceType in creep.carry){
                    if(creep.transfer(homeStrg, resourceType)!=OK){
                        creep.moveTo(homeStrg);
                        return false;
                    }
                }
            }
        }
        else{
            creep.moveTo(homeFlag);
        }
    }
    else if(!working){
        if (creep.room == flag.room){
            var xzh2o = RESOURCE_CATALYZED_ZYNTHIUM_ACID;
            var xzho2 = RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE;
            var xkho2 = RESOURCE_CATALYZED_KEANIUM_ALKALIDE;
            var xuh2o = RESOURCE_CATALYZED_UTRIUM_ACID;
            var xlho2 = RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE;
            var xgho2 = RESOURCE_CATALYZED_GHODIUM_ALKALIDE;
            var go = RESOURCE_GHODIUM_OXIDE;
            var targetStrg = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_STORAGE) && st.store.getUsedCapacity() > 0
            });

            if (targetStrg) {
                if(targetStrg.store[xzh2o] > 0){
                    if(creep.withdraw(targetStrg, xzh2o)!=OK){
                        creep.moveTo(targetStrg);
                        return false;
                    }
                }
                else if(targetStrg.store[xzho2] > 0){
                    if(creep.withdraw(targetStrg, xzho2)!=OK){
                        creep.moveTo(targetStrg);
                        return false;
                    }
                }
                else if(targetStrg.store[xkho2] > 0){
                    if(creep.withdraw(targetStrg, xkho2)!=OK){
                        creep.moveTo(targetStrg);
                        return false;
                    }
                }
                else if(targetStrg.store[xuh2o] > 0){
                    if(creep.withdraw(targetStrg, xuh2o)!=OK){
                        creep.moveTo(targetStrg);
                        return false;
                    }
                }
                else if(targetStrg.store[xlho2] > 0){
                    if(creep.withdraw(targetStrg, xlho2)!=OK){
                        creep.moveTo(targetStrg);
                        return false;
                    }
                }
                else if(targetStrg.store[xgho2] > 0){
                    if(creep.withdraw(targetStrg, xgho2)!=OK){
                        creep.moveTo(targetStrg);
                        return false;
                    }
                }
                else if(targetStrg.store[go] > 0){
                    if(creep.withdraw(targetStrg, go)!=OK){
                        creep.moveTo(targetStrg);
                        return false;
                    }
                }
                else{
                    for (const resourceType in targetStrg) {
                        if (creep.withdraw(targetStrg, resourceType) != OK) {
                            creep.moveTo(targetStrg);
                            return false;
                        }
                    }
                }
            }
            else {
                var targetStruct = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => (s.structureType == STRUCTURE_TOWER
                                || s.structureType == STRUCTURE_CONTAINER
                                 || s.structureType == STRUCTURE_EXTENSION)
                                 && s.store.getUsedCapacity() > 0
                });

                if (targetStruct){
                    for (const resourceType in targetStruct){
                        if(creep.withdraw(targetStruct, resourceType)!=OK){
                            creep.moveTo(targetStruct);
                            return false;
                        }
                    }
                }
            }

        }
        else{
            creep.moveTo(flag);
        }
    }
};

function taskHarvest(creep) {
    var flag = Game.flags.claimerFlagHarvest;
    if (creep.room == flag.room) {
        if (creep.memory.working == true && creep.store.getUsedCapacity() == 0) {
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()) {
            creep.memory.working = true;
        }
        
        if(creep.memory.working == true) {
            // find closest spawn, extension or tower which is not full
            var structure = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_TOWER
                            || s.structureType == STRUCTURE_SPAWN
                             || s.structureType == STRUCTURE_EXTENSION)
                             && s.energy < s.energyCapacity
            });

            if (structure) {
                //creep.say('im trying!');
                creep.say('⚡');;
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }
        }
        else if(creep.memory.working == false) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }
    else {
        creep.moveTo(flag);
    }
};

function taskRepair(creep){
    if (creep.memory.working == true && creep.store.getUsedCapacity() == 0) {
        creep.memory.working = false;
    }
    // if creep is harvesting energy but is full
    else if (creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
    
    if(creep.memory.working == true){
        var structure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
        });
        
        if(structure){
            if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                creep.moveTo(structure);
            }
        }
        else{
            roleUpgrader.run(creep);
        }
    }
    else if(creep.memory.working == false){
        var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    }
};

function taskBuild(creep) {
    var flag = Game.flags.claimerFlagBuild;
    if (creep.room == flag.room) {
        if (creep.memory.working == true && creep.store.getUsedCapacity() == 0) {
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()) {
            creep.memory.working = true;
        }
        
        if(creep.memory.working == true) {
        /*    var dis = creep.pos.findClosestByRange(FIND_STRUCTURES, {


                filter: (s) => (s.structureType == STRUCTURE_SPAWN
                                || s.structureType == STRUCTURE_TOWER
                                || s.structureType == STRUCTURE_STORAGE
                                || s.structureType == STRUCTURE_EXTENSION)

            });


            if(dis){
                if(creep.dismantle(dis) != OK){
                    creep.moveTo(dis);
                    return false;
                }
            } */

            var constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (constructionSite) {
                creep.say('⛏️');
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite);
                }
            }
            else {
                creep.memory.task = '1';
            }

        }

        else if(creep.memory.working == false) {
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
            else{
                var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            }
        }
    }

    else {
        creep.travelTo(flag, {preferHighway: true});
    }
};


function taskUpgrade(creep) {


    var flag = Game.flags.claimerFlag;
    if (creep.room == flag.room) {
        if (creep.store.getUsedCapacity() == 0) {
            creep.memory.working = false;
        }
        else if (creep.store.getUsedCapacity() == creep.store.getCapacity()) {
            creep.memory.working = true;
        }
        
        if(creep.memory.working == true) {

            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
                }
            }
        
        else if(creep.memory.working == false) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }   
        }
    }
    else {
        creep.travelTo(flag, {preferHighway: true});
    }
};




function taskClaim(creep) {

    var flag = Game.flags.claimerFlagClaim;
    if (creep.room == flag.room) {
        if (creep.room == flag.room) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            if (creep.room == flag.room) {
                console.log(creep.claimController(creep.room.controller));
                if (creep.claimController(creep.room.controller) != OK) {
                    if (creep.reserveController(creep.room.controller) != OK) {
                        if(creep.attackController(creep.room.controller) != OK) {
                            creep.moveTo(creep.room.controller);
                        }
                    }
                }
            } 
            else {
                creep.moveTo(flag);
            }
        }
        else {
            creep.moveTo(flag);
        }
    }
    else{
        creep.moveTo(flag);
    }
};

module.exports = roleClaimer;