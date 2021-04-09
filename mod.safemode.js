function rm2SafeMode() {
    
    var walls = Game.rooms.W5S18.find(FIND_STRUCTURES, {
        filter: (s) => (s.structureType == STRUCTURE_WALL || s.structureType == STRUCTURE_RAMPART) && s.hits < 100
    });
    var t = Game.getObjectById('605821ec0c8afa45c192ab92');
    
    var enemiesInRoom = t.pos.findInRange(FIND_HOSTILE_CREEPS, 40);
    
    //console.log(enemiesInRoom.length);
    //console.log(walls.length);
    
    if(enemiesInRoom.length >= 1 && walls.length >= 1){
        Game.rooms.W5S18.controller.activateSafeMode();
        console.log('Activating safe mode in rm2, under attack.');
    }

};


function rm1SafeMode(){
    var walls = Game.rooms.W6S18.find(FIND_STRUCTURES, {
        filter: (s) => (s.structureType == STRUCTURE_WALL || s.structureType == STRUCTURE_RAMPART) && s.hits < 100
    });
    var t = Game.getObjectById('6052d875d79c931c5a37c3df');
    
    var enemiesInRoom = t.pos.findInRange(FIND_HOSTILE_CREEPS, 40);
    
    if(enemiesInRoom.length >= 1 && walls.length >= 1){
        Game.rooms.W6S18.controller.activateSafeMode();
        console.log('Activating safe mode in rm1, under attack.');
    }
}


module.exports.rm1 = rm1SafeMode;
module.exports.rm2 = rm2SafeMode;