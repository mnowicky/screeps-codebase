//role to move resources around, primarily from storage to terminal, labs, factories, etc. 
//simply set resource type and destination, creep will pick up from storage and move to desired drop off. 

var roleMover = {
    run: function (creep) {
        var make = creep.memory.make;
        var pause = creep.memory.pause;
        var spawn = creep.memory.spawn;
        var mvFlag = Game.flags.mvFlag1;
        var deposit = creep.memory.deposit;

        if(make == 'speedRunner'){
            speedRunner(creep);
        }

        if (!pause) {
            if (creep.memory.working == true && creep.store.getUsedCapacity() == 0) {
                creep.memory.working = false;
            }
            else if (creep.memory.working == false && creep.store.getUsedCapacity() > 0) {
                creep.memory.working = true;
            }
            else if (creep.ticksToLive < 20 && creep.store.getUsedCapacity() == 0) {
                creep.memory.role = 'harvester';
            }

            if (creep.memory.working == false) {
                if (creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8') {
                    if (creep.memory.pickup == 'terminal') {
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        var res = creep.memory.resource;
                        if (term) {
                            if (creep.withdraw(term, res) == ERR_NOT_IN_RANGE) {
                                creep.travelTo(term);
                            }
                            else if(creep.withdraw(term, res) == '-6'){
                                creep.memory.pickup = 'd'
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'storage') {
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_STORAGE)
                        });
                        var res = creep.memory.resource;
                        if (strg) {
                            if (creep.withdraw(strg, res) != OK) {
                                creep.travelTo(strg);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'caps') {
                        var caps = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                            filter: (s) => (s.structureType == STRUCTURE_CONTAINER) && s.store[RESOURCE_ENERGY] > 0
                        });
                        if (caps) {
                            if (creep.withdraw(caps, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(caps)
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'factory') {
                        var fact = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_FACTORY)
                        });
                        var res = creep.memory.resource;
                        if (fact) {
                            if (creep.withdraw(fact, res) != OK) {
                                creep.travelTo(fact);
                            }
                        }
                    }
                    else if(creep.memory.pickup == 'nuke'){
                        var nuke = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (n) => (n.structureType == STRUCTURE_NUKER)
                        });
                        var res = creep.memory.resource;
                        if(nuke){
                            if(creep.withdraw(nuke, res) != OK){
                                creep.travelTo(nuke);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'labs') {
                        var lab = creep.memory.lab;
                        var res = creep.memory.resource;
                        if (lab == 'lab1') {
                            var lab1 = Game.getObjectById('601eb0b5d512ce63997d1bff');
                            if (lab1) {
                                if (creep.withdraw(lab1, res) != OK) {
                                    creep.travelTo(lab1);
                                }
                            }
                        }
                        else if (lab == 'lab2') {
                            var lab2 = Game.getObjectById('601df3919ef9200eb20c9b02');
                            if (lab2) {
                                if (creep.withdraw(lab2, res) != OK) {
                                    creep.travelTo(lab2);
                                }
                            }
                        }
                        else if (lab == 'lab3') {
                            var lab3 = Game.getObjectById('601f21fca8ed137958c1383e');
                            if (lab3) {
                                if (creep.withdraw(lab3, res) != OK) {
                                    creep.travelTo(lab3);
                                }
                            }
                        }
                        else if (lab == 'lab4') {
                            var lab4 = Game.getObjectById('601e3afe1c4cba7d1653e1ea');
                            if (lab4) {
                                if (creep.withdraw(lab4, res) != OK) {
                                    creep.travelTo(lab4);
                                }
                            }
                        }
                        else if (lab == 'lab5') {
                            var lab5 = Game.getObjectById('6064da0d3cc125c01ade0c83');
                            if (lab5) {
                                if (creep.withdraw(lab5, res) != OK) {
                                    creep.travelTo(lab5);
                                }
                            }
                        }
                        else if (lab == 'lab6') {
                            var lab6 = Game.getObjectById('601dbf337ac24863f2d1bcf1');
                            if (lab6) {
                                if (creep.withdraw(lab6, res) != OK) {
                                    creep.travelTo(lab6);
                                }
                            }
                        }
                        else if (lab == 'lab7') {
                            var lab7 = Game.getObjectById('6052eb2236d8b38390530c3a');
                            if (lab7) {
                                if (creep.withdraw(lab7, res) != OK) {
                                    creep.travelTo(lab7);
                                }
                            }
                        }
                        else if (lab == 'lab8') {
                            var lab8 = Game.getObjectById('6052e7cb37ff39665f5de0f8');
                            if (lab8) {
                                if (creep.withdraw(lab8, res) != OK) {
                                    creep.travelTo(lab8);
                                }
                            }
                        }
                        else if (lab == 'lab9') {
                            var lab9 = Game.getObjectById('6052dc7926a7a1e0c45cb9bf');
                            if (lab9) {
                                if (creep.withdraw(lab9, res) != OK) {
                                    creep.travelTo(lab9);
                                }
                            }
                        }
                        else if (lab == 'lab10') {
                            var lab10 = Game.getObjectById('6052dff1d624367faa3fae8d');
                            if (lab10) {
                                if (creep.withdraw(lab10, res) != OK) {
                                    creep.travelTo(lab10);
                                }
                            }
                        }
                    }
                    else{
                        creep.travelTo(mvFlag);
                    }
                }
                else if (creep.memory.spawn == 'Spawn6' || creep.memory.spawn == 'Spawn9') {
                    if (creep.memory.pickup == 'terminal') {
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        var res = creep.memory.resource;
                        if (term) {
                            if (creep.withdraw(term, res) != OK) {
                                creep.travelTo(term);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'storage') {
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_STORAGE)
                        });
                        var res = creep.memory.resource;
                        if (strg) {
                            if (creep.withdraw(strg, res) != OK) {
                                creep.travelTo(strg);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'caps') {
                        var caps = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                            filter: (s) => (s.structureType == STRUCTURE_CONTAINER) && s.store[RESOURCE_ENERGY] > 0
                        });
                        if (caps) {
                            if (creep.withdraw(caps, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(caps)
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'factory') {
                        var fact = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_FACTORY)
                        });
                        var res = creep.memory.resource;
                        if (fact) {
                            if (creep.withdraw(fact, res) != OK) {
                                creep.travelTo(fact);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'labs') {
                        var lab = creep.memory.lab;
                        var res = creep.memory.resource;
                        if (lab == 'lab1') {
                            var lab1 = Game.getObjectById('603ce34c07f8ab6e5ff0a8f0');
                            if (lab1) {
                                if (creep.withdraw(lab1, res) != OK) {
                                    creep.travelTo(lab1);
                                }
                            }
                        }
                        else if (lab == 'lab2') {
                            var lab2 = Game.getObjectById('603d1503d01f4405cb06e4d9');
                            if (lab2) {
                                if (creep.withdraw(lab2, res) != OK) {
                                    creep.travelTo(lab2);
                                }
                            }
                        }
                        else if (lab == 'lab3') {
                            var lab3 = Game.getObjectById('603cb00232a1d84db00c02f5');
                            if (lab3) {
                                if (creep.withdraw(lab3, res) != OK) {
                                    creep.travelTo(lab3);
                                }
                            }
                        }
                    }
                }
                else if (creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5') {
                    if (creep.memory.pickup == 'terminal') {
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        var res = creep.memory.resource;
                        if (term) {
                            if (creep.withdraw(term, res) != OK) {
                                creep.travelTo(term);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'storage') {
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_STORAGE)
                        });
                        var res = creep.memory.resource;
                        if (strg) {
                            if (creep.withdraw(strg, res) != OK) {
                                creep.travelTo(strg);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'factory') {
                        var fact = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_FACTORY)
                        });
                        var res = creep.memory.resource;
                        if (fact) {
                            if (creep.withdraw(fact, res) != OK) {
                                creep.travelTo(fact);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'labs') {
                        var lab = creep.memory.lab;
                        var res = creep.memory.resource;
                        if (lab == 'lab1') {
                            var lab1 = Game.getObjectById('605a50fe1e82523cb10c4100');
                            if (lab1) {
                                if (creep.withdraw(lab1, res) != OK) {
                                    creep.travelTo(lab1);
                                }
                            }
                        }
                        else if (lab == 'lab2') {
                            var lab2 = Game.getObjectById('605a3b0a680e4a167529d797');
                            if (lab2) {
                                if (creep.withdraw(lab2, res) != OK) {
                                    creep.travelTo(lab2);
                                }
                            }
                        }
                        else if (lab == 'lab3') {
                            var lab3 = Game.getObjectById('605a22c9bad886d27aa05648');
                            if (lab3) {
                                if (creep.withdraw(lab3, res) != OK) {
                                    creep.travelTo(lab3);
                                }
                            }
                        }
                        else if (lab == 'lab4') {
                            var lab4 = Game.getObjectById('60598842780122a433181b9c');
                            if (lab4) {
                                if (creep.withdraw(lab4, res) != OK) {
                                    creep.travelTo(lab4);
                                }
                            }
                        }
                        else if (lab == 'lab5') {
                            var lab5 = Game.getObjectById('605a0a9ee96436b9d2836c65');
                            if (lab5) {
                                if (creep.withdraw(lab5, res) != OK) {
                                    creep.travelTo(lab5);
                                }
                            }
                        }
                        else if (lab == 'lab6') {
                            var lab6 = Game.getObjectById('xxxxxxxxxx');
                            if (lab6) {
                                if (creep.withdraw(lab6, res) != OK) {
                                    creep.travelTo(lab6);
                                }
                            }
                        }
                    }
                }
                else if (creep.memory.spawn == 'Spawn3') {
                    if (creep.memory.pickup == 'terminal') {
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        var res = creep.memory.resource;
                        if (term) {
                            if (creep.withdraw(term, res) != OK) {
                                creep.travelTo(term);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'storage') {
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_STORAGE)
                        });
                        var res = creep.memory.resource;
                        if (strg) {
                            if (creep.withdraw(strg, res) != OK) {
                                creep.travelTo(strg);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'caps') {
                        var caps = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                            filter: (s) => (s.structureType == STRUCTURE_CONTAINER) && s.store[RESOURCE_ENERGY] > 0
                        });
                        if (caps) {
                            if (creep.withdraw(caps, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(caps)
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'factory') {
                        var fact = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_FACTORY)
                        });
                        var res = creep.memory.resource;
                        if (fact) {
                            if (creep.withdraw(fact, res) != OK) {
                                creep.travelTo(fact);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'labs') {
                        var lab = creep.memory.lab;
                        var res = creep.memory.resource;
                        if (lab == 'lab1') {
                            var lab1 = Game.getObjectById('60477a22d2b08636681b38f9');
                            if (lab1) {
                                if (creep.withdraw(lab1, res) != OK) {
                                    creep.travelTo(lab1);
                                }
                            }
                        }
                        else if (lab == 'lab2') {
                            var lab2 = Game.getObjectById('6046867cf66982f6aee5ca8a');
                            if (lab2) {
                                if (creep.withdraw(lab2, res) != OK) {
                                    creep.travelTo(lab2);
                                }
                            }
                        }
                        else if (lab == 'lab3') {
                            var lab3 = Game.getObjectById('60459336219bf52dd4115028');
                            if (lab3) {
                                if (creep.withdraw(lab3, res) != OK) {
                                    creep.travelTo(lab3);
                                }
                            }
                        }
                        else if (lab == 'lab4'){
                            var lab4 = Game.getObjectById('60472ae5d8aa27a4ddd4cc8d');
                            if (lab4){
                                if(creep.withdraw(lab4, res) != OK){
                                    creep.travelTo(lab4);
                                }
                            }
                        }
                        else if (lab == 'lab5') {
                            var lab5 = Game.getObjectById('6046d93c32a1d8332b0ffeab');
                            if (lab5) {
                                if (creep.withdraw(lab5, res) != OK) {
                                    creep.travelTo(lab5);
                                }
                            }
                        }
                        else if (lab == 'lab6') {
                            var lab6 = Game.getObjectById('60452e46ca18602a20770d70');
                            if (lab6) {
                                if (creep.withdraw(lab6, res) != OK) {
                                    creep.travelTo(lab6);
                                }
                            }
                        }
                    }
                }
                else if(creep.memory.spawn == 'Spawn7'){
                    if (creep.memory.pickup == 'terminal') {
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        var res = creep.memory.resource;
                        if (term) {
                            if (creep.withdraw(term, res) != OK) {
                                creep.travelTo(term);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'storage') {
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_STORAGE)
                        });
                        var res = creep.memory.resource;
                        if (strg) {
                            if (creep.withdraw(strg, res) != OK) {
                                creep.travelTo(strg);
                            }
                        }
                    }
                    else if (creep.memory.pickup == 'labs') {
                        var lab = creep.memory.lab;
                        var res = creep.memory.resource;
                        if (lab == 'lab1') {
                            var lab1 = Game.getObjectById('6050a8b4292b14af4f582c7d');
                            if (lab1) {
                                if (creep.withdraw(lab1, res) != OK) {
                                    creep.travelTo(lab1);
                                }
                            }
                        }
                        else if (lab == 'lab2') {
                            var lab2 = Game.getObjectById('605095ea8307608678381965');
                            if (lab2) {
                                if (creep.withdraw(lab2, res) != OK) {
                                    creep.travelTo(lab2);
                                }
                            }
                        }
                        else if (lab == 'lab3') {
                            var lab3 = Game.getObjectById('605097b537ff39534a5cfffe');
                            if (lab3) {
                                if (creep.withdraw(lab3, res) != OK) {
                                    creep.travelTo(lab3);
                                }
                            }
                        }
                    }
                }
            }

            else if (creep.memory.working == true) {
                if (creep.memory.spawn == 'Spawn1' || creep.memory.spawn == 'Spawn4' || creep.memory.spawn == 'Spawn8') {
                    if (creep.memory.dropoff == 'terminal') {
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        for (const resourceType in creep.carry) {
                            if (creep.transfer(term, resourceType) == ERR_NOT_IN_RANGE) {
                                creep.travelTo(term);
                            }
                        }
                    }
                    if(creep.memory.dropoff == 'link'){
                        var link = Game.getObjectById('606160f225ae362ceec436ce');
                        for (const resourceType in creep.carry) {
                            if (creep.transfer(link, resourceType) == ERR_NOT_IN_RANGE) {
                                creep.travelTo(link);
                            }
                        }
                    }
                    else if(creep.memory.dropoff == 'nuke'){
                        var nuke = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (n) => (n.structureType == STRUCTURE_NUKER)
                        });
                        for (const resourceType in creep.carry){
                            if(creep.transfer(nuke, resourceType) == ERR_NOT_IN_RANGE){
                                creep.travelTo(nuke);
                            }
                        }
                    }
                    else if(creep.memory.dropoff == 'pspawn' || creep.memory.dropoff == 'powerspawn'){
                        var pspawn = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (ps) => (ps.structureType == STRUCTURE_POWER_SPAWN)
                        });
                        for (const resourceType in creep.carry){
                            if(creep.transfer(pspawn, resourceType) == ERR_NOT_IN_RANGE){
                                creep.travelTo(pspawn);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'storage') {
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_STORAGE)
                        });
                        for (const resourceType in creep.carry) {
                            if (creep.transfer(strg, resourceType) == ERR_NOT_IN_RANGE) {
                                creep.travelTo(strg);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'factory') {
                        var fact = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_FACTORY)
                        });
                        for (const resourceType in creep.carry) {
                            if (creep.transfer(fact, resourceType) == ERR_NOT_IN_RANGE) {
                                creep.travelTo(fact);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'labs') {
                        var lab = creep.memory.lab;
                        var res = creep.memory.resource;
                        if (lab == 'lab1') {
                            var lab1 = Game.getObjectById('601eb0b5d512ce63997d1bff');
                            if (lab1) {
                                if (creep.transfer(lab1, res) != OK) {
                                    creep.travelTo(lab1);
                                }
                            }
                        }
                        else if (lab == 'lab2') {
                            var lab2 = Game.getObjectById('601df3919ef9200eb20c9b02');
                            if (lab2) {
                                if (creep.transfer(lab2, res) != OK) {
                                    creep.travelTo(lab2);
                                }
                            }
                        }
                        else if (lab == 'lab3') {
                            var lab3 = Game.getObjectById('601f21fca8ed137958c1383e');
                            if (lab3) {
                                if (creep.transfer(lab3, res) != OK) {
                                    creep.travelTo(lab3);
                                }
                            }
                        }
                        else if (lab == 'lab4') {
                            var lab4 = Game.getObjectById('601e3afe1c4cba7d1653e1ea');
                            if (lab4) {
                                if (creep.transfer(lab4, res) != OK) {
                                    creep.travelTo(lab4);
                                }
                            }
                        }
                        else if (lab == 'lab5') {
                            var lab5 = Game.getObjectById('6064da0d3cc125c01ade0c83');
                            if (lab5) {
                                if (creep.transfer(lab5, res) != OK) {
                                    creep.travelTo(lab5);
                                }
                            }
                        }
                        else if (lab == 'lab6') {
                            var lab6 = Game.getObjectById('601dbf337ac24863f2d1bcf1');
                            if (lab6) {
                                if (creep.transfer(lab6, res) != OK) {
                                    creep.travelTo(lab6);
                                }
                            }
                        }
                        else if (lab == 'lab7') {
                            var lab7 = Game.getObjectById('6052eb2236d8b38390530c3a');
                            if (lab7) {
                                if (creep.transfer(lab7, res) != OK) {
                                    creep.travelTo(lab7);
                                }
                            }
                        }
                        else if (lab == 'lab8') {
                            var lab8 = Game.getObjectById('6052e7cb37ff39665f5de0f8');
                            if (lab8) {
                                if (creep.transfer(lab8, res) != OK) {
                                    creep.travelTo(lab8);
                                }
                            }
                        }
                        else if (lab == 'lab9') {
                            var lab9 = Game.getObjectById('6052dc7926a7a1e0c45cb9bf');
                            if (lab9) {
                                if (creep.transfer(lab9, res) != OK) {
                                    creep.travelTo(lab9);
                                }
                            }
                        }
                        else if (lab == 'lab10') {
                            var lab10 = Game.getObjectById('6052dff1d624367faa3fae8d');
                            if (lab10) {
                                if (creep.transfer(lab10, res) != OK) {
                                    creep.travelTo(lab10);
                                }
                            }
                        }
                    }
                }
                else if (creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5') {
                    if (creep.memory.dropoff == 'terminal') {
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        var res = creep.memory.resource;
                        if (term) {
                            if (creep.transfer(term, res) != OK) {
                                creep.travelTo(term);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'storage') {
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_STORAGE)
                        });
                        var res = creep.memory.resource;
                        if (strg) {
                            if (creep.transfer(strg, res) != OK) {
                                creep.travelTo(strg);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'factory') {
                        var fact = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_FACTORY)
                        });
                        var res = creep.memory.resource;
                        if (fact) {
                            if (creep.transfer(fact, res) != OK) {
                                creep.travelTo(fact);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'labs') {
                        var lab = creep.memory.lab;
                        var res = creep.memory.resource;

                        if (lab == 'lab1') {
                            var lab1 = Game.getObjectById('605a50fe1e82523cb10c4100');
                            if (lab1) {
                                if (creep.transfer(lab1, res) != OK) {
                                    creep.travelTo(lab1);
                                }
                            }
                        }
                        else if (lab == 'lab2') {
                            var lab2 = Game.getObjectById('605a3b0a680e4a167529d797');
                            if (lab2) {
                                if (creep.transfer(lab2, res) != OK) {
                                    creep.travelTo(lab2);
                                }
                            }
                        }
                        else if (lab == 'lab3') {
                            var lab3 = Game.getObjectById('605a22c9bad886d27aa05648');
                            if (lab3) {
                                if (creep.transfer(lab3, res) != OK) {
                                    creep.travelTo(lab3);
                                }
                            }
                        }
                        else if (lab == 'lab4') {
                            var lab4 = Game.getObjectById('60598842780122a433181b9c');
                            if (lab4) {
                                if (creep.transfer(lab4, res) != OK) {
                                    creep.travelTo(lab4);
                                }
                            }
                        }
                        else if (lab == 'lab5') {
                            var lab5 = Game.getObjectById('605a0a9ee96436b9d2836c65');
                            if (lab5) {
                                if (creep.transfer(lab5, res) != OK) {
                                    creep.travelTo(lab5);
                                }
                            }
                        }
                        else if (lab == 'lab6') {
                            var lab6 = Game.getObjectById('xxxxxxxxxxxx');
                            if (lab6) {
                                if (creep.transfer(lab6, res) != OK) {
                                    creep.travelTo(lab6);
                                }
                            }
                        }
                    }
                }
                else if (creep.memory.spawn == 'Spawn3'){
                    if(creep.memory.dropoff == 'terminal'){
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        var res = creep.memory.resource;
                        if (term) {
                            if (creep.transfer(term, res) != OK) {
                                console.log('cant transfer');
                                creep.travelTo(term);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'storage') {
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_STORAGE)
                        });
                        var res = creep.memory.resource;
                        if (strg) {
                            if (creep.transfer(strg, res) != OK) {
                                creep.travelTo(strg);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'factory') {
                        var fact = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_FACTORY)
                        });
                        var res = creep.memory.resource;
                        if (fact) {
                            if (creep.transfer(fact, res) != OK) {
                                creep.travelTo(fact);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'labs') {
                        var lab = creep.memory.lab;
                        var res = creep.memory.resource;

                        if (lab == 'lab1') {
                            var lab1 = Game.getObjectById('60477a22d2b08636681b38f9');
                            if (lab1) {
                                if (creep.transfer(lab1, res) != OK) {
                                    creep.travelTo(lab1);
                                }
                            }
                        }
                        else if (lab == 'lab2') {
                            var lab2 = Game.getObjectById('6046867cf66982f6aee5ca8a');
                            if (lab2) {
                                if (creep.transfer(lab2, res) != OK) {
                                    creep.travelTo(lab2);
                                }
                            }
                        }
                        else if (lab == 'lab3') {
                            var lab3 = Game.getObjectById('60459336219bf52dd4115028');
                            if (lab3) {
                                if (creep.transfer(lab3, res) != OK) {
                                    creep.travelTo(lab3);
                                }
                            }
                        }
                        else if (lab == 'lab4') {
                            var lab4 = Game.getObjectById('60472ae5d8aa27a4ddd4cc8d');
                            if (lab4) {
                                if (creep.transfer(lab4, res) != OK) {
                                    creep.travelTo(lab4);
                                }
                            }
                        }
                        else if (lab == 'lab5') {
                            var lab5 = Game.getObjectById('6046d93c32a1d8332b0ffeab');
                            if (lab5) {
                                if (creep.transfer(lab5, res) != OK) {
                                    creep.travelTo(lab5);
                                }
                            }
                        }
                        else if (lab == 'lab6') {
                            var lab6 = Game.getObjectById('60452e46ca18602a20770d70');
                            if (lab6) {
                                if (creep.transfer(lab6, res) != OK) {
                                    creep.travelTo(lab6);
                                }
                            }
                        }
                    }
                }
                else if (creep.memory.spawn == 'Spawn6') {
                    if (creep.memory.dropoff == 'terminal') {
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        var res = creep.memory.resource;
                        if (term) {
                            if (creep.transfer(term, res) != OK) {
                                console.log('cant transfer');
                                creep.travelTo(term);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'storage') {
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_STORAGE)
                        });
                        var res = creep.memory.resource;
                        if (strg) {
                            if (creep.transfer(strg, res) != OK) {
                                creep.travelTo(strg);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'factory') {
                        var fact = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_FACTORY)
                        });
                        var res = creep.memory.resource;
                        if (fact) {
                            if (creep.transfer(fact, res) != OK) {
                                creep.travelTo(fact);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'labs') {
                        var lab = creep.memory.lab;
                        var res = creep.memory.resource;

                        if (lab == 'lab1') {
                            var lab1 = Game.getObjectById('603ce34c07f8ab6e5ff0a8f0');
                            if (lab1) {
                                if (creep.transfer(lab1, res) != OK) {
                                    creep.travelTo(lab1);
                                }
                            }
                        }
                        else if (lab == 'lab2') {
                            var lab2 = Game.getObjectById('603d1503d01f4405cb06e4d9');
                            if (lab2) {
                                if (creep.transfer(lab2, res) != OK) {
                                    creep.travelTo(lab2);
                                }
                            }
                        }
                        else if (lab == 'lab3') {
                            var lab3 = Game.getObjectById('603cb00232a1d84db00c02f5');
                            if (lab3) {
                                if (creep.transfer(lab3, res) != OK) {
                                    creep.travelTo(lab3);
                                }
                            }
                        }
                    }
                }
                else if(creep.memory.spawn == 'Spawn7'){
                    if (creep.memory.dropoff == 'terminal') {
                        var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                        });
                        var res = creep.memory.resource;
                        if (term) {
                            if (creep.transfer(term, res) != OK) {
                                console.log('cant transfer');
                                creep.travelTo(term);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'storage') {
                        var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                            filter: (st) => (st.structureType == STRUCTURE_STORAGE)
                        });
                        var res = creep.memory.resource;
                        if (strg) {
                            if (creep.transfer(strg, res) != OK) {
                                creep.travelTo(strg);
                            }
                        }
                    }
                    else if (creep.memory.dropoff == 'labs') {
                        var lab = creep.memory.lab;
                        var res = creep.memory.resource;

                        if (lab == 'lab1') {
                            var lab1 = Game.getObjectById('6050a8b4292b14af4f582c7d');
                            if (lab1) {
                                if (creep.transfer(lab1, res) != OK) {
                                    creep.travelTo(lab1);
                                }
                            }
                        }
                        else if (lab == 'lab2') {
                            var lab2 = Game.getObjectById('605095ea8307608678381965');
                            if (lab2) {
                                if (creep.transfer(lab2, res) != OK) {
                                    creep.travelTo(lab2);
                                }
                            }
                        }
                        else if (lab == 'lab3') {
                            var lab3 = Game.getObjectById('605097b537ff39534a5cfffe');
                            if (lab3) {
                                if (creep.transfer(lab3, res) != OK) {
                                    creep.travelTo(lab3);
                                }
                            }
                        }
                    }

                }
            }
        }
    }
};


function speedRunner(creep){
    var working = creep.memory.working;
    if(creep.store.getUsedCapacity() == 0){
        creep.memory.working = false;
    }
    else if(creep.store.getUsedCapacity() == creep.store.getUsedCapacity()){
        creep.memory.working = true;
    }

    var target = Game.getObjectById('6068e4be69a76c5ec1455421');
    var pickup = Game.getObjectById('605091090eb51474cd91a7a2');
    var resource = creep.memory.resource;

    if(working){
        if(creep.transfer(target, resource)!=OK){
            creep.moveTo(target);
        }
    }
    else{
        if(creep.withdraw(pickup, resource)!=OK){
            creep.moveTo(pickup);
        }
    }
};

module.exports = roleMover;