function rm1Pspawn() {
    var pspawn = Game.getObjectById('6052dccd0eb514b3de9263c3');
    
    pspawn.processPower();
    
};

function rm2Pspawn(){
    var pspawn = Game.getObjectById('60676debd5ec72d6b18271a8');

    pspawn.processPower();
}

module.exports.rm1 = rm1Pspawn;
module.exports.rm2 = rm2Pspawn;