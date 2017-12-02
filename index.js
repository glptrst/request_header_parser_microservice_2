"use strict";
const http = require('http');
const path = require('path');
const parser = require('./headersParser.js');
const port = process.env.PORT || 3000;

// Create Server object
const server = http.createServer((req, res) => {
    // Add error listener
    req.on('error', (err) => {
	console.log(err);
	res.statusCode = 400;
	res.end();
    });

    // Accept only GET requests
    if (req.method === 'GET') {
	if (req.url === '/') {
	    res.statusCode = 200;
	    res.setHeader('Content-Type', 'text/plain');
	    res.end('Hello World');
	} else if (req.url === '/whoami' || req.url === '/whoami/') {
	    res.statusCode = 200;
	    res.setHeader('Content-Type', 'application/json');
	    let responseBody = JSON.stringify(parser.basicInfo(req.headers));
	    res.end(responseBody);
	} else {
	    res.statusCode = 404;
	    res.end(`Cannot ${req.method} ${req.url}`);
	}
    } else {
	res.statusCode = 404;
	res.end(`Cannot ${req.method} ${req.url}`);
    }
});


server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
