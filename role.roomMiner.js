// harvests minerals until the deposit is dry, then harvests and stores energy.
var roleUpgrader = require('role.upgrader');
var roleMover = require('role.mover');

var roleRoomMiner = {
    run: function (creep) {
        
        if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8'){
            creep.memory.mining = 'energy';
            creep.memory.dropoff = 'storage';
        }
        else if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5' || creep.memory.spawn == 'Spawn11'){
            creep.memory.mining = 'minerals';
            creep.memory.dropoff = 'terminal';
        }
        else if(creep.memory.spawn == 'Spawn3'){
            creep.memory.mining = 'energy';
            creep.memory.dropoff = 'storage';
        }
        else if(creep.memory.spawn == 'Spawn6'){
            var strg = Game.getObjectById('6036da84d01f44538f049d98');
            var term = Game.getObjectById('603c788440897c51bb6c6b55');

            if(strg.store[RESOURCE_ENERGY] < 1000000){
                creep.memory.mining = 'energy';
                creep.memory.dropoff = 'storage';
            }
            else if(term.store.getUsedCapacity() < term.store.getCapacity()){
                creep.memory.mining = 'energy';
                creep.memory.dropoff = 'terminal'
            }
        }
        else if(creep.memory.spawn == 'Spawn7' || creep.memory.spawn == 'Spawn10'){
            creep.memory.mining = 'energy';
            creep.memory.dropoff = 'storage';
        }
        
        var mining = creep.memory.mining;
        
        if (mining == 'minerals') {
            mineMinerals(creep);
        }
        else if (mining == 'energy') {
            mineEnergy(creep);
        }
    }
};

//===========================================================

function mineMinerals(creep) {
    //go store them
    if (creep.store[Object.keys(creep.store)] == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
    //go harvest minerals
    else if (creep.store[Object.keys(creep.store)] == undefined) {
        creep.memory.working = false;
    }
    
    if (creep.memory.working == false) {
        var mineral = creep.room.find(FIND_MINERALS);
        
        if(mineral[0].mineralAmount > 0) {
            if(creep.harvest(mineral[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(mineral[0]);
            }
        }
        else if(mineral[0].mineralAmount == 0) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if(source == '[]' && creep.carryCapacity > 0) {
                creep.memory.working == true;
            }
            else if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else if(creep.memory.spawn == 'Spawn3'){
            var flag = Game.flags.rmFlag3;
            var src = Game.getObjectById('5bbcac8e9099fc012e635b4b');
            if(src.energy == 0 && mineral[0].mineralAmount == 0){
                creep.moveTo(flag);
            }
        }
    }
    else if (creep.memory.working == true) {
        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: (s) => (s.structureType == STRUCTURE_STORAGE) && s.store.getUsedCapacity() < s.store.getCapacity()
        });
        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: (t) => (t.structureType == STRUCTURE_TERMINAL) && t.store.getUsedCapacity() < t.store.getCapacity()
        });
        
        
        
        if(creep.memory.dropoff == 'terminal'){
            if(term){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(term, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(term);
                    }
                }
            }
        }
        else if(creep.memory.dropoff == 'storage'){
            if(strg){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(strg, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(strg);
                    }
                }
            }
        }
    }
}

function mineEnergy(creep) {
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
    
    if (creep.memory.working == true && creep.store.getUsedCapacity() == 0) {
        creep.memory.working = false;
    }
    else if (creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
    
    if(creep.memory.working == true) {
        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: (st) => (st.structureType == STRUCTURE_STORAGE)
        });
        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: (t) => (t.structureType == STRUCTURE_TERMINAL)
        });
        var nuke = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
            filter: (n) => (n.structureType == STRUCTURE_NUKER)
        });
        
        if(creep.memory.dropoff == 'terminal'){
            if(term){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(term, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(term);
                    }
                }
            }
        }
        else if(creep.memory.dropoff == 'storage'){
            if(strg){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(strg, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(strg);
                    }
                }
            }
        }
        else if(creep.memory.dropoff == 'nuke'){
            if(nuke){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(nuke, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(nuke);
                    }
                }
            }
        }
    }
    else if(creep.memory.working == false) {
        if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8'){
            if(wartime){
                var lnk = Game.getObjectById('6064f1003cc1250d7fde151d');
                if(lnk.store[RESOURCE_ENERGY] > 0){
                    if(creep.withdraw(lnk, RESOURCE_ENERGY)!=OK){
                        creep.moveTo(lnk);
                    }
                }
            }
            else if(!wartime){
                var lnk = Game.getObjectById('6064f1003cc1250d7fde151d');
                if(lnk.store[RESOURCE_ENERGY] > 0){
                    if(creep.withdraw(lnk, RESOURCE_ENERGY)!=OK){
                        creep.moveTo(lnk);
                    }
                }
                
            }
        }
        if(creep.memory.spawn == 'Spawn6'){
            var dropped = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            //console.log(dropped);
            if(dropped){
                if(creep.pickup(dropped) == ERR_NOT_IN_RANGE){
                    creep.moveTo(dropped);
                    return false;
                }
            }
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
            /*var src = Game.getObjectById('5bbcac9b9099fc012e635d74');

            if (src){
                if (creep.harvest(src) != OK){
                    creep.moveTo(src);
                }
            }
            */
            var lnk1 = Game.getObjectById('6058254ff201b625edf5c4c9');
            if(creep.store[RESOURCE_ENERGY] > 0){
                creep.memory.working = true;
            }
            var flag = Game.flags.rmMiner2.flag

            if(lnk1.store[RESOURCE_ENERGY] > 0){
                if(creep.withdraw(lnk1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(lnk1);
                    return false;
                }
            }
            if(lnk1.store[RESOURCE_ENERGY] == 0){
                creep.moveTo(flag);
                return false;
            }

        }
        else{
            var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if(!source && creep.store.getUsedCapacity() > 0) {
                creep.memory.working == true;
            }
            else if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }
}


module.exports = roleRoomMiner;