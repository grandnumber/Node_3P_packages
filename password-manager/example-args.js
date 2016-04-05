var argv = require('yargs').argv;
var command = argv._[0]
console.log(argv);

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
	console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
}  else  {
	console.log('Hello World & Hello '  + argv.name);
}


// ABILITY TO CREATE NAMED ARGS IN TERMINAL
// $ node example-args.js hello --name Janet
