console.log('starting password-manager');

var storage = require('node-persist');
storage.initSync();


// account.name Facebook
// account.username User12!
// account.password Password123!

function createAccount (account){
  if (typeof accounts === 'undefined') {
    accounts = [];
  }
  accounts.push(account);
  storage.setItemSync('accounts', accounts);

  return account;
}

function getAccount (accountName){
  var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}
var baseAccount = {
  name: 'Facebook',
  username: 'User12!',
  password: 'Password123'
}

// createAccount(baseAccount);

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);
