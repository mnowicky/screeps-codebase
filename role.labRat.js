var r1Spells = require('spells.r1');
var r2Spells = require('spells.r2');
var r3Spells = require('spells.r3');
var r4Spells = require('spells.r4');
var r5Spells = require('spells.r5');

var roleLabRat = {
    run: function (creep) {
        var product = creep.memory.product;
        var spawn = creep.memory.spawn;
        var cleanUp = creep.memory.cleanup; // bool, clean up all labs
        var cleanUp_1_3 = creep.memory.cleanup_1_3; //bool, clean up labs 1-3
        var cleanUp_4_6 = creep.memory.cleanup_4_6; //bool, clean up labs 4-6
        
        
        if(spawn == 'Spawn2' || spawn == 'Spawn5'){
            if(cleanUp){
                r2Spells.cleanup(creep);
            }
            else if(cleanUp_1_3){
                r2Spells.cleanup_1_3(creep);
            }
            else if(cleanUp_4_6){
                r2Spells.cleanup_4_6(creep);
            }
            else if(product == 'batch_XUH2O'){
                r2Spells.batch_XUH2O(creep);
            }
            else if(product == 'UHUO' || product == 'uhuo'){
                r2Spells.UHUO(creep);
            }
            // UL and ZK combo
            else if(product == 'ZKUL' || product == 'zkul'){
                r2Spells.ZKUL(creep);
            }
            //KO and LO production, ranged attack and heal, for death squad use
            else if(product == 'KO_LO' || product == 'ko_lo' || product == 'ko_lo_combo' || product == 'KOLO' || product == 'kolo'){
                r2Spells.KOLO(creep);
            }
            else if(product == 'OU_OU' || product == 'ouou' || product == 'OUOU'){
                r2Spells.OUOU(creep);
            }
            else if(product == 'UHO2_UHO2' || product == 'uho2_uho2'){
                r2Spells.UHO2_UHO2(creep);
            }
            else{
                console.log('r2 labrat, no product chosen');
            }
        }
        else if(spawn == 'Spawn1' || spawn == 'Spawn4' || spawn == 'Spawn8'){
            //cleanup all labs
            if(cleanUp){
                r1Spells.cleanup(creep);
            }
            //cleanup top 3 labs
            else if(cleanUp_1_3){
                r1Spells.cleanup_1_3(creep);
            }
            //cleanup bottom 3 labs
            else if(cleanUp_4_6){
                r1Spells.cleanup_4_6(creep);
            }
            //batch LH2O
            else if(product == 'batch_LH2O' || product == 'batch_lh2o'){
                r1Spells.batch_LH2O(creep);
            } 
            //batch XUHO2
            else if(product == 'batch_xuho2' || product == 'batch_XUHO2'){
                r1Spells.batch_XUHO2(creep);
            }
            else if(product == 'batch_XLH2O' || product == 'batch_xlh2o'){
                r1Spells.batch_XLH2O(creep);
            }
            //ghodium and OH combo
            else if(product == 'goh' || product == 'goh_combo' || product == 'GOH'){
                r1Spells.G_OH(creep);
            }
            //GH prod in labs 4-6, top 3 open for boosting
            else if(product == 'gh' || product == 'GH'){
                r1Spells.GH(creep);
            }
            //gh20 prod in labs 4-6, top 3 open for boosting
            else if(product == 'gh2o' || product == 'GH2O' || product == 'GH20'){
                r1Spells.GH2O(creep);
            }
            //xgh2o production
            else if(product == 'xgh2o' || product == 'XGH2O'){
                r1Spells.XGH2O(creep);
            }
            //GO prod in labs 4-6, top 3 open for boosting
            else if(product == 'go' || product == 'GO'){
                r1Spells.GO(creep);
            }
            else{
                console.log('r1 labrat, no product chosen');
            }
        }
        else if(spawn == 'Spawn6'){
            //cleanup all labs (future 1-3)
            if(cleanUp){
                r4Spells.cleanup(creep);
            }
             //+600% attack
            else if(product == 'XUHO2' || product == 'bigblue' || product == 'xuho2'){ 
                r4Spells.XUHO2(creep);
            }
            else{
                console.log('R4 labrat, no product chosen.');
            }
        }
        else if(spawn == 'Spawn3'){
            if(cleanUp){
                r3Spells.cleanup(creep);
            }
            else if(cleanUp_1_3){
                r3Spells.cleanup_1_3(creep);
            }
            else if(cleanUp_4_6){
                r3Spells.cleanup_4_6(creep);
            }
            else if(product = 'UH2O_UHO2' || product == 'uh2o_uho2'){
                r3Spells.UH2O_UHO2(creep);
            }
            else if(product == 'kho2_lho2' || product == 'KHO2_LHO2'){
                r3Spells.KHO2_LHO2(creep);
            }
            else if(product == 'XKHO2_XLHO2' || product == 'xkho2_xlho2'){
                r3Spells.XKHO2_XLHO2(creep);
            }
            else{
                console.log('rm3 no product chosen for labrat.');
            }
        }
        else if(spawn == 'Spawn7'){
            if(cleanUp){
                r5Spells.cleanup(creep);
            }
            else if(product === 'XUH2O' || product == 'xuh2o'){
                r5Spells.XUH2O(creep);
            }
        }
    }
};


module.exports = roleLabRat;