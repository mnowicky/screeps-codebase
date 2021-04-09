require('prototype.spawn')();
var mods = require('global.mods');
var Traveler = require('Traveler');
var safemode = require('mod.safemode');
var pspawn = require('mod.pspawn');
var labs = require('mod.labs');
var factories = require('mod.factories');
var observers = require('mod.observers');
var links = require('mod.links');
var terminals = require('mod.terminals');
var turrets = require('mod.turrets');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWallRepairer = require('role.wallRepairer');
var roleRangedAttacker = require('role.rangedAttacker');
var roleRangedAttacker2 = require('role.rangedAttacker2');
var roleInvader = require('role.invader');
var roleMiner = require('role.miner');
var roleRoomMiner = require('role.roomMiner');
var roleLDH = require('role.LDH');
var roleClaimer = require('role.claimer');
var roleMover = require('role.mover');
var roleStationaryWorker = require('role.stationaryWorker');
var roleLabRat = require('role.labRat');
var rolePowerMiner = require('role.powerMiner');
var roleRoomReserver = require('role.roomReserver');
var rolePowerSpawnKeeper = require('role.pKeeper');
var rolePcOperator = require('role.PcOperator');
var roleDismantler = require('role.dismantler');
var roleGunRunner = require('role.gunRunner');
var roleFortifier = require('role.fortifier');
var roleWarFighter = require('role.warFighters');
var roleInfestor = require('role.infestor');
var roleRunner = require('role.runner');
var roleDefender = require('role.defender');

module.exports.loop = function () {
    // delete any dead creeps
    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            console.log('Deleting' + Memory.creeps[name] + 'from memory; creep dead');
            delete Memory.creeps[name];
        }
    }
    //test

    //============ MODULE RUNS ===============================

    var nuke = Game.getObjectById('605302b2c4a6412a4ee4d1b9');
    
    //console.log(nuke.launchNuke(new RoomPosition(15,32, 'W5S22')));
    
    //check for wartime/boost
    //boosted.rm1();
    //boosted.rm2();
    //boosted.rm3();
    
    //run power processing
    pspawn.rm1();
    pspawn.rm2();
    
    //safemodes
    safemode.rm2();
    safemode.rm1();
    
    //observers
    observers.rm1();
    
    //run lab reactions
    labs.rm1();
    labs.rm2();
    //labs.rm3();
    //labs.rm4();
    //labs.rm5();
    
    //run factories
    factories.rm1();
    //factories.rm2();
    
    //run links
    links.rm1();
    links.rm2();
    links.rm3();
    links.rm4();
    links.rm5();
    //links.rm6();
    
    //run term transactions
    //terminals.rm1();
    //terminals.rm2();
    //terminals.rm3();
    terminals.rm4();
    terminals.rm5();

    // towers functionality
    turrets.rm1();
    turrets.rm2();
    turrets.rm3();
    turrets.rm4();
    turrets.rm5();
    
    for(let name in Game.powerCreeps){
        var pc = Game.powerCreeps[name];
        
        if(pc.memory.role == 'pc' && pc.memory.class == 'op'){
            rolePcOperator.run(pc);
        }
    }

    //================= ROLE MODULE RUNS ========================
    for (let name in Game.creeps) {
        var creep = Game.creeps[name];
        var spwn = creep.memory.spawn;

        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        else if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        else if(creep.memory.role == 'runner'){
            roleRunner.run(creep);
        }
        else if (creep.memory.role == 'wallRepairer') {
            roleWallRepairer.run(creep);
        }
        else if (creep.memory.role == 'rangedAttacker') {
            roleRangedAttacker.run(creep);
        }
        else if(creep.memory.role == 'rangedAttacker2'){
            roleRangedAttacker2.run(creep);
        }
        else if (creep.memory.role == 'invader') {
            roleInvader.run(creep);
        }
        else if (creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        else if (creep.memory.role == 'roomSigner') {
            roleRoomSigner.run(creep);
        }
        else if (creep.memory.role == 'roomMiner') {
            roleRoomMiner.run(creep);
        }
        else if (creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        else if (creep.memory.role == 'LDH') {
            roleLDH.run(creep);
        }
        else if (creep.memory.role == 'mover') {
            roleMover.run(creep);
        }
        else if (creep.memory.role == 'stationaryHarvester' || creep.memory.role == 'stationaryUpgrader') {
            roleStationaryWorker.run(creep, spwn);
        }
        else if (creep.memory.role == 'labRat'){
            roleLabRat.run(creep);
        }
        else if (creep.memory.role == 'pBreaker' || creep.memory.role == 'pHealer' || creep.memory.role == 'pLooter'){
            rolePowerMiner.run(creep, spwn);
        }
        else if (creep.memory.role == 'RR'){
            roleRoomReserver.run(creep);
        }
        else if (creep.memory.role == 'pKeeper'){
            rolePowerSpawnKeeper.run(creep);
        }
        else if(creep.memory.role == 'dismantler'){
            roleDismantler.run(creep);
        }
        else if(creep.memory.role == 'gunRunner'){
            roleGunRunner.run(creep);
        }
        else if(creep.memory.role == 'fortifier'){
            roleFortifier.run(creep);
        }
        else if(creep.memory.role == 'defender'){
            roleDefender.run(creep);
        }
        else if(creep.memory.role == 'infestor'){
            roleInfestor.run(creep);
        }
        else if(creep.memory.role == 'warFighter'){
            roleWarFighter.run(creep);
        }
    }
    
    // ============== Per spawn counts ==========================
    for (let spawnName in Game.spawns) {
        let spawn = Game.spawns[spawnName];
        let creepsInRoom = spawn.room.find(FIND_MY_CREEPS);


        //==============AUTO-SPAWN CHECKS========================
        //builders
        /*var cSites = spawn.room.find(FIND_CONSTRUCTION_SITES);
        if(cSites.length > 0){
            //console.log(cSites.length);
            spawn.memory.minBuilders = 1;
        }
        else if(cSites.length == 0){
            spawn.memory.minBuilders = 0;
        }*/
/*
        //attackers 
        var enemies = spawn.room.find(FIND_HOSTILE_CREEPS);
        if(enemies.length > 0){
            spawn.memory.minDefenders = 1;
        }
        else if(enemies.length == 0){
            spawn.memory.minDefenders = 0;
        } */
        //==============ROOM ROLE COUNTS===========================

        var numberOfHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');
        var numberOfUpgraders = _.sum(creepsInRoom, (c) => c.memory.role == 'upgrader');
        var numberOfBuilders = _.sum(creepsInRoom, (c) => c.memory.role == 'builder');
        var numberOfRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'repairer');
        var numberOfWallRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'wallRepairer');
        var numberOfRangedAttackers = _.sum(Game.creeps, (c) => c.memory.role == 'rangedAttacker');
        var numberOfRangedAttackers2 = _.sum(Game.creeps, (c) => c.memory.role == 'rangedAttacker2');
        var numberOfInvaders = _.sum(Game.creeps, (c) => c.memory.role == 'invader');
        var numberOfMiners = _.sum(Game.creeps, (c) => c.memory.role == 'miner');
        var numberOfRoomSigners = _.sum(Game.creeps, (c) => c.memory.role == 'roomSigner');
        var numberOfRoomMiners = _.sum(creepsInRoom, (c) => c.memory.role == 'roomMiner' && (c.memory.mining == 'minerals' || c.memory.mining == 'energy'));
        var numberOfLDH_W4S18 = _.sum(Game.creeps, (c) => c.memory.role == 'LDH' && c.memory.home == 'W5S18' && c.memory.target == 'W4S18');
        var numberOfLDH_W5S17 = _.sum(Game.creeps, (c) => c.memory.role == 'LDH' && c.memory.home == 'W6S17' && c.memory.target == 'W5S17');
        var numberOfLDH_W5S19 = _.sum(Game.creeps, (c) => c.memory.role == 'LDH' && c.memory.home == 'W6S19' && c.memory.target == 'W5S19');
        var numberOfLDH_W7S19 = _.sum(Game.creeps, (c) => c.memory.role == 'LDH' && c.memory.home == 'W6S19' && c.memory.target == 'W7S19');
        var numberOfLDH_W7S18 = _.sum(Game.creeps, (c) => c.memory.role == 'LDH' && c.memory.home == 'W7S17' && c.memory.target == 'W7S18');
        var numberOfLDH_W7S16 = _.sum(Game.creeps, (c) => c.memory.role == 'LDH' && c.memory.home == 'W7S17' && c.memory.target == 'W7S16');
        var numberOfLDH_W1S19 = _.sum(Game.creeps, (c) => c.memory.role == 'LDH' && c.memory.home == 'W1S18' && c.memory.target == 'W1S19');
        var numberOfClaimers = _.sum(Game.creeps, (c) => c.memory.role == 'claimer');
        var numberOfMovers = _.sum(creepsInRoom, (c) => c.memory.role == 'mover');
        var numStatHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryHarvester');
        var numStatUpgraders = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryUpgrader');
        var numPowerBreakers = _.sum(Game.creeps, (c) => c.memory.role == 'pBreaker');
        var numPowerHealers = _.sum(Game.creeps, (c) => c.memory.role == 'pHealer');
        var numPowerLooters = _.sum(Game.creeps, (c) => c.memory.role == 'pLooter');
        var numLabRats = _.sum(creepsInRoom, (c) => c.memory.role == 'labRat');
        var numPKeepers = _.sum(creepsInRoom, (c) => c.memory.role == 'pKeeper');
        var numStatHarvRm1A = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryHarvester' && (c.memory.src == 'a' || c.memory.src == '5bbcac8e9099fc012e635b46') && (c.memory.spawn == 'Spawn1' || c.memory.spawn == 'Spawn4' || c.memory.spawn == 'Spawn8'));
        var numStatHarvRm1B = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryHarvester' && (c.memory.src == 'b' || c.memory.src == '60548a12ececdb2e52f6dae7') && (c.memory.spawn == 'Spawn1' || c.memory.spawn == 'Spawn4' || c.memory.spawn == 'Spawn8'));
        var numStatHarvRm2A = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryHarvester' && (c.memory.src == 'a' || c.memory.src == '5bbcac9b9099fc012e635d76') && (c.memory.spawn == 'Spawn2' || c.memory.spawn == 'Spawn5'));
        var numStatHarvRm2B = _.sum(creepsInRoom, (c) => c.memory.role == 'stationaryHarvester' && (c.memory.src == 'b' || c.memory.src == '5bbcac9b9099fc012e635d74') && (c.memory.spawn == 'Spawn2' || c.memory.spawn == 'Spawn5'));
        var numGunRunners = _.sum(creepsInRoom, (c) => c.memory.role == 'gunRunner');
        var numFortifier = _.sum(creepsInRoom, (c) => c.memory.role == 'fortifier');
        var numRunners = _.sum(creepsInRoom, (c) => c.memory.role == 'runner');
        var numDefenders = _.sum(creepsInRoom, (c) => c.memory.role == 'defender');
        var numInfestorsRm5 = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && (c.memory.spawn == 'Spawn7' || c.memory.spawn == 'Spawn10'));
        var numInfestorsRm1 = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && (c.memory.spawn == 'Spawn1' || c.memory.spawn == 'Spawn4' || c.memory.spawn == 'Spawn8'));
        var numInfestorsRm2 = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && (c.memory.spawn == 'Spawn2' || c.memory.spawn == 'Spawn5' || c.memory.spawn == 'Spawn9'));
        var numInfestorsRm3 = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && (c.memory.spawn == 'Spawn3'));
        var numInfestorsRm4 = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && (c.memory.spawn == 'Spawn6' || c.memory.spawn == 'Spawn9'));
        var numWarriors = _.sum(Game.creeps, (c) => c.memory.role == 'warFighter' && c.memory.spec == 'warrior');
        var numMedics = _.sum(Game.creeps, (c) => c.memory.role == 'warFighter' && c.memory.spec == 'medic');
        var numDestroyers = _.sum(Game.creeps, (c) => c.memory.role == 'warFighter' && c.memory.spec == 'destroyer');
        var numInfantry = _.sum(Game.creeps, (c) => c.memory.role == 'warFighter' && c.memory.spec == 'infantry');

        //===================== Set energy properties per spawn =========================
        var aEnergy = spawn.room.energyAvailable;
        var octEnergy = spawn.room.energyCapacityAvailable/8;
        var qEnergy = spawn.room.energyCapacityAvailable/4;
        var halfEnergy = spawn.room.energyCapacityAvailable/2;
        var name = undefined;

        //console.log(spawnName + ': ' + spawn.room.energyCapacityAvailable);

        //====================== Spawn creeps ============================================
        if (numberOfHarvesters < spawn.memory.minHarvesters) {
            if (spawnName == 'Spawn1' || spawnName == 'Spawn4' || spawnName == 'Spawn8') {
                //console.log(spawnName + ': spawning harvester');
                name = spawn.createCustomCreep(1000, 'harvester', spawnName, true, false);
                //name = spawn.createRm1Creep(spawnName, 'harvester');
            }
            else if(spawnName == 'Spawn2' || spawnName == 'Spawn5'){
                name = spawn.createCustomCreep(1000, 'harvester', spawnName, true, false, false);
            }
            else if (spawnName == 'Spawn3') {
                //console.log(spawnName + ': spawning harvester');
                name = spawn.createCustomCreep(halfEnergy, 'harvester', spawnName, false, false);
            }
            else if (spawnName == 'Spawn6'){
                name = spawn.createCustomCreep(1200, 'harvester', spawnName, false, false);
            }
            else if (spawnName == 'Spawn7') {
                name = spawn.createCustomCreep(halfEnergy, 'harvester', spawnName, false, false);
            }
            if (name == ERR_NOT_ENOUGH_ENERGY && numberOfHarvesters == 0) {
                //console.log(spawnName + ': emergency spawn of harvester');
                name = spawn.createCustomCreep(spawn.room.energyAvailable, 'harvester', spawnName, false, false);
            }
        }
        else if(numRunners < spawn.memory.minRunners){
            name = spawn.createRunner(spawnName);
        }
        else if (numberOfClaimers < spawn.memory.minClaimers) {
            if(spawnName == 'Spawn3'){
                name = spawn.createClaimer(1000, 'claimer', spawnName, '3', 'none', false, false, false);
            }
            else{
                name = spawn.createClaimer(2400, 'claimer', spawnName, '3', 'none', false, true, false);
            }
        }
        else if(numWarriors < spawn.memory.minWarriors){
            name = spawn.createWarrior(spawnName, false, 'none', 'none');
        }
        else if(numInfantry < spawn.memory.minInfantry){
            name = spawn.createInfantry(halfEnergy, spawnName, false, 'none');
        }
        else if(numMedics < spawn.memory.minMedics){
            name = spawn.createMedic(spawnName, false, 'none', 'none', 'none');
        }
        else if(numDestroyers < spawn.memory.minDestroyers){
            name = spawn.createDestroyer(spawnName, 'none', false);
        }
        else if(numGunRunners < spawn.memory.minGunRunners){
            name = spawn.createGunRunner(spawnName);
        }
        else if(numFortifier < spawn.memory.minFortifier){
            if(spawnName == 'Spawn1' || spawnName == 'Spawn4' || spawnName == 'Spawn8'){
                name = spawn.createFortifier(spawnName, 'terminal', true, 't3build');
            }
            else if(spawnName == 'Spawn2' || spawnName == 'Spawn5'){
                name = spawn.createFortifier(spawnName, 'terminal', true, 't3build');
            }
            else{
                name = spawn.createFortifier(spawnName, 'storage', false, 'none');
            }
        }
        else if (numberOfMovers < spawn.memory.minMovers) {
            if(spawnName == 'Spawn1' || spawnName == 'Spawn4' || spawnName == 'Spawn8'){
                name = spawn.createMover(spawnName, 'energy', 'set_pickup', 'set_drop', 'set_lab', false);
            }
            else{
                name = spawn.createMover(spawnName, 'energy', 'set_pickup', 'set_dropoff', 'set_lab', false);
            }
        }
        else if (numLabRats < spawn.memory.minLabRats) {
            //THIS IS WHERE YOU SET WHAT YOU WANT EACH OF THE ROOMS LABRAT TO BE MAKING!
            if(spawnName == 'Spawn1' || spawnName == 'Spawn4' || spawnName == 'Spawn8'){
                name = spawn.createLabRat(spawnName, 'batch_XLH2O');
            }
            else if(spawnName == 'Spawn2' || spawnName == 'Spawn5'){
                name = spawn.createLabRat(spawnName, 'none');
            }
            else if(spawnName == 'Spawn6'){
                name = spawn.createLabRat(spawnName, 'xuho2');
            }
            else if(spawnName == 'Spawn3'){
                name = spawn.createLabRat(spawnName, 'UH2O_UHO2');
            }
            else if(spawnName == 'Spawn7'){
                name = spawn.createLabRat(spawnName, 'XUH2O');
            }
        }
        else if (numPKeepers < spawn.memory.minPKeepers){
            name=spawn.createPowerSpawnKeeper(spawnName);
        }
        else if (numberOfInvaders < spawn.memory.minInvaders) {
            //console.log(spawnName + ': next spawn, invader.');
            name = spawn.createInvader('invader', spawnName, 'target1');
        }
        else if (numberOfMiners < spawn.memory.minMiners) {
            if (spawnName == 'Spawn1' || spawnName == 'Spawn4' || spawnName == 'Spawn2' || spawnName == 'Spawn5' || spawnName == 'Spawn8') {
                //console.log(spawnName + ': next spawn, miner.');
                name = spawn.createMiner1(spawnName);
            }
            else {
                //console.log(spawnName + ': next spawn, miner.');
                name = spawn.createCustomCreep(qEnergy, 'miner', spawnName, false, false);
            }
        }
        else if(numDefenders < spawn.memory.minDefenders){
            name = spawn.createDefender(qEnergy, spawnName, 'none');
        }
        else if (numPowerBreakers < spawn.memory.minPowerBreakers) {
            name = spawn.createPowerBreaker(spawnName);
        }
        else if (numPowerHealers < spawn.memory.minPowerHealers){
            name = spawn.createPowerHealer(spawnName);
        }
        else if (numPowerLooters < spawn.memory.minPowerLooters){
            name = spawn.createPowerLooter(spawnName);
        }
        else if(numStatHarvRm1A < spawn.memory.minStatHarvRm1A){
            name = spawn.createStatHarvRm1A(spawnName);
        }
        else if(numStatHarvRm1B < spawn.memory.minStatHarvRm1B){
            name = spawn.createStatHarvRm1B(spawnName);
        }
        else if(numStatHarvRm2A < spawn.memory.minStatHarvRm2A){
            name = spawn.createStatHarvRm2A(spawnName);
        }
        else if(numStatHarvRm2B < spawn.memory.minStatHarvRm2B){
            name = spawn.createStatHarvRm2B(spawnName);
        }
        else if (numStatUpgraders < spawn.memory.minStationaryUpgraders) {
            if(spawnName == 'Spawn1' || spawnName == 'Spawn4' || spawnName == 'Spawn8'){
                name = spawn.createStationaryUpgrader(800, 'stationaryUpgrader', spawnName, 'upgrade', false, false);
            }
            else if(spawnName == 'Spawn2' || spawnName == 'Spawn5'){
                name = spawn.createStationaryUpgrader(500, 'stationaryUpgrader', spawnName, 'upgrade', false, true);
            }
            else if(spawnName == 'Spawn7'){
                name = spawn.createStatUpgrader(800, 'stationaryUpgrader', spawnName);
            }
            else if(spawnName == 'Spawn6'){
                name = spawn.createStatUpgrader(octEnergy, 'stationaryUpgrader', spawnName);
            }
            else{
                name = spawn.createStatUpgrader(qEnergy, 'stationaryUpgrader', spawnName);                
            }
        }
        else if (numStatHarvesters < spawn.memory.minStationaryHarvesters) {
            if(spawnName == 'Spawn9' || spawnName == 'Spawn6'){
                name = spawn.createStatHarvesterRm4('stationaryHarvester', spawnName);
                //name = spawn.createStatHarvester(halfEnergy, 'stationaryHarvester', spawnName);
            }
            else if(spawnName == 'Spawn1' || spawnName == 'Spawn4'){
                name = spawn.createStatHarvesterRm1('stationaryHarvester', spawnName);
            }
            else if(spawnName == 'Spawn2' || spawnName == 'Spawn5'){
                name = spawn.createStatHarvRm2B('stationaryHarvester', spawnName);
            }
            else{
                name = spawn.createStatHarvester(qEnergy, 'stationaryHarvester', spawnName);
            }
        }
        else if (numberOfRoomMiners < spawn.memory.minRoomMiners) {
            if(spawnName == 'Spawn7'){
                name = spawn.createRoomMiner(halfEnergy, 'roomMiner', spawnName);
            }
            else if(spawnName == 'Spawn3'){
                name = spawn.createRoomMiner(1000, 'roomMiner', spawnName);
            }
            else if(spawnName == 'Spawn6'){
                name = spawn.createRoomMiner(800, 'roomMiner', spawnName);
            }
            else if(spawnName == 'Spawn4' || spawnName == 'Spawn1' || spawnName == 'Spawn8'){
                //name = spawn.createRoomMiner(1000, 'roomMiner', spawnName);
                name = spawn.createRm1Creep(spawnName, 'roomMiner');
            }
            else{
                name = spawn.createRoomMiner(qEnergy, 'roomMiner', spawnName);
            }
        }
        else if (numberOfBuilders < spawn.memory.minBuilders) {
            if(spawnName == 'Spawn7'){
                name = spawn.createCustomCreep(halfEnergy, 'builder', spawnName, false, false);
            }
            else if(spawnName == 'Spawn1' || spawnName == 'Spawn4' || spawnName == 'Spawn8'){
                name = spawn.createCustomCreep(1600, 'builder', spawnName, false, false);
                //name = spawn.createBoostedBuilder(spawnName);
            }
            else if(spawnName == 'Spawn6'){
                name = spawn.createCustomCreep(1200, 'builder', spawnName, false, false);
            }
            else if(spawnName == 'Spawn3'){
                name = spawn.createCustomCreep(1200, 'builder', spawnName, false, false);
            }
            else{
                name = spawn.createCustomCreep(qEnergy, 'builder', spawnName, false, false);
            }
        }
        else if (numberOfUpgraders < spawn.memory.minUpgraders) {
            if(spawnName == 'Spawn7'){
                name = spawn.createCustomCreep(halfEnergy, 'upgrader', spawnName, false, false);
            }
            else if(spawnName == 'Spawn1' || spawnName == 'Spawn4' || spawnName == 'Spawn8'){
                //name = spawn.createRm1Creep(spawnName, 'upgrader');
                name = spawn.createCustomCreep(1200, 'upgrader', spawnName, false, false);
            }
            else if(spawnName == 'Spawn6'){
                name = spawn.createCustomCreep(octEnergy, 'upgrader', spawnName, false, false);
            }
            else if(spawnName == 'Spawn3'){
                name = spawn.createCustomCreep(aEnergy, 'upgrader', spawnName, false, false);
            }
            else{
                name = spawn.createCustomCreep(qEnergy, 'upgrader', spawnName, false, false);
            }
        }
        else if (numberOfRepairers < spawn.memory.minRepairers) {
            if(spawnName == 'Spawn7'){
                name = spawn.createCustomCreep(halfEnergy, 'repairer', spawnName, false, false);
            }
            else if(spawnName == 'Spawn1' || spawnName == 'Spawn4' || spawnName == 'Spawn8'){
                name = spawn.createRm1Creep(spawnName, 'repairer', true, false);
                //name = spawn.createCustomCreep(1000, 'repairer', spawnName);
            }
            else if(spawnName == 'Spawn6'){
                name = spawn.createCustomCreep(octEnergy, 'repairer', spawnName, false, false);
            }
            else if(spawnName == 'Spawn3'){
                name = spawn.createCustomCreep(600, 'repairer', spawnName, false, false);
            }
            else{
                name = spawn.createCustomCreep(qEnergy, 'repairer', spawnName, false, false);
            }
        }
        else if(numInfestorsRm5 < spawn.memory.minInfestorsRm5){
            name = spawn.createInfestor(spawnName);
        }
        else if(numInfestorsRm1 < spawn.memory.minInfestorsRm1){
            name = spawn.createInfestor(spawnName);
        }
        else if(numInfestorsRm2 < spawn.memory.minInfestorsRm2){
            name = spawn.createInfestor(spawnName);
        }
        else if(numInfestorsRm3 < spawn.memory.minInfestorsRm3){
            name = spawn.createInfestorLite(spawnName);
        }
        else if(numInfestorsRm4 < spawn.memory.minInfestorsRm4){
            name = spawn.createInfestor(spawnName);
        }
        else if(numberOfLDH_W7S18 < spawn.memory.minLDH_W7S18){
            name = spawn.createLDH(halfEnergy, 'LDH', spawnName, 'W7S17', 'W7S18');
        }
        else if(numberOfLDH_W1S19 < spawn.memory.minLDH_W1S19){
            name = spawn.createLDH(halfEnergy, 'LDH', spawnName, 'W1S18', 'W1S19');
        }
        else if(numberOfLDH_W7S16 < spawn.memory.minLDH_W7S16){
            name = spawn.createLDH(halfEnergy, 'LDH', spawnName, 'W7S17', 'W7S16');
        }
        else if (numberOfLDH_W4S18 < spawn.memory.minLDH_W4S18) {
            //console.log(spawnName + ': spawning ldh w4s18');
            name = spawn.createLDH(qEnergy, 'LDH', spawnName, 'W5S18', 'W4S18');
        }
        else if (numberOfLDH_W5S17 < spawn.memory.minLDH_W5S17) {
            if(spawnName == 'Spawn6'){
                name = spawn.createLDH(octEnergy, 'LDH', spawnName, 'W6S17', 'W5S17')
            }
        }
        else if (numberOfLDH_W5S19 < spawn.memory.minLDH_W5S19) {
            //console.log(spawnName + ': spawning ldh W5S19');
            name = spawn.createLDH(qEnergy, 'LDH', spawnName, 'W6S19', 'W5S19');
        }
        else if (numberOfLDH_W7S19 < spawn.memory.minLDH_W7S19) {
            //console.log(spawnName + ': spawning ldh w7s19');
            name = spawn.createLDH(qEnergy, 'LDH', spawnName, 'W6S19', 'W7S19');
        }
        else if (numberOfRoomSigners < spawn.memory.minRoomSigners) {
            //console.log(spawnName + ': next spawn, room signer.');
            name = spawn.createRoomSigner(spawnName);
        }
        else if (numberOfRangedAttackers < spawn.memory.minRangedAttackers) {
            //console.log(spawnName + ': next spawn, ranged attacker.');
            name = spawn.createRangedAttacker(2800, 'rangedAttacker', spawnName);
        }
        else if (numberOfRangedAttackers2 < spawn.memory.minRangedAttackers2) {
            //console.log(spawnName + ': next spawn, ranged attacker.');
            name = spawn.createRangedAttacker(2800, 'rangedAttacker2', spawnName);
        }
        else if (numberOfWallRepairers < spawn.memory.minWallRepairer) {
            if(spawnName == 'Spawn1' || spawnName == 'Spawn4' || spawnName == 'Spawn8'){
                name = spawn.createCustomCreep(octEnergy, 'wallRepairer', spawnName, false, false);
            }
            else{
            name = spawn.createCustomCreep(qEnergy, 'wallRepairer', spawnName, false, false);    
            }
            //console.log(spawnName + ': next spawn, wall repairer.');
            //name = spawn.createCustomCreep(qEnergy, 'wallRepairer', spawnName);
        }
        else if (numberOfHarvesters > spawn.memory.minHarvesters && numberOfHarvesters < spawn.memory.maxHarvesters) {
            name = spawn.createCustomCreep(800, 'harvester', spawnName, false, false);
            //console.log(spawnName + ': minimums met, harvesters not at max, spawning harvester...');
        }
/*
        //================= Console ticker ==================================
        if (Math.floor(Game.time) % 15 === 0) {
            console.log('=======' + spawnName + ' CURRENT NUMBERS =======');
            console.log(spawnName + ' Harvesters: ' + numberOfHarvesters);
            console.log(spawnName + ' Upgraders: ' + numberOfUpgraders);
            console.log(spawnName + ' Builders: ' + numberOfBuilders);
            console.log(spawnName + ' Repairers: ' + numberOfRepairers);
            console.log(spawnName + ' Wall Repairers: ' + numberOfWallRepairers);
            console.log(spawnName + ' Room Miners: ' + numberOfRoomMiners);
            console.log(spawnName + ' Room Movers: ' + numberOfMovers);
            console.log(spawnName + ' LDH_W4S18: ' + numberOfLDH_W4S18);
            console.log('-------------------------------------------------------');
            console.log(spawnName + ' Energy available: ' + aEnergy + '/' + fullEnergy);
            console.log('-------------------------------------------------------');
        }*/
    }
};