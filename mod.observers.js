function rm1Observer() {
    var obs1 = Game.rooms.W6S18.find(FIND_STRUCTURES, {
        filter: (o) => (o.structureType == STRUCTURE_OBSERVER)
    });
    
    //console.log(obs1);
    
    //obs1.observeRoom(W6S20);

};

module.exports.rm1 = rm1Observer;