const roleWarFighters = require("./role.warFighters");

module.exports = function () {
    StructureSpawn.prototype.createCustomCreep =
        function (energy, roleName, spawnName, term, strg) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 200);
            numberOfParts = Math.min(numberOfParts,16);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            return this.createCreep(body, roleName+'_'+makeid(5), { role: roleName, working: false, spawn: spawnName, isBoosted: false, term: term, strg: strg });
        };
        
        
    StructureSpawn.prototype.createRm2Harv =
        function (energy, roleName, spawnName, getBoosted) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 200);
            numberOfParts = Math.min(numberOfParts,16);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            return this.createCreep(body, roleName+'_'+makeid(5), { role: roleName, working: false, spawn: spawnName, isBoosted: false, getBoosted: getBoosted });
        };
        
    StructureSpawn.prototype.createFortifier = 
        function (spawnName, supply, getBoosted, boost){
            return this.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,
                                    MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                    CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'fortifier_'+makeid(5), {role: 'fortifier', spawn: spawnName, working: false, supply: supply, getBoosted: getBoosted, boost: boost, isBoosted: false});
        };

    StructureSpawn.prototype.createInfantry =
        function (energy, spawnName, getBoosted, boost) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 200);
            numberOfParts = Math.min(numberOfParts,16);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(TOUGH);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(ATTACK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            return this.createCreep(body, 'infantry_'+makeid(5), { role: 'warFighter', spec: 'infantry', working: false, spawn: spawnName, isBoosted: false, getBoosted: getBoosted, boost: boost });
        };

    StructureSpawn.prototype.createWarrior =
        function (spawnName, getBoosted, boost, target){
            return this.createCreep([TOUGH,MOVE,ATTACK,MOVE,ATTACK,TOUGH,MOVE,ATTACK,MOVE,ATTACK,
                                    TOUGH,MOVE,ATTACK,MOVE,ATTACK,TOUGH,MOVE,ATTACK,MOVE,ATTACK,
                                    TOUGH,MOVE,ATTACK,MOVE,ATTACK,TOUGH,MOVE,ATTACK,MOVE,ATTACK,
                                    TOUGH,MOVE,ATTACK,MOVE,ATTACK,TOUGH,MOVE,ATTACK,MOVE,ATTACK,
                                    TOUGH,MOVE,ATTACK,MOVE,ATTACK,TOUGH,MOVE,ATTACK,MOVE,ATTACK], 'warrior_'+makeid(5), {role: 'warFighter', spawn: spawnName, working: false, boost: boost, target: target, getBoosted: getBoosted, spec: 'warrior'})
        };
    StructureSpawn.prototype.createMedic =
        function (spawnName, getBoosted, target, VIP, boost){
        return this.createCreep([TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                                HEAL,HEAL,HEAL,HEAL,HEAL,MOVE,MOVE,MOVE,MOVE,MOVE,
                                HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,
                                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'medic_'+makeid(5), {role: 'warFighter', spec: 'medic', spawn: spawnName, working: false, boost: boost, target: target, getBoosted: getBoosted, VIP: VIP})
        };

    StructureSpawn.prototype.createDestroyer =
        function (spawnName, boost, getBoosted){
        return this.createCreep([TOUGH,TOUGH,TOUGH,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                                WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                                WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,], 'destroyer_'+makeid(5), {role: 'warFighter', spec: 'destroyer', spawn: spawnName, boost: boost, getBoosted: getBoosted, phase: 'none'})
        };
        
    StructureSpawn.prototype.createGunRunner = 
        function (spawnName){
            return this.createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'gunRunner_'+makeid(5), {role: 'gunRunner', spawn: spawnName, working: false});
        };
        
    StructureSpawn.prototype.createRm1Creep = 
        function (spawnName, roleName, term, strg){
            return this.createCreep([WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], 'rm1_'+roleName+'_'+makeid(5), {role: roleName, spawn: spawnName, working: false, term: term, strg: strg});
        };
        
    StructureSpawn.prototype.createMover = 

        function (spawnName, resource, pickup, dropoff, lab, pause) {
            return this.createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                    MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'mover_'+makeid(5), { role: 'mover', working: false, spawn: spawnName, resource: resource, pickup: pickup, dropoff: dropoff, lab: lab, pause: pause });   
        };
        
    StructureSpawn.prototype.createPowerBreaker = 
        function (spawnName) {
            return this.createCreep([ATTACK,ATTACK,RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, 
                                    CARRY, CARRY, 
                                    MOVE,MOVE,MOVE,MOVE], 'pBreaker_'+makeid(5), { role: 'pBreaker', working: false, spawn: spawnName, boost: 'RA', getBoosted: true, isBoosted: false });   
        };

    StructureSpawn.prototype.createPowerHealer = 
        function (spawnName) {
            return this.createCreep([HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,
                                    CARRY,CARRY,
                                    MOVE,MOVE,MOVE,MOVE], 'pHealer_'+makeid(5), { role: 'pHealer', working: false, spawn: spawnName, boost: 'HEAL', getBoosted: true, isBoosted: false });   
        };

    StructureSpawn.prototype.createPowerLooter = 
        function (spawnName) {
            return this.createCreep([WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                    MOVE,MOVE,MOVE,MOVE,MOVE], 'pLooter_'+makeid(5), { role: 'pLooter', working: false, spawn: spawnName });   
        };
    
    StructureSpawn.prototype.createInfestor = 
        function (spawnName) {
            return this.createCreep([CLAIM,CLAIM,CLAIM,MOVE,MOVE,MOVE], 'infestor_'+makeid(5), { role: 'infestor', working: false, spawn: spawnName, target: 'set_target' });   
        };

    StructureSpawn.prototype.createInfestorLite = 
        function (spawnName) {
            return this.createCreep([CLAIM,CLAIM,MOVE,MOVE,MOVE], 'infestorLite_'+makeid(5), { role: 'infestor', working: false, spawn: spawnName, target: 'set_target' });   
        };
    
    StructureSpawn.prototype.createSpeedRunner = 
        function(){
            return this.createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                    CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                    MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                                    MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                                    MOVE,MOVE,MOVE,MOVE,MOVE], 'speed_runner_'+makeid(5), {role: 'mover', make: 'speedRunner', working: false});

            };


    StructureSpawn.prototype.createDefender = 
        function (energy, spawnName, boost){
            var numberOfParts = Math.floor((energy - 300) / 140);
            numberOfParts = Math.min(numberOfParts,16);
            var body = [];
            for (let i = 0; i < numberOfParts; i++){
                body.push(TOUGH);
            }
            for (let i = 0; i < numberOfParts; i++){
                body.push(ATTACK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            body.push(RANGED_ATTACK);
            body.push(RANGED_ATTACK);

            return this.createCreep(body, 'defender_'+makeid(5), { role: 'defender', working: false, spawn: spawnName, boost: boost, getBoosted: false, isBoosted: false });
        }; 
    
    StructureSpawn.prototype.createPowerSpawnKeeper = 
        function (spawnName) {
            return this.createCreep([WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'pKeeper_'+makeid(5), {role: 'pKeeper', working: false, spawn: spawnName});
        };
        
    StructureSpawn.prototype.createLabRat = 
        function (spawnName, product) {
            return this.createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                    MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'labRat_'+makeid(5), { role: 'labRat', working: false, spawn: spawnName, product: product, cleanup: false });   
        };
        
    StructureSpawn.prototype.createClaimer =
        function (energy, roleName, spawnName, task, boost, getBoosted, term, strg) {
            var numberOfParts = Math.floor(energy / 200);
            numberOfParts = Math.min(numberOfParts,16);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            return this.createCreep(body, roleName+'_'+makeid(5), { role: roleName, working: false, spawn: spawnName, task: task, boost: boost, getBoosted: getBoosted, term: term, strg: strg });
        }; 

    StructureSpawn.prototype.createRoomMiner =
        function (energy, roleName, spawnName) {
            var numberOfParts = Math.floor(energy / 200);
            numberOfParts = Math.min(numberOfParts,16);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            return this.createCreep(body, 'roomMiner_'+makeid(5), { role: roleName, working: false, spawn: spawnName, mining: 'minerals', dropoff: 'terminal' });
        };
    
    StructureSpawn.prototype.createLDH =
        function (energy, roleName, spawnName, home, target) {
            var numberOfParts = Math.floor(energy / 200);
            numberOfParts = Math.min(numberOfParts,16);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            return this.createCreep(body, 'LDH_'+target+'_'+makeid(5), { role: roleName, working: false, spawn: spawnName, home: home, target: target });
        };
    //Single trip, close range miner. Used for high cooldown close range. 
    StructureSpawn.prototype.createMiner3 = 
        function (spawnName) {
            return this.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                                    CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                    MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'miner_'+makeid(5), { role: 'miner', working: false, spawn: spawnName, boost: 'work', getBoosted: true, isBoosted: false, site: 'site1' });   
        };
    
    //used for close, nearby metal deposits. Many trips back and fourth. 
    StructureSpawn.prototype.createMiner2 = 
        function (spawnName) {
            return this.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                                    CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                    MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'miner_'+makeid(5), { role: 'miner', working: false, spawn: spawnName, boost: 'work', getBoosted: true, isBoosted: false, site: 'site1' });   
        };
    
    //used for far away metal deposits- journeys of 6-8 tiles away, 1 single trip.  
    StructureSpawn.prototype.createMiner1 = 
        function (spawnName) {
            return this.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                                    CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                                    MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'miner_'+makeid(5), { role: 'miner', working: false, spawn: spawnName, boost: 'work', getBoosted: true, isBoosted: false, site: 'site1' });
        };

    StructureSpawn.prototype.createRunner = 
        function (spawnName) {
            return this.createCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE
                                    ], 'runner_'+makeid(5), { role: 'runner', working: false, spawn: spawnName });   
        };

    StructureSpawn.prototype.createRangedAttacker = 
        function (energy, roleName, spawnName) {
            var numberOfParts = Math.floor(energy / 200);
            numberOfParts = Math.min(numberOfParts,25);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(RANGED_ATTACK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }
            return this.createCreep(body, 'RA_'+makeid(5), { role: roleName, working: false, spawn: spawnName, site: 'site1' });
        };
    
    StructureSpawn.prototype.createInvader = 
        function (roleName, spawnName, target) {
            return this.createCreep([CLAIM,CLAIM,CLAIM,CLAIM,CLAIM,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'invader_'+makeid(5), { role: roleName, working: false, spawn: spawnName, target: target});
        }
        
    StructureSpawn.prototype.createStationaryUpgrader = 
        function (energy, roleName, spawnName, boost, isBoosted, getBoosted) {
            var numberOfParts = Math.floor((energy-100) / 150);
            numberOfParts = Math.min(numberOfParts,23);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            body.push(MOVE);
            body.push(MOVE);
            return this.createCreep(body, 'SU_'+makeid(5), { role: roleName, working: false, spawn: spawnName, boost: boost, isBoosted: isBoosted, getBoosted: getBoosted})
        };
        
    StructureSpawn.prototype.createStatHarvester = 
        function (energy, roleName, spawnName) {
            var numberOfParts = Math.floor((energy-200) / 150);
            numberOfParts = Math.min(numberOfParts,23);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            body.push(MOVE);
            return this.createCreep(body, 'SH_'+makeid(5), { role: roleName, working: false, spawn: spawnName})
        };

    StructureSpawn.prototype.createStatHarvesterRm4 = 
        function (roleName, spawnName){
            return this.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], 'SH_'+makeid(5), { role: roleName, working: false, spawn: spawnName});
        }
        
    StructureSpawn.prototype.createStatHarvesterRm1 = 
        function (roleName, spawnName){
            return this.createCreep([WORK,WORK,WORK,WORK,WORK, CARRY, CARRY, MOVE, MOVE], 'SH_'+makeid(5), { role: roleName, working: false, spawn: spawnName});
        }
        
    StructureSpawn.prototype.createStatHarvRm1A = 
        function (spawnName){
            return this.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
            CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], 'SH_rm1_a_'+makeid(5), { role: 'stationaryHarvester', working: false, spawn: spawnName, src: 'a'});
        }

    StructureSpawn.prototype.createStatHarvRm1B = 
        function (spawnName){
            return this.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], 'SH_rm1_b_'+makeid(5), { role: 'stationaryHarvester', working: false, spawn: spawnName, src: 'b'});
        }

    StructureSpawn.prototype.createHarvRm1 = 
        function (spawnName){
            return this.createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], 'harvester_rm1_'+makeid(5), { role: 'harvester', working: false, spawn: spawnName});
        }
        
    StructureSpawn.prototype.createStatHarvRm2A = 
        function (spawnName){
            return this.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
            CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], 'SH_rm2_a_'+makeid(5), { role: 'stationaryHarvester', working: false, spawn: spawnName, src: 'a'});
        }

    StructureSpawn.prototype.createStatHarvRm2B = 
        function (spawnName){
            return this.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], 'SH_rm2_b_'+makeid(5), { role: 'stationaryHarvester', working: false, spawn: spawnName, src: 'b'});
        }
        
    StructureSpawn.prototype.createHarvRm2 = 
        function (spawnName){
            return this.createCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], 'harvester_rm2_'+makeid(5), { role: 'harvester', working: false, spawn: spawnName});
        }
    
    StructureSpawn.prototype.createRR = 
        function (roleName, spawnName, target){
            return this.createCreep([CLAIM,CLAIM,CLAIM,MOVE], 'RR_'+makeid(5), {role: roleName, spawn: spawnName, target: target});
        }
        
    StructureSpawn.prototype.createStatUpgrader = 
        function (energy, roleName, spawnName) {
            var numberOfParts = Math.floor((energy-100) / 150);
            numberOfParts = Math.min(numberOfParts,23);
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            body.push(MOVE);
            body.push(MOVE);
            return this.createCreep(body, 'SU_'+makeid(5), { role: roleName, working: false, spawn: spawnName})
        };

    // cost is 30x attack at 80, + 20x move at 50 = 3400
    StructureSpawn.prototype.createPowerBankAttacker = 
        function (spawnName) {
            return this.createCreep([ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'PBA_'+makeid(5), { role: 'powerBankAttacker', working: false, spawn: spawnName });
        }
    // cost is 30x heal at 
    StructureSpawn.prototype.createPowerBankHealer = 
        function (spawnName) {
            return this.createCreep([ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], 'PBH_'+makeid(5), { role: 'powerBankHealer', working: false, spawn: spawnName });
        }
    function makeid(length) {
        var result           = '';
        var characters       = '0123456789'; //= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
        }

};