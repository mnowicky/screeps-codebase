function rm1ShootEnemies(){
    var guns = Game.rooms.W6S18.find(FIND_STRUCTURES, {
        filter: (g) => g.structureType == STRUCTURE_TOWER
    });
    for(let gun of guns){
        var enemy = gun.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
        //var enemies = gun.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
        //var enemy = attackNext(enemies);
        gun.attack(enemy[0]);
    }
}

function rm1Guns() {
    var turrets = Game.rooms.W6S18.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    var randomTarget = Game.rooms.W6S18.memory.towerAttackRandom;
    var repairWalls = Game.rooms.W6S18.memory.towerRepairWalls;
    var repairRoom = Game.rooms.W6S18.memory.towerRepairRoom;
    
    for (let turret of turrets) {
        
        
        //==========================
        /*var target = turret.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (target != undefined) {
            turret.attack(target);
        }*/
        //====================
        
        if(randomTarget){
            //find array of enemies in room
            var enemies = turret.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
            //below finds a random enemy of those in the room
            var enemy = attackNext(enemies);
            //if (random enemy)
            if(enemy){
                //attack the first of the randomly selected enemies
                rm1ShootEnemies();
                return false;
            }
        }
        else{
            var turrets = Game.rooms.W6S18.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_TOWER
            });
            for (let turret of turrets) {
                var target = turret.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if (target != undefined) {
                    turret.attack(target);
                }
            }
        } 
        
        if(repairWalls){
            var highWalls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (hw) => (hw.structureType == STRUCTURE_WALL || hw.structureType == STRUCTURE_RAMPART) && hw.hits < 5000000
            });
            var walls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (w) => (w.structureType == STRUCTURE_WALL || w.structureType == STRUCTURE_RAMPART) && w.hits < 1500000
            });
            var lowWalls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (lw) => (lw.structureType == STRUCTURE_WALL || lw.structureType == STRUCTURE_RAMPART) && lw.hits < 10000
            })
            var highWall = repairNext(highWalls);
            var lowWall = repairNext(lowWalls);
            var wall = repairNext(walls);
            
            if(lowWall){
                if(turret.repair(lowWall) != OK){
                    console.log('trouble repairing low walls!');
                }
            }
            /*else if(wall){
                if(turret.repair(wall) != OK){
                    console.log('trouble repairing regular walls!');
                }
            }
            /*else if(highWall){
                if(turret.repair(highWall) != OK){
                    console.log('cannot repair high wall!');
                }
            } */
        }
        
        if(repairRoom){
            var structures = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
            });
            var struct = repairNext(structures);
            if(struct){
                if(turret.repair(struct) != OK){
                    console.log('R1 turret repair error: '+turret.repair(struct));
                }
            }
        }
    }
};

function rm2ShootEnemies(){
    var guns = Game.rooms.W5S18.find(FIND_STRUCTURES, {
        filter: (g) => g.structureType == STRUCTURE_TOWER
    });
    for(let gun of guns){
        var enemies = gun.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
        var enemy = attackNext(enemies);
        gun.attack(enemy);
    }
}

function rm2Guns() {    
    var turrets = Game.rooms.W5S18.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    var randomTarget = Game.rooms.W5S18.memory.towerAttackRandom;
    var repairWalls = Game.rooms.W5S18.memory.towerRepairWalls;
    var repairRoom = Game.rooms.W5S18.memory.towerRepairRoom;
    
    for (let turret of turrets) {
        
        
        if(randomTarget){
            var enemies = turret.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
            var enemy = attackNext(enemies);
            if(enemy){
                rm2ShootEnemies();
                return false;
            }
        }
        else{
            var r2guns = Game.rooms.W5S18.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_TOWER
            });
            for (let r2gun of r2guns) {
                var target = r2gun.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if (target != undefined) {
                    r2gun.attack(target);
                }
            }
        }
        
        if(repairWalls){
            var highWalls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (hw) => (hw.structureType == STRUCTURE_WALL || hw.structureType == STRUCTURE_RAMPART) && hw.hits < 5000000
            });
            var walls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (w) => (w.structureType == STRUCTURE_WALL || w.structureType == STRUCTURE_RAMPART) && w.hits < 1500000
            });
            var lowWalls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (lw) => (lw.structureType == STRUCTURE_WALL || lw.structureType == STRUCTURE_RAMPART) && lw.hits < 1000000
            })
            var highWall = repairNext(highWalls);
            var lowWall = repairNext(lowWalls);
            var wall = repairNext(walls);
            
            if(lowWall){
                if(turret.repair(lowWall) != OK){
                    console.log('trouble repairing low walls!');
                }
            }
            /*else if(wall){
                if(turret.repair(wall) != OK){
                    console.log('trouble repairing regular walls!');
                }
            }
            /*else if(highWall){
                if(turret.repair(highWall) != OK){
                    console.log('cannot repair high wall!');
                }
            } */
        }
        
        if(repairRoom){
            var structures = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
            });
            var struct = repairNext(structures);
            if(struct){
                if(turret.repair(struct) != OK){
                    console.log('R2 turret repair error: '+turret.repair(struct));
                }
            }
        }
    }
    
    
    
};

function rm3Guns() {
    var turrets = Game.rooms.W1S18.find(FIND_STRUCTURES, {
        filter: (g) => g.structureType == STRUCTURE_TOWER
    });
    var randomTargetting = Game.rooms.W1S18.memory.towerAttackRandom;
    var concentratedTargetting = Game.rooms.W1S18.memory.towerAttackConcentrated;
    var closestTargetting = Game.rooms.W1S18.memory.towerAttackClosest;
    var repairWalls = Game.rooms.W1S18.memory.towerRepairWalls;
    var repairStructures = Game.rooms.W1S18.memory.towerRepairStructures;
    var repairAll = Game.rooms.W1S18.memory.towerRepairAll;
    var randomRepair = Game.rooms.W1S18.memory.randomRepair;
    var secLevel = Game.rooms.W1S18.memory.securityLevel;


    //ENERMY ENGAGEMENT SETTINGS
    if(randomTargetting == true){
        Game.rooms.W1S18.memory.towerAttackClosest = false;
        Game.rooms.W1S18.memory.towerAttackConcentrated = false;
        Game.rooms.W1S18.memory.towerAttackRandom = true;
    }
    else if(concentratedTargetting == true){
        Game.rooms.W1S18.memory.towerAttackClosest = false;
        Game.rooms.W1S18.memory.towerAttackRandom = false;
        Game.rooms.W1S18.memory.towerAttackConcentrated = true;      
    }
    else if(closestTargetting == true){
        Game.rooms.W1S18.memory.towerAttackRandom = false;
        Game.rooms.W1S18.memory.towerAttackConcentrated = false;
        Game.rooms.W1S18.memory.towerAttackClosest = true;    
    }
    else if(concentratedTargetting == false && randomTargetting == false && closestTargetting == false){
        Game.rooms.W1S18.memory.towerAttackConcentrated = true;
        Game.rooms.W1S18.memory.towerAttackRandom = false;
        Game.rooms.W1S18.memory.towerAttackClosest = false;
    }

    //ROOM REPAIR SETTINGS
    if(repairWalls == true){
        Game.rooms.W1S18.memory.towerRepairStructures = false;
        Game.rooms.W1S18.memory.towerRepairWalls = true;
    }
    else if(repairStructures == true){
        Game.rooms.W1S18.memory.towerRepairWalls = false;
        Game.rooms.W1S18.memory.towerRepairStructures = true;
    }
    else if(repairAll == true){
        Game.rooms.W1S18.memory.towerRepairWalls = true;
        Game.rooms.W1S18.memory.towerRepairStructures = true;
    }

    //ENEMY ENGAGEMENT
    if(concentratedTargetting){
        for (let turret of turrets){
            var enemy = turret.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
            if(enemy){
                turret.attack(enemy[0]);
                //return false;
            }
        }
    }
    else if(randomTargetting){
        for (let turret of turrets){
            var enemies = turret.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
            if(enemies.length > 0){
                var enemy = selectRandom(enemies);
                turret.attack(enemy);
                //or, turret.attack(enemy[0]);
            }
        }
    }
    else if(closestTargetting){
        for(let turret of turrets){
            var enemy = turret.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(enemy){
                turret.attack(enemy);
                return false;
            }
        }
    }

    //ROOM REPAIR
    if(repairWalls){
        if(randomRepair == true){
            //console.log('am I working?');
            for(let turret of turrets){
                var highWalls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                    filter: (hw) => (hw.structureType == STRUCTURE_WALL || hw.structureType == STRUCTURE_RAMPART) && hw.hits < 50000
                });
                var walls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                    filter: (w) => (w.structureType == STRUCTURE_WALL || w.structureType == STRUCTURE_RAMPART) && w.hits < 1500000
                });
                var lowWalls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                    filter: (lw) => (lw.structureType == STRUCTURE_WALL || lw.structureType == STRUCTURE_RAMPART) && lw.hits < 10000000
                });

                var lowWall = repairNext(lowWalls);
                var wall = repairNext(walls);
                var highWall = repairNext(highWalls);

                if(secLevel == 'low' && lowWall){
                    if(turret.repair(lowWall)!=OK){
                        console.log('r3 cannot repair low wall');
                    }
                }
                else if((secLevel == 'med' || secLevel == 'medium') && wall){
                    if(turret.repair(wall)!=OK){
                        console.log('r3 cannot repair wall');
                    }
                }
                else if(secLevel == 'high' && highWall){
                    if(turret.repair(highWall)!=OK){
                        console.log('r3 cannot repair high wall')
                    }
                }
                else{
                    if(turret.repair(wall)!=OK){
                        console.log('r3 cannot repair wall');
                    }
                }
            }
        }
        else if(randomRepair == false){
            for(let turret of turrets){
                var highWall = turret.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (hw) => (hw.structureType == STRUCTURE_WALL || hw.structureType == STRUCTURE_RAMPART) && hw.hits < 5000000
                });
                var wall = turret.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (w) => (w.structureType == STRUCTURE_WALL || w.structureType == STRUCTURE_RAMPART) && w.hits < 1500000
                });
                var lowWall = turret.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (lw) => (lw.structureType == STRUCTURE_WALL || lw.structureType == STRUCTURE_RAMPART) && lw.hits < 10000000
                });

                if(secLevel == 'low'){
                    if(lowWall){
                        if(turret.repair(lowWall)!=OK){
                            console.log('r3 cannot repair low wall');
                        }
                    }
                }
                else if(secLevel == 'med' || secLevel == 'medium'){
                    if(wall){
                        if(turret.repair(wall)!=OK){
                            console.log('r3 cannot repair wall');
                        }
                    }
                }
                else if(secLevel == 'high'){
                    if(highWall){
                        if(turret.repair(highWall)!=OK){
                            console.log('r3 cannot repair high wall')
                        }
                    }
                }
                else{
                    if(turret.repair(wall)!=OK){
                        console.log('r3 cannot repair wall');
                    }
                }
            }

        }

    }
    else if(repairStructures){
        if(randomRepair == true){
            for(let turret of turrets){
                var structures = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                    filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
                });

                var struct = repairNext(structures);
                if(struct){
                    if(turret.repair(struct)!=OK){
                        console.log('r3 cannot repair random structure: ' + struct);
                    }
                }
            }
        }
        else if(randomRepair == false){
            for(let turret of turrets){
                var struct = turret.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
                });

                if(struct){
                    if(turret.repair(struct)!=OK){
                        console.log('r3 cannot repair structure: ' + struct);
                    }
                }
            }
        }
    }
    else if(repairAll){
        if(randomRepair == true){
            console.log('im working at least');
            for(let turret of turrets){
                var structures = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                    filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
                });
                var highWalls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                    filter: (hw) => (hw.structureType == STRUCTURE_WALL || hw.structureType == STRUCTURE_RAMPART) && hw.hits < 5000000
                });
                var walls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                    filter: (w) => (w.structureType == STRUCTURE_WALL || w.structureType == STRUCTURE_RAMPART) && w.hits < 1500000
                });
                var lowWalls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                    filter: (lw) => (lw.structureType == STRUCTURE_WALL || lw.structureType == STRUCTURE_RAMPART) && lw.hits < 10000000
                });
    
                var struct = repairNext(structures);
                var lowWall = repairNext(lowWalls);
                var wall = repairNext(walls);
                var highWall = repairNext(highWalls);
    
                
                if(secLevel == 'low' && lowWall){
                    if(turret.repair(lowWall)!=OK){
                        console.log('r3 cannot repair low wall');
                    }
                }
                else if((secLevel == 'med' || secLevel == 'medium') && wall){
                    if(turret.repair(wall)!=OK){
                        console.log('r3 cannot repair wall');
                    }
                }
                else if(secLevel == 'high' && highWall){
                    if(turret.repair(highWall)!=OK){
                        console.log('r3 cannot repair high wall')
                    }
                }
                else{
                    if(turret.repair(wall)!=OK){
                        console.log('r3 cannot repair wall');
                    }
                }
    
                if(struct){
                    if(turret.repair(struct)!=OK){
                        console.log('r3 cannot repair random structure: ' + struct);
                    }
                }
            }
        }
        else if(randomRepair == false){
            for(let turret of turrets){
                var struct = turret.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART
                });
                var highWall = turret.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (hw) => (hw.structureType == STRUCTURE_WALL || hw.structureType == STRUCTURE_RAMPART) && hw.hits < 5000000
                });
                var wall = turret.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (w) => (w.structureType == STRUCTURE_WALL || w.structureType == STRUCTURE_RAMPART) && w.hits < 1500000
                });
                var lowWall = turret.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (lw) => (lw.structureType == STRUCTURE_WALL || lw.structureType == STRUCTURE_RAMPART) && lw.hits < 10000000
                });

                if(struct){
                    if(turret.repair(struct)!=OK){
                        console.log('r3 cannot repair structure: ' + struct);
                    }
                }

                if(secLevel == 'low' && lowWall){
                    if(turret.repair(lowWall)!=OK){
                        console.log('r3 cannot repair low wall');
                    }
                }
                else if((secLevel == 'med' || secLevel == 'medium') && wall){
                    if(turret.repair(wall)!=OK){
                        console.log('r3 cannot repair wall');
                    }
                }
                else if(secLevel == 'high' && highWall){
                    if(turret.repair(highWall)!=OK){
                        console.log('r3 cannot repair high wall')
                    }
                }
                else{
                    if(turret.repair(wall)!=OK){
                        console.log('r3 cannot repair wall');
                    }
                }
            }
        }
    }
}

function rm4ShootEnemies(){
    var guns = Game.rooms.W6S17.find(FIND_STRUCTURES, {
        filter: (g) => g.structureType == STRUCTURE_TOWER
    });
    for(let gun of guns){
        var enemies = gun.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
        var enemy = attackNext(enemies);
        gun.attack(enemy);
    }
}

function rm4Guns() {
    var turrets = Game.rooms.W6S17.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    var randomTarget = Game.rooms.W6S17.memory.towerAttackRandom;
    var repairWalls = Game.rooms.W6S17.memory.towerRepairWalls;
    var repairRoom = Game.rooms.W6S17.memory.towerRepairRoom;
    
    for (let turret of turrets) {
        
        
        if(randomTarget){
            var enemies = turret.pos.findInRange(FIND_HOSTILE_CREEPS, 50);
            var enemy = attackNext(enemies);
            if(enemy){
                rm4ShootEnemies();
                return false;
            }
        }
        else{
            var r4guns = Game.rooms.W6S17.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_TOWER
            });
            for (let r4gun of r4guns) {
                var target = r4gun.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if (target != undefined) {
                    r4gun.attack(target);
                }
            }
        }
        
        if(repairWalls){
            var walls = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (w) => (w.structureType == STRUCTURE_WALL || w.structureType == STRUCTURE_RAMPART) && w.hits < 30000
            });
            var wall = repairNext(walls);
            if(wall){
                if(turret.repair(wall) != OK){
                    //console.log(turret.repair(wall));
                }
            }
        }

        if(repairRoom){
            var struct = turret.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (s) => s.hits < s.hitsMax && (s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART)
            });
            //var struct = repairNext(structures);
            if(struct){
                if(turret.repair(struct[0]) != OK){
                    console.log('R4 turret repair error: '+turret.repair(struct[0]));
                }
            }
        }
    }
};

function rm5Guns(){
    var repairRoom = Game.rooms.W7S17.memory.towerRepairRoom;
    var cannons = Game.rooms.W7S17.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    var repairWalls = Game.rooms.W7S17.memory.towerRepairWalls;
    for (let cannon of cannons) {
        var nigga = cannon.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(nigga != undefined){
            cannon.attack(nigga);
        }

        if(repairWalls){
            var walls = cannon.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (w) => (w.structureType == STRUCTURE_WALL || w.structureType == STRUCTURE_RAMPART) && (w.hits < 3000000)
            });
            var wall = repairNext(walls);
            if(wall){
                if(cannon.repair(wall) != OK){
                }
            }
        }
        if(repairRoom){
            var struct = cannon.pos.findInRange(FIND_STRUCTURES, 50, {
                filter: (s) => s.hits < s.hitsMax && (s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART)
            });
            //var struct = repairNext(structures);
            if(struct){
                if(cannon.repair(struct[0]) != OK){
                    console.log('R4 turret repair error: '+cannon.repair(struct[0]));
                }
            }
        }
    }
};


function repairNext(walls) {
    var count = walls.length;
    for (var i = 0; i < count; i++) {
        return walls[Math.floor(Math.random() * walls.length)];
    }
};

function attackNext(enemies) {
    var count = enemies.length;
    for (var i = 0; i < count; i++) {
        return enemies[Math.floor(Math.random() * enemies.length)];
    }
};

function selectRandom(enemies) {
    var count = enemies.length;
    for (var i = 0; i < count; i++) {
        return enemies[Math.floor(Math.random() * enemies.length)];
    }
};

module.exports.rm1 = rm1Guns;
module.exports.rm2 = rm2Guns;
module.exports.rm3 = rm3Guns;
module.exports.rm4 = rm4Guns;
module.exports.rm5 = rm5Guns;