var express = require('express');
var app = express();
var path = require('path');
var appDir = path.dirname(require.main.filename);

app.use('/', express.static('dist'));

// render home page
app.get('/',function(req,res){
  res.sendFile(path.join(appDir + '/dist/index.html'));
});

// set up global error handling
app.use(function(req, res, next){
  res.status(404);

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

// export the app for testing
module.exports = app;
