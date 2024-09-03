//code to display the live webpage
var liveServer = require("live-server");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

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


// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
