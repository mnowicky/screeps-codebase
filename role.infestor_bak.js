//semi-intelligent role to reserve rooms- try to make
// it work based on room visibility and which room
// needs it's reservation renewed

var roleInfestor = {
    run: function (creep) {
        var spawn = creep.memory.spawn;

        if (creep.memory.target == 'set_target') {
            if (spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8') {
                var targets = ['W6S19', 'W7S19', 'W5S19'];
                var numR1Infestors = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && c.memory.home == 'W6S18');

                if (numR1Infestors == 0) {
                    var target = targets[0];
                    creep.memory.target = target;
                }
                else if (numR1Infestors == 1) {
                    var target = targets[1];
                    creep.memory.target = target;
                }
                else if (numR1Infestors == 2) {
                    var target = targets[2];
                    creep.memory.target = target;
                }
            }
            else if(spawn == 'Spawn2' || spawn == 'Spawn5'){
                var target = 'W4S18';
                creep.memory.target = target;
            }
            else if(spawn == 'Spawn6'){
                var target = 'W5S17';
                creep.memory.target = target;
            }
            else if(spawn == 'Spawn7'){
                var targets = ['W7S16', 'W7S18'];
                var numR5Infestors = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && c.memory.home == 'W7S17');
                if(numR5Infestors == 0){
                    var target = targets[0];
                    creep.memory.target = target;
                }
                else if(numR5Infestors == 1){
                    var target = targets[1];
                    creep.memory.target = target;
                }
            }
            else if(spawn == 'Spawn3'){
                var targets = ['W1S16', 'W1S17', 'W1S19', 'W2S19'];
                var numR3Infestors = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && c.memory.home == 'W1S18');
                if(numR3Infestors == 0){
                    var target = targets[0];
                    creep.memory.target = target;
                }
                else if(numR3Infestors == 1){
                    var target = targets[1];
                    creep.memory.target = target;
                }
                else if(numR3Infestors == 2){
                    var target = targets[2];
                    creep.memory.target = target;
                }
                else if(numR3Infestors == 3){
                    var target = targets[3];
                    creep.memory.target = target;
                }
            }
        }


        if(creep.room.name == creep.memory.target){
            creep.memory.working = true;
        }
        else if(creep.room.name != creep.memory.target){
            creep.memory.working = false;
        }

        if(creep.memory.working == false);
            if(spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8'){
                var targets = ['W6S19', 'W7S19', 'W5S19'];
                for(let target in targets){
                    if(Game.rooms.target.visibility){
                        if(Game.rooms.target.controller.reservationTime < 1000){
                            creep.memory.target = target;
                        }
                    }
                }
            }

        if (creep.memory.working == true) {
            if (creep.room == targetFlag.room) {
                //console.log(creep.attackController(creep.room.controller));
                if (creep.claimController(creep.room.controller) != OK) {
                    if (creep.reserveController(creep.room.controller) != OK) {
                        if(creep.attackController(creep.room.controller) != OK) {
                            creep.moveTo(creep.room.controller);
                        }
                    }
                }
            } else {
                creep.moveTo(targetFlag);
            }
        } else {
            creep.moveTo(targetFlag);
        }
    }
};
module.exports = roleInfestor;