function rm1Terms(){
    console.log('Running terminal transaction from room 1.');
    //Game.rooms.W6S18.terminal.send('energy', 20000, 'W5S18', 'energy transfer')
};

function rm2Terms(){
    var term2 = Game.getObjectById('6025b1c5f7632d68ee87e0ed');
    
    if(term2.store['UO'] > 2000){
        Game.rooms.W5S18.terminal.send('UO', 2000, 'W6S19', 'UO transfer');
    }
    else if(term2.store['UH'] > 1500){
        Game.rooms.W5S18.terminal.send('UH', 1500, 'W6S19', 'UH transfer');
    }
    
    //console.log('Running terminal transaction from room 2.');
    //Game.rooms.W5S18.terminal.send('energy', 55000, 'W6S18', 'transfer')
};
function rm3Terms(){
    var term3 = Game.getObjectById('6025c20c58c56642aa0c1eab');
    
    if(term3.store['U'] > 2000){
        Game.rooms.W6S19.terminal.send('U', 2000, 'W5S18', 'transfer');
    }
    else if(term3.store['UH2O'] > 2000){
        Game.rooms.W6S19.terminal.send('UH2O', 2000, 'W6S17', 'transfer');
    }
    else if(term3.store['UHO2'] > 2000){
        Game.rooms.W6S19.terminal.send('UHO2', 2000, 'W6S17', 'transfer');
    }
    
    //console.log('Running terminal transaction from room 3.');
    //Game.rooms.W6S19.terminal.send('U', 12000, 'W5S18', 'transfer')
};
function rm4Terms(){
    var term4 = Game.getObjectById('603c788440897c51bb6c6b55');
    var term1 = Game.getObjectById('6004249e42c7e22d4162ec53');
    
    if(term1.store['energy'] < 80000){
        Game.rooms.W6S17.terminal.send('energy', 100000, 'W6S18', 'energy supply');
    }
    //Game.rooms.W6S17.terminal.send('energy', 75000,'W6S18', 'transfer');
};

function rm5Terms(){
    var term5 = Game.getObjectById('605091090eb51474cd91a7a2');
    var term1 = Game.getObjectById('6004249e42c7e22d4162ec53');

    if(term1.store['UHO2'] < 1){
        Game.rooms.W7S17.terminal.send('UHO2', 5000, 'W6S18');
    }
};



module.exports.rm1 = rm1Terms;
module.exports.rm2 = rm2Terms;
module.exports.rm3 = rm3Terms;
module.exports.rm4 = rm4Terms;
module.exports.rm5 = rm5Terms;