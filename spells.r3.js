//W6S19 - rm3


function UH2O_UHO2(creep){
    var flag = Game.flags.lrFlag3;
    var lab1 = Game.getObjectById('60477a22d2b08636681b38f9');
    var lab2 = Game.getObjectById('6046867cf66982f6aee5ca8a');
    var lab3 = Game.getObjectById('60459336219bf52dd4115028');
    var lab4 = Game.getObjectById('60472ae5d8aa27a4ddd4cc8d');
    var lab5 = Game.getObjectById('6046d93c32a1d8332b0ffeab');
    var lab6 = Game.getObjectById('60452e46ca18602a20770d70');
    var term = Game.getObjectById('6025c20c58c56642aa0c1eab');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){

        if(lab1.store.getUsedCapacity('UO') < (lab1.store.getCapacity('UO')-500)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'UO') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'UO') != OK){
                console.log('terminal 3 out of mineral UO');
            }
        }
        else if(lab2.store.getUsedCapacity('OH') < (lab2.store.getCapacity('OH')-500)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'OH') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'OH') != OK){
                //console.log(creep.withdraw(term, 'X'));
                console.log('terminal 3 out of mineral OH');
            }
        }
        else if(lab4.store.getUsedCapacity('UH') < (lab4.store.getCapacity('UH')-500)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'UH') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'UH') != OK){
                console.log('terminal 3 out of mineral UH');
            }
        }
        else if(lab5.store.getUsedCapacity('OH') < (lab5.store.getCapacity('OH')-500)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'OH') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'OH') != OK){
                console.log('terminal 3 out of mineral OH');
            }
        }
        else if(lab3.store.getUsedCapacity('UHO2') > (lab3.store.getCapacity('UHO2')-500)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab3, 'UHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab3);
            }
            else if(creep.withdraw(lab3, 'UHO2') != OK){
                console.log(creep + ': problem withdrawing UHO2 from lab3, room 3.');
            }
        }
        else if(lab6.store.getUsedCapacity('UH2O') > (lab6.store.getCapacity('UH2O')-500)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'UH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'UH2O') != OK){
                console.log(creep + ': problem withdrawing UH2O from lab6, room 3.');
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
        else if(creep.memory.dest == 'lab4'){
            if(lab4){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(lab4, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(lab4);
                    }
                }
            }
        }
        else if(creep.memory.dest == 'lab5'){
            if(lab5){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(lab5, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(lab5);
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
}

function XKHO2_XLHO2(creep){
    var flag = Game.flags.lrFlag3;
    var lab1 = Game.getObjectById('60477a22d2b08636681b38f9');
    var lab2 = Game.getObjectById('6046867cf66982f6aee5ca8a');
    var lab3 = Game.getObjectById('60459336219bf52dd4115028');
    var lab4 = Game.getObjectById('60472ae5d8aa27a4ddd4cc8d');
    var lab5 = Game.getObjectById('6046d93c32a1d8332b0ffeab');
    var lab6 = Game.getObjectById('60452e46ca18602a20770d70');
    var term = Game.getObjectById('6025c20c58c56642aa0c1eab');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){

        if(lab1.store.getUsedCapacity('KHO2') < (lab1.store.getCapacity('KHO2')-400)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'KHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'KHO2') != OK){
                console.log('terminal 3 out of mineral KHO2');
            }
        }
        else if(lab2.store.getUsedCapacity('X') < (lab2.store.getCapacity('X')-400)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'X') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'X') != OK){
                //console.log(creep.withdraw(term, 'X'));
                console.log('terminal 3 out of mineral X');
            }
        }
        else if(lab4.store.getUsedCapacity('LHO2') < (lab4.store.getCapacity('LHO2')-400)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'LHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'LHO2') != OK){
                console.log('terminal 3 out of mineral LHO2');
            }
        }
        else if(lab5.store.getUsedCapacity('X') < (lab5.store.getCapacity('X')-400)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'X') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'X') != OK){
                console.log('terminal 3 out of mineral X');
            }
        }
        else if(lab3.store.getUsedCapacity('XKHO2') > (lab3.store.getCapacity('XKHO2')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab3, 'XKHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab3);
            }
            else if(creep.withdraw(lab3, 'XKHO2') != OK){
                console.log(creep + ': problem withdrawing XKHO2 from lab3, room 3.');
            }
        }
        else if(lab6.store.getUsedCapacity('XLHO2') > (lab6.store.getCapacity('XLHO2')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'XLHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'XLHO2') != OK){
                console.log(creep + ': problem withdrawing XLHO2 from lab6, room 3.');
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
        else if(creep.memory.dest == 'lab4'){
            if(lab4){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(lab4, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(lab4);
                    }
                }
            }
        }
        else if(creep.memory.dest == 'lab5'){
            if(lab5){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(lab5, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(lab5);
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

function KHO2_LHO2(creep){
    var flag = Game.flags.lrFlag3;
    var lab1 = Game.getObjectById('60477a22d2b08636681b38f9');
    var lab2 = Game.getObjectById('6046867cf66982f6aee5ca8a');
    var lab3 = Game.getObjectById('60459336219bf52dd4115028');
    var lab4 = Game.getObjectById('60472ae5d8aa27a4ddd4cc8d');
    var lab5 = Game.getObjectById('6046d93c32a1d8332b0ffeab');
    var lab6 = Game.getObjectById('60452e46ca18602a20770d70');
    var term = Game.getObjectById('6025c20c58c56642aa0c1eab');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){

        if(lab1.store.getUsedCapacity('KO') < (lab1.store.getCapacity('KO')-400)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'KO') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'KO') != OK){
                //console.log('terminal 3 out of mineral KO');
            }
        }
        else if(lab2.store.getUsedCapacity('OH') < (lab2.store.getCapacity('OH')-400)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'OH') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'OH') != OK){
                console.log(creep.withdraw(term, 'OH'));
                console.log('terminal 3 out of mineral OH');
            }
        }
        else if(lab4.store.getUsedCapacity('LO') < (lab4.store.getCapacity('LO')-400)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'LO') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'LO') != OK){
                console.log('terminal 3 out of mineral LO');
            }
        }
        else if(lab5.store.getUsedCapacity('OH') < (lab5.store.getCapacity('OH')-400)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'OH') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'OH') != OK){
                console.log('terminal 3 out of mineral OH');
            }
        }
        else if(lab3.store.getUsedCapacity('KHO2') > (lab3.store.getCapacity('KHO2')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab3, 'KHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab3);
            }
            else if(creep.withdraw(lab3, 'KHO2') != OK){
                console.log(creep + ': problem withdrawing KHO2 from lab3, room 3.');
            }
        }
        else if(lab6.store.getUsedCapacity('LHO2') > (lab6.store.getCapacity('LHO2')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'LHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'LHO2') != OK){
                console.log(creep + ': problem withdrawing LHO2 from lab6, room 3.');
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
        else if(creep.memory.dest == 'lab4'){
            if(lab4){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(lab4, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(lab4);
                    }
                }
            }
        }
        else if(creep.memory.dest == 'lab5'){
            if(lab5){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(lab5, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(lab5);
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

function cleanUp(creep){
    var flag = Game.flags.lrFlag3;
    var lab1 = Game.getObjectById('60477a22d2b08636681b38f9');
    var lab2 = Game.getObjectById('6046867cf66982f6aee5ca8a');
    var lab3 = Game.getObjectById('60459336219bf52dd4115028');
    var lab4 = Game.getObjectById('60472ae5d8aa27a4ddd4cc8d');
    var lab5 = Game.getObjectById('6046d93c32a1d8332b0ffeab');
    var lab6 = Game.getObjectById('60452e46ca18602a20770d70');
    var term = Game.getObjectById('6025c20c58c56642aa0c1eab');

    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    
    var min1 = lab1.mineralType;
    var min2 = lab2.mineralType;
    var min3 = lab3.mineralType;
    var min4 = lab4.mineralType;
    var min5 = lab5.mineralType;
    var min6 = lab6.mineralType;
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
        else if(lab4.store.getUsedCapacity(min4) > 0){
            for(const resourceType in lab4.store) {
                if(creep.withdraw(lab4, resourceType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(lab4);
                }
            }
        }
        else if(lab5.store.getUsedCapacity(min5) > 0){
            for(const resourceType in lab5.store) {
                if(creep.withdraw(lab5, resourceType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(lab5);
                }
            }
        }
        else if(lab6.store.getUsedCapacity(min6) > 0){
            for(const resourceType in lab6.store) {
                if(creep.withdraw(lab6, resourceType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(lab6);
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

function cleanUp_1_3(creep){
    console.log('placehold');
}

function cleanUp_4_6(creep){
    console.log('placehold');
}

module.exports.UH2O_UHO2 = UH2O_UHO2;
module.exports.XKHO2_XLHO2 = XKHO2_XLHO2;
module.exports.KHO2_LHO2 = KHO2_LHO2;
module.exports.cleanup = cleanUp;
module.exports.cleanup_1_3 = cleanUp_1_3;
module.exports.cleanup_4_6 = cleanUp_4_6;

































