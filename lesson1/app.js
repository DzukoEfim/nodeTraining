'use strict'

const fs = require('fs'),
	  fileName =  process.argv[2],
	  method = process.argv[3],
	  spawn = require('child_process').spawn;


var getNewDate = function(){
	var date = new Date;
	return date.getDate() + '_' + date.getMonth() + '_' + date.getFullYear() + '_';
}


fs.watch(fileName, function() {
	if (method === 'copy') {
			let copy = spawn('cmd', ['/$', '/C', 'copy', fileName, getNewDate()+fileName]);
			console.log('file '+ fileName+ ' was copyed');
		}
	else if(method === 'del'){
		let del = spawn('cmd', [ '/$', '/C', 'del', fileName ]);
		del.stdout.pipe(process.stdout);
		console.log('file '+ fileName+ ' was deleted');
	}
})

console.log('star looking at file - ' + fileName);