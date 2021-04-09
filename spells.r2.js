//W5S18 - rm2

function batch_XUH2O(creep){
    var flag = Game.flags.lrFlag2;
    var lab1 = Game.getObjectById('605a50fe1e82523cb10c4100');
    var lab2 = Game.getObjectById('605a3b0a680e4a167529d797');
    var lab3 = Game.getObjectById('605a22c9bad886d27aa05648');
    var lab4 = Game.getObjectById('60598842780122a433181b9c');
    var lab5 = Game.getObjectById('605a0a9ee96436b9d2836c65');
    var term = Game.getObjectById('60581ceb569acb6036de7490');

    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }

    if(creep.memory.working == false){

        if(lab2.store.getUsedCapacity('X') < (lab2.store.getCapacity('X')-550)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'X') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'X') != OK){
                console.log('terminal 2 out of mineral X');
            }
        }
        else if(lab3.store.getUsedCapacity('UH2O') < (lab3.store.getCapacity('UH2O')-550)){
            creep.memory.dest = 'lab3';
            if(creep.withdraw(term, 'UH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'UH2O') != OK){
                console.log('terminal 2 out of mineral UH2O.');
            }
        }
        else if(lab5.store.getUsedCapacity('XLH2O') < (lab5.store.getCapacity('XLH2O')-550)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'XLH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'XLH2O') != OK){
                console.log('terminal 2 out of mineral XLH2O');
            }
        }
        else if(lab5.store.getUsedCapacity('energy') < (lab5.store.getCapacity('energy')-550)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'energy') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'energy') != OK){
                console.log('terminal 2 out of mineral energy');
            }
        }
        else if(lab1.store.getUsedCapacity('XUH2O') > (lab1.store.getCapacity('XUH2O')-550)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab1, 'XUH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab1);
            }
            else if(creep.withdraw(lab1, 'XUH2O') != OK){
                console.log(creep + ': problem withdrawing XUH2O from lab1, room 2.');
            }
        }
        else if(lab4.store.getUsedCapacity('XUH2O') > (lab4.store.getCapacity('XUH2O')-550)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab4, 'XUH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab4);
            }
            else if(creep.withdraw(lab4, 'XUH2O') != OK){
                console.log(creep + ': problem withdrawing XUH2O from lab4, room 2.');
            }
        }
        else{
            creep.travelTo(flag);
        }
    }
    else if(creep.memory.working == true){

        if(creep.memory.dest == 'lab2'){
            if(lab2){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(lab2, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(lab2);
                    }
                }
            }
        }
        else if(creep.memory.dest == 'lab3'){
            if(lab3){
                for(const resourceType in creep.carry) {
                    if(creep.transfer(lab3, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(lab3);
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

function UHO2_UHO2(creep){
    var flag = Game.flags.lrFlag2;
    var lab1 = Game.getObjectById('603cebdcf669825f1de29356');
    var lab2 = Game.getObjectById('603d3847abf74d5dfadcba37');
    var lab3 = Game.getObjectById('603d09f2569acbbb75d3c7ff');
    var lab4 = Game.getObjectById('603ce2e611b779ee689ebe46');
    var lab5 = Game.getObjectById('603d46b7eac17e8749f7faab');
    var lab6 = Game.getObjectById('603d0abd858cd897d254a298');
    var term = Game.getObjectById('6025b1c5f7632d68ee87e0ed');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){

        if(lab1.store.getUsedCapacity('UO') < (lab1.store.getCapacity('UO')-400)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'UO') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'UO') != OK){
                console.log('terminal 2 out of mineral UO');
            }
        }
        else if(lab2.store.getUsedCapacity('OH') < (lab2.store.getCapacity('OH')-400)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'OH') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'OH') != OK){
                //console.log(creep.withdraw(term, 'OH'));
                console.log('terminal 2 out of mineral OH');
            }
        }
        else if(lab4.store.getUsedCapacity('UO') < (lab4.store.getCapacity('UO')-400)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'UO') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'UO') != OK){
                console.log('terminal 2 out of mineral UO');
            }
        }
        else if(lab5.store.getUsedCapacity('OH') < (lab5.store.getCapacity('OH')-400)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'OH') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'OH') != OK){
                console.log('terminal 2 out of mineral OH');
            }
        }
        else if(lab3.store.getUsedCapacity('UHO2') > (lab3.store.getCapacity('UHO2')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab3, 'UHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab3);
            }
            else if(creep.withdraw(lab3, 'UHO2') != OK){
                console.log(creep + ': problem withdrawing UHO2 from lab3, room 2.');
            }
        }
        else if(lab6.store.getUsedCapacity('UHO2') > (lab6.store.getCapacity('UO')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'UHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'UHO2') != OK){
                console.log(creep + ': problem withdrawing UHO2 from lab6, room 2.');
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

function OUOU(creep){
    var flag = Game.flags.lrFlag2;
    var lab1 = Game.getObjectById('603cebdcf669825f1de29356');
    var lab2 = Game.getObjectById('603d3847abf74d5dfadcba37');
    var lab3 = Game.getObjectById('603d09f2569acbbb75d3c7ff');
    var lab4 = Game.getObjectById('603ce2e611b779ee689ebe46');
    var lab5 = Game.getObjectById('603d46b7eac17e8749f7faab');
    var lab6 = Game.getObjectById('603d0abd858cd897d254a298');
    var term = Game.getObjectById('6025b1c5f7632d68ee87e0ed');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){

        if(lab1.store.getUsedCapacity('U') < (lab1.store.getCapacity('U')-400)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'U') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'U') != OK){
                console.log('terminal 2 out of mineral U');
            }
        }
        else if(lab2.store.getUsedCapacity('O') < (lab2.store.getCapacity('O')-400)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'O') != OK){
                console.log(creep.withdraw(term, 'O'));
                console.log('terminal 2 out of mineral O');
            }
        }
        else if(lab4.store.getUsedCapacity('U') < (lab4.store.getCapacity('U')-400)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'U') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'U') != OK){
                console.log('terminal 2 out of mineral U');
            }
        }
        else if(lab5.store.getUsedCapacity('O') < (lab5.store.getCapacity('O')-400)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'O') != OK){
                console.log('terminal 2 out of mineral O');
            }
        }
        else if(lab3.store.getUsedCapacity('UO') > (lab3.store.getCapacity('UO')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab3, 'UO') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab3);
            }
            else if(creep.withdraw(lab3, 'UO') != OK){
                console.log(creep + ': problem withdrawing UO from lab3, room 2.');
            }
        }
        else if(lab6.store.getUsedCapacity('UO') > (lab6.store.getCapacity('UO')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'UO') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'UO') != OK){
                console.log(creep + ': problem withdrawing UO from lab6, room 2.');
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

function KOLO(creep){
    var flag = Game.flags.lrFlag2;
    var lab1 = Game.getObjectById('603cebdcf669825f1de29356');
    var lab2 = Game.getObjectById('603d3847abf74d5dfadcba37');
    var lab3 = Game.getObjectById('603d09f2569acbbb75d3c7ff');
    var lab4 = Game.getObjectById('603ce2e611b779ee689ebe46');
    var lab5 = Game.getObjectById('603d46b7eac17e8749f7faab');
    var lab6 = Game.getObjectById('603d0abd858cd897d254a298');
    var term = Game.getObjectById('6025b1c5f7632d68ee87e0ed');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){

        if(lab1.store.getUsedCapacity('K') < (lab1.store.getCapacity('K')-400)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'K') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'K') != OK){
                console.log('terminal 2 out of mineral K');
            }
        }
        else if(lab2.store.getUsedCapacity('O') < (lab2.store.getCapacity('O')-400)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'O') != OK){
                //console.log(creep.withdraw(term, 'O'));
                console.log('terminal 2 out of mineral O');
            }
        }
        else if(lab4.store.getUsedCapacity('L') < (lab4.store.getCapacity('L')-400)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'L') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'L') != OK){
                console.log('terminal 2 out of mineral L');
            }
        }
        else if(lab5.store.getUsedCapacity('O') < (lab5.store.getCapacity('O')-400)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'O') != OK){
                console.log('terminal 2 out of mineral O');
            }
        }
        else if(lab3.store.getUsedCapacity('KO') > (lab3.store.getCapacity('KO')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab3, 'KO') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab3);
            }
            else if(creep.withdraw(lab3, 'KO') != OK){
                console.log(creep + ': problem withdrawing KO from lab3, room 2.');
            }
        }
        else if(lab6.store.getUsedCapacity('LO') > (lab6.store.getCapacity('LO')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'LO') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'LO') != OK){
                console.log(creep + ': problem withdrawing LO from lab6, room 2.');
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

function cleanup_1_3(creep){
    var flag = Game.flags.lrFlag2;
    var lab1 = Game.getObjectById('603cebdcf669825f1de29356');
    var lab2 = Game.getObjectById('603d3847abf74d5dfadcba37');
    var lab3 = Game.getObjectById('603d09f2569acbbb75d3c7ff');
    var term = Game.getObjectById('6025b1c5f7632d68ee87e0ed');

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

function cleanup_4_6(creep){
    var flag = Game.flags.lrFlag2;
    var lab4 = Game.getObjectById('603ce2e611b779ee689ebe46');
    var lab5 = Game.getObjectById('603d46b7eac17e8749f7faab');
    var lab6 = Game.getObjectById('603d0abd858cd897d254a298');
    var term = Game.getObjectById('6025b1c5f7632d68ee87e0ed');

    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }

    var min4 = lab4.mineralType;
    var min5 = lab5.mineralType;
    var min6 = lab6.mineralType;
    
    if(creep.memory.working == false){
        if(lab4.store.getUsedCapacity(min4) > 0){
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


function cleanup(creep){
    var flag = Game.flags.lrFlag2;
    var lab1 = Game.getObjectById('605a50fe1e82523cb10c4100');
    var lab2 = Game.getObjectById('605a3b0a680e4a167529d797');
    var lab3 = Game.getObjectById('605a22c9bad886d27aa05648');
    var lab4 = Game.getObjectById('60675698c5078bcd7749430b');
    var lab5 = Game.getObjectById('60674b6d2bb561031ab869ec');
    var lab6 = Game.getObjectById('606758e097b43eef5a47508b');
    var lab7 = Game.getObjectById('60598842780122a433181b9c');
    var lab8 = Game.getObjectById('605a0a9ee96436b9d2836c65');
    var lab9 = Game.getObjectById('606755028532e0e65b6b2311');
    var lab10 = Game.getObjectById('6067460a96af2a43897ad24b');
    var term = Game.getObjectById('60581ceb569acb6036de7490');

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
    var min7 = lab7.mineralType;
    var min8 = lab8.mineralType;
    var min9 = lab9.mineralType;
    var min10 = lab10.mineralType;

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
        else if(lab7.store.getUsedCapacity(min7) > 0){
            for(const resourceType in lab7.store) {
                if(creep.withdraw(lab7, resourceType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(lab7);
                }
            }
        }/*
        else if(lab8.store.getUsedCapacity(min8) > 0){
            for(const resourceType in lab8.store) {
                if(creep.withdraw(lab8, resourceType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(lab8);
                }
            }
        }*/
        else if(lab9.store.getUsedCapacity(min9) > 0){
            for(const resourceType in lab9.store) {
                if(creep.withdraw(lab9, resourceType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(lab9);
                }
            }
        }
        else if(lab10.store.getUsedCapacity(min10) > 0){
            for(const resourceType in lab10.store) {
                if(creep.withdraw(lab10, resourceType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(lab10);
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

function ZKUL(creep){
    var flag = Game.flags.lrFlag2;
    var lab1 = Game.getObjectById('603cebdcf669825f1de29356');
    var lab2 = Game.getObjectById('603d3847abf74d5dfadcba37');
    var lab3 = Game.getObjectById('603d09f2569acbbb75d3c7ff');
    var lab4 = Game.getObjectById('603ce2e611b779ee689ebe46');
    var lab5 = Game.getObjectById('603d46b7eac17e8749f7faab');
    var lab6 = Game.getObjectById('603d0abd858cd897d254a298');
    var term = Game.getObjectById('6025b1c5f7632d68ee87e0ed');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() == creep.store.getCapacity()){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){

        if(lab1.store.getUsedCapacity('K') < (lab1.store.getCapacity('K')-400)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'K') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'K') != OK){
                console.log('terminal 2 out of mineral K');
            }
        }
        else if(lab2.store.getUsedCapacity('Z') < (lab2.store.getCapacity('Z')-400)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'Z') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'Z') != OK){
                //console.log(creep.withdraw(term, 'Z'));
                console.log('terminal 2 out of mineral Z');
            }
        }
        else if(lab4.store.getUsedCapacity('L') < (lab4.store.getCapacity('L')-400)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'L') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'L') != OK){
                console.log('terminal 2 out of mineral L');
            }
        }
        else if(lab5.store.getUsedCapacity('U') < (lab5.store.getCapacity('U')-400)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'U') != OK){
                console.log('terminal 2 out of mineral U');
            }
        }
        else if(lab3.store.getUsedCapacity('ZK') > (lab3.store.getCapacity('ZK')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab3, 'ZK') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab3);
            }
            else if(creep.withdraw(lab3, 'ZK') != OK){
                console.log(creep + ': problem withdrawing ZK from lab3, room 2.');
            }
        }
        else if(lab6.store.getUsedCapacity('UL') > (lab6.store.getCapacity('UL')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'UL') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'UL') != OK){
                console.log(creep + ': problem withdrawing UL from lab6, room 2.');
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


function UHUO(creep){
    var flag = Game.flags.lrFlag2;
    var lab1 = Game.getObjectById('603cebdcf669825f1de29356');
    var lab2 = Game.getObjectById('603d3847abf74d5dfadcba37');
    var lab3 = Game.getObjectById('603d09f2569acbbb75d3c7ff');
    var lab4 = Game.getObjectById('603ce2e611b779ee689ebe46');
    var lab5 = Game.getObjectById('603d46b7eac17e8749f7faab');
    var lab6 = Game.getObjectById('603d0abd858cd897d254a298');
    var term = Game.getObjectById('6025b1c5f7632d68ee87e0ed');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() == creep.store.getCapacity()){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){

        if(lab1.store.getUsedCapacity('U') < (lab1.store.getCapacity('U')-500)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'U') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'U') != OK){
                console.log('terminal 2 out of mineral U');
            }
        }
        else if(lab2.store.getUsedCapacity('H') < (lab2.store.getCapacity('H')-500)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'H') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'H') != OK){
                console.log('terminal 2 out of mineral H');
            }
        }
        else if(lab4.store.getUsedCapacity('U') < (lab4.store.getCapacity('U')-500)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'U') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'U') != OK){
                console.log('terminal 2 out of mineral U');
            }
        }
        else if(lab5.store.getUsedCapacity('O') < (lab5.store.getCapacity('O')-500)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'O') != OK){
                console.log('terminal 2 out of mineral O');
            }
        }
        else if(lab3.store.getUsedCapacity('UH') > (lab3.store.getCapacity('UH')-500)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab3, 'UH') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab3);
            }
            else if(creep.withdraw(lab3, 'UH') != OK){
                console.log(creep + ': problem withdrawing UH from lab3, room 2.');
            }
        }
        else if(lab6.store.getUsedCapacity('UO') > (lab6.store.getCapacity('UO')-500)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'UO') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'UO') != OK){
                console.log(creep + ': problem withdrawing UO from lab6, room 2.');
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

module.exports.batch_XUH2O = batch_XUH2O;
module.exports.UHO2_UHO2 = UHO2_UHO2;
module.exports.OUOU = OUOU;
module.exports.KOLO = KOLO;
module.exports.ZKUL = ZKUL;
module.exports.UHUO = UHUO;
module.exports.cleanup = cleanup;
module.exports.cleanup_1_3 = cleanup_1_3;
module.exports.cleanup_4_6 = cleanup_4_6;