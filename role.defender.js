//defends rooms when more than 2 invaders, aka under seige. 
var roleDefender = {
    run: function (creep) {

        var enemiesInRoom = creep.room.find(FIND_HOSTILE_CREEPS);
        var enemy = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        var spawn = creep.memory.spawn;
        if(spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8'){
            var flag = Game.flags.def1;
        }
        else if(spawn == 'Spawn2' || spawn == 'Spawn5' || spawn == 'Spawn11'){
            var flag = Game.flags.def2;
        }
        else if(spawn == 'Spawn3'){
            var flag = Game.flags.def3;
        }
        else if(spawn == 'Spawn6' || spawn == 'Spawn9'){
            var flag = Game.flags.def4;
        }
        else if(spawn == 'Spawn7' || spawn == 'Spawn10'){
            var flag = Game.flags.def5;
        }
        
        if(enemiesInRoom.length > 0){
            if(creep.attack(enemy)!=OK){
                creep.moveTo(enemy);
            }
        }
        else{
            creep.moveTo(flag);
        }
    }
};

module.exports = roleDefender;