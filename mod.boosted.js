function rm1Boost() {
    var rm1cap1 = Game.getObjectById('60296b88025e5a16578f3c02');
    var rm1cap2 = Game.getObjectById('602993c0af8f35a8f3c75180');
    var rm1cap3 = Game.getObjectById('60299b1bdc2f33c5ec64c972');
    var rm1cap4 = Game.getObjectById('602997e767aeb46fcc56b786');
    var rm1cap5 = Game.getObjectById('602997e767aeb46fcc56b786');
    
    if(rm1cap1.store.getUsedCapacity() == 2000 &&
        rm1cap2.store.getUsedCapacity() == 2000 && 
        rm1cap3.store.getUsedCapacity() == 2000 &&
        rm1cap4.store.getUsedCapacity() == 2000 &&
        rm1cap5.store.getUsedCapacity() == 2000 ) {
            Game.rooms.W6S18.memory.wartime = true;
            console.log('W6S18 - rm1 boost enabled');
    }
    else if(rm1cap1.store.getUsedCapacity() == 0 &&
            rm1cap2.store.getUsedCapacity() == 0 &&
            rm1cap3.store.getUsedCapacity() == 0 &&
            rm1cap4.store.getUsedCapacity() == 0 &&
            rm1cap5.store.getUsedCapacity() == 0) {
                Game.rooms.W6S18.memory.wartime = false;
                console.log('W6S18 - rm1 boost disabled');
                
    }
};

function rm2Boost() {
    var rm2cap1 = Game.getObjectById('602a7cc02bb0cc24a3795093');
    var rm2cap2 = Game.getObjectById('602fe246b99cbc221746bed1');
    var rm2cap3 = Game.getObjectById('602fefcc569acb735ace6fdd');
    var rm2cap4 = Game.getObjectById('602ff16fd79c9313d02a4d97');
    var rm2cap5 = Game.getObjectById('6035f076025e5a10aa940be3');
    
    if(rm2cap1.store.getUsedCapacity() == rm2cap1.store.getCapacity() &&
        rm2cap2.store.getUsedCapacity() == rm2cap2.store.getCapacity() && 
        rm2cap3.store.getUsedCapacity() == rm2cap3.store.getCapacity() &&
        rm2cap4.store.getUsedCapacity() == rm2cap4.store.getCapacity() &&
        rm2cap5.store.getUsedCapacity() == cap5.store.getCapacity() ) {
            Game.rooms.W5S18.memory.wartime = true;
            console.log('W5S18 - rm2 boost enabled');
    }
    else if(rm2cap1.store.getUsedCapacity() == 0 &&
            rm2cap2.store.getUsedCapacity() == 0 &&
            rm2cap3.store.getUsedCapacity() == 0 &&
            rm2cap4.store.getUsedCapacity() == 0 &&
            rm2cap5.store.getUsedCapacity() == 0) {
                Game.rooms.W5S18.memory.wartime = false;
                console.log('W5S18 - rm2 boost disabled');
    }
};

function rm3Boost() {
    var rm3cap1 = Game.getObjectById('6032eaab219bf5539f09efc1');
    var rm3cap2 = Game.getObjectById('603274d6bf07c53f5a2b1466');
    var rm3cap3 = Game.getObjectById('60313756b99cbcee93474470');
    var rm3cap4 = Game.getObjectById('603168f887917652e5d7455f');
    var rm3cap5 = Game.getObjectById('603141dfd5e64444c869509d');
    
    if(rm3cap1.store.getUsedCapacity() == rm3cap1.store.getCapacity() &&
        rm3cap2.store.getUsedCapacity() == rm3cap2.store.getCapacity() && 
        rm3cap3.store.getUsedCapacity() == rm3cap3.store.getCapacity() &&
        rm3cap4.store.getUsedCapacity() == rm3cap4.store.getCapacity() &&
        rm3cap5.store.getUsedCapacity() == rm3cap5.store.getCapacity() ) {
            Game.rooms.W6S19.memory.wartime = true;
            console.log('W6S19 - rm3 boost enabled');
    }
    else if(rm3cap1.store.getUsedCapacity() == 0 &&
            rm3cap2.store.getUsedCapacity() == 0 &&
            rm3cap3.store.getUsedCapacity() == 0 &&
            rm3cap4.store.getUsedCapacity() == 0 &&
            rm3cap5.store.getUsedCapacity() == 0) {
                Game.rooms.W6S19.memory.wartime = false;
                console.log('W6S19 - rm3 boost disabled');
                
    }
};

function rm4Boost() {
    var rm4cap1 = Game.getObjectById('603621262b8dcd777a421615');
    var rm4cap2 = Game.getObjectById('60363625142fa7ab93bb491f');
    var rm4cap3 = Game.getObjectById('6034896a66bfca83dc1db803');
    var rm4cap4 = Game.getObjectById('6034bc8571e3aa2940252685');
    var rm4cap5 = Game.getObjectById('6034d68e6ec6bf1f1231b58f');
    
    if(rm4cap1.store.getUsedCapacity() == rm4cap1.store.getCapacity() &&
        rm4cap2.store.getUsedCapacity() == rm4cap2.store.getCapacity() && 
        rm4cap3.store.getUsedCapacity() == rm4cap3.store.getCapacity() &&
        rm4cap4.store.getUsedCapacity() == rm4cap4.store.getCapacity() &&
        rm4cap5.store.getUsedCapacity() == rm4cap5.store.getCapacity() ) {
            Game.rooms.W6S17.memory.wartime = true;
            console.log('W6S17 - rm4 boost enabled');
    }
    else if(rm4cap1.store.getUsedCapacity() == 0 &&
            rm4cap2.store.getUsedCapacity() == 0 &&
            rm4cap3.store.getUsedCapacity() == 0 &&
            rm4cap4.store.getUsedCapacity() == 0 &&
            rm4cap5.store.getUsedCapacity() == 0) {
                Game.rooms.W6S17.memory.wartime = false;
                console.log('W6S17 - rm4 boost disabled');
                
    }
};


module.exports.rm1 = rm1Boost;
module.exports.rm2 = rm2Boost;
module.exports.rm3 = rm3Boost;
module.exports.rm4 = rm4Boost;