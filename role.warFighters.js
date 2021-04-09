var labs = require('mod.labs');

var roleWarFighters = {
    run: function(creep, spawn) {
        var spawn = creep.memory.spawn;
        var spec = creep.memory.spec;
        
        if (spec == 'warrior') {
            frogmen(creep, spawn);
        }
        else if(spec == 'medic'){
            medics(creep, spawn);
        }
        else if(spec == 'destroyer'){
            destroyers(creep, spawn);
        }
        else if (spec == 'sniper') {
            snipers(creep, spawn);
        }
        else if(spec == 'squad_infantry'){
            squadInfantry(creep, spawn);
        }
        else if(spec == 'squad_medic'){
            squadMedic(creep, spawn);
        }
        else if(spec == 'infantry'){
            infantry(creep, spawn);
        }
    }
};

function infantry(creep, spawn) {
    var flag = Game.flags.infantryFlag;
    var working = creep.memory.working;
    if(creep.room == flag.room){
        creep.memory.working = true;
    }


    if(working){
        if(creep.room == flag.room){
            var enemiesInRoom = creep.room.find(FIND_HOSTILE_CREEPS);
            var enemy = enemiesInRoom[0];
            var closestEnemy = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            var enemySpawns = creep.room.find(FIND_HOSTILE_SPAWNS);
            var nearbyEnemy = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
            var enemyEquip = creep.pos.findInRange(FIND_HOSTILE_STRUCTURES, 50);

            if(enemiesInRoom.length > 0){
                if(creep.attack(closestEnemy)!=OK){
                    creep.moveTo(closestEnemy);
                }
            }
            else{
                creep.travelTo(flag);
            }
        }
        else{
            creep.travelTo(flag);
        }
    }
    else{
        var enemiesInRoom = creep.room.find(FIND_HOSTILE_CREEPS);
        var closestEnemy = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(enemiesInRoom.length > 0){
            if(creep.attack(closestEnemy)!=OK){
                creep.moveTo(closestEnemy);
            }
        }
        creep.travelTo(flag);
    }
};

function frogmen(creep, spawn) {
    var flag = Game.flags.warriorFlag;
    var working = creep.memory.working;
    if(creep.room == flag.room){
        creep.memory.working = true;
    }


    if(working){
        if(creep.room == flag.room){
            var enemiesInRoom = creep.room.find(FIND_HOSTILE_CREEPS);
            var enemy = enemiesInRoom[0];
            var closestEnemy = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            var enemySpawns = creep.room.find(FIND_HOSTILE_SPAWNS);
            var nearbyEnemy = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
            var enemyEquip = creep.pos.findInRange(FIND_HOSTILE_STRUCTURES, 50);
            var pb = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (pb) => pb.structureType == STRUCTURE_POWER_BANK
            });
            var attackPowerBank = creep.memory.attackpb;

            if(attackPowerBank){
                if(pb){
                    console.log(pb);
                    if(creep.attack(pb)!=OK){
                        creep.attack(pb);
                        creep.moveTo(pb);

                        return false;
                    }
                }
            }

            if(enemiesInRoom.length > 0){
                if(creep.attack(closestEnemy)!=OK){
                    creep.moveTo(closestEnemy);
                }
            }
            else{
                creep.travelTo(flag);
            } 
        }
        else{
            creep.travelTo(flag);
        }
    }
    else{
        var enemiesInRoom = creep.room.find(FIND_HOSTILE_CREEPS);
        var closestEnemy = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(enemiesInRoom.length > 0){
            if(creep.attack(closestEnemy)!=OK){
                creep.moveTo(closestEnemy);
            }
        }
        creep.travelTo(flag);
    }
};

function destroyers(creep, spawn){
    var flag = Game.flags.destroyerFlag;
    var working = creep.memory.working;
    if(creep.room == flag.room){
        creep.memory.working = true;
    }


    if(working){
        if(creep.room == flag.room){
            var phase = creep.memory.phase;
            var enemySpawns = creep.pos.findClosestByRange(FIND_HOSTILE_SPAWNS);
            var enemyEquip = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
            var emptyEnemyTowers = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TOWER) && t.store[RESOURCE_ENERGY] == 0
            });
            var enemyTowers = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                filter: (t) => (t.structureType == STRUCTURE_TOWER)
            });
            var weakWalls = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_WALL || s.structureType == STRUCTURE_RAMPART) && s.hits < s.hitsMax 
            });
            var closestWall = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_WALL || s.structureType == STRUCTURE_RAMPART)
            });

            if(phase == 'breakin' || phase == 'breakthrough' || phase == '1' || phase == 'walls'){
                if(weakWalls){
                    if(creep.dismantle(weakWalls)!=OK){
                        creep.moveTo(weakWalls);
                    }
                }
                else if(closestWall){
                    if(creep.dismantle(closestWall)!=OK){
                        creep.moveTo(closestWall);
                    }
                }

            }
            else if(phase == 'destroy' || phase == '2' || phase == 'breakdown'){
                if(creep.dismantle(enemyEquip)!=OK){
                    creep.moveTo(enemyEquip);
                }
            }
            else if(phase == 'towers'){
                if(emptyEnemyTowers){
                    if(creep.dismantle(emptyEnemyTowers)!=OK){
                        creep.moveTo(emptyEnemyTowers);
                    }
                }
                else if(enemyTowers){
                    if(creep.dismantle(enemyTowers)!=OK){
                        creep.moveTo(enemyTowers);
                    }
                }
            }
            else if(phase == 'spawns'){
                if(creep.dismantle(enemySpawns)!=OK){
                    creep.moveTo(enemySpawns);
                }
            }
            else{
                creep.travelTo(flag);
            }
        }
        else{
            creep.travelTo(flag);
        }
    }
    else{
        creep.travelTo(flag);
    }

};

function medics(creep, spawn) {
    var flag = Game.flags.medicFlag;
    var working = creep.memory.working;
    if(creep.room == flag.room){
        creep.memory.working = true;
    }


    if(working){
        if(creep.room == flag.room){
            var wounded = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter: (c) => (c.hits < c.hitsMax)
            });
            var squadLeader = creep.pos.findClosestByRange(FIND_MY_CREEPS);
            var X = squadLeader.pos.x;
            var Y = squadLeader.pos.y;
            var friendlies = creep.room.find(FIND_MY_CREEPS);
            var friendly = friendlies[0];

            var enemySpawns = creep.room.find(FIND_HOSTILE_SPAWNS);
            var nearbyEnemy = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
            var enemyEquip = creep.pos.findInRange(FIND_HOSTILE_STRUCTURES, 50);

            if(wounded){
                if(creep.heal(wounded)!=OK){
                    creep.moveTo(wounded);
                    creep.heal(wounded);

                    
                }/*
                if(creep.heal(wounded[1])!=OK){
                    creep.heal(wounded[1]);
                    creep.moveTo(wounded[1]);
                }*/
            }
/*
            console.log(JSON.stringify(creep.body['type']));

            for(friendly in friendlies){
                //console.log(friendly);
                var bod = friendly.body;
                //console.log(JSON.stringify(bod["type"]));
            }

            //console.log(leaderPos);
            console.log(X);
            console.log(Y);
            if(squadLeader){
                console.log(creep.pos.inRangeTo(X, Y, 1));
                if(wounded){
                    if(creep.heal(wounded)!=OK){
                        creep.moveTo(wounded);
                        return false;
                    }
                }
            } */

        }
        else{
            creep.travelTo(flag);
        }
    }
    else{
        creep.travelTo(flag);
    }
    creep.travelTo(flag);
};


function checkBody(creep){

}

module.exports = roleWarFighters;