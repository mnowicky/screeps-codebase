//W7S17 - rm5

function XUH2O(creep){
    var flag = Game.flags.lrFlag5;
    var lab1 = Game.getObjectById('6050a8b4292b14af4f582c7d');
    var lab2 = Game.getObjectById('605095ea8307608678381965');
    var lab3 = Game.getObjectById('605097b537ff39534a5cfffe');
    var term = Game.getObjectById('605091090eb51474cd91a7a2');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    if(creep.memory.working == false){

        if(lab1.store.getUsedCapacity('UH2O') < (lab1.store.getCapacity('UH2O')-500)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'UH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'UH2O') != OK){
                console.log('terminal 5 out of mineral UH2O');
            }
        }
        else if(lab2.store.getUsedCapacity('X') < (lab2.store.getCapacity('X')-500)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'X') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'X') != OK){
                console.log(creep.withdraw(term, 'X'));
                console.log('terminal 5 out of mineral X');
            }
        }
        else if(lab3.store.getUsedCapacity('XUH2O') > (lab3.store.getCapacity('XUH2O')-500)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab3, 'XUH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab3);
            }
            else if(creep.withdraw(lab3, 'XUH2O') != OK){
                console.log(creep + ': problem withdrawing XUHO2 from lab3, room 5.');
            }
        }
        else{
            creep.moveTo(flag);
        }
    }
    else if(creep.memory.working == true){

        if(creep.memory.dest == 'lab1'){
            if(lab1){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(lab1, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(lab1);
                    }
                }
            }
        }
        else if(creep.memory.dest == 'lab2'){
            if(lab2){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(lab2, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(lab2);
                    }
                }
            }
            
        }
        else if(creep.memory.dest = 'term'){
            if(term){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(term, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(term);
                    }
                }
            }
        }
        else{
            creep.travelTo(flag);
        }
    }
};

function cleanup(creep){
    var lab1 = Game.getObjectById('6050a8b4292b14af4f582c7d');
    var lab2 = Game.getObjectById('605095ea8307608678381965');
    var lab3 = Game.getObjectById('605097b537ff39534a5cfffe');
    var term = Game.getObjectById('605091090eb51474cd91a7a2');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    
    var min1 = lab1.mineralType;
    var min2 = lab2.mineralType;
    var min3 = lab3.mineralType;
    if(creep.memory.working == false){
        if(lab1.store.getUsedCapacity(min1) > 0){
            for(const resourceType in lab1.store) {
                if(creep.withdraw(lab1, resourceType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(lab1);
                }
            }
        }
        else if(lab2.store.getUsedCapacity(min2) > 0){
            for(const resourceType in lab2.store) {
                if(creep.withdraw(lab2, resourceType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(lab2);
                }
            }
        }
        else if(lab3.store.getUsedCapacity(min3) > 0){
            for(const resourceType in lab3.store) {
                if(creep.withdraw(lab3, resourceType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(lab3);
                }
            }
        }
    }
    else if(creep.memory.working == true){
        for(const resourceType in creep.carry) {
            if(creep.transfer(term, resourceType) == ERR_NOT_IN_RANGE) {
                creep.travelTo(term);
            }
        }
    }
};


module.exports.XUH2O = XUH2O;
module.exports.cleanup = cleanup;


