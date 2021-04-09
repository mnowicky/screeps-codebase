function rm1Links(){
    var lnk_rm1_north = Game.getObjectById('5ffe3244017b7f138d559e92');
    var lnk_rm1_ctrl = Game.getObjectById('5ffe35b66efa2a652c53fba3');
    var lnk_rm1_ext = Game.getObjectById('6064f1003cc1250d7fde151d');
    var lnk_rm1_south = Game.getObjectById('6064ecb4c685388d625b0fe5');
    var lnk_rm1_south_exit = Game.getObjectById('606160f225ae362ceec436ce');
    var lnk_rm1_strg = Game.getObjectById('6065a3c263787d1ea0eeb8e0');
    var src1 = Game.getObjectById('5bbcac8e9099fc012e635b46');
    var src2 = Game.getObjectById('5bbcac8e9099fc012e635b47');

    if(lnk_rm1_north.store[RESOURCE_ENERGY] >= 250){
        if(lnk_rm1_ext.store[RESOURCE_ENERGY] == 0){
            lnk_rm1_north.transferEnergy(lnk_rm1_ext);
        }
        else if(lnk_rm1_strg.store[RESOURCE_ENERGY] == 0){
            lnk_rm1_north.transferEnergy(lnk_rm1_strg);
        }
        else if(lnk_rm1_ctrl.store[RESOURCE_ENERGY] == 0 ){
            lnk_rm1_north.transferEnergy(lnk_rm1_ctrl);
        }
        else{
            lnk_rm1_north.transferEnergy(lnk_rm1_ext);
        }
    }
    else if(src1.energy == 0 && lnk_rm1_north.store[RESOURCE_ENERGY] > 0){
        lnk_rm1_north.transferEnergy(lnk_rm1_ext);
    }

    if(lnk_rm1_south.store[RESOURCE_ENERGY] >= 250){
        if(lnk_rm1_ext.store[RESOURCE_ENERGY] == 0){
            lnk_rm1_south.transferEnergy(lnk_rm1_ext);
        }
        else if(lnk_rm1_strg.store[RESOURCE_ENERGY] == 0){
            lnk_rm1_south.transferEnergy(lnk_rm1_strg);
        }
        else if(lnk_rm1_ctrl.store[RESOURCE_ENERGY] == 0 ){
            lnk_rm1_south.transferEnergy(lnk_rm1_ctrl);
        }
        else{
            lnk_rm1_south.transferEnergy(lnk_rm1_ext);
        }
    }
    else if(src2.energy == 0 && lnk_rm1_south.store[RESOURCE_ENERGY] > 0){
        lnk_rm1_south.transferEnergy(lnk_rm1_ext);
    }

    if(lnk_rm1_south_exit.store[RESOURCE_ENERGY] > 0){
        if((800-lnk_rm1_strg.store[RESOURCE_ENERGY]) > lnk_rm1_south_exit.store[RESOURCE_ENERGY]){
            lnk_rm1_south_exit.transferEnergy(lnk_rm1_strg);
        }
        else if ((800-lnk_rm1_ext.store[RESOURCE_ENERGY]) > lnk_rm1_south_exit.store[RESOURCE_ENERGY]){
            lnk_rm1_south_exit.transferEnergy(lnk_rm1_ext);
        }
        else{
            lnk_rm1_south_exit.transferEnergy(lnk_rm1_strg);
        }
    }
}

function rm2Links(){
    var lnk_rm2_north = Game.getObjectById('6058690384141f6e21e41c29');
    var lnk_rm2_south = Game.getObjectById('60586acdaca77f845d2ffc4a');
    var lnk_rm2_mid = Game.getObjectById('6058254ff201b625edf5c4c9');
    var lnk_rm2_ctrl = Game.getObjectById('6056efe3025e5a4f5aa08afe');
    var src1 = Game.getObjectById('5bbcac9b9099fc012e635d74');
    var src2 = Game.getObjectById('5bbcac9b9099fc012e635d76');
    if(lnk_rm2_north.store[RESOURCE_ENERGY] > 0){
        if(lnk_rm2_mid.store[RESOURCE_ENERGY] < 750){
            lnk_rm2_north.transferEnergy(lnk_rm2_mid);
        }
        else if(lnk_rm2_mid.store[RESOURCE_ENERGY] >= 750){
            lnk_rm2_north.transferEnergy(lnk_rm2_ctrl);
        }
    }

    if(lnk_rm2_south.store[RESOURCE_ENERGY] > 0){
        if(lnk_rm2_mid.store[RESOURCE_ENERGY] <= 750){
            lnk_rm2_south.transferEnergy(lnk_rm2_mid);
        }
        else{
            lnk_rm2_south.transferEnergy(lnk_rm2_ctrl);
        }

    }

}

function rm3Links(){
    var lnk_rm3_south = Game.getObjectById('6069f9029c689b412c9c55f6');
    var lnk_rm3_ctrl = Game.getObjectById('6062dd9b573415d224c189fc');
    if(lnk_rm3_south.store[RESOURCE_ENERGY] > 0) {
        lnk_rm3_south.transferEnergy(lnk_rm3_ctrl);
    }
};

function rm4Links(){
    var lnk_rm4_north = Game.getObjectById('6036119ab86cd4221184f9db');
    var lnk_rm4_ctrl = Game.getObjectById('60370c77ca1860d0f371bae5');
    var lnk_rm4_south = Game.getObjectById('603b12bd697acc7c476cf711');
    if(lnk_rm4_north.store[RESOURCE_ENERGY] > 0) {
        if(lnk_rm4_ctrl.store[RESOURCE_ENERGY] == 0){
            lnk_rm4_north.transferEnergy(lnk_rm4_ctrl);
        }
        else if(lnk_rm4_south.store[RESOURCE_ENERGY] == 0 ){
            lnk_rm4_north.transferEnergy(lnk_rm4_south);
        }
    }
};

function rm5Links(){
    var lnk_rm5_ext = Game.getObjectById('60663f241e8252b4c4109834');
    var lnk_rm5_south = Game.getObjectById('6046b7d8025e5a19e59a7a98');
    var lnk_rm5_ctrl = Game.getObjectById('604c7e4eececdb4c22f3fb37');
    var lnk_rm5_north = Game.getObjectById('606a65bff965ddd4bc97daa4');
    if(lnk_rm5_south.store[RESOURCE_ENERGY] > 200){
        if(lnk_rm5_ext.store[RESOURCE_ENERGY] <= 200){
            lnk_rm5_south.transferEnergy(lnk_rm5_ext);
        }
        else if(lnk_rm5_ctrl.store[RESOURCE_ENERGY] == 0){
            lnk_rm5_south.transferEnergy(lnk_rm5_ctrl);
        }
        else{
            lnk_rm5_south.transferEnergy(lnk_rm5_ext);
        }
    }

    if(lnk_rm5_north.store[RESOURCE_ENERGY] > 0){
        if(lnk_rm5_ext.store[RESOURCE_ENERGY] <= 200){
            lnk_rm5_north.transferEnergy(lnk_rm5_ext);
        }
        else if(lnk_rm5_ctrl.store[RESOURCE_ENERGY] == 0){
            lnk_rm5_north.transferEnergy(lnk_rm5_ctrl);
        }
        else{
            lnk_rm5_north.transferEnergy(lnk_rm5_ext);
        }
    }
}

module.exports.rm1 = rm1Links;
module.exports.rm2 = rm2Links;
module.exports.rm3 = rm3Links;
module.exports.rm4 = rm4Links;
module.exports.rm5 = rm5Links;
