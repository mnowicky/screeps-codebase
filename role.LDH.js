//main module for all long distance harvesters.

var roleLDH = {
    run: function (creep) {
        
        if(creep.memory.home == 'W5S18' && creep.memory.target == 'W4S18') {
            LDH_W4S18(creep);
        }
        else if (creep.memory.home == 'W6S19' && creep.memory.target == 'W5S19') {
            LDH_W5S19(creep);
        }
        else if (creep.memory.home == 'W6S19' && creep.memory.target == 'W7S19') {
            LDH_W7S19(creep);
        }
        else if(creep.memory.home == 'W7S17' && creep.memory.target == 'W7S18'){
            LDH_W7S18(creep);
        }
        else if(creep.memory.home == 'W6S17' && creep.memory.target == 'W5S17'){
            LDH_W5S17(creep);
        }
        else if(creep.memory.home == 'W7S17' && creep.memory.target == 'W7S16'){
            LDH_W7S16(creep);
        }
        else if(creep.memory.home == 'W1S18' && creep.memory.target == 'W1S19'){
            LDH_W1S18_South(creep);
        }
    }
};

/*
const path = creep.pos.findPathTo(Game.flags.Flag1);
if(path.length > 0) {
    creep.move(path[0].direction);
}

*/


function LDH_W1S18_South(creep){
    var targetFlag = Game.flags.rm3Target1;
    var targetFlag2 = Game.flags.rm3Target2;
    var homeFlag = Game.flags.rm3Home;
    var src1 = Game.getObjectById('5bbcacd49099fc012e636483');
    var src2 = Game.getObjectById('5bbcacc79099fc012e636300');
    var src3 = Game.getObjectById('5bbcacc79099fc012e6362fe');

    if(creep.store[RESOURCE_ENERGY] == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()){
        creep.memory.working = true;
    }

    if (creep.memory.working == true) {
        if (creep.room == targetFlag.room) {
            const exitDir = Game.map.findExit(creep.room, 'W1S18');
            const exit = creep.pos.findClosestByRange(exitDir);
            var road = creep.pos.findInRange(FIND_STRUCTURES,2, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_ROAD
            });
            var constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            
            if(road) {
                if(creep.repair(road[0]) == OK) {
                    creep.say('🛠️');
                }
            }
            if(constructionSite){
                if(creep.build(constructionSite) == ERR_NOT_IN_RANGE){
                    creep.moveTo(constructionSite);
                }
            }
            else{
                creep.moveTo(exit);
            }
        }
        else if (creep.room == targetFlag2.room){
            const exitDir = Game.map.findExit(creep.room, 'W1S19');
            const exit = creep.pos.findClosestByRange(exitDir);
            
            var road = creep.pos.findInRange(FIND_STRUCTURES,2, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_ROAD
            });
            var constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            
            if(road) {
                if(creep.repair(road[0]) == OK) {
                    creep.say('🛠️');
                }
            }
            if(constructionSite){
                if(creep.build(constructionSite) == ERR_NOT_IN_RANGE){
                    creep.moveTo(constructionSite);
                }
            }
            else{
                creep.moveTo(exit);
            }
        }
        
        //has energy, back in home room after harvesting
        else if (creep.room == homeFlag.room) {
            var r3_lnk_s = Game.getObjectById('6069f9029c689b412c9c55f6');
            var ctrl = creep.room.controller;
            
            if(creep.transfer(r3_lnk_s, RESOURCE_ENERGY) != OK){
                creep.moveTo(r3_lnk_s);
            }
            else if(creep.upgradeController(ctrl) == ERR_NOT_IN_RANGE){
                creep.moveTo(ctrl);
            }
            
            var cSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if(cSite){
                if(creep.build(cSite) == ERR_NOT_IN_RANGE){
                    creep.moveTo(cSite);
                }
            }
        }
    }
    else if(creep.memory.working == false){
        if(creep.room == homeFlag.room){
            const targetFlag = Game.flags.rm3Target1
            const path = creep.pos.findPathTo(targetFlag);
            if(path.length > 0) {
                creep.move(path[0].direction);
            }
        }
        else if(creep.room == targetFlag.room){
            if(src1.energy > 0){
                var creepsInRoom = creep.room.find(FIND_MY_CREEPS);
                if(creepsInRoom.length >= 2){
                    creep.moveTo(targetFlag2);
                }
                else if(creep.harvest(src1)!=OK){
                    creep.moveTo(src1);
                }
            }
        }
        else if(creep.room == targetFlag2.room){
            if(src2.energy > 0){
                if(creep.harvest(src2)!=OK){
                    creep.moveTo(src2);
                }
            }
            else if(src3.energy > 0){
                if(creep.harvest(src3)!=OK){
                    creep.moveTo(src3);
                }
            }
            else{
                creep.say('no sources!');
            }
        }
        else{
            creep.moveTo(targetFlag);
        }
    }
};

function LDH_W7S16(creep){
    let targetFlag = Game.flags.rm5Target2;
    let homeFlag = Game.flags.rm5Home;
    var r5Lnk = Game.getObjectById('606a65bff965ddd4bc97daa4');
    var src = Game.getObjectById('5bbcac819099fc012e635935');

    if(creep.store[RESOURCE_ENERGY] == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()){
        creep.memory.working = true;
    }

    if (creep.memory.working == true) {
        if (creep.room == targetFlag.room) {
            const exitDir = Game.map.findExit(creep.room, 'W7S17');
            const exit = creep.pos.findClosestByRange(exitDir);
            
            var road = creep.pos.findInRange(FIND_STRUCTURES,2, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_ROAD
            });
            var constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            
            if(road) {
                if(creep.repair(road[0]) == OK) {
                    creep.say('🛠️');
                }
            }
            if(constructionSite){
                if(creep.build(constructionSite) == ERR_NOT_IN_RANGE){
                    creep.moveTo(constructionSite);
                }
            }
            else{
                creep.moveTo(exit);
            }
        }
        
        //has energy, back in home room after harvesting
        else if (creep.room == homeFlag.room) {
            var r5Lnk = Game.getObjectById('606a65bff965ddd4bc97daa4');
            var ctrl = creep.room.controller;
            
            if(creep.transfer(r5Lnk, RESOURCE_ENERGY) != OK){
                creep.moveTo(r5Lnk);
            }
            else if(creep.upgradeController(ctrl) == ERR_NOT_IN_RANGE){
                creep.moveTo(ctrl);
            }
            
            var cSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if(cSite){
                if(creep.build(cSite) == ERR_NOT_IN_RANGE){
                    creep.moveTo(cSite);
                }
            }
        }
    }
    else if(creep.memory.working == false){
        if(creep.room == targetFlag.room){
            if(creep.harvest(src) != OK){
                creep.moveTo(src);
            }
        }
        else{
            creep.moveTo(targetFlag);
        }
    }
}

function LDH_W7S18(creep){
    let targetFlag = Game.flags.rm5Target;
    let homeFlag = Game.flags.rm5Home;
    var r5Lnk = Game.getObjectById('6046b7d8025e5a19e59a7a98');
    var src = Game.getObjectById('5bbcac819099fc012e63593b');

    if(creep.store[RESOURCE_ENERGY] == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()){
        creep.memory.working = true;
    }

    if (creep.memory.working == true) {
        if (creep.room == targetFlag.room) {
            const exitDir = Game.map.findExit(creep.room, 'W7S17');
            const exit = creep.pos.findClosestByRange(exitDir);
            
            var road = creep.pos.findInRange(FIND_STRUCTURES,2, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_ROAD
            });
            var constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            
            if(road) {
                if(creep.repair(road[0]) == OK) {
                    creep.say('🛠️');
                }
            }
            if(constructionSite){
                if(creep.build(constructionSite) == ERR_NOT_IN_RANGE){
                    creep.moveTo(constructionSite);
                }
            }
            else{
                creep.moveTo(exit);
            }
        }
        
        //has energy, back in home room after harvesting
        else if (creep.room == homeFlag.room) {
            var r5_lnk_s = Game.getObjectById('6046b7d8025e5a19e59a7a98');
            var ctrl = creep.room.controller;
            var cSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            /*if(cSite){
                if(creep.build(cSite) == ERR_NOT_IN_RANGE){
                    creep.moveTo(cSite);
                }
            }*/
            if(creep.transfer(r5_lnk_s, RESOURCE_ENERGY) != OK){
                creep.moveTo(r5_lnk_s);
            }
            else if(creep.upgradeController(ctrl) == ERR_NOT_IN_RANGE){
                creep.moveTo(ctrl);
            }
        }
    }
    else if(creep.memory.working == false){
        if(creep.room == targetFlag.room){
            /*var e = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(e){
                Game.spawns.Spawn7.memory.minLDH_W7S18 = 0;
            }*/
            if(creep.harvest(src) != OK){
                //console.log(creep.harvest(src));
                creep.moveTo(src);
            }
        }
        else{
            creep.moveTo(targetFlag);
        }
    }
}

function LDH_W4S18(creep) {
    let targetFlag = Game.flags.rm2Target;
    let homeFlag = Game.flags.rm2Home;
    var rm2EdgeLnk = Game.getObjectById('602060c955093b1bf1021609');

    if (creep.carry.energy == 0) {
        creep.memory.working = false;
    }
    else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
        creep.memory.working = true;
    }

    //full of energy, headed back home
    if (creep.memory.working == true) {
        if (creep.room == targetFlag.room) {
            //contribute energy to nearby construction sites in target room
            var constructionSite = creep.pos.findInRange(FIND_CONSTRUCTION_SITES,2);
            if(constructionSite) {
                if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite[0]);
                }
            }
            //repair roads walked on in target room
            var road = creep.pos.findInRange(FIND_STRUCTURES,1, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_ROAD
            });
            if(road) {
                creep.repair(road[0]);
            }
            creep.moveTo(homeFlag);
        }
        
        
        if (creep.room == homeFlag.room) {
            
            //if room energy at full capacity, upgrade controller
            //if (creep.room.energyAvailable >= (creep.room.energyCapacityAvailable / 2)) {
            if(creep.transfer(rm2EdgeLnk, RESOURCE_ENERGY) != OK) {
                creep.moveTo(rm2EdgeLnk);
            }
            //}
            
            //below is the setup to have them act as rm2 harvesters, instead of link upgraders
            
            //repair roads walked on in home room
            var road = creep.pos.findInRange(FIND_STRUCTURES,1, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_ROAD
            });
            if(road) {
                if(creep.repair(road[0]) == OK) {
                    creep.say('🛠️');
                }
            }
            
            //contribute energy to nearby construction sites in home room
            var constructionSite = creep.pos.findInRange(FIND_CONSTRUCTION_SITES,2);
            if(constructionSite) {
                if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite[0]);
                }
            }
            
            
            //find spawns, extensions and towers not at full cap.
            var structure = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_SPAWN
                            || s.structureType == STRUCTURE_EXTENSION
                            || s.structureType == STRUCTURE_TOWER)
                            && s.energy < s.energyCapacity
            });

            //transfer energy to structures
            if (structure != undefined) {
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure);
                }
            }
        }
    }
    else if(creep.memory.working == false){
        if (creep.room == homeFlag.room) {
            creep.moveTo(targetFlag);
        }
        
        else if (creep.room == targetFlag.room) {
            
            /*var e = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(e){
                Game.spawns.Spawn5.memory.minLDH_W4S18 = 0;
            }
            */
            
            var dropped = creep.pos.findInRange(FIND_DROPPED_RESOURCES,10);
            if(dropped) {
                if(creep.pickup(dropped[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(dropped[0]);
                }
            }
            
            //if source to harvest is out of range, check if capacity more than half.
            //if yes, bring it back
            var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                if(creep.store[RESOURCE_ENERGY] > (creep.store.getCapacity()/2)) {
                    creep.memory.working = true;
                }
                else {
                creep.moveTo(source);
                }
            }
        }
    }
}

function LDH_W5S17(creep) {
    var targetFlag = Game.flags.LDH_W5S17;
    var homeFlag = Game.flags.rm4Home;
    var source = Game.getObjectById('5bbcac9b9099fc012e635d72');


    if (creep.store.getUsedCapacity() == 0 && creep.memory.working == true) {
        creep.memory.working = false;
    }
    else if (creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
    else if (creep.ticksToLive <= 100) {
        creep.memory.working = true;
    }
    
    //has energy, headed back to home room
    if (creep.memory.working == true) {
        if (creep.room == targetFlag.room) {
            const exitDir = Game.map.findExit(creep.room, 'W6S17');
            const exit = creep.pos.findClosestByRange(exitDir);
            
            var road = creep.pos.findInRange(FIND_STRUCTURES,2, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_ROAD
            });
            var constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            
            if(road) {
                if(creep.repair(road[0]) == OK) {
                    creep.say('🛠️');
                }
            }
            if(constructionSite){
                if(creep.build(constructionSite) == ERR_NOT_IN_RANGE){
                    creep.moveTo(constructionSite);
                }
            }
            else{
                creep.moveTo(exit);
            }
            //contribute energy to nearby construction sites in target room
            /*var constructionSite = creep.pos.findInRange(FIND_CONSTRUCTION_SITES,10);
            if(constructionSite[0]) {
                if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite[0]);
                }
            }*/
            //creep.moveTo(exit);
        //end "way back to home room after harvesting energy" 
        }
        
        //has energy, back in home room after harvesting
        else if (creep.room == homeFlag.room) {
            var ctrl = creep.room.controller;
            var cSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if(cSite){
                if(creep.build(cSite) == ERR_NOT_IN_RANGE){
                    creep.moveTo(cSite);
                }
            }
            else if(creep.upgradeController(ctrl) == ERR_NOT_IN_RANGE){
                creep.moveTo(ctrl);
            }
        }
    }
    //creep dropped off resources, back in target room on way to source.
    else if(creep.memory.working == false){
        if (creep.room == homeFlag.room) {
            creep.moveTo(targetFlag);
        }
        else if (creep.room == targetFlag.room) {
            /*var e = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(e){
                Game.spawns.Spawn6.memory.minLDH_W5S17 = 0;
            }*/
            
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }
};

function LDH_W5S19(creep) {
    let targetFlag = Game.flags.fhTarget1;
    let homeFlag = Game.flags.fhHome;
    var edgeLink = Game.getObjectById('6017b81240d4f16a9eb45fa2');
    var src = Game.getObjectById('5bbcac9b9099fc012e635d78');

    if (creep.store.getUsedCapacity() == 0) {
        creep.memory.working = false;
    }
    else if (creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
    else if (creep.ticksToLive <= 100) {
        creep.memory.working = true;
    }

    //has energy, headed back to home room
    if (creep.memory.working == true) {
        if (creep.room == targetFlag.room) {

            //contribute energy to nearby construction sites in target room
            var constructionSite = creep.pos.findInRange(FIND_CONSTRUCTION_SITES, 2);
            if (constructionSite) {
                if (creep.build(constructionSite[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite[0]);
                }
            }

            //repair roads walked on
            var road = creep.pos.findInRange(FIND_STRUCTURES, 2, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_ROAD
            });
            if (road) {
                if (creep.repair(road[0]) == OK) {
                    creep.say('🛠️');
                }
            }
            creep.moveTo(homeFlag);
            //end "way back to home room after harvesting energy" 
        }

        //has energy, back in home room after harvesting
        else if (creep.room == homeFlag.room) {
            if (creep.transfer(edgeLink, RESOURCE_ENERGY) != OK) {
                creep.moveTo(edgeLink);
            }
        }
    }
    //creep dropped off resources, back in target room on way to source.
    else if (creep.memory.working == false) {
        if (creep.room == homeFlag.room) {
            creep.moveTo(targetFlag);
        }
        else if (creep.room == targetFlag.room) {
            //pick up dropped shit from dead creeps
            var dropped = creep.pos.findInRange(FIND_DROPPED_RESOURCES, 10);
            if (dropped) {
                if (creep.pickup(dropped[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(dropped[0]);
                }
            }
            
            /*var e = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(e){
                Game.spawns.Spawn3.memory.minLDH_W5S19 = 0;
            }*/

            //go to harvest source
            //var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (creep.harvest(src) != OK) {
                creep.moveTo(src);
            }
            /*if (source == 'null') {
                var src = Game.getObjectById(creep.room.find(FIND_SOURCES));
                creep.moveTo(src[0]);
            }*/
        }
    }
};

function LDH_W7S19(creep) {
    var target = creep.memory.targetRm;
    var home = creep.memory.homeRm;
    let targetFlag = Game.flags.rm3TargetWest;
    let homeFlag = Game.flags.fhHome;
    var edgeLink = Game.getObjectById('6025ea73375d58a80d36d876');

    //determine which link to dump at by homeroom and target
    if (target == 'W7S19' && home == 'W6S19') {
        var lnk = Game.getObjectById('6025ea73375d58a80d36d876');
    }

    if (creep.store.getUsedCapacity() == 0 && creep.memory.working == true) {
        creep.memory.working = false;
    }
    else if (creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()) {
        creep.memory.working = true;
    }
    else if (creep.ticksToLive <= 100) {
        creep.memory.working = true;
    }
    
    //has energy, headed back to home room
    if (creep.memory.working == true) {

        if (creep.room == targetFlag.room) {
            const exitDir = Game.map.findExit(creep.room, 'W6S19');
            const exit = creep.pos.findClosestByRange(exitDir);
            
            //repair roads walked on
            var road = creep.pos.findInRange(FIND_STRUCTURES,1, {
                filter: (r) => r.hits < r.hitsMax && r.structureType == STRUCTURE_ROAD
            });
            var constructionSite = creep.pos.findInRange(FIND_CONSTRUCTION_SITES,1);
            if(road) {
                if(creep.repair(road[0]) == OK) {
                    creep.say('🛠️');
                }
            }
            
            if(constructionSite) {
                creep.build(constructionSite[0]);
            }

            creep.moveTo(exit);

            
        //end "way back to home room after harvesting energy" 
        }
        
        //has energy, back in home room after harvesting
        else if (creep.room == homeFlag.room) {
            if(creep.transfer(edgeLink, RESOURCE_ENERGY) != OK) {
                creep.moveTo(edgeLink);
            }
        }
    }
    //creep dropped off resources, back in target room on way to source.
    else if(creep.memory.working == false){
        if (creep.room == homeFlag.room) {
            creep.moveTo(targetFlag);
        }
        /*else if(creep.room != targetFlag.room){
            creep.moveTo(homeFlag);
        }*/
        
        if (creep.room == targetFlag.room) {
            /*var e = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(e){
                Game.spawns.Spawn3.memory.minLDH_W7S19 = 0;
            }*/
            
            var source = creep.room.find(FIND_SOURCES);
            creep.memory.srcId = source[0].id;
            //console.log(creep.memory.srcId);
            var source = Game.getObjectById(creep.memory.srcId);
            //console.log(source);

            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
                return false;
            }
            
            //pick up dropped shit from dead creeps
            /*var dropped = creep.pos.findInRange(FIND_DROPPED_RESOURCES,10);
            if(dropped) {
                if(creep.pickup(dropped[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(dropped[0]);
                }
            }*/
        }
    }
}

module.exports = roleLDH;