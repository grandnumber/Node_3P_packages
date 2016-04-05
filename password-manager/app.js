console.log('starting password-manager');

var storage = require('node-persist');
storage.initSync();

// storage.setItemSync('name', 'janet');

var name = storage.getItemSync('name');
console.log("retrieving name: " + name);
