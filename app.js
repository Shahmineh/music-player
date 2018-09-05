// Require express model
const express = require('express');
// Create a new web server
const app = express();
// Tell the webserver to serve files from the www folder
app.use(express.static('www'));
//Start the web server on port 3000
app.listen(3000, ()=> console.log('Listening on port 3000'));