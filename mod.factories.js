function rm1Factory() {
    var f1 = Game.getObjectById('602006add566ba6943a4eab2');
    
    var effects = f1.effects;
    
    //console.log(effects[0]);
    
    //f1.produce(RESOURCE_LEMERGIUM_BAR);
    //f1.produce(RESOURCE_PURIFIER);
    //f1.produce(RESOURCE_BATTERY);
    //f1.produce(RESOURCE_UTRIUM_BAR);
    //f1.produce(RESOURCE_GHODIUM);
    f1.produce(RESOURCE_ALLOY);
    //f1.produce(RESOURCE_TUBE);
    f1.produce(RESOURCE_CELL);
    f1.produce(RESOURCE_PHLEGM);
    //f1.produce(RESOURCE_ZYNTHIUM_BAR);
    //f1.produce(RESOURCE_TUBE);
    //f1.produce(RESOURCE_OXIDANT);
    //f1.produce(RESOURCE_REDUCTANT);
};

function rm2Factory(){
  f2 = Game.getObjectById('603e6d2cdf15210907961ede');
  
  f2.produce(RESOURCE_PURIFIER);
};

module.exports.rm1 = rm1Factory;
module.exports.rm2 = rm2Factory;