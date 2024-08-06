//code to display the live webpage
var liveServer = require("live-server");
var params = {
    port: 8181,
    host: "0.0.0.0",
    root: ".", // Set root directory to current directory
    open: false,
    ignore: 'scss,my/templates',
    file: "index.html",
    wait: 1000,
    mount: [['/components', './node_modules']],
    logLevel: 2,
    middleware: [function(req, res, next) { next(); }]
};
liveServer.start(params);


// code for contact submission


require('dotenv').config(); // Load environment variables from .env file

const emailUser = process.env.EMAIL_USER;
console.log(emailUser); // Output: your-email@gmail.com


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
