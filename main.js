var roleHarvester = require('role.harvester'); // Use roll for Harvester
var roleUpgrader = require('role.upgrader');   // Use roll for Upgrader

module.exports.loop = function () {

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester'); // COunts the number of harvesters
    console.log('Harvesters: ' + harvesters.length); // Prints out the number of harvesters
    
    // Spawns a harvester if there are ever less than 2 of them
    if(harvesters.length < 2) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});        
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}
