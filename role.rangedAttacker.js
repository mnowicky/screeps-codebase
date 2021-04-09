//works on flag named raFlag1, raFlag2, raFlag3
var roleRangedAttacker = {
    run: function (creep) {
        var site = creep.memory.site;

        if(site == 'site1'){
            raOne(creep)
        }
        else if(site == 'site2'){
            raTwo(creep);
        }
        else if(site == 'site3'){
            raThree(creep);
        }
        else{
            raOne(creep);
        }
    }
};

function raOne(creep) {
    var targetFlag = Game.flags.raFlag;

    if (creep.room == targetFlag.room) {
        creep.memory.working = true;
    }

    if (creep.memory.working == true) {
        if (creep.room == targetFlag.room) {
            //console.log('1');
            var enemySpawns = creep.room.find(FIND_HOSTILE_SPAWNS);
            var nearbyEnemy = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
            var enemiesInRoom = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
            var enemyEquip = creep.pos.findInRange(FIND_HOSTILE_STRUCTURES, 50);

            //console.log(enemiesInRoom.length);
            console.log(creep.room)

            // step 2: take out the rest of the creeps
            if (enemiesInRoom.length > 0) {
                //Game.spawns.Spawn8.memory.minRangedAttackers = 3;
                //Game.spawns.Spawn4.memory.minRangedAttackers = 3;
                var enemies = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
                //var enemies = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

                if (creep.rangedAttack(enemies[0]) != OK) {
                    creep.moveTo(enemies[0]);
                    return false;
                }

                    //enemy = attackNext(enemies);
                    //if(enemies){
                    //if(creep.rangedAttack(enemy) != OK){
                      //  creep.moveTo(enemies[0]);
                    //}
                    //console.log(creep.rangedAttack(enemy));
                    //}
                    //creep.rangedAttack(enemy);


                    /*if (creep.rangedAttack(enemiesInRoom[0]) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(enemiesInRoom[0]);
                        creep.say('🏹');
                    */}
            else if (enemiesInRoom.length == 0) {
                creep.moveTo(targetFlag);
            }
        }
        else {
            creep.travelTo(targetFlag);
        }
    }
    else {
        creep.travelTo(targetFlag);
    }
};

function raTwo(creep) {
    var targetFlag = Game.flags.raFlag2;

    if (creep.room == targetFlag.room) {
        creep.memory.working = true;
    }

    if (creep.memory.working == true) {
        if (creep.room == targetFlag.room) {
            //console.log('1');
            var enemySpawns = creep.room.find(FIND_HOSTILE_SPAWNS);
            var nearbyEnemy = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
            var enemiesInRoom = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
            var enemyEquip = creep.pos.findInRange(FIND_HOSTILE_STRUCTURES, 50);

            //console.log(enemiesInRoom.length);
            console.log(creep.room)

            // step 2: take out the rest of the creeps
            if (enemiesInRoom.length > 2) {
                Game.spawns.Spawn8.memory.minRangedAttackers = 3;
                Game.spawns.Spawn4.memory.minRangedAttackers = 3;
                var enemies = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
                //var enemies = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

                if (creep.rangedAttack(enemies[0]) != OK) {
                    creep.moveTo(enemies[0]);
                    return false;
                }

                    //enemy = attackNext(enemies);
                    //if(enemies){
                    //if(creep.rangedAttack(enemy) != OK){
                      //  creep.moveTo(enemies[0]);
                    //}
                    //console.log(creep.rangedAttack(enemy));
                    //}
                    //creep.rangedAttack(enemy);


                    /*if (creep.rangedAttack(enemiesInRoom[0]) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(enemiesInRoom[0]);
                        creep.say('🏹');
                    */}
            else if (enemiesInRoom.length == 0) {
                creep.moveTo(targetFlag);
            }
        }
        else {
            creep.travelTo(targetFlag);
        }
    }
    else {
        creep.travelTo(targetFlag);
    }
};

function raThree(creep) {
    var targetFlag = Game.flags.raFlag3;

    if (creep.room == targetFlag.room) {
        creep.memory.working = true;
    }

    if (creep.memory.working == true) {
        if (creep.room == targetFlag.room) {
            //console.log('1');
            var enemySpawns = creep.room.find(FIND_HOSTILE_SPAWNS);
            var nearbyEnemy = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
            var enemiesInRoom = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
            var enemyEquip = creep.pos.findInRange(FIND_HOSTILE_STRUCTURES, 50);

            //console.log(enemiesInRoom.length);
            console.log(creep.room)

            // step 2: take out the rest of the creeps
            if (enemiesInRoom.length > 2) {
                Game.spawns.Spawn8.memory.minRangedAttackers = 3;
                Game.spawns.Spawn4.memory.minRangedAttackers = 3;
                var enemies = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
                //var enemies = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

                if (creep.rangedAttack(enemies[0]) != OK) {
                    creep.moveTo(enemies[0]);
                    return false;
                }

                    //enemy = attackNext(enemies);
                    //if(enemies){
                    //if(creep.rangedAttack(enemy) != OK){
                      //  creep.moveTo(enemies[0]);
                    //}
                    //console.log(creep.rangedAttack(enemy));
                    //}
                    //creep.rangedAttack(enemy);


                    /*if (creep.rangedAttack(enemiesInRoom[0]) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(enemiesInRoom[0]);
                        creep.say('🏹');
                    */}
            else if (enemiesInRoom.length == 0) {
                creep.moveTo(targetFlag);
            }
        }
        else {
            creep.travelTo(targetFlag);
        }
    }
    else {
        creep.travelTo(targetFlag);
    }
};

function attackNext(enemies) {
    var count = enemies.length;
    for (var i = 0; i < count; i++) {
        return enemies[Math.floor(Math.random() * enemies.length)];
    }
}
module.exports = roleRangedAttacker;