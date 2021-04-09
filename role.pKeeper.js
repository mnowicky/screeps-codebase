//role to keep the power a cookin'

var rolePKeeper = {
    run: function (creep) {
        var spwn = creep.memory.spawn;
        var working = creep.memory.working;
        
        if(creep.memory.working == false && creep.store.getUsedCapacity() == creep.store.getCapacity()){
            creep.memory.working = true
        }
        else if(creep.memory.working == true && creep.store.getUsedCapacity() == 0){
            creep.memory.working = false;
        }
        if(creep.store == 0 && creep.ticksToLive < 50){
            creep.suicide;
        }
        
        if(spwn == 'Spawn1' || spwn == 'Spawn4' || spwn == 'Spawn8'){
            if(working == false){
                var eTerm = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (st) => (st.structureType == STRUCTURE_TERMINAL) && st.store[RESOURCE_ENERGY] > 0
                });
                var pTerm = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (ps) => (ps.structureType == STRUCTURE_TERMINAL) && ps.store[RESOURCE_POWER] > 0
                })
                var pspwn = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (p) => (p.structureType == STRUCTURE_POWER_SPAWN)
                });
                var flag = Game.flags.pkFlag1;
                var droppedPower = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
                    filter: (d) => (d.resourceType==RESOURCE_POWER)
                });

                if(droppedPower){
                    if(creep.pickup(droppedPower)!=OK){
                        creep.moveTo(droppedPower);
                        return false;
                    }
                }
                
                if(pspwn.store[RESOURCE_ENERGY] < 3500){
                    if(eTerm){
                        if(creep.withdraw(eTerm, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.travelTo(eTerm);
                        }
                    }
                    else{
                        console.log('terminal rm1 out of energy.');
                    }
                    
                }
                else if(pspwn.store[RESOURCE_POWER] < 80){
                    if(pTerm){
                        if(creep.withdraw(pTerm, RESOURCE_POWER) == ERR_NOT_IN_RANGE){
                            creep.travelTo(pTerm);
                        }
                    }
                    else{
                        console.log('terminal r1 out of power.')
                    }
                }
                else{
                    creep.travelTo(flag);
                }
                
            }
            else if(working == true){
                var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                });
                var pspwn = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (p) => (p.structureType == STRUCTURE_POWER_SPAWN)
                });

                if (pspwn.store[RESOURCE_POWER] < 50){
                    for(const resourceType in creep.carry){
                        if(creep.transfer(pspwn, resourceType) != OK){
                            creep.travelTo(pspwn);
                        }
                    }
                }
                else if(pspwn.store[RESOURCE_POWER] > 50 && creep.store[RESOURCE_POWER] > 0){
                    for(const resourceType in creep.carry){
                        if(creep.transfer(term, resourceType) != OK){
                            creep.travelTo(term);
                        }
                    }
                }
                else if(pspwn.store[RESOURCE_ENERGY] < 4000){
                    for(const resourceType in creep.carry){
                        if(creep.transfer(pspwn, resourceType) != OK){
                            creep.travelTo(pspwn);
                        }
                    }
                }
                else{
                    for(const resourceType in creep.carry){
                        if(creep.transfer(term, resourceType) != OK){
                            creep.travelTo(term);
                        }
                    }
                }
            }
        }
        else if(spwn == 'Spawn2' || spwn == 'Spawn5' || spwn == 'Spawn11'){
            if(working == false){
                var eLnk = Game.getObjectById('6058254ff201b625edf5c4c9');
                
                var eTerm = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (st) => (st.structureType == STRUCTURE_TERMINAL) && st.store[RESOURCE_ENERGY] > 0
                });
                var pTerm = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (ps) => (ps.structureType == STRUCTURE_TERMINAL) && ps.store[RESOURCE_POWER] > 0
                })
                var pspwn = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (p) => (p.structureType == STRUCTURE_POWER_SPAWN)
                });
                var flag = Game.flags.pkFlag2;

                
                if(pspwn.store[RESOURCE_ENERGY] < 3500){
                    if(eLnk.store[RESOURCE_ENERGY] > 0){
                        if(creep.withdraw(eLnk, RESOURCE_ENERGY)!=OK){
                            creep.moveTo(eLnk);
                        }
                    }
                    else if(eTerm){
                        if(creep.withdraw(eTerm, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            creep.travelTo(eTerm);
                        }
                    }
                    else{
                        console.log('terminal rm2 out of energy.');
                    }
                }
                else if(pspwn.store[RESOURCE_POWER] < 80){
                    if(pTerm){
                        if(creep.withdraw(pTerm, RESOURCE_POWER) == ERR_NOT_IN_RANGE){
                            creep.travelTo(pTerm);
                        }
                    }
                    else{
                        console.log('terminal r2 out of power.')
                    }
                }
                else{
                    creep.travelTo(flag);
                }
                
            }
            else if(working == true){
                var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
                });
                var pspwn = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (p) => (p.structureType == STRUCTURE_POWER_SPAWN)
                });

                if (pspwn.store[RESOURCE_POWER] < 100){
                    for(const resourceType in creep.carry){
                        if(creep.transfer(pspwn, resourceType) != OK){
                            creep.travelTo(pspwn);
                        }
                    }
                }
                else if(pspwn.store[RESOURCE_POWER] == 100 && creep.store[RESOURCE_POWER] > 0){
                    for(const resourceType in creep.carry){
                        if(creep.transfer(term, resourceType) != OK){
                            creep.travelTo(term);
                        }
                    }
                }
                else if(pspwn.store[RESOURCE_ENERGY] < 4000){
                    for(const resourceType in creep.carry){
                        if(creep.transfer(pspwn, resourceType) != OK){
                            creep.travelTo(pspwn);
                        }
                    }
                }
                else{
                    for(const resourceType in creep.carry){
                        if(creep.transfer(term, resourceType) != OK){
                            creep.travelTo(term);
                        }
                    }
                }
            }
        }
    }
};


module.exports = rolePKeeper;