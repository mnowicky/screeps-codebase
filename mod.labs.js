function rm1Labs() {
    var lab1 = Game.getObjectById('601eb0b5d512ce63997d1bff');
    var lab2 = Game.getObjectById('601df3919ef9200eb20c9b02');
    var lab3 = Game.getObjectById('601f21fca8ed137958c1383e');
    var lab4 = Game.getObjectById('601e3afe1c4cba7d1653e1ea');
    var lab5 = Game.getObjectById('6064da0d3cc125c01ade0c83');
    var lab6 = Game.getObjectById('601dbf337ac24863f2d1bcf1');
    var lab7 = Game.getObjectById('6052eb2236d8b38390530c3a');
    var lab8 = Game.getObjectById('6052e7cb37ff39665f5de0f8');
    var lab9 = Game.getObjectById('6052dc7926a7a1e0c45cb9bf');
    var lab10 = Game.getObjectById('6052dff1d624367faa3fae8d');

    var labs = [lab1, lab2, lab3, lab4, lab5, lab6, lab8, lab9, lab10];

    //console.log(labs[1]);

    for (lab in labs){
        if(lab.cooldown == 0){
            lab.runReaction(labs[1], labs[4]);
        }
    }


    lab1.runReaction(lab2, lab5);
    //lab3.runReaction(lab2, lab5);
    lab4.runReaction(lab2, lab5);
    lab6.runReaction(lab2, lab5);
    //lab7.runReaction(lab2, lab5);
    lab8.runReaction(lab2, lab5);
    lab9.runReaction(lab2, lab5);
    lab10.runReaction(lab2, lab5);
};

function rm2Labs() {
    var lab1 = Game.getObjectById('605a50fe1e82523cb10c4100');
    var lab2 = Game.getObjectById('605a3b0a680e4a167529d797');
    var lab3 = Game.getObjectById('605a22c9bad886d27aa05648');
    var lab4 = Game.getObjectById('60598842780122a433181b9c');
    var lab5 = Game.getObjectById('605a0a9ee96436b9d2836c65');
    
    lab1.runReaction(lab2, lab3);
    lab4.runReaction(lab2, lab3);
};

function rm3Labs(){
    var lab1 = Game.getObjectById('60477a22d2b08636681b38f9');
    var lab2 = Game.getObjectById('6046867cf66982f6aee5ca8a');
    var lab3 = Game.getObjectById('60459336219bf52dd4115028');
    var lab4 = Game.getObjectById('60472ae5d8aa27a4ddd4cc8d');
    var lab5 = Game.getObjectById('6046d93c32a1d8332b0ffeab');
    var lab6 = Game.getObjectById('60452e46ca18602a20770d70');
    
    lab3.runReaction(lab1, lab2);
    lab6.runReaction(lab4, lab5);
};

function rm4Labs(){
    var lab1 = Game.getObjectById('603ce34c07f8ab6e5ff0a8f0');
    var lab2 = Game.getObjectById('603d1503d01f4405cb06e4d9');
    var lab3 = Game.getObjectById('603cb00232a1d84db00c02f5');
    
    lab3.runReaction(lab1, lab2);
};

function rm5Labs(){
    var lab1 = Game.getObjectById('6050a8b4292b14af4f582c7d');
    var lab2 = Game.getObjectById('605095ea8307608678381965');
    var lab3 = Game.getObjectById('605097b537ff39534a5cfffe');

    lab3.runReaction(lab1, lab2);
};

function boost_UHO2(creep){
    var lab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
        filter: (la) => (la.structureType == STRUCTURE_LAB) && la.store[RESOURCE_UTRIUM_ALKALIDE] > 0
    });
    
    if(lab){
        if(lab.boostCreep(creep) != OK){
            creep.moveTo(lab);
            return false;
        }
        else if(lab.boostCreep(creep) == OK){
            creep.memory.getBoosted = false;
            creep.memory.isBoosted = true;
        }
    }
};

function boost_XUHO2(creep){
    var lab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
        filter: (la) => (la.structureType == STRUCTURE_LAB) && la.store[RESOURCE_CATALYZED_UTRIUM_ALKALIDE] >= 300
    });
    
    if(lab){
        if(lab.boostCreep(creep) != OK){
            //console.log('XUHO2 boost attempt: ' + lab.boostCreep(creep));
            creep.moveTo(lab);
            return false;
        }
        else if(lab.boostCreep(creep) == OK){
            creep.memory.getBoosted = false;
            creep.memory.isBoosted = true;
        }
    }
    else{
        creep.memory.getBoosted = false;
        Game.spawns.Spawn4.memory.minMiners = 0;
        Game.spawns.Spawn1.memory.minMiners = 0;
        Game.spawns.Spawn2.memory.minMiners = 0;
        Game.spawns.Spawn5.memory.minMiners = 0;
    }
}

function boost_XKHO2(creep){
    var spawn = creep.memory.spawn;
    var lab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
        filter: (xk) => (xk.structureType == STRUCTURE_LAB) && xk.store[RESOURCE_CATALYZED_KEANIUM_ALKALIDE] > 0
    });
    console.log(creep);
    if(lab){
        if(lab.boostCreep(creep) != OK){
            creep.moveTo(lab);
            return false;
        }
        else if(lab.boostCreep(creep) == OK){
            creep.memory.getBoosted = false;
        }
    }
};

function boost_XLHO2(creep){
    var spawn = creep.memory.spawn;
    var lab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
        filter: (xl) => (xl.structureType == STRUCTURE_LAB) && xl.store[RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE] > 0
    });
    //console.log(lab);
    if(lab){
        if(lab.boostCreep(creep) != OK){
            creep.moveTo(lab);
            return false;
        }
        else if(lab.boostCreep(creep) == OK){
            creep.memory.getBoosted = false;
        }
    }
};

function boost_XGH2O(creep){
    var lab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
        filter: (st) => (st.structureType == STRUCTURE_LAB) && st.store[RESOURCE_CATALYZED_GHODIUM_ACID] > 0
    });
    if(lab){
        if(lab.boostCreep(creep) != OK){
            creep.moveTo(lab);
            return false;
        }
        else if(lab.boostCreep(creep) == OK){
            creep.memory.getBoosted = false;
            creep.memory.isBoosted = true;
        }
    }
};

function boost_LH2O(creep){    
    var lab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
        filter: (la) => (la.structureType == STRUCTURE_LAB) && la.store[RESOURCE_LEMERGIUM_ACID] > 0
    });
    
    if(lab){
        if(lab.boostCreep(creep) != OK){
            creep.moveTo(lab);
            return false;
        }
        else if(lab.boostCreep(creep) == OK){
            creep.memory.getBoosted = false;
            creep.memory.task = '3'
            creep.memory.isBoosted = true;
        }
    }
};

function boost_XLH2O(creep){    
    var lab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
        filter: (la) => (la.structureType == STRUCTURE_LAB) && la.store[RESOURCE_CATALYZED_LEMERGIUM_ACID] > 150
    });
    
    if(lab){
        if(lab.boostCreep(creep) != OK){
            creep.moveTo(lab);
            return false;
        }
        else if(lab.boostCreep(creep) == OK){
            creep.memory.getBoosted = false;
            creep.memory.isBoosted = true;
        }
    }
};



module.exports.rm1 = rm1Labs;
module.exports.rm2 = rm2Labs;
module.exports.rm3 = rm3Labs;
module.exports.rm4 = rm4Labs;
module.exports.rm5 = rm5Labs;
module.exports.boost_XLH2O = boost_XLH2O // 100% build/repair
module.exports.boost_XGH2O = boost_XGH2O; // 100% upgrade
module.exports.boost_LH2O = boost_LH2O; //80% build
module.exports.boost_UHO2 = boost_UHO2; //400% harvest
module.exports.boost_XUHO2 = boost_XUHO2; // 600% harvest
module.exports.boost_XKHO2 = boost_XKHO2; // +300% RA
module.exports.boost_XLHO2 = boost_XLHO2; // +300% heal/rh