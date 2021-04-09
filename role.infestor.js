//semi-intelligent role to reserve rooms- try to make
// it work based on room visibility and which room
// needs it's reservation renewed

var roleInfestor = {
    run: function (creep) {
        var spawn = creep.memory.spawn;
        var target = creep.memory.target;
        var func = creep.memory.function;

        if(target == 'set_target'){
            if(spawn == 'Spawn7' || spawn == 'Spawn10'){
                var numInfW7S18 = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && c.memory.target == 'W7S18');
                var numInfW7S16 = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && c.memory.target == 'W7S16');
                var numInfW8S18 = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && c.memory.target == 'W8S18');
                var numInfW8S19 = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && c.memory.target == 'W8S19');

                if (numInfW7S16 == 0){
                    creep.memory.target = 'W7S16';
                }
                else if(numInfW8S18 == 0){
                    creep.memory.target = 'W8S18';
                }
                else if(numInfW7S18 == 0){
                    creep.memory.target = 'W7S18';
                }
                else if(numInfW8S19 == 0){
                    creep.memory.target = 'W8S19';
                }
            }
            else if(spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8'){
                console.log('placehold');
            }
            else if(spawn == 'Spawn3'){
                var numInfW1S19 = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && c.memory.target == 'W1S19');
                var numInfW2S19 = _.sum(Game.creeps, (c) => c.memory.role == 'infestor' && c.memory.target == 'W2S19');
                
                if (numInfW1S19 == 0){
                    creep.memory.target = 'W1S19';
                }
                else if(numInfW2S19 == 0){
                    creep.memory.target = 'W2S19';
                }

            }
        }
        else{
            if(spawn == 'spawn7' || spawn == 'Spawn10'){
                if(target == 'W7S18'){
                    var flag = Game.flags.infestor_W7S18;
                    var homeFlag = Game.flags.rm5Home;
                    if(creep.room == flag.room){
                        creep.memory.working = true;
                    }
                    else if(creep.room != flag.room){
                        creep.memory.working = false;
                    }

                    if(creep.memory.working == false){
                        if(creep.room == homeFlag.room){
                            const path = creep.pos.findPathTo(flag);
                            if(path.length > 0) {
                                creep.move(path[0].direction);
                            }
                        }
                    }
                    else if(creep.memory.working = true){
                        if(creep.reserveController(creep.room.controller)!=OK){
                            creep.moveTo(creep.room.controller);
                        }
                    }
                    else{
                        creep.moveTo(flag);
                    }
                }
                else if(target == 'W8S18'){
                    var flag = Game.flags.infestor_W8S18;
                    var homeFlag = Game.flags.rm5Home;
                    if(creep.room == flag.room){
                        creep.memory.working = true;
                    }
                    else if(creep.room != flag.room){
                        creep.memory.working = false;
                    }

                    if(creep.memory.working == false){
                        if(creep.room == homeFlag.room){
                            const path = creep.pos.findPathTo(flag);
                            if(path.length > 0) {
                                creep.move(path[0].direction);
                            }
                        }
                    }
                    else if(creep.memory.working = true){
                        if(creep.reserveController(creep.room.controller)!=OK){
                            creep.moveTo(creep.room.controller);
                        }
                    }
                    else{
                        creep.moveTo(flag);
                    }
                }
                else if(target == 'W7S16'){
                    var flag = Game.flags.infestor_W7S16;
                    var homeFlag = Game.flags.rm5Home;


                    if(creep.room == flag.room){
                        creep.memory.working = true;
                    }
                    else if(creep.room != flag.room){
                        creep.memory.working = false;
                    }

                    if(creep.memory.working == false){
                        if(creep.room == homeFlag.room){
                            const path = creep.pos.findPathTo(flag);
                            if(path.length > 0) {
                                creep.move(path[0].direction);
                            }
                        }
                    }
                    else if(creep.memory.working = true){
                        if(creep.reserveController(creep.room.controller)!=OK){
                            creep.moveTo(creep.room.controller);
                        }
                    }
                    else{
                        creep.moveTo(flag);
                    }
                }
                else if(target == 'W8S19'){
                    var flag = Game.flags.infestor_W8S19;
                    var homeFlag = Game.flags.rm5Home;
                    if(creep.room == flag.room){
                        creep.memory.working = true;
                    }
                    else if(creep.room != flag.room){
                        creep.memory.working = false;
                    }

                    if(creep.memory.working == false){
                        if(creep.room == homeFlag.room){
                            const path = creep.pos.findPathTo(flag);
                            if(path.length > 0) {
                                creep.move(path[0].direction);
                            }
                        }
                    }
                    else if(creep.memory.working = true){
                        if(creep.reserveController(creep.room.controller)!=OK){
                            creep.moveTo(creep.room.controller);
                        }
                    }
                    else{
                        creep.moveTo(flag);
                    }
                }
            }
            else if(spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8'){
                console.log(placehold);

            }
            else if(spawn == 'Spawn3'){
                if(target == 'W1S19'){
                    var flag = Game.flags.infestor_W1S19;
                    var homeFlag = Game.flags.rm3Home;

                    if(creep.room == flag.room){
                        creep.memory.working = true;
                    }
                    else if(creep.room != flag.room){
                        creep.memory.working = false;
                    }

                    if(creep.memory.working == false){
                        if(creep.room == homeFlag.room){
                            const path = creep.pos.findPathTo(flag);
                            if(path.length > 0) {
                                creep.move(path[0].direction);
                            }
                        }
                    }
                    else if(creep.memory.working = true){
                        if(creep.reserveController(creep.room.controller)!=OK){
                            creep.moveTo(creep.room.controller);
                        }
                    }
                    else{
                        creep.moveTo(flag);
                    }
                }
                else if(target == 'W2S19'){
                    var flag = Game.flags.infestor_W2S19;
                    var homeFlag = Game.flags.rm3Home;

                    if(creep.room == flag.room){
                        creep.memory.working = true;
                    }
                    else if(creep.room != flag.room){
                        creep.memory.working = false;
                    }

                    if(creep.memory.working = false){
                        if(creep.room == homeFlag.room){
                            const path = creep.pos.findPathTo(flag);
                            if(path.length > 0) {
                                creep.move(path[0].direction);
                            }
                        }
                        else if(creep.room != homeFlag.room && creep.room != flag.room){
                            const path = creep.pos.findPathTo(flag);
                            if(path.length > 0) {
                                creep.move(path[0].direction);
                            }
                        }
                    }
                    else if(creep.memory.working = true){
                        if(creep.room == flag.room){
                            if(creep.reserveController(creep.room.controller)!=OK){
                                creep.moveTo(creep.room.controller);
                            }
                        }
                        else if(creep.room == homeFlag.room){
                            const path = creep.pos.findPathTo(flag);
                            if(path.length > 0) {
                                creep.move(path[0].direction);
                            }
                        }
                        else if(creep.room != homeFlag.room && creep.room != flag.room){
                            const path = creep.pos.findPathTo(flag);
                            if(path.length > 0) {
                                creep.move(path[0].direction);
                            }
                        }

                    }
                    else{
                        creep.moveTo(flag);
                    }
                }
            }
        }
    }
};
module.exports = roleInfestor;