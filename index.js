"use strict";
const http = require('http');
const path = require('path');

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
	    res.end(JSON.stringify(
		{
		    ipaddress: 'TODO',
		    language: req.headers['accept-language'].split(",")[0],
		    software: req.headers['user-agent'].match(/\((.+?)\)/)[1]
		}
	    ));
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
