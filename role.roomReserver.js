//module that puts a creep into remote mine room to reserve and provide visibility

var roleRoomReserver = {
    run: function (creep) {
        if(creep.memory.target == 'W4S18') {
            var targetFlag = Game.flags.RR_W4S18;
        }
        else if (creep.memory.target == 'W5S19') {
            var targetFlag = Game.flags.RR_W5S19;
        }
        else if (creep.memory.target == 'W7S19') {
            var targetFlag = Game.flags.RR_W7S19;
        }
        else if(creep.memory.target == 'W7S18'){
            var targetFlag = Game.flags.RR_W7S18;
        }
        else if(creep.memory.target == 'W5S17'){
            var targetFlag = Game.flags.RR_W5S17;
        }
        else if(creep.memory.target == 'W7S16'){
            var targetFlag = Game.flags.RR_W7S16;
        }
        
        if(creep.room == targetFlag.room){
            var ctrl = creep.room.controller;
            if(creep.reserveController(ctrl) != OK){
                creep.moveTo(ctrl);
            }
            
        }
        else{
            creep.moveTo(targetFlag);
        }
    }
};


module.exports = roleRoomReserver;