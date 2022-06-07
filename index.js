"use strict";

let http = require('http');
const port = 3000;

// Step 1: Do create HTTP server.
let server = http.createServer(requestHandler);

// Step 2: Define handle function called each time we request server.
function requestHandler(request, response) {
  const userAgent = request.headers['user-agent'];

  // Print to console your browser information.
  console.log(userAgent);

  if(request.url === '/') {
    return response.end('Hello Node.js Server!');
  }

  if(request.url === '/about') {
    return response.end('This is about page!');
  }

  if(request.url === '/contact') {
    return response.end('This is contact!');
  }
}

// Step 3: Turn on server on port.
server.listen(port, function(err){
  if (err) {
    return console.error('Something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});