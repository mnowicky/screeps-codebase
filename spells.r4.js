//W6S17 - rm4

function XUHO2(creep){
    var flag = Game.flags.lrFlag4;
    var lab1 = Game.getObjectById('603ce34c07f8ab6e5ff0a8f0');
    var lab2 = Game.getObjectById('603d1503d01f4405cb06e4d9');
    var lab3 = Game.getObjectById('603cb00232a1d84db00c02f5');
    var term = Game.getObjectById('603c788440897c51bb6c6b55');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    if(creep.memory.working == false){

        if(lab1.store.getUsedCapacity('UHO2') < (lab1.store.getCapacity('UHO2')-500)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'UHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'UHO2') != OK){
                console.log('terminal 4 out of mineral UHO2');
            }
        }
        else if(lab2.store.getUsedCapacity('X') < (lab2.store.getCapacity('X')-500)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'X') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'X') != OK){
                console.log(creep.withdraw(term, 'X'));
                console.log('terminal 4 out of mineral X');
            }
        }
        else if(lab3.store.getUsedCapacity('XUHO2') > (lab3.store.getCapacity('XUHO2')-500)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab3, 'XUHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab3);
            }
            else if(creep.withdraw(lab3, 'XUHO2') != OK){
                console.log(creep + ': problem withdrawing XUHO2 from lab3, room 4.');
            }
        }
        else{
            creep.travelTo(flag);
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
    var flag = Game.flags.lrFlag4;
    var lab1 = Game.getObjectById('603ce34c07f8ab6e5ff0a8f0');
    var lab2 = Game.getObjectById('603d1503d01f4405cb06e4d9');
    var lab3 = Game.getObjectById('603cb00232a1d84db00c02f5');
    var term = Game.getObjectById('603c788440897c51bb6c6b55');
    
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


module.exports.XUHO2 = XUHO2;
module.exports.cleanup = cleanup;


