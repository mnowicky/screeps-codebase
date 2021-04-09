//fortifies walls, better version of wallRepairer
//var Traveler = require('Traveler.js');
var labs = require('mod.labs');
var roleFortifier = {
    run: function (creep) {
        var working = creep.memory.working;
        var supply = creep.memory.supply;
        
        if(creep.memory.spawn === 'Spawn1' || creep.memory.spawn === 'Spawn4' || creep.memory.spawn === 'Spawn8'){
            var lab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (la) => (la.structureType === STRUCTURE_LAB) && la.store[RESOURCE_CATALYZED_LEMERGIUM_ACID] > 150
            });
            console.log(creep);
            //console.log(lab);
            if(lab){
                creep.memory.supply = 'terminal';
                if(creep.memory.getBoosted == true){
                    if(creep.memory.boost == 't2build'){
                        labs.boost_LH2O(creep);
                        return false;
                    }
                    else if(creep.memory.boost == 't3build'){
                        labs.boost_XLH2O(creep);
                        return false;
                    }
                }
            }
        }
        else if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5' || creep.memory.spawn == 'Spawn7' || creep.memory.spawn == 'Spawn10'){
            var lab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (l) => (l.structureType == STRUCTURE_LAB) && l.store[RESOURCE_CATALYZED_GHODIUM_ACID] > 0 && l.store[RESOURCE_ENERGY] > 0
            });
            creep.memory.supply = 'terminal';
            if(creep.memory.getBoosted == true && creep.memory.isBoosted == false){
                if(creep.memory.boost == 'upgrade'){
                    var lab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                        filter: (l) => (l.structureType == STRUCTURE_LAB) && l.store[RESOURCE_CATALYZED_GHODIUM_ACID] > 0 && l.store[RESOURCE_ENERGY] > 0
                    });
                    labs.boost_XGH2O(creep);
                    return false;
                }
                else if(creep.memory.boost == 't3build'){
                    var lab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                        filter: (l) => (l.structureType == STRUCTURE_LAB) && l.store[RESOURCE_CATALYZED_LEMERGIUM_ACID] > 0 && l.store[RESOURCE_ENERGY] > 0
                    });
                    labs.boost_XLH2O(creep);
                    return false;
                }
                else if(creep.memory.boost == 'build'){
                    labs.boost_LH2O(creep);
                    return false;
                }
            }
        }
        
        if (creep.memory.working == true && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.store[RESOURCE_ENERGY] > 0) {
            creep.memory.working = true;
        }
        
        if (working) {
            if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5'){
                var constructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
                var outerRamps = creep.room.find(FIND_STRUCTURES, {
                    filter: (e) => ((e.hits<3000000 && e.pos.x == 28 && e.pos.y == 47)) && e.structureType == STRUCTURE_RAMPART               
                });
                if (constructionSite) {
                    creep.say('⛏️');
                    if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(constructionSite);
                    }
                }
                else if(outerRamps){
                    if(creep.repair(outerRamps[0])!=OK){
                        creep.moveTo(outerRamps[0]);
                    }
                }
            }
            else if(creep.memory.spawn == 'Spawn 4' || creep.memory.spawn == 'Spawn 1' || creep.memory.spawn == 'Spawn 8'){
                var constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
                console.log(creep);
                if(constructionSite){
                    console.log(creep);
                    if(creep.build(constructionSite[0])!=OK){
                        creep.moveTo(constructionSite[0]);
                    }
                }
                else if(rm1lowRamparts){
                    //console.log(extensions)
                    if(creep.repair(rm1lowRamparts[0])!=OK){
                        creep.moveTo(rm1lowRamparts[0]);
                        //return false;
                    }
                }
            }
            else if(creep.memory.spawn == 'Spawn7' || creep.memory.spawn == 'Spawn10'){
                /*var constructionSite = creep.room.find(FIND_CONSTRUCTION_SITES);
                //console.log(creep);
                var lowRamps = creep.room.find(FIND_STRUCTURES, {
                    filter: (e) => (e.hits<10000 && e.structureType == STRUCTURE_RAMPART)
                });
                if(lowRamps){
                    if(creep.repair(lowRamps[0])!=OK){
                        creep.moveTo(lowRamps[0]);
                        return false;
                    }
                }
                
                if(constructionSite){
                    if(creep.build(constructionSite[0])!=OK){
                        creep.moveTo(constructionSite[0]);
                        return false;
                    }
                }
                */
                
                const fortifyArea = creep.room.lookForAtArea(LOOK_STRUCTURES, 26, 14, 35, 19, true);
                
                let filteredAreaRamparts = [];

                for(let i = 0; i < fortifyArea.length; i++){
                    const currentGameObject = fortifyArea[i][LOOK_STRUCTURES];
                    if(currentGameObject.structureType == STRUCTURE_RAMPART && currentGameObject.hits < 5000000){
                        filteredAreaRamparts.push(currentGameObject);
                    }
                }


                //console.log(JSON.stringify(filteredAreaRamparts));

                /*if(constructionSite){
                    console.log(creep);
                    if(creep.build(constructionSite[0])!=OK){
                        creep.moveTo(constructionSite[0]);
                    }
                }*/
                if(filteredAreaRamparts){
                    if(creep.repair(filteredAreaRamparts[0])!=OK){
                        creep.moveTo(filteredAreaRamparts[0]);
                    }
                }
            }
        }
        else if (!working) {
            var supply = creep.memory.supply;
            var strg = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_STORAGE) && st.store[RESOURCE_ENERGY] < st.store.getCapacity()
            });
            var term = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (st) => (st.structureType == STRUCTURE_TERMINAL)
            });
            var resupply = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_TERMINAL || s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_LINK) && s.store[RESOURCE_ENERGY] > 0
            });

            if(creep.memory.spawn == 'Spawn2' || creep.memory.spawn == 'Spawn5'){
                if(supply == 'terminal'){
                    if(creep.withdraw(term, RESOURCE_ENERGY)!=OK){
                        creep.moveTo(term);
                        return false;
                    }
                }
            }
            else{
                if(resupply){
                    if(creep.withdraw(resupply, RESOURCE_ENERGY)!=OK){
                        creep.moveTo(resupply);
                        return false;
                    }
                }
                else{
                    var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                }
            }
        }
    }
};

function targetQueue(){
    
}
module.exports = roleFortifier;