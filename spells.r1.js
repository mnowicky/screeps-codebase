//W6S18 - rm1

function batch_LH2O(creep){
    var lab1 = Game.getObjectById('601eb0b5d512ce63997d1bff');
    var lab2 = Game.getObjectById('601df3919ef9200eb20c9b02');
    var lab3 = Game.getObjectById('601f21fca8ed137958c1383e');
    var lab4 = Game.getObjectById('601e3afe1c4cba7d1653e1ea');
    var lab5 = Game.getObjectById('6064da0d3cc125c01ade0c83');
    var lab7 = Game.getObjectById('6052eb2236d8b38390530c3a');
    var term = Game.getObjectById('6004249e42c7e22d4162ec53');
    var flag = Game.flags.lrFlag1;

    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }

    if(creep.memory.working == false){

        if(lab2.store.getUsedCapacity('LH') < (lab2.store.getCapacity('LH')-500)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'LH') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'LH') != OK){
                console.log('terminal 1 out of mineral LH');
            }
        }
        else if(lab5.store.getUsedCapacity('OH') < (lab5.store.getCapacity('OH')-500)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'OH') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'OH') != OK){
                console.log(creep.withdraw(term, 'OH'));
                console.log('terminal 1 out of mineral OH');
            }
        }
        else if(lab7.store.getUsedCapacity('XUHO2') < (lab7.store.getCapacity('XUHO2')-500)){
            creep.memory.dest = 'lab7';
            if(creep.withdraw(term, 'XUHO2') == ERR_NOT_IN_RANGE){
                creep.moveTo(term);
            }
        }
        else if(lab7.store.getUsedCapacity('energy') < (lab7.store.getCapacity('energy')-500)){
            creep.memory.dest = 'lab7';
            if(creep.withdraw(term, 'energy') == ERR_NOT_IN_RANGE){
                creep.moveTo(term);
            }
        }
        else{
            creep.travelTo(flag);
        }
    }

    else if (creep.memory.working == true) {
        if (creep.memory.dest == 'lab2') {
            if (lab2) {
                for (const resourceType in creep.carry) {
                    if (creep.transfer(lab2, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(lab2);
                    }
                }
            }
        }
        else if (creep.memory.dest == 'lab5') {
            if (lab5) {
                for (const resourceType in creep.carry) {
                    if (creep.transfer(lab5, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(lab5);
                    }
                }
            }

        }
        else if (creep.memory.dest == 'lab7'){
            if(lab7){
                for(const resourceType in creep.carry){
                    if(creep.transfer(lab7, resourceType) == ERR_NOT_IN_RANGE){
                        creep.moveTo(lab7)
                    }
                }
            }
        }
        else {
            creep.travelTo(flag);
        }
    }
}


function XGH2O(creep){
    var flag = Game.flags.lrFlag1;
    var lab1 = Game.getObjectById('601eb0b5d512ce63997d1bff');
    var lab4 = Game.getObjectById('601e3afe1c4cba7d1653e1ea');
    var lab5 = Game.getObjectById('601d6275c2002d6e513ab9ae');
    var lab6 = Game.getObjectById('601dbf337ac24863f2d1bcf1');
    var term = Game.getObjectById('6004249e42c7e22d4162ec53');
    var strg = Game.getObjectById('6005bbe57038ee851c7e9faf');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){


        if(lab4.store.getUsedCapacity('GH2O') < (lab4.store.getCapacity('GH2O')-500)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'GH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'GH2O') != OK){
                //console.log(creep.withdraw(term, 'GH2O'));
                console.log('terminal 1 out of mineral GH2O');
            }
        }
        else if(lab5.store.getUsedCapacity('X') < (lab5.store.getCapacity('X')-500)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'X') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'X') != OK){
                console.log(creep.withdraw(term, 'X'));
                console.log('terminal 1 out of mineral X');
            }
        }
        else if(lab6.store.getUsedCapacity('XGH2O') > (lab6.store.getCapacity('XGH2O')-500)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'XGH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'XGH2O') != OK){
                console.log(creep + ': problem withdrawing XGH2O from lab6, room 1.');
            }
        }
        /*else if(lab1.store.getUsedCapacity('XGH2O') < (lab1.store.getCapacity('XGH2O') - 400)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'XGH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'XGH2O') != OK){
                console.log('Cannot withdraw XGH2O from term 1 to supply boosting lab #1 rm1.');
            }
        }*/
        else{
            creep.travelTo(flag);
        }
    }
    else if(creep.memory.working == true){
        if(creep.memory.dest == 'lab1'){
            if(lab1){
                for(const resourceType in creep.carry){
                    if(creep.transfer(lab1, resourceType) == ERR_NOT_IN_RANGE){
                        creep.travelTo(lab1);
                    }
                }
            }
        }
        if(creep.memory.dest == 'lab4'){
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

function GH2O(creep){
    var flag = Game.flags.lrFlag1;
    var lab4 = Game.getObjectById('601e3afe1c4cba7d1653e1ea');
    var lab5 = Game.getObjectById('601d6275c2002d6e513ab9ae');
    var lab6 = Game.getObjectById('601dbf337ac24863f2d1bcf1');
    var term = Game.getObjectById('6004249e42c7e22d4162ec53');
    var strg = Game.getObjectById('6005bbe57038ee851c7e9faf');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){


        if(lab4.store.getUsedCapacity('GH') < (lab4.store.getCapacity('GH')-400)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'GH') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'GH') != OK){
                console.log(creep.withdraw(term, 'GH'));
                console.log('terminal 1 out of mineral GH');
            }
        }
        else if(lab5.store.getUsedCapacity('OH') < (lab5.store.getCapacity('OH')-400)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'OH') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'OH') != OK){
                console.log(creep.withdraw(term, 'OH'));
                console.log('terminal 1 out of mineral OH');
            }
        }
        else if(lab6.store.getUsedCapacity('GH2O') > (lab6.store.getCapacity('GH2O')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'GH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'GH2O') != OK){
                console.log(creep + ': problem withdrawing OH from lab6, room 1.');
            }
        }
        else{
            creep.travelTo(flag);
        }
    }
    else if(creep.memory.working == true){
        if(creep.memory.dest == 'lab4'){
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

function GO(creep){
    var flag = Game.flags.lrFlag1;
    var lab4 = Game.getObjectById('601e3afe1c4cba7d1653e1ea');
    var lab5 = Game.getObjectById('601d6275c2002d6e513ab9ae');
    var lab6 = Game.getObjectById('601dbf337ac24863f2d1bcf1');
    var term = Game.getObjectById('6004249e42c7e22d4162ec53');
    var strg = Game.getObjectById('6005bbe57038ee851c7e9faf');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){


        if(lab4.store.getUsedCapacity('G') < (lab4.store.getCapacity('G')-400)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'G') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'G') != OK){
                console.log(creep.withdraw(term, 'G'));
                console.log('terminal 1 out of mineral G');
            }
        }
        else if(lab5.store.getUsedCapacity('O') < (lab5.store.getCapacity('O')-400)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'O') != OK){
                console.log(creep.withdraw(term, 'O'));
                console.log('terminal 1 out of mineral O');
            }
        }
        else if(lab6.store.getUsedCapacity('GO') > (lab6.store.getCapacity('GO')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'GO') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'GO') != OK){
                console.log(creep + ': problem withdrawing OH from lab6, room 1.');
            }
        }
        else{
            creep.travelTo(flag);
        }
    }
    else if(creep.memory.working == true){
        if(creep.memory.dest == 'lab4'){
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

function GH(creep){
    var flag = Game.flags.lrFlag1;
    var lab4 = Game.getObjectById('601e3afe1c4cba7d1653e1ea');
    var lab5 = Game.getObjectById('601d6275c2002d6e513ab9ae');
    var lab6 = Game.getObjectById('601dbf337ac24863f2d1bcf1');
    var term = Game.getObjectById('6004249e42c7e22d4162ec53');
    var strg = Game.getObjectById('6005bbe57038ee851c7e9faf');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() == creep.store.getCapacity()){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){


        if(lab4.store.getUsedCapacity('G') < (lab4.store.getCapacity('G')-400)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'G') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'G') != OK){
                console.log(creep.withdraw(term, 'G'));
                console.log('terminal 1 out of mineral G');
            }
        }
        else if(lab5.store.getUsedCapacity('H') < (lab5.store.getCapacity('H')-400)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'H') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'H') != OK){
                console.log(creep.withdraw(term, 'H'));
                console.log('terminal 1 out of mineral H');
            }
        }
        else if(lab6.store.getUsedCapacity('GH') > (lab6.store.getCapacity('GH')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'GH') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'GH') != OK){
                console.log(creep + ': problem withdrawing OH from lab6, room 1.');
            }
        }
        else{
            creep.travelTo(flag);
        }
    }
    else if(creep.memory.working == true){
        if(creep.memory.dest == 'lab4'){
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

function G_OH(creep){
    var flag = Game.flags.lrFlag1;
    var lab1 = Game.getObjectById('601eb0b5d512ce63997d1bff');
    var lab2 = Game.getObjectById('601df3919ef9200eb20c9b02');
    var lab3 = Game.getObjectById('601f21fca8ed137958c1383e');
    var lab4 = Game.getObjectById('601e3afe1c4cba7d1653e1ea');
    var lab5 = Game.getObjectById('601d6275c2002d6e513ab9ae');
    var lab6 = Game.getObjectById('601dbf337ac24863f2d1bcf1');
    var term = Game.getObjectById('6004249e42c7e22d4162ec53');
    var strg = Game.getObjectById('6005bbe57038ee851c7e9faf');
    
    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() == creep.store.getCapacity()){
        creep.memory.working = true;
    }
    
    if(creep.memory.working == false){

        if(lab1.store.getUsedCapacity('ZK') < (lab1.store.getCapacity('ZK')-400)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'ZK') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'ZK') != OK){
                console.log('terminal 1 out of mineral ZK');
            }
        }
        else if(lab2.store.getUsedCapacity('UL') < (lab2.store.getCapacity('UL')-400)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'UL') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'UL') != OK){
                console.log(creep.withdraw(term, 'UL'));
                console.log('terminal 1 out of mineral UL');
            }
        }
        else if(lab4.store.getUsedCapacity('O') < (lab4.store.getCapacity('O')-400)){
            creep.memory.dest = 'lab4';
            if(creep.withdraw(term, 'O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'O') != OK){
                console.log(creep.withdraw(term, 'O'));
                console.log('terminal 1 out of mineral O');
            }
        }
        else if(lab5.store.getUsedCapacity('H') < (lab5.store.getCapacity('H')-400)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'H') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'H') != OK){
                console.log(creep.withdraw(term, 'H'));
                console.log('terminal 1 out of mineral H');
            }
        }
        else if(lab3.store.getUsedCapacity('G') > (lab3.store.getCapacity('G')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab3, 'G') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab3);
            }
            else if(creep.withdraw(lab3, 'G') != OK){
                console.log(creep + ': problem withdrawing G from lab3, room 1.');
            }
        }
        else if(lab6.store.getUsedCapacity('OH') > (lab6.store.getCapacity('OH')-400)){
            creep.memory.dest = 'term';
            if(creep.withdraw(lab6, 'OH') == ERR_NOT_IN_RANGE){
                creep.travelTo(lab6);
            }
            else if(creep.withdraw(lab6, 'OH') != OK){
                console.log(creep + ': problem withdrawing OH from lab6, room 1.');
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
    var flag = Game.flags.lrFlag1;
    var lab1 = Game.getObjectById('601eb0b5d512ce63997d1bff');
    var lab2 = Game.getObjectById('601df3919ef9200eb20c9b02');
    var lab3 = Game.getObjectById('601f21fca8ed137958c1383e');
    var term = Game.getObjectById('6004249e42c7e22d4162ec53');
    var strg = Game.getObjectById('6005bbe57038ee851c7e9faf');
    
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
    var flag = Game.flags.lrFlag1;
    var lab4 = Game.getObjectById('601e3afe1c4cba7d1653e1ea');
    var lab5 = Game.getObjectById('601d6275c2002d6e513ab9ae');
    var lab6 = Game.getObjectById('601dbf337ac24863f2d1bcf1');
    var term = Game.getObjectById('6004249e42c7e22d4162ec53');
    var strg = Game.getObjectById('6005bbe57038ee851c7e9faf');
    
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

function batch_XLH2O(creep){
    var lab1 = Game.getObjectById('601eb0b5d512ce63997d1bff');
    var lab2 = Game.getObjectById('601df3919ef9200eb20c9b02');
    var lab3 = Game.getObjectById('601f21fca8ed137958c1383e');
    var lab4 = Game.getObjectById('601e3afe1c4cba7d1653e1ea');
    var lab5 = Game.getObjectById('6064da0d3cc125c01ade0c83');
    var lab7 = Game.getObjectById('6052eb2236d8b38390530c3a');
    var term = Game.getObjectById('6004249e42c7e22d4162ec53');
    var flag = Game.flags.lrFlag1;

    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }

    if(creep.memory.working == false){

        if(lab2.store.getUsedCapacity('LH2O') < (lab2.store.getCapacity('LH2O')-500)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'LH2O') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'LH2O') != OK){
                console.log('terminal 1 out of mineral LH2O');
            }
        }
        else if(lab5.store.getUsedCapacity('X') < (lab5.store.getCapacity('X')-500)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'X') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'X') != OK){
                console.log(creep.withdraw(term, 'X'));
                console.log('terminal 1 out of mineral X');
            }
        }
        else if(lab2.store.getUsedCapacity('energy') < (lab2.store.getCapacity('energy')-500)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'energy') == ERR_NOT_IN_RANGE){
                creep.moveTo(term);
            }
        }
        else if(lab7.store.getUsedCapacity('XUHO2') < (lab7.store.getCapacity('XUHO2')-500)){
            creep.memory.dest = 'lab7';
            if(creep.withdraw(term, 'XUHO2') == ERR_NOT_IN_RANGE){
                creep.moveTo(term);
            }
        }
        else if(lab7.store.getUsedCapacity('energy') < (lab7.store.getCapacity('energy')-500)){
            creep.memory.dest = 'lab7';
            if(creep.withdraw(term, 'energy') == ERR_NOT_IN_RANGE){
                creep.moveTo(term);
            }
        }
        else{
            creep.travelTo(flag);
        }
    }

    else if (creep.memory.working == true) {
        if (creep.memory.dest == 'lab2') {
            if (lab2) {
                for (const resourceType in creep.carry) {
                    if (creep.transfer(lab2, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(lab2);
                    }
                }
            }
        }
        else if (creep.memory.dest == 'lab5') {
            if (lab5) {
                for (const resourceType in creep.carry) {
                    if (creep.transfer(lab5, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(lab5);
                    }
                }
            }

        }
        else if (creep.memory.dest == 'lab7'){
            if(lab7){
                for(const resourceType in creep.carry){
                    if(creep.transfer(lab7, resourceType) == ERR_NOT_IN_RANGE){
                        creep.moveTo(lab7)
                    }
                }
            }
        }
        else {
            creep.travelTo(flag);
        }
    }
}

function batch_XUHO2(creep){
    var lab1 = Game.getObjectById('601eb0b5d512ce63997d1bff');
    var lab2 = Game.getObjectById('601df3919ef9200eb20c9b02');
    var lab5 = Game.getObjectById('601d6275c2002d6e513ab9ae');
    var term = Game.getObjectById('6004249e42c7e22d4162ec53');
    var strg = Game.getObjectById('6005bbe57038ee851c7e9faf');
    var flag = Game.flags.lrFlag1;

    if(creep.store.getUsedCapacity() == 0 && creep.memory.working == true){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() > 0){
        creep.memory.working = true;
    }
    var min1 = lab1.mineralType;
    var min2 = lab2.mineralType;
    var min5 = lab5.mineralType;

    if(creep.memory.working == false){

        if(lab2.store.getUsedCapacity('UHO2') < (lab2.store.getCapacity('UHO2')-500)){
            creep.memory.dest = 'lab2';
            if(creep.withdraw(term, 'UHO2') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'UHO2') != OK){
                console.log('terminal 1 out of mineral UHO2');
            }
        }
        else if(lab5.store.getUsedCapacity('X') < (lab5.store.getCapacity('X')-500)){
            creep.memory.dest = 'lab5';
            if(creep.withdraw(term, 'X') == ERR_NOT_IN_RANGE){
                creep.travelTo(term);
            }
            else if(creep.withdraw(term, 'X') != OK){
                console.log(creep.withdraw(term, 'X'));
                console.log('terminal 1 out of mineral X');
            }
        }
        else if(lab1.store.getUsedCapacity('XGH2O') < (lab1.store.getCapacity('XGH2O')-500)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'XGH2O') == ERR_NOT_IN_RANGE){
                creep.moveTo(term);
            }
        }
        else if(lab1.store.getUsedCapacity('energy') < (lab1.store.getCapacity('energy')-500)){
            creep.memory.dest = 'lab1';
            if(creep.withdraw(term, 'energy') == ERR_NOT_IN_RANGE){
                creep.moveTo(term);
            }
        }
        else{
            creep.travelTo(flag);
        }
    }

    else if (creep.memory.working == true) {
        if (creep.memory.dest == 'lab2') {
            if (lab2) {
                for (const resourceType in creep.carry) {
                    if (creep.transfer(lab2, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(lab2);
                    }
                }
            }
        }
        else if (creep.memory.dest == 'lab5') {
            if (lab5) {
                for (const resourceType in creep.carry) {
                    if (creep.transfer(lab5, resourceType) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(lab5);
                    }
                }
            }

        }
        else if (creep.memory.dest == 'lab1'){
            if(lab1){
                for(const resourceType in creep.carry){
                    if(creep.transfer(lab1, resourceType) == ERR_NOT_IN_RANGE){
                        creep.moveTo(lab1)
                    }
                }
            }
        }
        else {
            creep.travelTo(flag);
        }
    }
}

function cleanup(creep){
    var flag = Game.flags.lrFlag1;
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
    var term = Game.getObjectById('6004249e42c7e22d4162ec53');
    var strg = Game.getObjectById('6005bbe57038ee851c7e9faf');
    
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
        else if(lab8.store.getUsedCapacity(min8) > 0){
            for(const resourceType in lab8.store) {
                if(creep.withdraw(lab8, resourceType) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(lab8);
                }
            }
        }
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

module.exports.batch_LH2O = batch_LH2O;
module.exports.batch_XLH2O = batch_XLH2O;
module.exports.batch_XUHO2 = batch_XUHO2;
module.exports.XGH2O = XGH2O; //4-6
module.exports.GH2O = GH2O; //4-6
module.exports.GO = GO; //4-6
module.exports.GH = GH; //4-6
module.exports.G_OH = G_OH; // all lab G/OH combo
module.exports.cleanup_1_3 = cleanup_1_3;
module.exports.cleanup_4_6 = cleanup_4_6;
module.exports.cleanup = cleanup;
