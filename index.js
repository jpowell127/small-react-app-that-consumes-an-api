// entry point for our server.
var app = require('./server/server');
var colors = require('colors/safe');

app.listen(3000, function () {
  console.log(colors.rainbow('----------------------------  o8o  ----------------------------'));
  console.log(colors.green('Hello there!'));
  console.log(colors.blue('Please vist'));
  console.log(colors.bold.blue.underline('http://localhost:3000/'));
  console.log(colors.blue('in your favorite browser!'));
  console.log(colors.rainbow('----------------------------  o8o  ----------------------------'));
});
