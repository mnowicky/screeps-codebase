//-----------------------TERMINALS FUNCTIONALITY---------------------
global.r5send  = (res, amt, rm) => Game.rooms.W7S17.terminal.send("res", amt, "rm");
global.r1send  = (res, amt, rm) => Game.rooms.W6S18.terminal.send("res", amt, "rm");

//----------------------MARKET FUNCTIONALITY--------------------------
global.deal = (id, amt, rm) => Game.market.deal(id, amt, rm);
global.r1deal = (id, amt) => Game.market.deal(id, amt, "W6S18");
global.r2deal = (id, amt) => Game.market.deal(id, amt, "W5S18");
//----------------------TOWERS FUNCTIONALITY-------------------------
global.t1wallrepair = (x) => Game.rooms.W6S18.memory.towerRepairWalls = x;
global.t1attackrandom = (x) => Game.rooms.W6S18.memory.towerAttackRandom = x;
global.t1randomtarget = () => Game.rooms.W6S18.memory.towerAttackRandom = true;
global.t1singletarget = () => Game.rooms.W6S18.memory.towerAttackRandom = false;
global.t1repairwalls = (x) => Game.rooms.W6S18.memory.towerRepairWalls = x;
global.t1repairroom = (x) => Game.rooms.W6S18.memory.towerRepairRoom = x;
global.t1roomrepair = () => Game.rooms.W6S18.memory.towerRepairRoom = true;
global.t1noroomrepair = () => Game.rooms.W6S18.memory.towerRepairRoom = false;

global.t4wallrepair = (x) => Game.rooms.W6S17.memory.towerRepairWalls = x;
global.t4repairwalls = (x) => Game.rooms.W6S17.memory.towerRepairWalls = x;
global.t4attackrandom = (x) => Game.rooms.W6S17.memory.towerAttackRandom = x;
global.t4randomtarget = () => Game.rooms.W6S17.memory.towerAttackRandom = true;
global.t4singletarget = () => Game.rooms.W6S17.memory.towerAttackRandom = false;

global.t3wallrepair = (x) => Game.rooms.W6S19.memory.towerRepairWalls = x;
global.t3repairwalls = (x) => Game.rooms.W6S19.memory.towerRepairWalls = x;
global.t3attackrandom = (x) => Game.rooms.W6S19.memory.towerAttackRandom = x;
global.t3randomtarget = () => Game.rooms.W6S19.memory.towerAttackRandom = true;
global.t3singletarget = () => Game.rooms.W6S19.memory.towerAttackRandom = false;

//------------------POWER CREEPS--------------------------------------
global.pcreep = () => Game.powerCreeps['OP1'].spawn(Game.getObjectById('6052dccd0eb514b3de9263c3'));
global.op1R2 = () => Game.powerCreeps['OP1'].spawn(Game.getObjectById('60676debd5ec72d6b18271a8'));
global.gregR2 = () => Game.powerCreeps['GREG'].spawn(Game.getObjectById('60676debd5ec72d6b18271a8'));
//--------------- Room Boosts -------------------------
global.r1boost = () => Game.rooms.W6S18.memory.wartime = true;
global.r1noboost = () => Game.rooms.W6S18.memory.wartime = false;
global.r2boost = () => Game.rooms.W5S18.memory.wartime = true;
global.r2noboost = () => Game.rooms.W5S18.memory.wartime = false;
global.r3boost = () => Game.rooms.W1S18.memory.wartime = true;
global.r3noboost = () => Game.rooms.W6S19.memory.wartime = false;
global.r4boost = () => Game.rooms.W6S17.memory.wartime = true;
global.r4noboost = () => Game.rooms.W6S17.memory.wartime = false;
global.r5boost = () => Game.rooms.W7S17.memory.wartime = true;
global.r5noboost = () => Game.rooms.W7S17.memory.wartime = false;
//-------------------- Spawn Role Counts ----------------
global.s1harv = (x) => Game.spawns.Spawn1.memory.minHarvesters = x;
global.s1upgr = (x) => Game.spawns.Spawn1.memory.minUpgraders = x;
global.s1build = (x) => Game.spawns.Spawn1.memory.minBuilders = x;
global.s1rep = (x) => Game.spawns.Spawn1.memory.minRepairers = x;
global.s1rm = (x) => Game.spawns.Spawn1.memory.minRoomMiners = x;
global.s1claim = (x) => Game.spawns.Spawn1.memory.minClaimers = x;
global.s1inv = (x) => Game.spawns.Spawn1.memory.minInvaders = x;
global.s1move = (x) => Game.spawns.Spawn1.memory.minMovers = x;
global.s1mine = (x) => Game.spawns.Spawn1.memory.minMiners = x;
global.s1ra = (x) => Game.spawns.Spawn1.memory.minRangedAttackers = x;
global.s1sig = (x) => Game.spawns.Spawn1.memory.minSigners = x;
global.s1wr = (x) => Game.spawns.Spawn1.memory.minWallRepairer = x;
global.s1sw = (x) => Game.spawns.Spawn1.memory.minStationaryWorkers = x;
global.s1sh = (x) => Game.spawns.Spawn1.memory.minStationaryHarvesters = x;
global.s1su = (x) => Game.spawns.Spawn1.memory.minStationaryUpgraders = x;

global.s2harv = (x) => Game.spawns.Spawn2.memory.minHarvesters = x;
global.s2upgr = (x) => Game.spawns.Spawn2.memory.minUpgraders = x;
global.s2build = (x) => Game.spawns.Spawn2.memory.minBuilders = x;
global.s2rep = (x) => Game.spawns.Spawn2.memory.minRepairers = x;
global.s2rm = (x) => Game.spawns.Spawn2.memory.minRoomMiners = x;
global.s2claim = (x) => Game.spawns.Spawn2.memory.minClaimers = x;
global.s2inv = (x) => Game.spawns.Spawn2.memory.minInvaders = x;
global.s2move = (x) => Game.spawns.Spawn2.memory.minMovers = x;
global.s2mine = (x) => Game.spawns.Spawn2.memory.minMiners = x;
global.s2ra = (x) => Game.spawns.Spawn2.memory.minRangedAttackers = x;
global.s2sig = (x) => Game.spawns.Spawn2.memory.minSigners = x;
global.s2wr = (x) => Game.spawns.Spawn2.memory.minWallRepairer = x;
global.s2sw = (x) => Game.spawns.Spawn2.memory.minStationaryWorkers = x;
global.s2sh = (x) => Game.spawns.Spawn2.memory.minStationaryHarvesters = x;
global.s2su = (x) => Game.spawns.Spawn2.memory.minStationaryUpgraders = x;

global.s3harv = (x) => Game.spawns.Spawn3.memory.minHarvesters = x;
global.s3upgr = (x) => Game.spawns.Spawn3.memory.minUpgraders = x;
global.s3build = (x) => Game.spawns.Spawn3.memory.minBuilders = x;
global.s3rep = (x) => Game.spawns.Spawn3.memory.minRepairers = x;
global.s3rm = (x) => Game.spawns.Spawn3.memory.minRoomMiners = x;
global.s3claim = (x) => Game.spawns.Spawn3.memory.minClaimers = x;
global.s3inv = (x) => Game.spawns.Spawn3.memory.minInvaders = x;
global.s3move = (x) => Game.spawns.Spawn3.memory.minMovers = x;
global.s3mine = (x) => Game.spawns.Spawn3.memory.minMiners = x;
global.s3ra = (x) => Game.spawns.Spawn3.memory.minRangedAttackers = x;
global.s3sig = (x) => Game.spawns.Spawn3.memory.minSigners = x;
global.s3wr = (x) => Game.spawns.Spawn3.memory.minWallRepairer = x;
global.s3sw = (x) => Game.spawns.Spawn3.memory.minStationaryWorkers = x;
global.s3sh = (x) => Game.spawns.Spawn3.memory.minStationaryHarvesters = x;
global.s3su = (x) => Game.spawns.Spawn3.memory.minStationaryUpgraders = x;

global.s4harv = (x) => Game.spawns.Spawn4.memory.minHarvesters = x;
global.s4upgr = (x) => Game.spawns.Spawn4.memory.minUpgraders = x;
global.s4build = (x) => Game.spawns.Spawn4.memory.minBuilders = x;
global.s4rep = (x) => Game.spawns.Spawn4.memory.minRepairers = x;
global.s4rm = (x) => Game.spawns.Spawn4.memory.minRoomMiners = x;
global.s4claim = (x) => Game.spawns.Spawn4.memory.minClaimers = x;
global.s4inv = (x) => Game.spawns.Spawn4.memory.minInvaders = x;
global.s4move = (x) => Game.spawns.Spawn4.memory.minMovers = x;
global.s4mine = (x) => Game.spawns.Spawn4.memory.minMiners = x;
global.s4ra = (x) => Game.spawns.Spawn4.memory.minRangedAttackers = x;
global.s4sig = (x) => Game.spawns.Spawn4.memory.minSigners = x;
global.s4wr = (x) => Game.spawns.Spawn4.memory.minWallRepairer = x;
global.s4sw = (x) => Game.spawns.Spawn4.memory.minStationaryWorkers = x;
global.s4sh = (x) => Game.spawns.Spawn4.memory.minStationaryHarvesters = x;
global.s4su = (x) => Game.spawns.Spawn4.memory.minStationaryUpgraders = x;

global.s5harv = (x) => Game.spawns.Spawn5.memory.minHarvesters = x;
global.s5upgr = (x) => Game.spawns.Spawn5.memory.minUpgraders = x;
global.s5build = (x) => Game.spawns.Spawn5.memory.minBuilders = x;
global.s5rep = (x) => Game.spawns.Spawn5.memory.minRepairers = x;
global.s5rm = (x) => Game.spawns.Spawn5.memory.minRoomMiners = x;
global.s5claim = (x) => Game.spawns.Spawn5.memory.minClaimers = x;
global.s5inv = (x) => Game.spawns.Spawn5.memory.minInvaders = x;
global.s5move = (x) => Game.spawns.Spawn5.memory.minMovers = x;
global.s5mine = (x) => Game.spawns.Spawn5.memory.minMiners = x;
global.s5ra = (x) => Game.spawns.Spawn5.memory.minRangedAttackers = x;
global.s5sig = (x) => Game.spawns.Spawn5.memory.minSigners = x;
global.s5wr = (x) => Game.spawns.Spawn5.memory.minWallRepairer = x;
global.s5sw = (x) => Game.spawns.Spawn5.memory.minStationaryWorkers = x;
global.s5sh = (x) => Game.spawns.Spawn5.memory.minStationaryHarvesters = x;
global.s5su = (x) => Game.spawns.Spawn5.memory.minStationaryUpgraders = x;

global.s6harv = (x) => Game.spawns.Spawn6.memory.minHarvesters = x;
global.s6upgr = (x) => Game.spawns.Spawn6.memory.minUpgraders = x;
global.s6build = (x) => Game.spawns.Spawn6.memory.minBuilders = x;
global.s6rep = (x) => Game.spawns.Spawn6.memory.minRepairers = x;
global.s6rm = (x) => Game.spawns.Spawn6.memory.minRoomMiners = x;
global.s6claim = (x) => Game.spawns.Spawn6.memory.minClaimers = x;
global.s6inv = (x) => Game.spawns.Spawn6.memory.minInvaders = x;
global.s6move = (x) => Game.spawns.Spawn6.memory.minMovers = x;
global.s6mine = (x) => Game.spawns.Spawn6.memory.minMiners = x;
global.s6ra = (x) => Game.spawns.Spawn6.memory.minRangedAttackers = x;
global.s6sig = (x) => Game.spawns.Spawn6.memory.minSigners = x;
global.s6wr = (x) => Game.spawns.Spawn6.memory.minWallRepairer = x;
global.s6sh = (x) => Game.spawns.Spawn6.memory.minStationaryHarvesters = x;
global.s6su = (x) => Game.spawns.Spawn6.memory.minStationaryUpgraders = x;

global.s5ldh_e = (x) => Game.spawns.Spawn5.memory.minLDH_W4S18 = x;
global.s2ldh_e = (x) => Game.spawns.Spawn2.memory.minLDH_W4S18 = x;
global.s5ldh_n = (x) => Game.spawns.Spawn5.memory.minLDH_W5S17 = x;
global.s2ldh_n = (x) => Game.spawns.Spawn2.memory.minLDH_W5S17 = x;
global.s3ldh_e = (x) => Game.spawns.Spawn3.memory.minLDH_W5S19 = x;
global.s3ldh_w = (x) => Game.spawns.Spawn3.memory.minLDH_W7S19 = x;

// ================= MOVERS ===========================
global.rsc = (c, r) => Game.creeps.c.memory.resource = r;
global.pup = (c, f) => Game.creeps.c.memory.pickup = f;
global.doff = (c, t) => Game.creeps.c.memory.dropoff = t;
global.pause = (c) => Game.creeps.c.memory.pause = true;
global.nopause = (c) => Game.creeps.c.memory.pause = false;

// ================== COUNTS ===========================

global.s1num = (x) => "Game.spawns.Spawn1.memory.min" + x;
