var labs = require('mod.labs');
var roleMiner = {
    run: function (creep) {
        var site = creep.memory.site;

        if(site == 'site1'){
            minerOne(creep)
        }
        else if(site == 'site2'){
            minerTwo(creep);
        }
        else if(site == 'site3'){
            minerThree(creep);
        }
        else if(site == 'site4'){
            minerFour(creep);
        }
        else if(site == 'site5'){
            minerFive(creep);
        }
        else{
            minerOne(creep);
        }
    }
};

function minerOne(creep) {
    let mineFlag = Game.flags.mineFlag;
    let storeFlag = Game.flags.storeFlag;

    if (creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8') {
        if (creep.memory.getBoosted == true) {
            if (creep.memory.boost == 'work') {
                labs.boost_XUHO2(creep);
                return false;
            }
        }
    }

    if (creep.memory.working == true && JSON.stringify(creep.store) == '{}') {
        creep.memory.working = false;
    }
    else if (creep.memory.working == false && ((creep.store[RESOURCE_METAL] || creep.store[RESOURCE_BIOMASS]) == creep.store.getCapacity())) {
        creep.memory.working = true;
    }
    if (creep.memory.working == false && creep.ticksToLive < 350) {
        creep.memory.working = true;
    }
    if(creep.ticksToLive < 750 && creep.store[RESOURCE_METAL] == 0){
        creep.suicide();
    }

    if (creep.memory.working == true) {
        if (creep.room == storeFlag.room) {

            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_STORAGE)
            });
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TERMINAL)
            })


            if (term) {
                for (const resourceType in creep.carry) {
                    if (creep.transfer(term, resourceType) != OK) {
                        creep.moveTo(term);
                    }
                }
            }
            else if(strg){
                for(const resourceType in creep.carry){
                    if(creep.transfer(strg, resourceType)!=OK){
                        creep.moveTo(strg);
                    }
                }
            }
            else {
                creep.travelTo(storeFlag, { preferHighway: true });
            }
        }
        else {
            creep.travelTo(storeFlag, { preferHighway: true });
        }
    }
    else if (creep.memory.working == false) {

        var pbpickup = creep.memory.pbpickup;

        //====== RESOURCE PICKUP CODE ========
        
        var drp = Game.getObjectById('60696425d769cc110392f56c');
        if (drp) {
            if (creep.pickup(drp) != OK) {
                creep.moveTo(drp);
                return false;
            }
        }
        var tmb = Game.getObjectById('6069603b9a82e8e119f16e75');
        if (tmb) {
            if (creep.withdraw(tmb, RESOURCE_POWER) != OK) {
                creep.moveTo(tmb);
                return false;
            }
        }
    


        if (creep.room == mineFlag.room) {
            console.log(creep);
            console.log('hello');
            var drp = Game.getObjectById('60696419a77d0a90c95d5056');
            if (drp) {
                if (creep.pickup(drp) != OK) {
                    creep.moveTo(drp);
                    return false;
                }
            }
            var deposit = creep.pos.findClosestByRange(FIND_DEPOSITS, {
                filter: (d) => (d.depositType == RESOURCE_METAL
                    || d.depositType == RESOURCE_MIST
                    || d.depositType == RESOURCE_SILICON
                    || d.depositType == RESOURCE_BIOMASS)
            });
            if (deposit) {
                if (creep.harvest(deposit) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(deposit);
                }
            }

        }
        else{
            creep.travelTo(mineFlag, {preferHighway: true});
        }
    }
    else {
        creep.travelTo(mineFlag, {preferHighway: true});
    }

};


function minerTwo(creep){
    let mineFlag = Game.flags.mineFlag2;
    let storeFlag = Game.flags.storeFlag;
    
    if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8'){
        if(creep.memory.getBoosted == true){
            if(creep.memory.boost == 'work'){
                labs.boost_XUHO2(creep);
                return false;
            }
        }
    }
    
    if (creep.memory.working == true && JSON.stringify(creep.store) == '{}') {
        creep.memory.working = false;
    } 
    if (creep.memory.working == false && (creep.store[RESOURCE_METAL] || creep.store[RESOURCE_BIOMASS]) == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
    if (creep.memory.working == false && creep.ticksToLive < 600) {
        creep.memory.working = true;
    }
    
    if (creep.memory.working == true) {
        
        if (creep.room == storeFlag.room) {
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TERMINAL)
            });
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_STORAGE)
            });

            
            if(strg){
                for(const resourceType in creep.carry){
                    if(creep.transfer(strg, resourceType)!=OK){
                        creep.moveTo(strg);
                        return false;
                    }
                }
            }
            else{
                creep.moveTo(storeFlag);
            }
        }
        else {
            creep.moveTo(storeFlag);
        }
    }
    else if (creep.memory.working == false) {
        if (creep.room == mineFlag.room) {
            var deposit = creep.pos.findClosestByRange(FIND_DEPOSITS, {
                filter: (d) => (d.depositType == RESOURCE_METAL
                            || d.depositType == RESOURCE_MIST
                            || d.depositType == RESOURCE_SILICON
                            || d.depositType == RESOURCE_BIOMASS)
            });
            if (deposit) {
                if (creep.harvest(deposit) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(deposit);
                }
            }
        }
        else {
            //creep.moveTo(mineFlag);
            creep.travelTo(mineFlag, {preferHighway: true});
        }
    }
    else{
        //creep.moveTo(mineFlag);
        creep.travelTo(mineFlag, {preferHighway: true});
    }
};


function minerThree(creep){
    let mineFlag = Game.flags.mineFlag3;
    let storeFlag = Game.flags.storeFlag3;
    
    if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8'){
        if(creep.memory.getBoosted == true){
            if(creep.memory.boost == 'work'){
                labs.boost_XUHO2(creep);
                return false;
            }
        }
    }
    
    if (creep.memory.working == true && JSON.stringify(creep.store) == '{}') {
        creep.memory.working = false;
    } 
    if (creep.memory.working == false && (creep.store[RESOURCE_METAL] || creep.store[RESOURCE_BIOMASS]) == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
    if (creep.memory.working == false && creep.ticksToLive < 600) {
        creep.memory.working = true;
    }
    
    if (creep.memory.working == true) {
        
        if (creep.room == storeFlag.room) {
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TERMINAL)
            });
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_STORAGE)
            });

            
            if(strg){
                for(const resourceType in creep.carry){
                    if(creep.transfer(strg, resourceType)!=OK){
                        creep.moveTo(strg);
                        return false;
                    }
                }
            }
            else{
                creep.moveTo(storeFlag);
            }
        }
        else {
            creep.moveTo(storeFlag);
        }
    }
    else if (creep.memory.working == false) {
        if (creep.room == mineFlag.room) {
            var deposit = creep.pos.findClosestByRange(FIND_DEPOSITS, {
                filter: (d) => (d.depositType == RESOURCE_METAL
                            || d.depositType == RESOURCE_MIST
                            || d.depositType == RESOURCE_SILICON
                            || d.depositType == RESOURCE_BIOMASS)
            });
            if (deposit) {
                if (creep.harvest(deposit) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(deposit);
                }
            }
        }
        else {
            creep.travelTo(mineFlag, {preferHighway: true});
        }
    }
};

function minerFour(creep){
    let mineFlag = Game.flags.mineFlag4;
    let storeFlag = Game.flags.storeFlag;
    
    if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8'){
        if(creep.memory.getBoosted == true){
            if(creep.memory.boost == 'work'){
                labs.boost_XUHO2(creep);
                return false;
            }
        }
    }
    
    if (creep.memory.working == true && JSON.stringify(creep.store) == '{}') {
        creep.memory.working = false;
    } 
    if (creep.memory.working == false && (creep.store[RESOURCE_METAL] || creep.store[RESOURCE_BIOMASS]) == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
    if (creep.memory.working == false && creep.ticksToLive < 600) {
        creep.memory.working = true;
    }
    
    if (creep.memory.working == true) {
        
        if (creep.room == storeFlag.room) {
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TERMINAL)
            });
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_STORAGE)
            });

            
            if(strg){
                for(const resourceType in creep.carry){
                    if(creep.transfer(strg, resourceType)!=OK){
                        creep.moveTo(strg);
                        return false;
                    }
                }
            }
            else{
                creep.travelTo(storeFlag);
            }
        }
        else {
            creep.travelTo(storeFlag);
        }
    }
    else if (creep.memory.working == false) {
        if (creep.room == mineFlag.room) {
            var deposit = creep.pos.findClosestByRange(FIND_DEPOSITS, {
                filter: (d) => (d.depositType == RESOURCE_METAL
                            || d.depositType == RESOURCE_MIST
                            || d.depositType == RESOURCE_SILICON
                            || d.depositType == RESOURCE_BIOMASS)
            });
            if (deposit) {
                if (creep.harvest(deposit) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(deposit);
                }
            }
        }
        else {
            creep.travelTo(mineFlag, {preferHighway: true});
        }
    }
};

function minerFive(creep){
    let mineFlag = Game.flags.mineFlag5;
    let storeFlag = Game.flags.storeFlag;
    
    if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8'){
        if(creep.memory.getBoosted == true){
            if(creep.memory.boost == 'work'){
                labs.boost_XUHO2(creep);
                return false;
            }
        }
    }
    
    if (creep.memory.working == true && JSON.stringify(creep.store) == '{}') {
        creep.memory.working = false;
    } 
    if (creep.memory.working == false && (creep.store[RESOURCE_METAL] || creep.store[RESOURCE_BIOMASS]) == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
    if (creep.memory.working == false && creep.ticksToLive < 600) {
        creep.memory.working = true;
    }
    
    if (creep.memory.working == true) {
        
        if (creep.room == storeFlag.room) {
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TERMINAL)
            });
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_STORAGE)
            });

            
            if(strg){
                for(const resourceType in creep.carry){
                    if(creep.transfer(strg, resourceType)!=OK){
                        creep.moveTo(strg);
                        return false;
                    }
                }
            }
            else{
                creep.moveTo(storeFlag);
            }
        }
        else {
            creep.moveTo(storeFlag);
        }
    }
    else if (creep.memory.working == false) {
        if (creep.room == mineFlag.room) {
            var deposit = creep.pos.findClosestByRange(FIND_DEPOSITS, {
                filter: (d) => (d.depositType == RESOURCE_METAL
                            || d.depositType == RESOURCE_MIST
                            || d.depositType == RESOURCE_SILICON
                            || d.depositType == RESOURCE_BIOMASS)
            });
            if (deposit) {
                if (creep.harvest(deposit) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(deposit);
                }
            }
        }
        else {
            creep.travelTo(mineFlag, {preferHighway: true});
        }
    }
};


module.exports = roleMiner;