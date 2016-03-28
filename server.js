'use strict';

var http = require('http');
var express = require('express');

var server = express();

// log all requests to the console
server.set('port', 3001);
server.use(express.static(process.env.PWD + '/dist'));

// Serve index.html for all routes to leave routing up to Angular
server.all('/*', function(req, res) {
    res.sendFile(process.env.PWD + '/dist/index.html');
});

// Start webserver if not already running
var s = http.createServer(server);
s.on('error', function(err){
    if(err.code === 'EADDRINUSE'){
        // gutil.log('Development server is already started at port ' + config.serverPort);
    }
    else {
        throw err;
    }
});

s.listen(server.get('port'));

// export default server;