//Signs rooms... simple as that
//set the option memory object to select which message to sign

var roleDismantler = {
    run: function (creep) {
        var target = Game.getObjectById('5fd14a74a1b5ecfdf406ad22');
        
        if(creep.dismantle(target) != OK){
            creep.moveTo(target);
        }

    }
};
module.exports = roleDismantler;