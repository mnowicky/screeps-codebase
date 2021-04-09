var labs = require('mod.labs');

var rolePowerMiner = {
    run: function(creep, spawn) {
        var spawn = creep.memory.spawn;
        var role = creep.memory.role;
        
        if (role == 'pBreaker') {
            pBreaker(creep, spawn);
        }
        else if (role == 'pHealer') {
            pHealer(creep, spawn);
        }
        else if (role == 'pLooter'){
            pLooter(creep, spawn);
        }
    }
};

function checkBody(part, body){
    var count=body.length;
    for(var i=0;i<count;i++){
        if(body[i].type===part){
            return true;
        }
    }
}


function pBreaker(creep, spawn){
    let pbFlag = Game.flags.pbFlag;
    let storeFlag = Game.flags.storeFlag;
    
    if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4'){
        if(creep.memory.getBoosted == true && creep.memory.isBoosted == false){
            if(creep.memory.boost == 'RA'){
                labs.boost_XKHO2(creep);
                //return false;
            }
        }
    }
    if (creep.memory.working == true && creep.store[RESOURCE_POWER] == 0){     //JSON.stringify(creep.store) == '{}') {
        creep.memory.working = false;
    }
    if (creep.memory.working == false && creep.store[RESOURCE_POWER] == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
        
    if (creep.memory.working == true) {
        if (creep.room == storeFlag.room) {
            
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_STORAGE)
            });
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TERMINAL)
            })
            
            if (strg) {
                if(creep.transfer(strg, RESOURCE_POWER) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(strg);
                }
            }else{
                creep.travelTo(storeFlag, {preferHighway: true});
            }
        }
        else {
            creep.travelTo(storeFlag, {preferHighway: true});
        }
    }
    else if (creep.memory.working == false) {
        if (creep.room == pbFlag.room) {
            
            /*var dropped = creep.pos.findInRange(FIND_DROPPED_RESOURCES,50);
            if(dropped) {
                if(creep.pickup(dropped[0]) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(dropped[0]);
                    return false;
                }
            }*/
            
            var pb = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (pb) => pb.structureType == STRUCTURE_POWER_BANK
            });
            
            /*bod = creep.body;
            attackPrt = checkBody("attack", bod);
            raPrt = checkBody("ranged_attack", bod);
            
            if (pb){
                if(raPrt){
                    if(creep.rangedAttack(pb) == OK){
                        if(attackPrt){
                            if(creep.attack(pb) != OK){
                                creep.travelTo(pb);
                            }
                        }
                    }
                }
            }*/
            if (pb) {
                if(creep.rangedAttack(pb) == OK){
                    if(creep.attack(pb) != OK){
                        creep.travelTo(pb);
                    }
                }
                else{
                    creep.travelTo(pb);
                }
            }
        }
        else {
            creep.travelTo(pbFlag, {preferHighway: true});
        }
    }
};

function pHealer(creep, spawn){
    let pbFlag = Game.flags.pbFlag;
    let storeFlag = Game.flags.storeFlag;
    
    if(creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4'){
        if(creep.memory.getBoosted == true && creep.memory.isBoosted == false){
            if(creep.memory.boost == 'HEAL'){
                labs.boost_XLHO2(creep);
                //return false;
            }
        }
    }

    if (creep.memory.working == true && creep.store[RESOURCE_POWER] == 0){     //JSON.stringify(creep.store) == '{}') {
        creep.memory.working = false;
    }
    if (creep.memory.working == false && creep.store[RESOURCE_POWER] == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
        
    if (creep.memory.working == true) {
        if (creep.room == storeFlag.room) {
                
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_STORAGE)
            });
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TERMINAL)
            })
                
            if (strg) {
                if(creep.transfer(strg, RESOURCE_POWER) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(strg);
                }
            }else{
                creep.travelTo(storeFlag, {preferHighway: true});
            }
        }
        else {
            creep.travelTo(storeFlag, {preferHighway: true});
        }
    }
    else if (creep.memory.working == false) {
        if (creep.room == pbFlag.room) {
            
            /*var dropped = creep.pos.findInRange(FIND_DROPPED_RESOURCES,50);
            if(dropped) {
                if(creep.pickup(dropped[0]) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(dropped[0]);
                    return false;
                }
            }*/
            
            /*var friend = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter: (cr) => cr.hits < cr.hitsMax
            });*/
            
            var pb = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (pb) => pb.structureType == STRUCTURE_POWER_BANK
            });
            var friend = Game.getObjectById('604eda3dd0d3a87774152fec');
            //var friend = creep.pos.findInRange(FIND_MY_CREEPS, 30);
            if (friend) {
                if (creep.heal(friend) != OK) {
                    creep.travelTo(friend);
                }
                else{
                    creep.travelTo(pb);
                }
            }
            else{
                travelTo(pb);
            }
        }
        else {
            creep.travelTo(pbFlag, {preferHighway: true});
        }
    }
};

function pLooter(creep, spawn){
    let pbFlag = Game.flags.pbFlag;
    let storeFlag = Game.flags.storeFlag;
    if (creep.memory.working == true && creep.store[RESOURCE_POWER] == 0){     //JSON.stringify(creep.store) == '{}') {
        creep.memory.working = false;
    }
    if (creep.memory.working == false && creep.store[RESOURCE_POWER] == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
        
    if (creep.memory.working == true) {
        if (creep.room == storeFlag.room) {
                
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_STORAGE)
            });
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TERMINAL)
            });
                
            if (strg) {
                if(creep.transfer(strg, RESOURCE_POWER) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(strg);
                }
            }else{
                creep.travelTo(storeFlag, {preferHighway: true});
            }
        }
        else {
            creep.travelTo(storeFlag, {preferHighway: true});
        }
    }
    else if (creep.memory.working == false) {
        if (creep.room == pbFlag.room) {
            
            /*var dropped = creep.pos.findInRange(FIND_DROPPED_RESOURCES,50);
            if(dropped) {
                if(creep.pickup(dropped[0]) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(dropped[0]);
                    return false;
                }
            }*/
            
            const pwr = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if(pwr){
                if(creep.pickup(pwr) == ERR_NOT_IN_RANGE){
                    creep.travelTo(pwr);
                }
            }
            else{
                creep.travelTo(pbFlag);
            }
        }
        else {
            creep.travelTo(pbFlag, {preferHighway: true});
        }
    }
};

module.exports = rolePowerMiner;