//works on flag named invFlag
//purpose: move to target room, take out remaining creeps, 
// take out remaining spawn, move to controller at attack it. 
// once neutral, claim it. 

var roleInvader = {
    run: function (creep) {
        if (creep.memory.target == 'target1') {
            var targetFlag = Game.flags.invFlag1;
        }
        else if (creep.memory.target == 'target2') {
            var targetFlag = Game.flags.invFlag2;
        }
        else if (creep.memory.target == 'target3') {
            var targetFlag = Game.flags.invFlag3;
        }

        if (creep.room == targetFlag.room) {
            creep.memory.working = true;
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
module.exports = roleInvader;