console.log('starting password-manager');

var storage = require('node-persist');
storage.initSync();

// storage.setItemSync('accounts', [{
//   username: 'janet',
//   balance: 0
// }]);

var accounts = storage.getItemSync('accounts');
console.log(accounts);
