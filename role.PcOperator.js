var rolePcOperator = {
    run: function (pc) {
        if(pc.memory.name == 'GREG'){
            pcGreg(pc);
        }
        else if(pc.memory.name == 'OP1'){
            pcOp1(pc);
        }
    }
}

function pcGreg(pc){
    if(pc.store.getUsedCapacity() == 0){
        pc.memory.working = false;
    }
    else if(pc.store[RESOURCE_OPS] >= 100){
        pc.memory.working = true;
    }
        
        
    if(pc.memory.working == false){
        var term = Game.getObjectById('60581ceb569acb6036de7490');
        if(pc.withdraw(term, RESOURCE_OPS) != OK){
            pc.moveTo(term);
        }

        if(pc.ticksToLive < 500){
            let pSpawn = Game.getObjectById('60676debd5ec72d6b18271a8');
            if(Game.powerCreeps['OP1'].renew(pSpawn) != OK){
                pc.moveTo(pSpawn);
                return false;
            }
        }
    }
    else if(pc.memory.working = true){
        var fact = Game.getObjectById('60673ca0eb1a744534f5940d');
        var flag = Game.flags.pcFlag2;
            
        if(pc.ticksToLive < 200){
            let pSpawn = Game.getObjectById('60676debd5ec72d6b18271a8');
            if(Game.powerCreeps['OP1'].renew(pSpawn) != OK){
                pc.moveTo(pSpawn);
                return false;
            }
        }


        else if(Game.powerCreeps['GREG'].usePower(PWR_OPERATE_FACTORY, fact) != '-9'){
            pc.moveTo(fact);
            console.log(Game.powerCreeps['GREG'].usePower(PWR_OPERATE_FACTORY, fact));
            return false;
                
        }
        else{
            pc.moveTo(flag);
        }            
            
            
        if(!fact.level){
            if(Game.powerCreeps['GREG'].usePower(PWR_OPERATE_FACTORY, fact) != OK){
                pc.moveTo(fact);
                console.log(Game.powerCreeps['GREG'].usePower(PWR_OPERATE_FACTORY, fact));
            }
        }
        else if(Game.powerCreeps['GREG'].usePower(PWR_OPERATE_FACTORY, fact) != OK){
            if(pc.withdraw(term, RESOURCE_OPS) !=OK){
                pc.moveTo(term);
            }
        }
    }
}

function pcOp1(pc){
    if(pc.store.getUsedCapacity() == 0){
        pc.memory.working = false;
    }
    else if(pc.store[RESOURCE_OPS] >= 100){
        pc.memory.working = true;
    }
        
        
    if(pc.memory.working == false){
        var term = Game.getObjectById('6004249e42c7e22d4162ec53');
        if(pc.withdraw(term, RESOURCE_OPS) != OK){
            pc.moveTo(term);
        }

        if(pc.ticksToLive < 500){
            let pSpawn = Game.getObjectById('6052dccd0eb514b3de9263c3');
            if(Game.powerCreeps['OP1'].renew(pSpawn) != OK){
                pc.moveTo(pSpawn);
                return false;
            }
        }
    }
    else if(pc.memory.working = true){
        var fact = Game.getObjectById('602006add566ba6943a4eab2');
        var flag = Game.flags.pcFlag;
            
        if(pc.ticksToLive < 200){
            let pSpawn = Game.getObjectById('6052dccd0eb514b3de9263c3');
            if(Game.powerCreeps['OP1'].renew(pSpawn) != OK){
                pc.moveTo(pSpawn);
                return false;
            }
        }


        else if(Game.powerCreeps['OP1'].usePower(PWR_OPERATE_FACTORY, fact) != '-11'){
            pc.moveTo(fact);
            console.log(Game.powerCreeps['OP1'].usePower(PWR_OPERATE_FACTORY, fact));
            return false;
                
        }
        else{
            pc.moveTo(flag);
        }            
            
            
        if(!fact.level){
            if(Game.powerCreeps['OP1'].usePower(PWR_OPERATE_FACTORY, fact) != OK){
                pc.moveTo(fact);
                console.log(Game.powerCreeps['OP1'].usePower(PWR_OPERATE_FACTORY, fact));
            }
        }
        else if(Game.powerCreeps['OP1'].usePower(PWR_OPERATE_FACTORY, fact) != OK){
            if(pc.withdraw(term, RESOURCE_OPS) !=OK){
                pc.moveTo(term);
            }
        }
    }
};











module.exports = rolePcOperator;