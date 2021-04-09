var labs = require('mod.labs');

var roleStationaryWorker = {
    run: function(creep, spawn) {
        var spawn = creep.memory.spawn;
        var role = creep.memory.role;
        
        if (role == 'stationaryHarvester') {
            statHarvester(creep, spawn);
        }
        else if (role == 'stationaryUpgrader') {
            statUpgrader(creep, spawn);
        }
    }
};


function statHarvester(creep, spawn) {
    if (spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8') {
        if(creep.memory.src == 'a'){
            var src = Game.getObjectById('5bbcac8e9099fc012e635b46');
            var lnk = Game.getObjectById('5ffe3244017b7f138d559e92');
            if(src.energy == 0 && creep.store[RESOURCE_ENERGY] > 0){
                creep.memory.working = true;
            }
        }
        else if(creep.memory.src == 'b'){
            var src = Game.getObjectById('5bbcac8e9099fc012e635b47');
            var lnk = Game.getObjectById('6064ecb4c685388d625b0fe5');
            
            if(src.energy == 0 && creep.store[RESOURCE_ENERGY] > 0){
                creep.memory.working = true;
            }
        }
    }
    else if (spawn == 'Spawn2' || spawn == 'Spawn5') {
        if(creep.memory.src == 'a'){
            var src = Game.getObjectById('5bbcac9b9099fc012e635d76');
            var lnk = Game.getObjectById('60586acdaca77f845d2ffc4a');
            if(src.energy == 0 && creep.store[RESOURCE_ENERGY] > 0){
                creep.memory.working = true;
            }
        }
        else if(creep.memory.src == 'b'){
            var src = Game.getObjectById('5bbcac9b9099fc012e635d74');
            var lnk = Game.getObjectById('6058690384141f6e21e41c29');
            
            if(src.energy == 0 && creep.store[RESOURCE_ENERGY] > 0){
                creep.memory.working = true;
            }
        }
    }
    else if (spawn == 'Spawn3') {
        console.log('Stationary harvester assigned to room 3, no link available');
    }
    else if (spawn == 'Spawn6') {
        var src = Game.getObjectById('5bbcac8e9099fc012e635b42');
        var lnk = Game.getObjectById('6036119ab86cd4221184f9db');
        if(creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()){
            creep.memory.working = true;
        }

    }
    else if(spawn == 'Spawn7'){
        var src = Game.getObjectById('5bbcac819099fc012e635939');
        var lnk = Game.getObjectById('6046b7d8025e5a19e59a7a98');
        if(creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()){
            creep.memory.working = true;
        }
    }

    if (creep.memory.working == true && creep.store[RESOURCE_ENERGY] == 0) {
        creep.memory.working = false;
    }
    else if (creep.memory.working == false && creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
        creep.memory.working = true;
    }

    if (creep.memory.working == true) {
        if (creep.transfer(lnk, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(lnk);
        }
    }
    else if (creep.memory.working == false) {
        if (creep.harvest(src) != OK) {
            creep.moveTo(src);
        }
    }
};

function statUpgrader(creep, spawn) {
    if (spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8') {
        var lnk = Game.getObjectById('5ffe35b66efa2a652c53fba3');
    }
    else if (spawn == 'Spawn2' || spawn == 'Spawn5') {
        var lnk = Game.getObjectById('6056efe3025e5a4f5aa08afe');
        if(creep.memory.getBoosted == true && creep.memory.isBoosted == true){
            if(creep.memory.boost == 'upgrade'){
                labs.boost_XGH2O(creep);
                return false;
            }
        }
    }
    else if (spawn == 'Spawn6') {
        var lnk = Game.getObjectById('60370c77ca1860d0f371bae5');
        if(creep.memory.getBoosted == true && creep.memory.isBoosted == false){
            if(creep.memory.boost == 'upgrade'){
                labs.boostUpgrade_XGH2O(creep);
                return false;
            }
        }
    }
    else if(spawn == 'Spawn7'){
        var lnk = Game.getObjectById('604c7e4eececdb4c22f3fb37');
    }
    
    if (creep.memory.working == true && creep.carry.energy == 0) {
        creep.memory.working = false;
    }
    else if (creep.memory.working == false && creep.carry.energy > 0) {
        creep.memory.working = true;
    }

    if (creep.memory.working == true) {
        var deposit = creep.memory.deposit;
        
        if(deposit){
            if(creep.transfer(lnk, RESOURCE_ENERGY) != OK){
                creep.moveTo(lnk);
            }
            else{
                creep.memory.deposit = false;
            }
        }
        
        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
    }
    else {

        if(creep.withdraw(lnk, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(lnk);
        }
    }
};

module.exports = roleStationaryWorker;