var fs = require('fs');

var exec = require('child_process').exec;

// fs.createReadStream(__dirname+"/city.list.json").pipe(process.stdout);
exec('cat city.list.json', function (err, stdout, stderr) {
   console.log('we got our file', stdout);
});