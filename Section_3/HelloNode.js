'use strict';
const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World!</h1>');
}).listen(3000,()=>console.log("Server running on port number 3000"));
